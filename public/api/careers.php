<?php
/**
 * POST /api/careers.php: the job application form
 * (components/careers/ApplicationForm.jsx). Validates the application and
 * emails it, CV attached, to the careers inbox; replies with the FormState
 * the form shows (lib/forms.ts).
 */

declare(strict_types=1);

require __DIR__ . '/_lib/forms.php';
require __DIR__ . '/_lib/mail.php';
require __DIR__ . '/_lib/emails.php';

handle_form(static function (): array {
    $site = site();
    $sent = [
        'status' => 'success',
        'message' => "Thanks for applying! We read every application and will reach out if there's a fit.",
    ];
    $cvTooBig = "Your CV must be {$site['cvMaxMb']}MB or smaller.";

    // Looks like a success to the bot, but nothing is sent.
    if (is_bot()) {
        return [200, $sent];
    }
    // Over post_max_size, PHP drops the whole form, so there's nothing to echo back.
    if (post_too_large()) {
        return [413, ['status' => 'error', 'message' => 'Almost there, just check the highlighted fields.', 'errors' => ['cv' => $cvTooBig]]];
    }

    $values = [
        'name' => read_text('name', 120),
        'email' => read_text('email', 200),
        'phone' => read_text('phone', 40),
        'role' => read_text('role', 120),
        'portfolio' => read_text('portfolio', 500),
        'linkedin' => read_text('linkedin', 500),
        'message' => read_text('message', 5000, true),
    ];
    // Tidied into a proper URL when it looks like one, otherwise passed on as
    // typed: "@jane on Instagram" is still something a recruiter can follow.
    $portfolio = $values['portfolio'] !== '' ? (normalize_url($values['portfolio']) ?? $values['portfolio']) : '';
    $linkedin = $values['linkedin'] !== '' ? (normalize_url($values['linkedin']) ?? $values['linkedin']) : '';

    // The uploaded CV, if one arrived intact.
    $upload = $_FILES['cv'] ?? null;
    $file = null;
    $uploadError = is_array($upload) && is_int($upload['error'] ?? null) ? $upload['error'] : UPLOAD_ERR_NO_FILE;
    if ($uploadError === UPLOAD_ERR_OK && $upload['size'] > 0 && is_uploaded_file($upload['tmp_name'])) {
        $file = $upload;
    } elseif (!in_array($uploadError, [UPLOAD_ERR_OK, UPLOAD_ERR_NO_FILE, UPLOAD_ERR_INI_SIZE, UPLOAD_ERR_FORM_SIZE], true)) {
        // A server-side problem (no temp folder, disk full...), not the visitor's.
        error_log("[careers] CV upload failed with PHP upload error {$uploadError}");
    }

    // Kept deliberately light: the CV is the only thing we insist on, since it
    // carries the applicant's details anyway. An email, if given, must be one
    // we can actually reply to.
    $errors = [];
    if ($values['email'] !== '' && !is_email($values['email'])) {
        $errors['email'] = 'Please enter a valid email address.';
    }
    if (in_array($uploadError, [UPLOAD_ERR_INI_SIZE, UPLOAD_ERR_FORM_SIZE], true)) {
        $errors['cv'] = $cvTooBig;
    } elseif ($file === null) {
        $errors['cv'] = 'Please attach your CV.';
    } elseif (preg_match('/\.(pdf|docx?)$/i', (string) $file['name']) !== 1) {
        $errors['cv'] = 'Please upload a PDF or Word document.';
    } elseif ($file['size'] > $site['cvMaxBytes']) {
        $errors['cv'] = $cvTooBig;
    }
    if ($errors || $file === null) {
        return [422, ['status' => 'error', 'message' => 'Almost there, just check the highlighted fields.', 'errors' => $errors, 'values' => $values]];
    }

    $content = file_get_contents($file['tmp_name']);
    if ($content === false) {
        throw new RuntimeException('Could not read the uploaded CV.');
    }
    $cvName = (string) preg_replace('/[^A-Za-z0-9_.\- ]+/', '_', (string) $file['name']);

    $delivered = send_mail(
        careers_inbox(),
        // Kept short: the role and who applied, when given. Everything else is in the body.
        ($values['role'] !== '' ? 'New application for ' . $values['role'] : 'New job application')
            . ($values['name'] !== '' ? ' from ' . $values['name'] : ''),
        application_email(array_merge($values, ['portfolio' => $portfolio, 'linkedin' => $linkedin, 'cvName' => $cvName])),
        // No email given: HR replies using the contact details on the CV.
        $values['email'] !== '' ? $values['email'] : null,
        [['filename' => $cvName, 'content' => $content]]
    );

    if (!$delivered) {
        return [502, [
            'status' => 'error',
            'message' => "We couldn't send your application just now. Please email it to {$site['careersEmail']} instead.",
            'values' => $values,
        ]];
    }
    return [200, $sent];
});
