/**
 * Single source of truth for the studio's public identity.
 * Consumed by the root layout (metadata + Organization JSON-LD) and by the
 * footer, so the canonical URL and profile links can't drift between them.
 */
import type { Office, Social } from "./types";

export const SITE = {
  name: "Skyron",
  legalName: "Skyron Interactive",
  url: "https://skyron.me",
  // The home page's title, and the fallback for any page without its own.
  title: "Skyron — Spatial Experience Studio",
  description:
    "Skyron sits at the intersection of intelligent technology, cinematic content, and environment design.",
  email: "hello@skyron.me",
  // Job applications go here; everything else goes to `email`.
  careersEmail: "career@skyron.me",
  // E.164 for schema.org / tel: links; `phoneDisplay` is what people read.
  phone: "+971508742345",
  phoneDisplay: "+971 50 874 2345",
  // Same line as `phone`. wa.me wants digits only — no "+", spaces or dashes.
  whatsapp: "971508742345",
  address: {
    street: "1st Floor, Office 101-14, Banat Abdullah Al Marzooqi Building",
    locality: "Al Khabeesi, Deira",
    region: "Dubai",
    country: "AE",
  },
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
    mapQuery: "Banat Abdullah Al Marzooqi Building, Al Khabeesi, Deira, Dubai",
  },
];

export const SOCIALS: Social[] = [
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/skyron.me" },
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/skyron.me" },
  { key: "youtube", label: "YouTube", href: "https://www.youtube.com/@skyron_me" },
  { key: "behance", label: "Behance", href: "https://www.behance.net/skyron-me" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/skyron-me/" },
];
