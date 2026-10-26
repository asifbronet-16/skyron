"use client";

import { Send } from "@/components/icons";
import { sendContactMessage } from "@/app/contact/actions";
import { SITE } from "@/constants/site";
import {
  Field,
  FormCard,
  FormNotice,
  Honeypot,
  SubmitButton,
  bindField,
  inputBase,
  useFormAction,
} from "@/components/forms";

export default function ContactForm() {
  const [state, formAction, pending] = useFormAction(
    sendContactMessage,
    `Something went wrong sending your message. Please try again, or email us at ${SITE.email}.`
  );
  const bind = (name) => bindField(state, name);
  const error = (name) => state.errors?.[name];

  return (
    <FormCard>
      <form action={formAction} className="space-y-5">
        <Honeypot />

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your name" required name="name" error={error("name")}>
            <input
              {...bind("name")}
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={inputBase}
            />
          </Field>
          <Field label="Company" name="company" error={error("company")}>
            <input
              {...bind("company")}
              type="text"
              autoComplete="organization"
              placeholder="Company name"
              className={inputBase}
            />
          </Field>
          <Field label="Phone" required name="phone" error={error("phone")}>
            <input
              {...bind("phone")}
              type="tel"
              required
              autoComplete="tel"
              placeholder="Phone number"
              className={inputBase}
            />
          </Field>
          <Field label="Email" required name="email" error={error("email")}>
            <input
              {...bind("email")}
              type="email"
              required
              autoComplete="email"
              placeholder="Email address"
              className={inputBase}
            />
          </Field>
        </div>

        <Field label="Your project" required name="project" error={error("project")}>
          <textarea
            {...bind("project")}
            required
            rows={6}
            placeholder="Tell us about your project..."
            className={`${inputBase} resize-none`}
          />
        </Field>

        <FormNotice state={state} />

        <SubmitButton pending={pending} pendingLabel="Sending..." icon={Send}>
          Send Message
        </SubmitButton>
      </form>
    </FormCard>
  );
}
