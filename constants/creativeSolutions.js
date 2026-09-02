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
    banner: {
      images: [
        "/assets/banners/3d-content-creation/1.jpeg",
        "/assets/banners/3d-content-creation/2.jpg",
        "/assets/banners/3d-content-creation/3.jpeg",
        "/assets/banners/3d-content-creation/4.jpeg",
        "/assets/banners/3d-content-creation/5.jpeg",
      ],
    },
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
      cards: [
        {
          title: "3D Animation & Motion Graphics",
          description:
            "We craft cinematic 3D animation and motion graphics for digital, broadcast, social, and immersive experiential content that **elevates** brands and engages audiences.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/3D Content creation/3D 1.png",
        },
        {
          title: "Product Visualization & 3D Advertising",
          description:
            "High-impact product visualization and 3D advertising that showcases features, **boosts** desirability, and drives **conversions** across digital and commercial campaigns **globally**.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/3D Content creation/3D 2.png",
        },
        {
          title: "Architectural Visualization & Walkthroughs",
          description:
            "Photoreal architectural walkthroughs and 3D visualizations that bring buildings, interiors, and master plans to life before **ground is broken**.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/3D Content creation/3D 3.png",
        },
        {
          title: "Engineering & Technical Animations",
          description:
            "Clear, precise 3D animations that **simplify** complex engineering, industrial **processes**, and technical systems for communication and marketing.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/3D Content creation/3D 4.png",
        },
        {
          title: "Character Design & Animation",
          description:
            "Expressive character design and animation that builds emotional connection, **enhances** storytelling, and strengthens brand **narratives** across media.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/3D Content creation/3D 5.png",
        },
        {
          title: "3D Asset Creation",
          description:
            "High-quality, **optimized** 3D assets built for animation, real-time engines, interactive platforms, and scalable multi-channel production.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/3D Content creation/3D 6.png",
        },
        {
          title: "Digital Twins & Simulation Visuals",
          description:
            "Data-driven digital twins and simulation visuals that visualize performance, processes, and environments with **accuracy** and clarity.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/3D Content creation/3D 7.png",
        },
        {
          title: "Real-Time & Interactive 3D Content",
          description:
            "Real-time and interactive 3D experiences designed for web, AR, VR, and experiential installations that engage users **dynamically**.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/3D Content creation/3D 8.png",
        },
      ],
    },
  },
  {
    slug: "2d-content-creation",
    label: "2D Content Creation",
    eyebrow: "Creative Solutions",
    heading: { lead: "2D Content", accent: "Creation" },
    banner: {
      images: [
        "/assets/banners/2d-content-creation/1.jpeg",
        "/assets/banners/2d-content-creation/2.jpeg",
        "/assets/banners/2d-content-creation/3.jpeg",
        "/assets/banners/2d-content-creation/4.jpeg",
      ],
    },
    intro:
      "Motion graphics, illustration, and animated design systems that carry a brand's visual language across every touchpoint.",
    body: [
      "We design and animate flat and layered 2D content for everything from wayfinding screens to broadcast-style brand films — clean, on-brand, and built to move.",
    ],
    highlights: [],
    features: {
      lead: "Where Motion",
      accent: "Meets Meaning",
      subtitle:
        "From explainer videos to brand films, our 2D pipeline turns ideas into clear, expressive visual stories built for every platform.",
      cards: [
        {
          title: "Explainer & Educational Videos",
          description:
            "Engaging explainer and educational videos that **simplify** complex ideas, communicate value clearly, and inform audiences across platforms.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/2D Content creation/Explainer & Educational Videos/2D Content Creation (1).jpeg",
        },
        {
          title: "Character Animation",
          description:
            "Lively character animation that brings personalities to life, **enhances** storytelling, and creates memorable brand-driven narratives.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/2D Content creation/Character Animation/Character Animation  (4).jpeg",
        },
        {
          title: "2D Motion Graphics",
          description:
            "Clean, dynamic 2D motion graphics designed to communicate messages clearly and **elevate** visual storytelling across media.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/2D Content creation/2D Motion Graphics/2D Motion Graphics (1).jpeg",
        },
        {
          title: "Infographic & Data Animations",
          description:
            "Visually compelling data and infographic animations that transform information into clear, engaging, and **easy-to-understand** stories.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/2D Content creation/Infographic & Data Animations/Infographic & Data Animations (1).jpeg",
        },
        {
          title: "Brand Films & Visual Idents",
          description:
            "Cinematic brand films and visual identities that define tone, **build recognition**, and express brand purpose through motion.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/2D Content creation/Brand Films & Visual Idents/Brand Films & Visual Idents (5).jpeg",
        },
        {
          title: "Social & UI Motion Content",
          description:
            "Impactful social and UI motion content crafted to enhance usability, **increase engagement**, and strengthen digital brand experiences.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/2D Content creation/Social & UI Motion Content/Social & UI Motion Content (4).jpeg",
        },
      ],
    },
  },
  {
    slug: "anamorphic-3d-content-creation",
    label: "Anamorphic 3D Content Creation",
    eyebrow: "Creative Solutions",
    heading: { lead: "Anamorphic 3D", accent: "Content Creation" },
    banner: {
      images: [
        "/assets/banners/anamorphic-3d-content-creation/1.jpeg",
        "/assets/banners/anamorphic-3d-content-creation/2.png",
      ],
    },
    intro:
      "Forced-perspective illusions engineered for curved LED corners and billboards — content that appears to break out of the screen from one exact vantage point.",
    body: [
      "Anamorphic work lives or dies on the math. We build every scene against the precise geometry of the display and viewing angle, so the illusion holds up in the photo, not just on paper.",
    ],
    highlights: [],
    features: {
      lead: "Illusions That",
      accent: "Break The Screen",
      subtitle:
        "Forced-perspective content engineered for the exact geometry of corner, flat, and curved LED displays — built to stop a crowd.",
      cards: [
        {
          title: "Corner & L-Shape LED Displays",
          description:
            "High-impact corner and L-shape LED displays engineered for immersive storytelling, seamless angles, and **maximum visual impact** in architectural and experiential environments.",
          image: "/assets/banners/anamorphic-3d-content-creation/1.jpeg",
        },
        {
          title: "Flat & Facade LED Installations",
          description:
            "Large-scale flat and facade LED installations delivering bold visuals, structural integration, and **captivating** brand presence across commercial buildings and public-facing spaces.",
          image: "/assets/banners/anamorphic-3d-content-creation/2.png",
        },
        {
          title: "Curved & Wrap-Around Displays",
          description:
            "Curved and wrap-around LED displays designed to envelop audiences with fluid visuals, dynamic perspectives, and **immersive** spatial brand experiences.",
          image: "/assets/banners/anamorphic-3d-content-creation/1.jpeg",
        },
      ],
    },
  },
  {
    slug: "live-action-content-production",
    label: "Live Action Content Production",
    eyebrow: "Creative Solutions",
    heading: { lead: "Live Action", accent: "Content Production" },
    banner: {
      images: [
        "/assets/banners/live-action-content-production/1.jpeg",
        "/assets/banners/live-action-content-production/2.jpeg",
      ],
    },
    intro:
      "Full-service filming — from concept and script through shoot and post — for brand films, campaign content, and experiential backdrops.",
    body: [
      "Our production team handles pre-production, filming, and post entirely in-house, so live-action footage integrates seamlessly with the CG and motion content it sits alongside.",
    ],
    highlights: [],
    features: {
      lead: "Stories Captured",
      accent: "In The Real World",
      subtitle:
        "From commercial films to documentary storytelling, we produce live-action content that captures real moments with cinematic craft.",
      cards: [
        {
          title: "Advertising & Commercial Films",
          description:
            "High-impact advertising and commercial films crafted to capture attention, tell compelling stories, and **drive measurable** brand results.",
          image: "/assets/cards/advertising-commercial-films/1.jpeg",
        },
        {
          title: "Corporate & Branded Films",
          description:
            "Professionally crafted corporate and branded films that clearly communicate organizational values, **reinforce credibility**, and support consistent brand presence across internal and external channels.",
          image: "/assets/cards/corporate-branded-films/1.jpeg",
        },
        {
          title: "Documentary & Narrative Content",
          description:
            "Authentic documentary and narrative content that tells meaningful stories, builds **emotional connection**, and resonates with audiences.",
          image: "/assets/cards/documentary-narrative-content/1.png",
        },
        {
          title: "Product & Launch Films",
          description:
            "Strategic product and launch films designed to showcase innovation, **generate excitement**, and support successful market introductions.",
          image: "/assets/cards/product-launch-films/1.jpeg",
        },
        {
          title: "Live Shoot & Visual Effects",
          description:
            "We produce cinematic live-action content enhanced with visual effects, seamlessly blending cinematography, CGI, and post-production to **elevate** storytelling and visual impact.",
          image: "/assets/cards/live-shoot-visual-effects/1.jpeg",
        },
        {
          title: "Drone Shoot",
          description:
            "We capture dynamic aerial visuals using professional drone cinematography, delivering **striking perspectives** that enhance storytelling for brands, spaces, and experiences.",
          image: "/assets/cards/drone-shoot/1.jpeg",
        },
      ],
    },
  },
  {
    slug: "ai-driven-generative-content",
    label: "AI Driven Generative Content",
    eyebrow: "Creative Solutions",
    heading: { lead: "AI Driven", accent: "Generative Content" },
    banner: {
      images: [
        "/assets/banners/ai-driven-generative-content/1.jpeg",
        "/assets/banners/ai-driven-generative-content/2.jpeg",
        "/assets/banners/ai-driven-generative-content/3.jpeg",
        "/assets/banners/ai-driven-generative-content/4.jpeg",
        "/assets/banners/ai-driven-generative-content/5.jpeg",
      ],
    },
    intro:
      "Generative tools woven into the creative pipeline to explore more ideas, faster — without losing the art direction that makes content feel intentional.",
    body: [
      "We use AI-assisted workflows for concepting, texture and asset generation, and rapid iteration, always finished and art-directed by hand before anything reaches a screen.",
    ],
    highlights: [],
    features: {
      lead: "Ideas, Accelerated",
      accent: "By Intelligent Tools",
      subtitle:
        "AI-assisted workflows woven into the creative pipeline — expanding what's possible across marketing, communication, and storytelling content.",
      cards: [
        {
          title: "Marketing & Brand Content",
          description:
            "Strategic marketing and brand content crafted to build awareness, shape perception, and deliver **consistent storytelling** across campaigns, platforms, and audience touchpoints globally.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/AI-Driven Generative Content-20260822T083756Z-1-001/AI-Driven Generative Content/Marketing & Brand Content/Marketing & Brand Content (3).jpeg",
        },
        {
          title: "Corporate Communication",
          description:
            "Clear corporate communication films designed to align stakeholders, convey messaging effectively, and support internal and external communication objectives with **clarity and confidence**.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/AI-Driven Generative Content-20260822T083756Z-1-001/AI-Driven Generative Content/Corporate Communication/Corporate Communication (1).jpeg",
        },
        {
          title: "Education & Learning",
          description:
            "Engaging education and learning content that simplifies complex topics, **enhances retention**, and supports training, onboarding, and knowledge sharing across industries.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/AI-Driven Generative Content-20260822T083756Z-1-001/AI-Driven Generative Content/Education & Learning/Education & Learning (2).jpeg",
        },
        {
          title: "Creative Storytelling",
          description:
            "Creative storytelling that blends narrative, visuals, and emotion to connect audiences with ideas, brands, and experiences in **meaningful ways**.",
          image: "/assets/Skyon Web Banner Images/Banners-20260822T084715Z-1-001/Banners/AI-Driven Generative Content-20260822T083756Z-1-001/AI-Driven Generative Content/Creative Storytelling/Creative Storytelling (3).jpeg",
        },
      ],
    },
  },
];

export function getCreativeSolutionsItem(slug) {
  return CREATIVE_SOLUTIONS_ITEMS.find((item) => item.slug === slug);
}
