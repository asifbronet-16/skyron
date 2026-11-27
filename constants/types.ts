/**
 * Shapes shared by the content lists in this folder.
 */

export type FeatureCard = {
  title: string;
  // Supports **bold** markup, rendered by FeatureGrid.
  description: string;
  image: string;
};

/**
 * A piece of long-form text (an Insights post, a legal page), top to bottom.
 * Text nodes take Rich markup (**bold**, [words](/path)).
 */
export type ArticleNode =
  | { h2: string }
  | { h3: string }
  | { p: Rich }
  | { ul: Rich[] }
  | { ol: Rich[] }
  | { table: TableData }
  // A small italic line, e.g. "Illustrative examples, not past projects."
  | { note: string }
  | { button: MoreLink };

/** An Insights post: its card on /blogs and its page at /blogs/[slug]. */
export type BlogPost = {
  slug: string;
  // Topic, shown on the card and used by the topic filters.
  tag: string;
  // Card title and text on /blogs.
  title: string;
  excerpt: string;
  // The real publish date (YYYY-MM-DD), set when the post goes live. A post
  // without one is a draft: it isn't published anywhere.
  date: string | null;
  // Set when the post is changed after publishing.
  updated?: string;
  readTime: string;
  // Optional — BlogCard falls back to a gradient cover. A render of
  // undelivered work needs a visible "Concept render" label.
  image?: string;
  seo: { title: string; description: string };
  h1: string;
  author: { name: string; role?: string };
  body: ArticleNode[];
  // "Related reading" under the post; links to unpublished pages are hidden.
  relatedReading: MoreLink[];
  // Paths of the services in the Related services block.
  related: string[];
};

/** A legal page (Privacy Policy, Terms of Use), as supplied after legal review. */
export type LegalDoc = {
  seo: { title: string; description: string };
  h1: string;
  // "Last updated" date (YYYY-MM-DD).
  updated: string;
  body: ArticleNode[];
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
  // Card title on /contact, e.g. "Dubai headquarters". Falls back to `city`.
  title?: string;
  // A line of copy under the country on /contact.
  note?: string;
  // e.g. "Mon–Fri, 9:00–18:00". Shown on /contact and in the footer.
  hours?: string;
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

/**
 * Copy that can carry light markup, rendered by components/RichText.jsx:
 * **bold** for a lead-in label ("**Rent** for one-off events…") and
 * [words](/path) for an inline link. Links to pages that aren't live yet
 * render as plain words.
 */
export type Rich = string;

/** "Label →" link under a card or section. Hidden while its page isn't live. */
export type MoreLink = { label: string; href: string };

export type ContentCard = {
  title: string;
  body?: Rich;
  bullets?: Rich[];
  // "Best for", "Avoid if", "Used for" lines under the body.
  details?: { label: string; text: Rich }[];
  image?: string;
  link?: MoreLink;
  // Several "Label →" links side by side, e.g. an industry's two services.
  links?: MoreLink[];
};

export type TableData = { columns: string[]; rows: string[][]; caption?: string };

/**
 * One section of a content page, in the order it appears. `heading` is the
 * section's H2 (cards inside are H3), exactly as written in the copy deck.
 */
export type ContentBlock =
  | { type: "prose"; heading: string; paragraphs: Rich[]; link?: MoreLink }
  | {
      type: "cards";
      heading: string;
      intro?: Rich[];
      cards: ContentCard[];
      table?: TableData;
      outro?: Rich[];
    }
  // An H2 with its copy beside a picture. Runs of these alternate sides.
  | { type: "split"; heading: string; paragraphs: Rich[]; details?: { label: string; text: Rich }[]; image?: string }
  | { type: "steps"; heading: string; intro?: Rich[]; steps: Rich[]; outro?: Rich[]; link?: MoreLink }
  // `tiles` for items with a bold lead-in, `chips` for a short "A · B · C" list.
  | {
      type: "list";
      heading: string;
      intro?: Rich[];
      items: Rich[];
      variant?: "bullets" | "tiles" | "chips";
      outro?: Rich[];
      link?: MoreLink;
    }
  | { type: "faq"; heading: string; items: { question: string; answer: string }[] }
  | { type: "logos"; heading: string };

/** One entry of the Creative / Technology Solutions lists (one /…/[slug] page each). */
export type SolutionItem = {
  slug: string;
  // false: approved but not published yet (see constants/drafts.ts).
  live?: boolean;
  // Menu, breadcrumb and Related services label.
  navLabel: string;
  seo: { title: string; description: string };
  h1: string;
  intro: Rich[];
  // Buttons under the intro, when the copy has them.
  buttons?: MoreLink[];
  banner: { images: string[] };
  // The card for this service on its hub page (/creative-solutions or
  // /technology-solutions), also used by Related services on other pages.
  hub: { title: string; text: string; linkLabel: string };
  sections: ContentBlock[];
  // Paths of the 3 services in the Related services block.
  related: string[];
  cta: { heading: string; text: string; button?: MoreLink };
};
