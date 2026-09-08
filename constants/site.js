/**
 * Single source of truth for the studio's public identity.
 * Consumed by the root layout (metadata + Organization JSON-LD) and by the
 * footer, so the canonical URL and profile links can't drift between them.
 */
export const SITE = {
  name: "Skyron",
  legalName: "Skyron Interactive",
  url: "https://skyron.me",
  description:
    "Skyron sits at the intersection of intelligent technology, cinematic content, and environment design.",
  email: "hello@skyron.me",
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
export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}`;

// `key` maps to an icon in components/icons.jsx (see Footer's ICONS lookup).
export const SOCIALS = [
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/skyron.me" },
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/skyron.me" },
  { key: "youtube", label: "YouTube", href: "https://www.youtube.com/@skyron_me" },
  { key: "behance", label: "Behance", href: "https://www.behance.net/skyron-me" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/skyron-me/" },
];
