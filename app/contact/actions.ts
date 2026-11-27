"use server";

import { LOCATION_OPTIONS, PLANNING_OPTIONS } from "@/constants/contact";
import { SITE } from "@/constants/site";
import { CONTACT_INBOX, sendMail } from "@/lib/mail";
import { contactEmail } from "@/lib/emails";
import { type FormState, isBot, isEmail, readText } from "@/lib/forms";

// One of the form's own choices, or "" for anything else (left blank, or tampered with).
const choice = (value: string, options: string[]) => (options.includes(value) ? value : "");

export async function sendContactMessage(_prevState: FormState, formData: FormData): Promise<FormState> {
  const sent: FormState = {
    status: "success",
    message: "Thanks. We've received your brief and will reply within two working days.",
  };
  // Looks like a success to the bot, but nothing is sent.
  if (isBot(formData)) return sent;

  const values = {
    name: readText(formData, "name", 120),
    company: readText(formData, "company", 120),
    phone: readText(formData, "phone", 40),
    email: readText(formData, "email", 200),
    planning: choice(readText(formData, "planning", 60), PLANNING_OPTIONS),
    location: choice(readText(formData, "location", 60), LOCATION_OPTIONS),
    timing: readText(formData, "timing", 80),
    project: readText(formData, "project", 5000, true),
  };

  const errors: Record<string, string> = {};
  if (!values.name) errors.name = "Please tell us your name.";
  if (!values.phone) errors.phone = "Please add a phone number.";
  if (!isEmail(values.email)) errors.email = "Please enter a valid email address.";
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", errors, values };
  }

  const delivered = await sendMail({
    to: CONTACT_INBOX,
    replyTo: values.email,
    // Kept short: who it's from. Company and the rest are in the body.
    subject: `New project enquiry from ${values.name}`,
    html: contactEmail(values),
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
