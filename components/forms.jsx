"use client";

import { useActionState } from "react";
import Reveal from "@/components/Reveal";
import { HONEYPOT_FIELD, INITIAL_FORM_STATE } from "@/lib/forms";

// Building blocks for the site's forms (ContactForm, ApplicationForm), so
// both share one look and one way of talking to their server action.

export const inputBase =
  "w-full rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white " +
  "placeholder:text-white/30 outline-none transition " +
  "focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20 " +
  "aria-invalid:border-rose-400/60";

/**
 * useActionState for a server action, with a safety net: a network drop or
 * a stale action ID after a redeploy makes the action throw, which would
 * otherwise crash the page. That becomes a retryable message instead, with
 * the typed text kept.
 */
export function useFormAction(action, failureMessage) {
  return useActionState(async (prevState, formData) => {
    try {
      return await action(prevState, formData);
    } catch {
      const values = Object.fromEntries(
        [...formData.entries()].filter(([, value]) => typeof value === "string")
      );
      return { status: "error", message: failureMessage, values };
    }
  }, INITIAL_FORM_STATE);
}

/**
 * Props that wire an input to the action state: its name, the value to
 * restore after a failed submit, and the error hooks for assistive tech.
 * React resets a form after its action runs, so `defaultValue` is what
 * brings typed text back.
 */
export function bindField(state, name) {
  const error = state.errors?.[name];
  return {
    name,
    defaultValue: state.values?.[name] ?? "",
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${name}-error` : undefined,
  };
}

export function Field({ label, required, hint, error, name, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">
        {label} {required && <span className="text-violet-400">*</span>}
      </span>
      {children}
      {error ? (
        <span id={`${name}-error`} className="mt-1.5 block text-xs text-rose-300">
          {error}
        </span>
      ) : (
        hint && <span className="mt-1.5 block text-xs text-white/35">{hint}</span>
      )}
    </label>
  );
}

/** Off-screen field only bots fill in; the server action drops any submission that has it. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Leave this field empty
        <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

/** Live region for the action's outcome. Always rendered so screen readers announce changes. */
export function FormNotice({ state }) {
  const tone =
    state.status === "success"
      ? "border-emerald-400/25 bg-emerald-500/10 text-emerald-200"
      : "border-rose-400/25 bg-rose-500/10 text-rose-200";

  return (
    <div role="status" aria-live="polite">
      {state.message && (
        <p className={`rounded-lg border px-4 py-3 text-sm leading-relaxed ${tone}`}>{state.message}</p>
      )}
    </div>
  );
}

export function SubmitButton({ pending, pendingLabel, icon: Icon, children }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl
                 bg-linear-to-r from-violet-600 via-blue-500 to-cyan-400
                 px-6 py-4 text-[15px] font-semibold text-white
                 shadow-[0_0_30px_-8px_rgba(99,102,241,.7)] transition
                 hover:shadow-[0_0_38px_-6px_rgba(56,189,248,.8)]
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300
                 disabled:cursor-wait disabled:opacity-70"
    >
      {pending ? pendingLabel : children}
      {Icon && !pending && (
        <Icon className="h-4 w-4 transition group-hover:translate-x-0.5" strokeWidth={2} />
      )}
    </button>
  );
}

/** Glassy card the forms sit in, with the signature hairline along the top. */
export function FormCard({ children, delay = 120, className = "" }) {
  return (
    <Reveal
      as="div"
      delay={delay}
      className={`relative overflow-hidden rounded-2xl border border-white/8 bg-white/2 p-6 backdrop-blur-sm sm:p-8 ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#2981ff] to-transparent opacity-70 transition-opacity duration-300 hover:opacity-100"
      />
      {children}
    </Reveal>
  );
}
