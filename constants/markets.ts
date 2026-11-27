/**
 * Market pages: /markets/saudi-arabia, rendered by
 * components/content/SolutionPage.jsx like a service page.
 *
 * Copy is the approved text from Skyron-Website-Content-FINAL, word for word.
 */
import { SHOW_DRAFTS } from "./drafts";
import { PATHS } from "./paths";
import type { SolutionItem } from "./types";

/**
 * Publish only when Skyron says go, and when at least 3 of these are true:
 *   - an approved Saudi client to name
 *   - confirmed on-site delivery details
 *   - a Saudi partner or team member
 *   - an Arabic summary
 *   - a concept render made for a Saudi setting
 *   - the calendar section (already in the copy below)
 * Then set this to true: the page, its sitemap entry and the links to it
 * from other pages all switch on.
 */
const SAUDI_ARABIA_APPROVED = false;
export const SAUDI_ARABIA_LIVE = SAUDI_ARABIA_APPROVED || SHOW_DRAFTS;

export const MARKETS_SECTION = { label: "Markets", href: "/markets" };

const BRIEF = { label: "Send us your brief", href: PATHS.brief };

export const SAUDI_ARABIA: SolutionItem = {
  slug: "saudi-arabia",
  live: SAUDI_ARABIA_APPROVED,
  navLabel: "Saudi Arabia",
  seo: {
    title: "Immersive Experience Agency for Saudi Arabia | Skyron",
    description:
      "Projection mapping, holograms, AR/VR and experience centres for Riyadh, Jeddah and the Eastern Province, designed and delivered by Skyron from Dubai.",
  },
  h1: "Immersive experiences for Saudi Arabia",
  intro: [
    "Skyron is an immersive experience agency that designs and delivers projection mapping, holograms, AR/VR, interactive installations and experience centres for clients in Saudi Arabia. We work from our Dubai studio and on site in Riyadh, Jeddah and the Eastern Province, for government entities, giga-projects, developers and brands.",
    "Content creation is at the core of what we deliver, from 2D and 3D animation and anamorphic 3D to AI-generated and live-action content made for each space.",
  ],
  buttons: [BRIEF],
  // A concept render made for a Saudi setting goes here once supplied.
  banner: { images: [] },
  hub: {
    title: "Saudi Arabia",
    text: "Projection mapping, holograms, AR/VR and experience centres for Riyadh, Jeddah and the Eastern Province.",
    linkLabel: "Saudi Arabia",
  },
  sections: [
    // "Trusted by organisations in the Kingdom" (Saudi client logos with
    // written approval, and an optional note per client) goes first once
    // Skyron has the approvals.
    {
      type: "cards",
      heading: "What we deliver in Saudi Arabia",
      cards: [
        {
          title: "Experience centres and vision galleries",
          body: "For giga-projects, ministries and developers that need to explain a long-term vision to delegations, investors and the public.",
        },
        {
          title: "Projection mapping in Riyadh, Jeddah and beyond",
          body: "Building and heritage facade mapping for Founding Day, National Day and Riyadh Season, plus projection-mapped masterplan models for sales galleries.",
        },
        {
          title: "Holograms and HoloBox in Riyadh",
          body: "Life-size presenters and product reveals for launches, exhibitions and lobbies.",
        },
        {
          title: "AR, VR and interactive installations",
          body: "Virtual tours of developments still under construction, training simulations and interactive exhibits.",
        },
        {
          title: "Exhibitions and brand activations",
          body: "Technology and content for LEAP, Cityscape and other trade shows in Riyadh.",
        },
      ],
    },
    {
      type: "list",
      heading: "Planned around the Saudi calendar",
      variant: "tiles",
      items: [
        "**Founding Day (22 February):** facade mapping and public activations. Brief us by early December.",
        "**LEAP (Riyadh, usually February):** stand technology and VR/AR demos. Brief us 10–12 weeks ahead.",
        "**Ramadan and Eid:** mall, retail and public-space campaigns.",
        "**Saudi National Day (23 September):** landmark mapping and city-wide shows.",
        "**Riyadh Season (from October):** entertainment, hologram and immersive attractions.",
      ],
    },
    {
      type: "list",
      heading: "How we deliver from Dubai",
      items: [
        "Concept, design and content production in our Dubai studio, with reviews online or in person in the Kingdom",
        "Site surveys and installation teams on site in Saudi Arabia",
        "Hardware sourced locally or shipped from the UAE, depending on the project",
        "Approvals planned early with the venue and the relevant authorities",
      ],
    },
    {
      type: "prose",
      heading: "Arabic and English",
      // An optional 2–3 sentence Arabic summary, written by a native speaker,
      // can follow this paragraph.
      paragraphs: [
        "Content, interfaces and on-screen text in Arabic and English, with right-to-left layouts designed properly.",
      ],
    },
    {
      type: "faq",
      heading: "Questions",
      items: [
        {
          question: "Do you have an office in Saudi Arabia?",
          answer: "We're based in Dubai and travel to site for surveys, installation and shows.",
        },
        {
          question: "Can you work with our Saudi contractor or event agency?",
          answer:
            "Yes. We often lead the content and technology layer alongside a local fit-out or event partner.",
        },
      ],
    },
  ],
  // Not specified in the copy deck: the first three services the page lists.
  related: [PATHS.experienceCentres, PATHS.projectionMapping, PATHS.holograms],
  cta: {
    heading: "Planning something in the Kingdom?",
    text: "Send your brief, city and date. We reply within two working days.",
    button: BRIEF,
  },
};
