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
  const portfolio = values.portfolio ? normalizeUrl(values.portfolio) : "";
  const linkedin = values.linkedin ? normalizeUrl(values.linkedin) : "";

  const errors: Record<string, string> = {};
  if (!values.name) errors.name = "Please tell us your name.";
  if (!isEmail(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.phone) errors.phone = "Please add a phone number.";
  if (portfolio === null) errors.portfolio = "That doesn't look like a valid link.";
  if (linkedin === null) errors.linkedin = "That doesn't look like a valid link.";
  if (!(cv instanceof File) || cv.size === 0) errors.cv = "Please attach your CV.";
  else if (!CV_EXTENSIONS.test(cv.name)) errors.cv = "Please upload a PDF or Word document.";
  else if (cv.size > CV_MAX_BYTES) errors.cv = `Your CV must be ${CV_MAX_MB}MB or smaller.`;
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", errors, values };
  }

  const role = values.role || "General application";
  const file = cv as File;
  const delivered = await sendMail({
    to: CAREERS_INBOX,
    replyTo: values.email,
    subject: `Application: ${role} - ${values.name}`,
    text: [
      `Position: ${role}`,
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Portfolio: ${portfolio || "-"}`,
      `LinkedIn: ${linkedin || "-"}`,
      "",
      values.message || "(No cover note)",
    ].join("\n"),
    attachments: [
      {
        filename: file.name.replace(/[^\w.\- ]+/g, "_"),
        content: Buffer.from(await file.arrayBuffer()),
      },
    ],
  });

  if (!delivered) {
    return {
      status: "error",
      message: `We couldn't send your application just now. Please email your CV to ${SITE.email} instead.`,
      values,
    };
  }
  return sent;
}
