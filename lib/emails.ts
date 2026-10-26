import { SITE } from "@/constants/site";

// HTML bodies for the form notification emails. Built for email clients, not
// browsers: table layout, inline styles and web-safe fonts so it holds up in
// Outlook desktop as well as Gmail and Apple Mail. Everything a visitor typed
// goes through esc(), so a form submission can't inject markup into the email.

const FONT = "'Segoe UI', Arial, Helvetica, sans-serif";

const esc = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

type Row = { label: string; value: string; href?: string };

type EmailContent = {
  // Inbox preview line shown next to the subject.
  preheader: string;
  // Small caps line under the logo, e.g. "Contact form".
  eyebrow: string;
  title: string;
  // Rows with an empty value are left out.
  rows: Row[];
  // The visitor's free text, shown in its own box.
  note?: { label: string; text: string };
  action?: { label: string; href: string };
  footer: string;
};

function renderEmail({ preheader, eyebrow, title, rows, note, action, footer }: EmailContent) {
  const received = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Dubai",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

  const rowHtml = rows
    .filter((row) => row.value)
    .map(
      (row) => `
          <tr>
            <td valign="top" width="128" style="padding:12px 12px 12px 0;border-bottom:1px solid #efedf5;font-family:${FONT};font-size:11px;line-height:20px;letter-spacing:1px;text-transform:uppercase;color:#8a87a0;">${esc(row.label)}</td>
            <td valign="top" style="padding:12px 0;border-bottom:1px solid #efedf5;font-family:${FONT};font-size:15px;line-height:20px;color:#14111f;">${
              row.href
                ? `<a href="${esc(row.href)}" style="color:#6d28d9;text-decoration:none;">${esc(row.value)}</a>`
                : esc(row.value)
            }</td>
          </tr>`
    )
    .join("");

  const noteHtml = note?.text
    ? `
      <tr>
        <td style="padding:28px 32px 0;">
          <p style="margin:0 0 10px;font-family:${FONT};font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#8a87a0;">${esc(note.label)}</p>
          <div style="background:#f7f6fb;border-left:3px solid #7c3aed;border-radius:8px;padding:16px 18px;font-family:${FONT};font-size:15px;line-height:24px;color:#2a2738;">${esc(note.text).replace(/\n/g, "<br>")}</div>
        </td>
      </tr>`
    : "";

  // "Bulletproof" button: the colour sits on the table cell, so Outlook (which
  // ignores padding and radius on links) still shows a solid button.
  const actionHtml = action
    ? `
      <tr>
        <td style="padding:28px 32px 0;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td bgcolor="#7c3aed" style="border-radius:999px;background:#7c3aed;">
                <a href="${esc(action.href)}" style="display:inline-block;padding:12px 26px;font-family:${FONT};font-size:14px;font-weight:bold;color:#ffffff;text-decoration:none;border-radius:999px;">${esc(action.label)}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>`
    : "";

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>${esc(title)}</title>
</head>
<body style="margin:0;padding:0;background:#f3f2f7;">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#f3f2f7;">${esc(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f2f7;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid #e6e4ef;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="background:#0c0a16;padding:28px 32px 24px;">
              <div style="font-family:${FONT};font-size:20px;font-weight:bold;letter-spacing:6px;color:#ffffff;">SKYRON</div>
              <div style="margin-top:8px;font-family:${FONT};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#a78bfa;">${esc(eyebrow)}</div>
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
              <h1 style="margin:0;font-family:${FONT};font-size:22px;line-height:30px;font-weight:bold;color:#14111f;">${esc(title)}</h1>
              <p style="margin:6px 0 0;font-family:${FONT};font-size:13px;color:#6b6880;">Received ${esc(received)} (Dubai time)</p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">${rowHtml}
              </table>
            </td>
          </tr>${noteHtml}${actionHtml}
          <tr>
            <td style="padding:28px 32px 32px;">
              <p style="margin:0;padding-top:20px;border-top:1px solid #efedf5;font-family:${FONT};font-size:12px;line-height:19px;color:#8a87a0;">${esc(footer)}</p>
            </td>
          </tr>
        </table>
        <p style="margin:16px 0 0;font-family:${FONT};font-size:11px;color:#a3a1b3;">${esc(SITE.legalName)} · ${esc(SITE.url.replace(/^https?:\/\//, ""))}</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

const firstName = (name: string) => name.split(" ")[0];
const isLink = (value: string) => /^https?:\/\//i.test(value);

export function contactEmail(values: { name: string; company: string; phone: string; email: string; project: string }) {
  return renderEmail({
    preheader: `${values.name}${values.company ? ` from ${values.company}` : ""} sent a project enquiry.`,
    eyebrow: "Contact form",
    title: "New project enquiry",
    rows: [
      { label: "Name", value: values.name },
      { label: "Company", value: values.company },
      { label: "Email", value: values.email, href: `mailto:${values.email}` },
      { label: "Phone", value: values.phone, href: `tel:${values.phone.replace(/[^+\d]/g, "")}` },
    ],
    note: { label: "Project details", text: values.project },
    action: { label: `Reply to ${firstName(values.name)}`, href: `mailto:${values.email}` },
    footer: `Sent from the contact form on ${SITE.url.replace(/^https?:\/\//, "")}. Replying to this email goes straight to ${values.name}.`,
  });
}

export function applicationEmail(values: {
  role: string;
  name: string;
  email: string;
  phone: string;
  portfolio: string;
  linkedin: string;
  message: string;
  cvName: string;
}) {
  const role = values.role || "General application";
  return renderEmail({
    preheader: `${values.name || "Someone"} applied for ${values.role || "a role at Skyron"}.`,
    eyebrow: "Careers",
    title: values.role ? `New application for ${values.role}` : "New job application",
    rows: [
      { label: "Role", value: role },
      { label: "Name", value: values.name },
      { label: "Email", value: values.email, href: values.email ? `mailto:${values.email}` : undefined },
      { label: "Phone", value: values.phone, href: values.phone ? `tel:${values.phone.replace(/[^+\d]/g, "")}` : undefined },
      { label: "Portfolio", value: values.portfolio, href: isLink(values.portfolio) ? values.portfolio : undefined },
      { label: "LinkedIn", value: values.linkedin, href: isLink(values.linkedin) ? values.linkedin : undefined },
      { label: "CV", value: `Attached · ${values.cvName}` },
    ],
    note: { label: "Cover note", text: values.message },
    action: values.email
      ? { label: values.name ? `Reply to ${firstName(values.name)}` : "Reply to applicant", href: `mailto:${values.email}` }
      : undefined,
    footer: values.email
      ? `Sent from the careers page on ${SITE.url.replace(/^https?:\/\//, "")}. The CV is attached, and replying to this email goes straight to the applicant.`
      : `Sent from the careers page on ${SITE.url.replace(/^https?:\/\//, "")}. The CV is attached. No email was given, so use the contact details on the CV.`,
  });
}
