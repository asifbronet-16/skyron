/**
 * Content for the "Creative Solutions" flyout (under What We Do → Creative Solutions).
 * Each entry renders at /creative-solutions/[slug] via app/creative-solutions/[slug]/page.jsx.
 *
 * Add a new sub-page by adding an entry here — the Navbar flyout and the
 * dynamic route both read from this single list.
 *
 * `banner.images`: one path renders a static banner, several auto-rotate as
 * a carousel (see components/SolutionBanner.jsx). Leave empty until real
 * photography/renders are dropped into /public for this solution.
 */
export const CREATIVE_SOLUTIONS_ITEMS = [
  {
    slug: "3d-content-creation",
    label: "3D Content Creation",
    eyebrow: "Creative Solutions",
    heading: { lead: "3D Content", accent: "Creation" },
    banner: { images: [] },
    intro:
      "Fully modeled, animated, and rendered 3D worlds built to fill a screen, a dome, or an entire building facade.",
    body: [
      "From product visualizations to abstract generative environments, our 3D pipeline is built for scale — real-time and pre-rendered content designed to hold up on massive projection surfaces and LED walls.",
    ],
    highlights: [],
    features: {
      lead: "Where Imagination",
      accent: "Becomes Dimension",
      subtitle:
        "From cinematic animation to real-time 3D assets, we craft visuals that bring products, characters, and environments to life with precision and depth.",
      // TODO: `image` below is a placeholder (public/assets/vr-portrait.png) just to
      // preview the hover reveal — swap each card's image for its real asset.
      cards: [
        {
          title: "3D Animation & Motion Graphics",
          description:
            "We craft cinematic 3D animation and motion graphics for digital, broadcast, social, and immersive experiential content that **elevates** brands and engages audiences.",
          image: "/assets/vr-portrait.png",
        },
        {
          title: "Product Visualization & 3D Advertising",
          description:
            "High-impact product visualization and 3D advertising that showcases features, **boosts** desirability, and drives **conversions** across digital and commercial campaigns **globally**.",
          image: "/assets/vr-portrait.png",
        },
        {
          title: "Architectural Visualization & Walkthroughs",
          description:
            "Photoreal architectural walkthroughs and 3D visualizations that bring buildings, interiors, and master plans to life before **ground is broken**.",
          image: "/assets/vr-portrait.png",
        },
        {
          title: "Engineering & Technical Animations",
          description:
            "Clear, precise 3D animations that **simplify** complex engineering, industrial **processes**, and technical systems for communication and marketing.",
          image: "/assets/vr-portrait.png",
        },
        {
          title: "Character Design & Animation",
          description:
            "Expressive character design and animation that builds emotional connection, **enhances** storytelling, and strengthens brand **narratives** across media.",
          image: "/assets/vr-portrait.png",
        },
        {
          title: "3D Asset Creation",
          description:
            "High-quality, **optimized** 3D assets built for animation, real-time engines, interactive platforms, and scalable multi-channel production.",
          image: "/assets/vr-portrait.png",
        },
        {
          title: "Digital Twins & Simulation Visuals",
          description:
            "Data-driven digital twins and simulation visuals that visualize performance, processes, and environments with **accuracy** and clarity.",
          image: "/assets/vr-portrait.png",
        },
        {
          title: "Real-Time & Interactive 3D Content",
          description:
            "Real-time and interactive 3D experiences designed for web, AR, VR, and experiential installations that engage users **dynamically**.",
          image: "/assets/vr-portrait.png",
        },
      ],
    },
  },
  {
    slug: "2d-content-creation",
    label: "2D Content Creation",
    eyebrow: "Creative Solutions",
    heading: { lead: "2D Content", accent: "Creation" },
    banner: { images: [] },
    intro:
      "Motion graphics, illustration, and animated design systems that carry a brand's visual language across every touchpoint.",
    body: [
      "We design and animate flat and layered 2D content for everything from wayfinding screens to broadcast-style brand films — clean, on-brand, and built to move.",
    ],
    highlights: [
      { title: "Motion Graphics", body: "Typography, iconography, and layered animation systems built to brand guidelines." },
      { title: "Illustration", body: "Custom illustrated worlds and characters, from flat vector to painterly styles." },
      { title: "Screen-Ready Delivery", body: "Exported and optimized for whatever hardware the content will actually run on." },
    ],
  },
  {
    slug: "anamorphic-3d-content-creation",
    label: "Anamorphic 3D Content Creation",
    eyebrow: "Creative Solutions",
    heading: { lead: "Anamorphic 3D", accent: "Content Creation" },
    banner: { images: [] },
    intro:
      "Forced-perspective illusions engineered for curved LED corners and billboards — content that appears to break out of the screen from one exact vantage point.",
    body: [
      "Anamorphic work lives or dies on the math. We build every scene against the precise geometry of the display and viewing angle, so the illusion holds up in the photo, not just on paper.",
    ],
    highlights: [
      { title: "Precision Modeling", body: "Every shot is built against the exact curve and dimensions of the target display." },
      { title: "Corner LED & Billboards", body: "Purpose-built for the anamorphic corner-screen format driving social reach today." },
      { title: "Camera-Tested Illusion", body: "Validated from the intended viewing point before a single frame goes live." },
    ],
  },
  {
    slug: "live-action-content-production",
    label: "Live Action Content Production",
    eyebrow: "Creative Solutions",
    heading: { lead: "Live Action", accent: "Content Production" },
    banner: { images: [] },
    intro:
      "Full-service filming — from concept and script through shoot and post — for brand films, campaign content, and experiential backdrops.",
    body: [
      "Our production team handles pre-production, filming, and post entirely in-house, so live-action footage integrates seamlessly with the CG and motion content it sits alongside.",
    ],
    highlights: [
      { title: "End-to-End Production", body: "Script, shoot, and edit under one roof — no handoffs between vendors." },
      { title: "Hybrid Pipelines", body: "Live footage composited directly with 3D and motion graphics for one unified look." },
      { title: "On-Location & Studio", body: "Equipped for controlled studio shoots and complex on-location productions alike." },
    ],
  },
  {
    slug: "ai-driven-generative-content",
    label: "AI Driven Generative Content",
    eyebrow: "Creative Solutions",
    heading: { lead: "AI Driven", accent: "Generative Content" },
    banner: { images: [] },
    intro:
      "Generative tools woven into the creative pipeline to explore more ideas, faster — without losing the art direction that makes content feel intentional.",
    body: [
      "We use AI-assisted workflows for concepting, texture and asset generation, and rapid iteration, always finished and art-directed by hand before anything reaches a screen.",
    ],
    highlights: [
      { title: "Rapid Concepting", body: "Explore dozens of creative directions in the time it used to take to explore one." },
      { title: "Human Art Direction", body: "Every generated asset is curated and finished by our creative team, never shipped raw." },
      { title: "Novel Formats", body: "Real-time generative visuals for experiences that respond and evolve live." },
    ],
  },
];

export function getCreativeSolutionsItem(slug) {
  return CREATIVE_SOLUTIONS_ITEMS.find((item) => item.slug === slug);
}
