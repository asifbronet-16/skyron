/**
 * Plumbing shared by the site's forms (contact, careers): the state shape a
 * server action hands back to useActionState, plus the input helpers the
 * actions validate with. Safe to import from client and server.
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
// spam bots fill in every field they find.
export const HONEYPOT_FIELD = "website";

export const isBot = (formData: FormData) => Boolean(formData.get(HONEYPOT_FIELD));

export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

/**
 * Trimmed value of a text field, capped at `max` characters. Single-line
 * fields also have newlines collapsed, since they end up in email subjects.
 */
export function readText(formData: FormData, name: string, max: number, multiline = false) {
  const raw = formData.get(name);
  if (typeof raw !== "string") return "";
  return (multiline ? raw.trim() : raw.replace(/\s+/g, " ").trim()).slice(0, max);
}

/** http(s) URL with the scheme filled in if it was left off, or null if it isn't one. */
export function normalizeUrl(value: string) {
  try {
    const url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    return url.hostname.includes(".") ? url.href : null;
  } catch {
    return null;
  }
}
