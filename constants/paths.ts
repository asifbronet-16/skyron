/**
 * Every internal URL the content links to, in one place. Content files
 * reference these instead of typing paths, so a renamed route is one edit.
 *
 * A path here doesn't mean the page exists yet: lib/routes.ts decides what's
 * live, and links to anything else are left out until it is.
 */
export const PATHS = {
  home: "/",
  whoWeAre: "/who-we-are",
  ourApproach: "/our-approach",
  industries: "/industries",
  careers: "/careers",
  contact: "/contact",
  // The contact form, which every "Send us your brief" button opens.
  brief: "/contact#brief",
  creativeSolutions: "/creative-solutions",
  technologySolutions: "/technology-solutions",
  caseStudies: "/case-studies",
  insights: "/blogs",
  privacyPolicy: "/privacy-policy",
  terms: "/terms",

  threeD: "/creative-solutions/3d-content-creation",
  twoD: "/creative-solutions/2d-content-creation",
  anamorphic: "/creative-solutions/anamorphic-3d-content-creation",
  liveAction: "/creative-solutions/live-action-content-production",
  aiContent: "/creative-solutions/ai-driven-generative-content",

  experienceCentres: "/technology-solutions/experience-centre-consulting-execution",
  projectionMapping: "/technology-solutions/projection-mapping-solutions",
  kineticLed: "/technology-solutions/kinetic-led-installations",
  holograms: "/technology-solutions/hologram-holobox-volumetric-display",
  arVr: "/technology-solutions/ar-vr-xr-immersive-technologies",
  interactive: "/technology-solutions/interactive-technologies",
  events: "/technology-solutions/events-exhibitions-brand-activations",

  saudiArabia: "/markets/saudi-arabia",

  // Insights posts, approved but not published yet.
  postProjectionMappingCost: "/blogs/projection-mapping-cost-uae-gcc",
  postHoloboxRentVsBuy: "/blogs/holobox-rent-vs-buy-uae",
  postExperienceCentreWork: "/blogs/what-makes-an-experience-centre-work",
} as const;
