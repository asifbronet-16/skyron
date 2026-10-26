"use server";

import { SITE } from "@/constants/site";
import { CONTACT_INBOX, sendMail } from "@/lib/mail";
import { type FormState, isBot, isEmail, readText } from "@/lib/forms";

export async function sendContactMessage(_prevState: FormState, formData: FormData): Promise<FormState> {
  const sent: FormState = {
    status: "success",
    message: "Thanks, your message is on its way. Our team will be in touch shortly.",
  };
  // Looks like a success to the bot, but nothing is sent.
  if (isBot(formData)) return sent;

  const values = {
    name: readText(formData, "name", 120),
    company: readText(formData, "company", 120),
    phone: readText(formData, "phone", 40),
    email: readText(formData, "email", 200),
    project: readText(formData, "project", 5000, true),
  };

  const errors: Record<string, string> = {};
  if (!values.name) errors.name = "Please tell us your name.";
  if (!values.phone) errors.phone = "Please add a phone number.";
  if (!isEmail(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.project) errors.project = "Please tell us a little about your project.";
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", errors, values };
  }

  const delivered = await sendMail({
    to: CONTACT_INBOX,
    replyTo: values.email,
    subject: `New enquiry from ${values.name}${values.company ? ` (${values.company})` : ""}`,
    text: [
      `Name: ${values.name}`,
      `Company: ${values.company || "-"}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      "",
      values.project,
    ].join("\n"),
  });

  if (!delivered) {
    return {
      status: "error",
      message: `We couldn't send your message just now. Please email us at ${SITE.email} or message us on WhatsApp.`,
      values,
    };
  }
  return sent;
}
