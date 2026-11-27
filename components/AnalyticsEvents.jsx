"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

// A contact link's GA4 event, by where it points. Anything else isn't tracked.
function contactEvent(href) {
  if (/^https:\/\/wa\.me\//i.test(href)) return "whatsapp_click";
  if (/^mailto:/i.test(href)) return "email_click";
  if (/^tel:/i.test(href)) return "phone_click";
  return null;
}

/**
 * Reports clicks on WhatsApp, email and phone links anywhere on the page, so
 * every such link (CTA band, footer, contact page...) is covered without each
 * one wiring up its own handler. Rendered once, by the root layout.
 */
export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const name = contactEvent(href);
      if (name) trackEvent(name, { link_url: href, page_path: window.location.pathname });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
