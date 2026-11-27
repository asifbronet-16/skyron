<?php
/**
 * Mail settings for the site's forms (api/contact.php, api/careers.php).
 *
 * Put a copy on the server named skyron-mail.php, ONE FOLDER ABOVE the site's
 * web root, never inside it. For example, /home/<cwp-user>/skyron-mail.php
 * when the site is in /home/<cwp-user>/public_html (or in a folder below it).
 * Owner: the CWP account user. Permissions: 600. See DEPLOY-CWP.md.
 *
 * The Microsoft values are the same ones the old server's .env.local used.
 */
return [
    // Entra ID app registration (MICROSOFT_* in the old .env.local)
    'tenant_id' => '',      // MICROSOFT_TENANT_ID
    'client_id' => '',      // MICROSOFT_CLIENT_ID
    'client_secret' => '',  // MICROSOFT_CLIENT_SECRET: the secret's value, not its ID. It expires.
    'sender' => '',         // MICROSOFT_SENDER, e.g. hello@skyron.me

    // Where the forms deliver. Empty means the site's inboxes (hello@ and
    // career@skyron.me). WHILE TESTING, put your own address in both so no
    // test reaches the client; empty them again at go-live.
    'contact_inbox' => '',
    'careers_inbox' => '',
];
