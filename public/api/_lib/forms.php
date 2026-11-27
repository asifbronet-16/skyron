<?php
/**
 * Shared plumbing for the form handlers (api/contact.php, api/careers.php):
 * settings, input helpers and the JSON reply the site's forms read
 * (FormState in lib/forms.ts). Written for PHP 7.4+.
 *
 * Nothing in api/_lib/ is reachable from the web: the generated .htaccess
 * answers 403 for it.
 */

declare(strict_types=1);

// Same field name as HONEYPOT_FIELD in lib/forms.ts.
const HONEYPOT_FIELD = 'website';

// Name of the settings file kept outside the web root (see DEPLOY-CWP.md).
const MAIL_CONFIG_FILE = 'skyron-mail.php';

/**
 * Site details (name, URL, inboxes, CV limit), written to site.json by
 * scripts/cwp-release.mts from constants/site.ts and constants/careers.ts,
 * so they can't drift from what the pages show.
 */
function site(): array
{
    static $site = null;
    if ($site === null) {
        $json = @file_get_contents(__DIR__ . '/site.json');
        $site = $json === false ? null : json_decode($json, true);
        if (!is_array($site)) {
            throw new RuntimeException('api/_lib/site.json is missing or invalid: deploy the output of `npm run package`.');
        }
    }
    return $site;
}

/**
 * Mail settings from skyron-mail.php: the Microsoft credentials and optional
 * inbox overrides. It lives outside the web root so the secret is never
 * served, and is found at $SKYRON_MAIL_CONFIG if set, otherwise in the first
 * of the three folders above the web root that has one. Empty if none does.
 */
function mail_config(): array
{
    static $config = null;
    if ($config !== null) {
        return $config;
    }

    $candidates = [];
    $fromEnv = getenv('SKYRON_MAIL_CONFIG');
    if (is_string($fromEnv) && $fromEnv !== '') {
        $candidates[] = $fromEnv;
    }
    // This file is <web root>/api/_lib/forms.php.
    $dir = dirname(__DIR__, 2);
    for ($i = 0; $i < 3; $i++) {
        $parent = dirname($dir);
        if ($parent === $dir) {
            break;
        }
        $dir = $parent;
        $candidates[] = $dir . '/' . MAIL_CONFIG_FILE;
    }

    $config = [];
    foreach ($candidates as $file) {
        // @: open_basedir can forbid looking outside the account's folders.
        if (@is_file($file)) {
            $loaded = require $file;
            $config = is_array($loaded) ? $loaded : [];
            break;
        }
    }
    return $config;
}

/** A string setting from skyron-mail.php, or '' when it's unset or blank. */
function setting(string $key): string
{
    $value = mail_config()[$key] ?? '';
    return is_string($value) ? trim($value) : '';
}

/**
 * Runs a form handler and sends its reply. The handler returns
 * [HTTP status, FormState]; anything it throws is logged and answered with
 * a generic error, so the visitor always gets a message the form can show.
 */
function handle_form(callable $handler): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        header('Allow: POST');
        reply(405, ['status' => 'error', 'message' => 'This address only accepts form submissions.']);
    }

    // Same-origin only, as Next's Server Actions were: another site's page
    // can't submit this form from a visitor's browser.
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin !== '') {
        $originHost = strtolower((string) parse_url($origin, PHP_URL_HOST));
        $host = strtolower(preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? '') ?? '');
        if ($originHost !== $host) {
            reply(403, ['status' => 'error', 'message' => 'Please submit the form from our website.']);
        }
    }

    try {
        [$status, $state] = $handler();
    } catch (Throwable $e) {
        error_log('[form] ' . get_class($e) . ': ' . $e->getMessage());
        [$status, $state] = [500, [
            'status' => 'error',
            'message' => 'Something went wrong on our side. Please try again later, or email us directly.',
        ]];
    }
    reply($status, $state);
}

/** Sends a FormState as JSON and ends the request. */
function reply(int $status, array $state): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    echo json_encode($state, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE);
    exit;
}

/**
 * True when the request body was over PHP's post_max_size: PHP then drops
 * every field and file, so it would otherwise look like an empty form.
 */
function post_too_large(): bool
{
    return empty($_POST) && empty($_FILES) && (int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 0;
}

/** True when the hidden honeypot field (see <Honeypot />) was filled in. */
function is_bot(): bool
{
    $value = $_POST[HONEYPOT_FIELD] ?? '';
    return !is_string($value) || $value !== '';
}

/**
 * Trimmed value of a text field, capped at $max characters. Single-line
 * fields also have whitespace runs collapsed, since they end up in email
 * subjects. Text that isn't valid UTF-8 counts as empty.
 */
function read_text(string $name, int $max, bool $multiline = false): string
{
    $raw = $_POST[$name] ?? null;
    if (!is_string($raw) || preg_match('//u', $raw) !== 1) {
        return '';
    }
    $value = $multiline
        ? trim(preg_replace('/\r\n?/', "\n", $raw) ?? '')
        : trim(preg_replace('/\s+/u', ' ', $raw) ?? '');
    return preg_match('/^.{0,' . $max . '}/su', $value, $match) === 1 ? $match[0] : '';
}

function is_email(string $value): bool
{
    return preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/u', $value) === 1;
}

function is_http_url(string $value): bool
{
    return preg_match('#^https?://#i', $value) === 1;
}

/**
 * http(s) URL with the scheme filled in if it was left off, or null if it
 * isn't one: "behance.net/jane" becomes "https://behance.net/jane", while
 * "@jane on Instagram" is left for the caller to pass on as typed.
 */
function normalize_url(string $value): ?string
{
    $url = is_http_url($value) ? $value : 'https://' . $value;
    $parts = parse_url($url);
    $host = is_array($parts) ? strtolower($parts['host'] ?? '') : '';
    if ($host === '' || strpos($host, '.') === false || preg_match('/[\s\/\\\\@]/', $host) === 1) {
        return null;
    }
    $path = $parts['path'] ?? '/';
    $user = isset($parts['user'])
        ? $parts['user'] . (isset($parts['pass']) ? ':' . $parts['pass'] : '') . '@'
        : '';
    return strtolower($parts['scheme']) . '://' . $user . $host
        . (isset($parts['port']) ? ':' . $parts['port'] : '')
        . ($path === '' ? '/' : str_replace(' ', '%20', $path))
        . (isset($parts['query']) ? '?' . $parts['query'] : '')
        . (isset($parts['fragment']) ? '#' . $parts['fragment'] : '');
}
