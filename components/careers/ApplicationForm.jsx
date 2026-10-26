"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Info, Send } from "@/components/icons";
import { submitApplication } from "@/app/careers/actions";
import { SITE } from "@/constants/site";
import { CV_ACCEPT, CV_MAX_BYTES, CV_MAX_MB, JOB_OPENINGS } from "@/constants/careers";
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

const fileClass =
  `${inputBase} cursor-pointer py-2.5 text-white/60 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 ` +
  "file:bg-violet-500/15 file:px-4 file:py-1.5 file:text-xs file:font-medium file:text-violet-200 hover:file:bg-violet-500/25";

function RoleInput(props) {
  return <input {...props} type="text" placeholder="e.g. 3D Motion Designer" className={inputBase} />;
}

// Reads ?role=<slug> so an opening's "Apply" link lands with that role typed
// in. Keyed on the role so following a different opening's link replaces
// whatever is in the box.
function RoleFromUrl({ defaultValue, ...props }) {
  const slug = useSearchParams().get("role");
  const role = JOB_OPENINGS.find((job) => job.slug === slug)?.title ?? "";
  return <RoleInput key={role} {...props} defaultValue={defaultValue || role} />;
}

export default function ApplicationForm() {
  const [state, formAction, pending] = useFormAction(
    submitApplication,
    `Something went wrong sending your application. Please try again, or email your CV to ${SITE.careersEmail}.`
  );
  const [cvError, setCvError] = useState("");
  const bind = (name) => bindField(state, name);
  const error = (name) => state.errors?.[name];
  const role = bind("role");

  // Catch an oversized or wrong-type CV before it's uploaded: the browser
  // blocks the submit, and a too-large request never reaches the server
  // action's body limit.
  const checkCv = (e) => {
    const input = e.currentTarget;
    const file = input.files?.[0];
    let message = "";
    if (file && !/\.(pdf|docx?)$/i.test(file.name)) message = "Please upload a PDF or Word document.";
    else if (file && file.size > CV_MAX_BYTES) message = `Your CV must be ${CV_MAX_MB}MB or smaller.`;
    input.setCustomValidity(message);
    setCvError(message);
  };

  return (
    <FormCard>
      <form action={formAction} className="space-y-5">
        <Honeypot />

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" name="name" error={error("name")}>
            <input {...bind("name")} type="text" autoComplete="name" placeholder="Your name" className={inputBase} />
          </Field>
          <Field label="Email" name="email" error={error("email")}>
            <input {...bind("email")} type="email" autoComplete="email" placeholder="Email address" className={inputBase} />
          </Field>
          <Field label="Phone" name="phone" error={error("phone")}>
            <input {...bind("phone")} type="tel" autoComplete="tel" placeholder="Phone number" className={inputBase} />
          </Field>
          <Field label="Role" name="role" error={error("role")} hint="Leave blank for a general application.">
            <Suspense fallback={<RoleInput {...role} />}>
              <RoleFromUrl {...role} />
            </Suspense>
          </Field>
          <Field label="Portfolio / showreel" name="portfolio" error={error("portfolio")}>
            <input {...bind("portfolio")} type="text" inputMode="url" autoComplete="url" placeholder="behance.net/you" className={inputBase} />
          </Field>
          <Field label="LinkedIn" name="linkedin" error={error("linkedin")}>
            <input {...bind("linkedin")} type="text" inputMode="url" placeholder="linkedin.com/in/you" className={inputBase} />
          </Field>
        </div>

        <Field label="CV / resume" required name="cv" error={cvError || error("cv")}>
          {/* Up front, before a file is picked: an oversized CV can't be sent at all. */}
          <span className="mb-2.5 flex gap-2.5 rounded-lg border border-violet-400/20 bg-violet-500/10 px-3.5 py-2.5 text-xs leading-relaxed text-violet-100/90">
            <Info className="mt-px h-4 w-4 shrink-0 text-violet-300" strokeWidth={1.8} />
            <span>
              Please upload a PDF, DOC or DOCX file of <strong className="font-semibold text-white">{CV_MAX_MB}MB or less</strong>.
              Larger files can&apos;t be sent, so compress your CV first if it&apos;s over the limit.
            </span>
          </span>
          <input
            name="cv"
            type="file"
            required
            accept={CV_ACCEPT}
            onChange={checkCv}
            aria-invalid={cvError || error("cv") ? true : undefined}
            aria-describedby={cvError || error("cv") ? "cv-error" : undefined}
            className={fileClass}
          />
        </Field>

        <Field label="Cover note" name="message" error={error("message")}>
          <textarea
            {...bind("message")}
            rows={5}
            placeholder="Tell us about yourself and the work you're proudest of..."
            className={`${inputBase} resize-none`}
          />
        </Field>

        <FormNotice state={state} />

        <SubmitButton pending={pending} pendingLabel="Sending..." icon={Send}>
          Submit Application
        </SubmitButton>
      </form>
    </FormCard>
  );
}
