<?php
/**
 * HTML bodies for the form notification emails. Built for email clients, not
 * browsers: table layout, inline styles and web-safe fonts so it holds up in
 * Outlook desktop as well as Gmail and Apple Mail. Everything a visitor typed
 * goes through esc(), so a form submission can't inject markup into the email.
 */

declare(strict_types=1);

require_once __DIR__ . '/forms.php';

const EMAIL_FONT = "'Segoe UI', Arial, Helvetica, sans-serif";

function esc(string $value): string
{
    // &#39; rather than PHP's &#039;, as the site's original templates wrote it.
    return str_replace('&#039;', '&#39;', htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));
}

/** "skyron.me": the site URL without its scheme, for footers. */
function site_host(): string
{
    return (string) preg_replace('#^https?://#', '', (string) site()['url']);
}

function first_name(string $name): string
{
    return explode(' ', $name)[0];
}

/** tel: link target for a phone number as typed: digits and a leading + only. */
function tel_href(string $phone): string
{
    return 'tel:' . preg_replace('/[^+\d]/', '', $phone);
}

/**
 * @param array{
 *   preheader: string,
 *   eyebrow: string,
 *   title: string,
 *   rows: array<int, array{label: string, value: string, href?: ?string}>,
 *   note?: array{label: string, text: string},
 *   action?: ?array{label: string, href: string},
 *   footer: string
 * } $email
 *   preheader: inbox preview line shown next to the subject.
 *   eyebrow:   small caps line under the logo, e.g. "Contact form".
 *   rows:      rows with an empty value are left out.
 *   note:      the visitor's free text, shown in its own box.
 */
function render_email(array $email): string
{
    $font = EMAIL_FONT;
    $received = (new DateTimeImmutable('now', new DateTimeZone('Asia/Dubai')))->format('j M Y, H:i');

    $rowHtml = '';
    foreach ($email['rows'] as $row) {
        if ($row['value'] === '') {
            continue;
        }
        $label = esc($row['label']);
        $value = !empty($row['href'])
            ? '<a href="' . esc($row['href']) . '" style="color:#6d28d9;text-decoration:none;">' . esc($row['value']) . '</a>'
            : esc($row['value']);
        $rowHtml .= <<<HTML

          <tr>
            <td valign="top" width="128" style="padding:12px 12px 12px 0;border-bottom:1px solid #efedf5;font-family:{$font};font-size:11px;line-height:20px;letter-spacing:1px;text-transform:uppercase;color:#8a87a0;">{$label}</td>
            <td valign="top" style="padding:12px 0;border-bottom:1px solid #efedf5;font-family:{$font};font-size:15px;line-height:20px;color:#14111f;">{$value}</td>
          </tr>
HTML;
    }

    $noteHtml = '';
    $note = $email['note'] ?? null;
    if ($note && $note['text'] !== '') {
        $noteLabel = esc($note['label']);
        $noteText = str_replace("\n", '<br>', esc($note['text']));
        $noteHtml = <<<HTML

      <tr>
        <td style="padding:28px 32px 0;">
          <p style="margin:0 0 10px;font-family:{$font};font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#8a87a0;">{$noteLabel}</p>
          <div style="background:#f7f6fb;border-left:3px solid #7c3aed;border-radius:8px;padding:16px 18px;font-family:{$font};font-size:15px;line-height:24px;color:#2a2738;">{$noteText}</div>
        </td>
      </tr>
HTML;
    }

    // "Bulletproof" button: the colour sits on the table cell, so Outlook (which
    // ignores padding and radius on links) still shows a solid button.
    $actionHtml = '';
    $action = $email['action'] ?? null;
    if ($action) {
        $actionHref = esc($action['href']);
        $actionLabel = esc($action['label']);
        $actionHtml = <<<HTML

      <tr>
        <td style="padding:28px 32px 0;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td bgcolor="#7c3aed" style="border-radius:999px;background:#7c3aed;">
                <a href="{$actionHref}" style="display:inline-block;padding:12px 26px;font-family:{$font};font-size:14px;font-weight:bold;color:#ffffff;text-decoration:none;border-radius:999px;">{$actionLabel}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
HTML;
    }

    $title = esc($email['title']);
    $preheader = esc($email['preheader']);
    $eyebrow = esc($email['eyebrow']);
    $receivedHtml = esc($received);
    $footer = esc($email['footer']);
    $legalName = esc((string) site()['legalName']);
    $host = esc(site_host());

    return <<<HTML
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>{$title}</title>
</head>
<body style="margin:0;padding:0;background:#f3f2f7;">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#f3f2f7;">{$preheader}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f2f7;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid #e6e4ef;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="background:#0c0a16;padding:28px 32px 24px;">
              <div style="font-family:{$font};font-size:20px;font-weight:bold;letter-spacing:6px;color:#ffffff;">SKYRON</div>
              <div style="margin-top:8px;font-family:{$font};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#a78bfa;">{$eyebrow}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:0;font-size:0;line-height:0;">
              <!-- the site's violet → blue → cyan gradient, as solid cells so Outlook keeps it -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td height="4" style="height:4px;background:#7c3aed;"></td>
                  <td height="4" style="height:4px;background:#3b82f6;"></td>
                  <td height="4" style="height:4px;background:#22d3ee;"></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 32px 4px;">
              <h1 style="margin:0;font-family:{$font};font-size:22px;line-height:30px;font-weight:bold;color:#14111f;">{$title}</h1>
              <p style="margin:6px 0 0;font-family:{$font};font-size:13px;color:#6b6880;">Received {$receivedHtml} (Dubai time)</p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">{$rowHtml}
              </table>
            </td>
          </tr>{$noteHtml}{$actionHtml}
          <tr>
            <td style="padding:28px 32px 32px;">
              <p style="margin:0;padding-top:20px;border-top:1px solid #efedf5;font-family:{$font};font-size:12px;line-height:19px;color:#8a87a0;">{$footer}</p>
            </td>
          </tr>
        </table>
        <p style="margin:16px 0 0;font-family:{$font};font-size:11px;color:#a3a1b3;">{$legalName} · {$host}</p>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;
}

/**
 * @param array{name: string, company: string, phone: string, email: string, project: string} $values
 */
function contact_email(array $values): string
{
    $host = site_host();
    return render_email([
        'preheader' => $values['name'] . ($values['company'] !== '' ? ' from ' . $values['company'] : '') . ' sent a project enquiry.',
        'eyebrow' => 'Contact form',
        'title' => 'New project enquiry',
        'rows' => [
            ['label' => 'Name', 'value' => $values['name']],
            ['label' => 'Company', 'value' => $values['company']],
            ['label' => 'Email', 'value' => $values['email'], 'href' => 'mailto:' . $values['email']],
            ['label' => 'Phone', 'value' => $values['phone'], 'href' => tel_href($values['phone'])],
        ],
        'note' => ['label' => 'Project details', 'text' => $values['project']],
        'action' => ['label' => 'Reply to ' . first_name($values['name']), 'href' => 'mailto:' . $values['email']],
        'footer' => "Sent from the contact form on {$host}. Replying to this email goes straight to {$values['name']}.",
    ]);
}

/**
 * @param array{role: string, name: string, email: string, phone: string, portfolio: string, linkedin: string, message: string, cvName: string} $values
 */
function application_email(array $values): string
{
    $host = site_host();
    $hasEmail = $values['email'] !== '';
    return render_email([
        'preheader' => ($values['name'] !== '' ? $values['name'] : 'Someone') . ' applied for '
            . ($values['role'] !== '' ? $values['role'] : 'a role at Skyron') . '.',
        'eyebrow' => 'Careers',
        'title' => $values['role'] !== '' ? 'New application for ' . $values['role'] : 'New job application',
        'rows' => [
            ['label' => 'Role', 'value' => $values['role'] !== '' ? $values['role'] : 'General application'],
            ['label' => 'Name', 'value' => $values['name']],
            ['label' => 'Email', 'value' => $values['email'], 'href' => $hasEmail ? 'mailto:' . $values['email'] : null],
            ['label' => 'Phone', 'value' => $values['phone'], 'href' => $values['phone'] !== '' ? tel_href($values['phone']) : null],
            ['label' => 'Portfolio', 'value' => $values['portfolio'], 'href' => is_http_url($values['portfolio']) ? $values['portfolio'] : null],
            ['label' => 'LinkedIn', 'value' => $values['linkedin'], 'href' => is_http_url($values['linkedin']) ? $values['linkedin'] : null],
            ['label' => 'CV', 'value' => 'Attached · ' . $values['cvName']],
        ],
        'note' => ['label' => 'Cover note', 'text' => $values['message']],
        'action' => $hasEmail
            ? [
                'label' => $values['name'] !== '' ? 'Reply to ' . first_name($values['name']) : 'Reply to applicant',
                'href' => 'mailto:' . $values['email'],
            ]
            : null,
        'footer' => $hasEmail
            ? "Sent from the careers page on {$host}. The CV is attached, and replying to this email goes straight to the applicant."
            : "Sent from the careers page on {$host}. The CV is attached. No email was given, so use the contact details on the CV.",
    ]);
}
