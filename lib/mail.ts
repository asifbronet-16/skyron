import "server-only";
import { SITE } from "@/constants/site";

type Mail = {
  to: string;
  subject: string;
  // Full HTML document; see lib/emails.ts.
  html: string;
  replyTo?: string;
  attachments?: { filename: string; content: Buffer }[];
};

// Where each form delivers: enquiries to the public inbox, applications to
// the careers inbox. The env vars override them, e.g. to test on staging.
export const CONTACT_INBOX = process.env.CONTACT_INBOX || SITE.email;
export const CAREERS_INBOX = process.env.CAREERS_INBOX || SITE.careersEmail;

/**
 * Sends one email from our Microsoft 365 mailbox through Microsoft Graph,
 * using an Entra ID app registration (client credentials, no user sign-in).
 * https://learn.microsoft.com/graph/api/user-sendmail
 *
 * Needs, in the deployment env (or .env.local for dev):
 *   MICROSOFT_TENANT_ID      Directory (tenant) ID of the app registration
 *   MICROSOFT_CLIENT_ID      Application (client) ID
 *   MICROSOFT_CLIENT_SECRET  Client secret *value* (not its ID). These expire;
 *                            an expired one logs AADSTS7000222.
 *   MICROSOFT_SENDER         Mailbox the emails come from, e.g. hello@skyron.me
 * Sending rights come from Exchange Online RBAC for Applications ("Application
 * Mail.Send" scoped to the sender mailbox), not an Entra admin consent: an
 * Entra grant would let the app send as any mailbox and bypass that scope.
 *
 * Without them it logs the message in development, so the forms can be tried
 * locally, and fails in production, so a visitor is pointed to email/WhatsApp
 * instead of being thanked for a message that went nowhere.
 */
export async function sendMail({ to, subject, html, replyTo, attachments = [] }: Mail) {
  const tenantId = process.env.MICROSOFT_TENANT_ID;
  const clientId = process.env.MICROSOFT_CLIENT_ID;
  const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;
  const sender = process.env.MICROSOFT_SENDER;

  if (!tenantId || !clientId || !clientSecret || !sender) {
    if (process.env.NODE_ENV === "development") {
      const files = attachments.map((file) => file.filename).join(", ") || "none";
      console.info(`[mail] Not sent (MICROSOFT_* env unset)\nTo: ${to}\nSubject: ${subject}\nAttachments: ${files}\nBody: ${(html.length / 1024).toFixed(1)}KB of HTML`);
      return true;
    }
    console.error("[mail] MICROSOFT_* env unset; form submission dropped.");
    return false;
  }

  try {
    const tokenRes = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
    });
    if (!tokenRes.ok) {
      console.error(`[mail] Microsoft sign-in failed ${tokenRes.status}: ${await tokenRes.text()}`);
      return false;
    }
    const { access_token: accessToken } = await tokenRes.json();

    const res = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`, {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        message: {
          subject,
          body: { contentType: "HTML", content: html },
          toRecipients: [{ emailAddress: { address: to } }],
          ...(replyTo && { replyTo: [{ emailAddress: { address: replyTo } }] }),
          ...(attachments.length > 0 && {
            attachments: attachments.map(({ filename, content }) => ({
              "@odata.type": "#microsoft.graph.fileAttachment",
              name: filename,
              contentBytes: content.toString("base64"),
            })),
          }),
        },
        // Form notifications shouldn't pile up in the sender's Sent Items.
        saveToSentItems: false,
      }),
    });

    if (!res.ok) console.error(`[mail] Microsoft Graph responded ${res.status}: ${await res.text()}`);
    return res.ok;
  } catch (error) {
    console.error("[mail] Request to Microsoft failed:", error);
    return false;
  }
}
