"use client";

import { useEffect } from "react";
import { Send } from "@/components/icons";
import { trackEvent } from "@/lib/analytics";
import { sendContactMessage } from "@/app/contact/actions";
import { LOCATION_OPTIONS, PLANNING_OPTIONS } from "@/constants/contact";
import { SITE } from "@/constants/site";
import { postForm } from "@/lib/forms";
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

const selectClass = `${inputBase} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%23ffffff80' stroke-width='1.6'%3E%3Cpath d='m5 8 5 5 5-5'/%3E%3C/svg%3E")] bg-size-[1rem] bg-position-[right_1rem_center] bg-no-repeat pr-10`;

function Choice({ bind, options }) {
  return (
    <select {...bind} className={selectClass}>
      <option value="" className="bg-[#0d0b18]">
        Choose one
      </option>
      {options.map((option) => (
        <option key={option} value={option} className="bg-[#0d0b18]">
          {option}
        </option>
      ))}
    </select>
  );
}

/** `privacyNote`: the consent line under the button (components/PrivacyNote.jsx). */
export default function ContactForm({ privacyNote }) {
  const [state, formAction, pending] = useFormAction(
    sendContactMessage,
    `Something went wrong sending your message. Please try again, or email us at ${SITE.email}.`
  );
  const bind = (name) => bindField(state, name);
  const error = (name) => state.errors?.[name];

  // GA4 key event: a brief was sent. `state` is a new object per submission,
  // so this fires once for each successful send.
  useEffect(() => {
    if (state.status === "success") trackEvent("generate_lead", { form: "contact" });
  }, [state]);

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
          <Field label="Phone / WhatsApp" required name="phone" error={error("phone")}>
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
          <Field label="What are you planning? (optional)" name="planning" error={error("planning")}>
            <Choice bind={bind("planning")} options={PLANNING_OPTIONS} />
          </Field>
          <Field label="Where? (optional)" name="location" error={error("location")}>
            <Choice bind={bind("location")} options={LOCATION_OPTIONS} />
          </Field>
        </div>

        <Field label="When? (optional)" name="timing" error={error("timing")}>
          <input {...bind("timing")} type="text" placeholder="Date or month" className={inputBase} />
        </Field>

        <Field label="Your project" name="project" error={error("project")}>
          <textarea
            {...bind("project")}
            rows={6}
            placeholder="Tell us about the space, the audience and what it should achieve. Links to drawings or photos help."
            className={`${inputBase} resize-none`}
          />
        </Field>

        <FormNotice state={state} />

        <SubmitButton pending={pending} pendingLabel="Sending..." icon={Send}>
          Send message
        </SubmitButton>

        {privacyNote}
      </form>
    </FormCard>
  );
}
