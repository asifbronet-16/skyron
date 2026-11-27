/**
 * Sends a GA4 event through gtag (loaded by the root layout in production
 * only). A no-op when gtag isn't on the page, e.g. in development.
 *
 * Events the handoff asks for: generate_lead (contact form sent, marked as a
 * key event in GA4), whatsapp_click, email_click and phone_click.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
