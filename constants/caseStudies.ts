/**
 * Case study / featured-work entries.
 * Shared by the homepage teaser (components/home/CaseStudiesSection.jsx) and
 * the full listing at /case-studies — one list, so the two never drift.
 */
import type { CaseStudy } from "./types";

export const CASE_STUDIES_ITEMS: CaseStudy[] = [
  {
    tag: "Featured Work",
    title: "Future-Proof Your Business AI Projects",
    description:
      "End-to-end experiential content that blends AI-powered generation with live creative direction for unforgettable brand moments.",
    image: "/assets/cards/marketing-brand-content/2.webp",
    // href: "/work/future-proof",
  },
  {
    tag: "Innovation",
    title: "AI-Powered Projects for Scalable Success",
    description:
      "Intelligent experience systems that adapt to audience behavior in real-time, driving deeper engagement at every touchpoint.",
    image: "/assets/cards/marketing-brand-content/1.webp",
    // href: "/work/ai-powered",
  },
  {
    tag: "Efficiency",
    title: "Tailored AI Projects for Maximum Efficiency",
    description:
      "Custom-built immersive environments calibrated to your brand identity, audience profile, and measurable KPIs.",
    image: "/assets/cards/marketing-brand-content/3.webp",
    // href: "/work/tailored",
  },
  {
    tag: "Strategy",
    title: "Smarter Spatial Design at Scale",
    description:
      "Scalable experience frameworks that grow with your brand — from flagship installations to global rollouts.",
    image: "/assets/cards/corporate-communication/2.webp",
    // href: "/work/spatial-design",
  },
];
