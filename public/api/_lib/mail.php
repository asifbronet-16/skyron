<?php
/**
 * Sends one email from our Microsoft 365 mailbox through Microsoft Graph,
 * using an Entra ID app registration (client credentials, no user sign-in).
 * https://learn.microsoft.com/graph/api/user-sendmail
 *
 * Needs, in skyron-mail.php outside the web root (see DEPLOY-CWP.md):
 *   tenant_id      Directory (tenant) ID of the app registration
 *   client_id      Application (client) ID
 *   client_secret  Client secret *value* (not its ID). These expire; an
 *                  expired one logs AADSTS7000222.
 *   sender         Mailbox the emails come from, e.g. hello@skyron.me
 * Sending rights come from Exchange Online RBAC for Applications ("Application
 * Mail.Send" scoped to the sender mailbox), not an Entra admin consent: an
 * Entra grant would let the app send as any mailbox and bypass that scope.
 *
 * Without them nothing is sent and send_mail() returns false, so a visitor is
 * pointed to email/WhatsApp instead of being thanked for a message that went
 * nowhere. Needs PHP's curl extension.
 */

declare(strict_types=1);

require_once __DIR__ . '/forms.php';

/** Where enquiries go: the contact_inbox setting if given (e.g. for testing), else the site's public inbox. */
function contact_inbox(): string
{
    return setting('contact_inbox') ?: (string) site()['email'];
}

/** Where job applications go: the careers_inbox setting if given, else the site's careers inbox. */
function careers_inbox(): string
{
    return setting('careers_inbox') ?: (string) site()['careersEmail'];
}

/**
 * @param array<int, array{filename: string, content: string}> $attachments
 */
function send_mail(string $to, string $subject, string $html, ?string $replyTo = null, array $attachments = []): bool
{
    $tenantId = setting('tenant_id');
    $clientId = setting('client_id');
    $clientSecret = setting('client_secret');
    $sender = setting('sender');

    if ($tenantId === '' || $clientId === '' || $clientSecret === '' || $sender === '') {
        error_log('[mail] ' . MAIL_CONFIG_FILE . ' not found or incomplete; form submission dropped.');
        return false;
    }
    if (!function_exists('curl_init')) {
        error_log('[mail] PHP curl extension is not installed; form submission dropped.');
        return false;
    }

    $token = microsoft_post(
        'https://login.microsoftonline.com/' . rawurlencode($tenantId) . '/oauth2/v2.0/token',
        http_build_query([
            'client_id' => $clientId,
            'client_secret' => $clientSecret,
            'scope' => 'https://graph.microsoft.com/.default',
            'grant_type' => 'client_credentials',
        ]),
        ['Content-Type: application/x-www-form-urlencoded']
    );
    if ($token === null) {
        return false;
    }
    $accessToken = json_decode($token['body'], true)['access_token'] ?? '';
    if ($token['status'] !== 200 || !is_string($accessToken) || $accessToken === '') {
        error_log("[mail] Microsoft sign-in failed {$token['status']}: {$token['body']}");
        return false;
    }

    $body = json_encode(
        graph_send_mail_body($to, $subject, $html, $replyTo, $attachments),
        JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE
    );
    if ($body === false) {
        error_log('[mail] Could not encode the message: ' . json_last_error_msg());
        return false;
    }

    $res = microsoft_post(
        'https://graph.microsoft.com/v1.0/users/' . rawurlencode($sender) . '/sendMail',
        $body,
        ['Authorization: Bearer ' . $accessToken, 'Content-Type: application/json']
    );
    if ($res === null) {
        return false;
    }
    $ok = $res['status'] >= 200 && $res['status'] < 300;
    if (!$ok) {
        error_log("[mail] Microsoft Graph responded {$res['status']}: {$res['body']}");
    }
    return $ok;
}

/**
 * The JSON body for Graph's sendMail.
 *
 * @param array<int, array{filename: string, content: string}> $attachments
 */
function graph_send_mail_body(string $to, string $subject, string $html, ?string $replyTo, array $attachments): array
{
    $message = [
        'subject' => $subject,
        'body' => ['contentType' => 'HTML', 'content' => $html],
        'toRecipients' => [['emailAddress' => ['address' => $to]]],
    ];
    if ($replyTo !== null && $replyTo !== '') {
        $message['replyTo'] = [['emailAddress' => ['address' => $replyTo]]];
    }
    if ($attachments) {
        $message['attachments'] = array_map(static function (array $file): array {
            return [
                '@odata.type' => '#microsoft.graph.fileAttachment',
                'name' => $file['filename'],
                'contentBytes' => base64_encode($file['content']),
            ];
        }, $attachments);
    }
    // Form notifications shouldn't pile up in the sender's Sent Items.
    return ['message' => $message, 'saveToSentItems' => false];
}

/**
 * POSTs to a Microsoft endpoint. Returns the status and body, or null (after
 * logging why) when the request didn't get an answer at all.
 *
 * @return array{status: int, body: string}|null
 */
function microsoft_post(string $url, string $body, array $headers): ?array
{
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $body,
        // "Expect:" stops curl pausing for a 100-continue on larger bodies (CVs).
        CURLOPT_HTTPHEADER => array_merge($headers, ['Expect:']),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 10,
        CURLOPT_TIMEOUT => 30,
    ]);
    $response = curl_exec($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    $error = curl_error($ch);
    // No curl_close(): a no-op since PHP 8.0 and deprecated in 8.5; the handle
    // is freed when $ch goes out of scope.

    if (!is_string($response)) {
        error_log("[mail] Request to Microsoft failed: {$error}");
        return null;
    }
    return ['status' => $status, 'body' => $response];
}
