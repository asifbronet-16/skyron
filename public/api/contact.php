<?php
/**
 * POST /api/contact.php: the contact form (components/contact/ContactForm.jsx).
 * Validates the enquiry and emails it to the contact inbox; replies with the
 * FormState the form shows (lib/forms.ts).
 */

declare(strict_types=1);

require __DIR__ . '/_lib/forms.php';
require __DIR__ . '/_lib/mail.php';
require __DIR__ . '/_lib/emails.php';

handle_form(static function (): array {
    $sent = [
        'status' => 'success',
        'message' => 'Thanks, your message is on its way. Our team will be in touch shortly.',
    ];
    // Looks like a success to the bot, but nothing is sent.
    if (is_bot()) {
        return [200, $sent];
    }
    if (post_too_large()) {
        return [413, ['status' => 'error', 'message' => 'Your message is too long to send. Please shorten it and try again.']];
    }

    $values = [
        'name' => read_text('name', 120),
        'company' => read_text('company', 120),
        'phone' => read_text('phone', 40),
        'email' => read_text('email', 200),
        'project' => read_text('project', 5000, true),
    ];

    $errors = [];
    if ($values['name'] === '') {
        $errors['name'] = 'Please tell us your name.';
    }
    if ($values['phone'] === '') {
        $errors['phone'] = 'Please add a phone number.';
    }
    if (!is_email($values['email'])) {
        $errors['email'] = 'Please enter a valid email address.';
    }
    if ($errors) {
        return [422, ['status' => 'error', 'message' => 'Please check the highlighted fields.', 'errors' => $errors, 'values' => $values]];
    }

    $delivered = send_mail(
        contact_inbox(),
        // Kept short: who it's from. Company and the rest are in the body.
        'New project enquiry from ' . $values['name'],
        contact_email($values),
        $values['email']
    );

    if (!$delivered) {
        return [502, [
            'status' => 'error',
            'message' => "We couldn't send your message just now. Please email us at " . site()['email'] . ' or message us on WhatsApp.',
            'values' => $values,
        ]];
    }
    return [200, $sent];
});
