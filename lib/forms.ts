/**
 * Plumbing shared by the site's forms (contact, careers): the state shape the
 * PHP form handlers in public/api/ reply with, and the client-side action that
 * posts to them. The handlers validate and send; see public/api/_lib/.
 */

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  // Per-field messages, keyed by input name.
  errors?: Record<string, string>;
  // Echoed back on error so the form can restore what was typed.
  values?: Record<string, string>;
};

export const INITIAL_FORM_STATE: FormState = { status: "idle", message: "" };

// Hidden input every form renders (see <Honeypot />). People never see it;
// spam bots fill in every field they find. Same name as HONEYPOT_FIELD in
// public/api/_lib/forms.php.
export const HONEYPOT_FIELD = "website";

/**
 * Action for useFormAction that posts the form to a PHP handler, e.g.
 * postForm("/api/contact.php"), and returns the FormState it replies with.
 * A network drop, or a reply that isn't one (PHP not running, as under
 * `next dev`), throws, which useFormAction turns into a retryable message.
 */
export function postForm(url: string) {
  return async (_prevState: FormState, formData: FormData): Promise<FormState> => {
    const res = await fetch(url, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    const state = await res.json();
    if (typeof state?.status !== "string" || typeof state?.message !== "string") {
      throw new Error(`Unexpected reply from ${url}`);
    }
    return state as FormState;
  };
}
