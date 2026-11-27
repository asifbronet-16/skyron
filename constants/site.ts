/**
 * Single source of truth for the studio's public identity.
 * Consumed by the root layout (metadata + Organization JSON-LD) and by the
 * footer, so the canonical URL and profile links can't drift between them.
 */
import type { Office, Social } from "./types";

export const SITE = {
  name: "Skyron",
  // Footer ©, schema legalName and the About page only. Everywhere else the
  // studio is just "Skyron".
  legalName: "Skyron Interactive LLC",
  url: "https://skyron.me",
  // The home page's title and meta description, and the fallback for any
  // page without its own.
  title: "Immersive Content & Experience Agency in Dubai | Skyron",
  description:
    "Skyron is a Dubai studio creating immersive content and experiences: 3D, anamorphic and AI content, projection mapping, holograms, AR/VR and experience centres.",
  email: "hello@skyron.me",
  // Job applications go here; everything else goes to `email`.
  careersEmail: "career@skyron.me",
  // E.164 for schema.org / tel: links; `phoneDisplay` is what people read.
  phone: "+971508742345",
  phoneDisplay: "+971 50 874 2345",
  // Same line as `phone`. wa.me wants digits only — no "+", spaces or dashes.
  whatsapp: "971508742345",
  // As schema.org's PostalAddress wants it (see lib/schema.ts).
  address: {
    street: "1st Floor, Office 101-14, Banat Abdullah Al Marzooqi Building, Al Khabeesi, Deira",
    locality: "Dubai",
    country: "AE",
  },
  // Square mark (512×512) for the Organization schema's logo.
  logoSquare: "/logo-square.png",
  // Share link of the "Skyron Interactive LLC" Google Business Profile, for the
  // schema's hasMap. Empty until Skyron sends it; the schema leaves hasMap out.
  googleBusinessProfileUrl: "",
};

// Opens the WhatsApp app on mobile and web.whatsapp.com on desktop.
// `text` pre-fills the chat box so the visitor only has to hit send.
export const whatsappUrl = (number: string, text?: string) =>
  `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const WHATSAPP_URL = whatsappUrl(SITE.whatsapp);

// Every studio location. The first entry is the headquarters (mirrored in
// SITE.address for the Organization JSON-LD); /contact lists them all with a
// map, and the footer prints their addresses. Add a city by appending here.
export const OFFICES: Office[] = [
  {
    id: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    label: "Headquarters",
    title: "Dubai headquarters",
    note: "Tell us whether you need content creation, an installation, or both.",
    hours: "Mon–Fri, 9:00–18:00",
    addressLines: [
      "1st Floor, Office 101-14",
      "Banat Abdullah Al Marzooqi Building",
      "Al Khabeesi, Deira",
      "Dubai, UAE",
    ],
    email: SITE.email,
    phone: SITE.phone,
    phoneDisplay: SITE.phoneDisplay,
    whatsapp: SITE.whatsapp,
    // Exact spot of the building: Google mis-resolves it by name.
    mapQuery: "25.266676,55.333725",
  },
];

export const SOCIALS: Social[] = [
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/skyron.me" },
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/skyron.me" },
  { key: "youtube", label: "YouTube", href: "https://www.youtube.com/@skyron_me" },
  { key: "behance", label: "Behance", href: "https://www.behance.net/skyron-me" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/skyron-me/" },
];
