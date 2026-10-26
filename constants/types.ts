/**
 * Shapes shared by the content lists in this folder.
 */

export type FeatureCard = {
  title: string;
  // Supports **bold** markup, rendered by FeatureGrid.
  description: string;
  image: string;
};

export type Highlight = {
  title: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  // ISO date (YYYY-MM-DD).
  date: string;
  readTime: string;
  // Optional — BlogCard falls back to a gradient cover.
  image?: string;
};

export type CaseStudy = {
  tag: string;
  title: string;
  description: string;
  image: string;
  href?: string;
};

export type Social = {
  // Maps to an icon in components/icons.jsx (see SOCIAL_ICONS in Footer.jsx).
  key: "instagram" | "facebook" | "youtube" | "behance" | "linkedin";
  label: string;
  href: string;
};

/** One studio location, listed on /contact with its own map pin and in the footer. */
export type Office = {
  // Stable key for React lists and the selected-office state.
  id: string;
  city: string;
  country: string;
  // Optional badge, e.g. "Headquarters".
  label?: string;
  // Display lines, top to bottom.
  addressLines: string[];
  email?: string;
  // E.164 for tel: links; `phoneDisplay` is what people read.
  phone?: string;
  phoneDisplay?: string;
  // Digits only, for wa.me.
  whatsapp?: string;
  // What Google Maps searches for to drop the pin: a place name, an address,
  // or "lat,lng" for an exact spot.
  mapQuery: string;
};

/** An open role on /careers. Its `slug` preselects it in the application form. */
export type JobOpening = {
  slug: string;
  title: string;
  department: string;
  location: string;
  // e.g. "Full-time", "Contract".
  type: string;
  summary: string;
};

/** One entry of the Creative / Technology Solutions lists (one /…/[slug] page each). */
export type SolutionItem = {
  slug: string;
  label: string;
  eyebrow: string;
  heading: { lead: string; accent: string };
  banner: { images: string[] };
  intro: string;
  body: string[];
  highlights: Highlight[];
  features: {
    lead: string;
    accent: string;
    subtitle: string;
    cards: FeatureCard[];
  };
};
