"use server";

import { SITE } from "@/constants/site";
import { CV_MAX_BYTES, CV_MAX_MB } from "@/constants/careers";
import { CAREERS_INBOX, sendMail } from "@/lib/mail";
import { type FormState, isBot, isEmail, normalizeUrl, readText } from "@/lib/forms";

const CV_EXTENSIONS = /\.(pdf|docx?)$/i;

export async function submitApplication(_prevState: FormState, formData: FormData): Promise<FormState> {
  const sent: FormState = {
    status: "success",
    message: "Thanks for applying! We read every application and will reach out if there's a fit.",
  };
  // Looks like a success to the bot, but nothing is sent.
  if (isBot(formData)) return sent;

  const values = {
    name: readText(formData, "name", 120),
    email: readText(formData, "email", 200),
    phone: readText(formData, "phone", 40),
    role: readText(formData, "role", 120),
    portfolio: readText(formData, "portfolio", 500),
    linkedin: readText(formData, "linkedin", 500),
    message: readText(formData, "message", 5000, true),
  };
  const cv = formData.get("cv");
  const file = cv instanceof File && cv.size > 0 ? cv : null;
  // Tidied into a proper URL when it looks like one, otherwise passed on as
  // typed: "@jane on Instagram" is still something a recruiter can follow.
  const portfolio = values.portfolio && (normalizeUrl(values.portfolio) ?? values.portfolio);
  const linkedin = values.linkedin && (normalizeUrl(values.linkedin) ?? values.linkedin);

  // Kept deliberately light: the CV is the only thing we insist on, since it
  // carries the applicant's details anyway. An email, if given, must be one
  // we can actually reply to.
  const errors: Record<string, string> = {};
  if (values.email && !isEmail(values.email)) errors.email = "Please enter a valid email address.";
  if (!file) errors.cv = "Please attach your CV.";
  else if (!CV_EXTENSIONS.test(file.name)) errors.cv = "Please upload a PDF or Word document.";
  else if (file.size > CV_MAX_BYTES) errors.cv = `Your CV must be ${CV_MAX_MB}MB or smaller.`;
  if (Object.keys(errors).length > 0 || !file) {
    return { status: "error", message: "Almost there, just check the highlighted fields.", errors, values };
  }

  const role = values.role || "General application";
  const delivered = await sendMail({
    to: CAREERS_INBOX,
    // No email given: HR replies using the contact details on the CV.
    replyTo: values.email || undefined,
    subject: `Application: ${role} - ${values.name || file.name}`,
    text: [
      `Position: ${role}`,
      `Name: ${values.name || "-"}`,
      `Email: ${values.email || "- (see CV)"}`,
      `Phone: ${values.phone || "-"}`,
      `Portfolio: ${portfolio || "-"}`,
      `LinkedIn: ${linkedin || "-"}`,
      "",
      values.message || "(No cover note)",
    ].join("\n"),
    attachments: [
      { filename: file.name.replace(/[^\w.\- ]+/g, "_"), content: Buffer.from(await file.arrayBuffer()) },
    ],
  });

  if (!delivered) {
    return {
      status: "error",
      message: `We couldn't send your application just now. Please email it to ${SITE.careersEmail} instead.`,
      values,
    };
  }
  return sent;
}
