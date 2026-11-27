/**
 * The Creative Solutions pages (What We Do → Creative Solutions), one
 * /creative-solutions/[slug] page each, rendered by
 * components/content/SolutionPage.jsx. The menu, the hub page and Related
 * services all read this list, so a new entry shows up everywhere.
 *
 * Copy is the approved text from Skyron-Website-Content-FINAL, word for word.
 * Don't reword it here: changes go back to Skyron marketing first.
 *
 * `banner.images`: one path renders a static banner, several auto-rotate.
 */
import { PATHS } from "./paths";
import type { SolutionItem } from "./types";

const BRIEF = { label: "Send us your brief", href: PATHS.brief };

export const CREATIVE_SOLUTIONS_ITEMS: SolutionItem[] = [
  {
    slug: "3d-content-creation",
    navLabel: "3D Content Creation",
    seo: {
      title: "3D Product Visualization Studio in Dubai | Skyron",
      description:
        "3D product visualization, animation, architectural walkthroughs and real-time 3D from our Dubai studio, made for campaigns, LED walls, holograms and AR.",
    },
    h1: "3D product visualization and animation in Dubai",
    intro: [
      "We provide 3D product visualization services, animation and real-time 3D from our Dubai studio. That includes product films for launches, walkthroughs of buildings that don't exist yet, and real-time scenes for AR, VR and interactive installations. Every asset is built for the format it's for, from a phone screen to a facade.",
      "Like all our content creation, it is made for interactive and immersive experiences in custom resolutions, not just standard screens.",
    ],
    banner: {
      images: [
        "/assets/banners/3d-content-creation/1.webp",
        "/assets/banners/3d-content-creation/2.webp",
        "/assets/banners/3d-content-creation/3.webp",
        "/assets/banners/3d-content-creation/4.webp",
        "/assets/banners/3d-content-creation/5.webp",
      ],
    },
    hub: {
      title: "3D content and product visualization",
      text: "Modelled, animated and rendered 3D, from product films to whole worlds for domes and facades.",
      linkLabel: "3D content creation",
    },
    sections: [
      {
        type: "cards",
        heading: "What we create in 3D",
        cards: [
          {
            title: "Product visualization and 3D advertising",
            body: "Photoreal product renders and animations that show materials, features and how things work, for launches, e-commerce, social and LED campaigns.",
            image: "/assets/cards/product-visualization-3d-advertising/1.webp",
          },
          {
            title: "3D animation and motion graphics",
            body: "Cinematic 3D animation for brand films, events, broadcast and experiential screens.",
            image: "/assets/cards/3d-animation-motion-graphics/1.webp",
          },
          {
            title: "Architectural visualization and walkthroughs",
            body: "Photoreal stills, flythroughs and interactive masterplans for developers and architects, ready before construction starts.",
            image: "/assets/cards/architectural-visualization-walkthroughs/1.webp",
          },
          {
            title: "Engineering and technical animation",
            body: "Clear animations of industrial processes, energy systems and machinery, for training, investors and visitor centres.",
            image: "/assets/cards/engineering-technical-animations/1.webp",
          },
          {
            title: "Digital twins and simulation visuals",
            body: "3D models of sites, plants or cities, linked to real data where needed.",
            image: "/assets/cards/digital-twins-simulation-visuals/1.webp",
          },
          {
            title: "Real-time and interactive 3D",
            body: "Optimised scenes in Unreal Engine or Unity for AR, VR, touch tables and configurators.",
            image: "/assets/cards/real-time-interactive-3d-content/1.webp",
          },
          {
            title: "Character design and animation",
            body: "Mascots, guides and avatars for films, holograms and interactive experiences.",
            image: "/assets/cards/character-design-animation/1.webp",
          },
          {
            title: "3D asset creation",
            body: "Clean, optimised models and textures for animation, real-time engines and multi-channel use.",
            image: "/assets/cards/3d-asset-creation/1.webp",
          },
        ],
      },
      {
        type: "prose",
        heading: "Made for where it will play",
        paragraphs: [
          "A product film for Instagram and a render for a 12-metre LED wall need different resolutions, frame rates and compositions. We confirm the output format, pixel map and viewing distance at the start, so nothing is upscaled or cropped at the last minute.",
        ],
      },
      {
        type: "steps",
        heading: "How a 3D project runs",
        steps: [
          "Brief, references and CAD or product files",
          "Style frames for approval",
          "Modelling, texturing and lighting",
          "Animation and camera",
          "Render, compositing and sound",
          "Delivery in every format you need",
        ],
      },
      {
        type: "faq",
        heading: "Questions",
        items: [
          {
            question: "Can you work from our CAD files?",
            answer: "Yes. Send STEP, OBJ, FBX or similar, and we'll prepare them for rendering.",
          },
          {
            question: "Do you make product renders for e-commerce?",
            answer: "Yes: stills, 360° spins and short loops.",
          },
        ],
      },
    ],
    related: [PATHS.holograms, PATHS.arVr, PATHS.anamorphic],
    cta: {
      heading: "Have a product or place to visualise?",
      text: "Send your files and deadline. We reply within two working days.",
      button: BRIEF,
    },
  },
  {
    slug: "2d-content-creation",
    navLabel: "2D Content Creation",
    seo: {
      title: "2D Motion Graphics & Explainer Videos Dubai | Skyron",
      description:
        "2D motion graphics, explainer videos, data animation and brand idents from our Dubai studio, in Arabic and English, for screens, events and experience centres.",
    },
    h1: "2D motion graphics and explainer videos",
    intro: [
      "Skyron is a motion graphics studio in Dubai. We design and animate 2D content that makes ideas clear: explainers, data stories, brand idents, social content and screen graphics for events and experience centres. It's clean, on-brand and built to the exact screen it will play on.",
      "Like all our content creation, it is designed for interactive and immersive experiences, from experience centre screens to LED walls.",
    ],
    banner: {
      images: [
        "/assets/banners/2d-content-creation/1.webp",
        "/assets/banners/2d-content-creation/2.webp",
        "/assets/banners/2d-content-creation/3.webp",
        "/assets/banners/2d-content-creation/4.webp",
      ],
    },
    hub: {
      title: "2D motion graphics",
      text: "Explainers, data animation, brand idents and wayfinding content that carry a brand's visual language.",
      linkLabel: "2D content creation",
    },
    sections: [
      {
        type: "cards",
        heading: "What we create in 2D",
        cards: [
          {
            title: "Explainer and educational videos",
            body: "Complex services, policies or products explained in 60–120 seconds.",
            image: "/assets/cards/explainer-educational-videos/1.webp",
          },
          {
            title: "Infographic and data animation",
            body: "Numbers and processes turned into motion that's easy to follow, for reports, visitor centres and keynotes.",
            image: "/assets/cards/infographic-data-animations/1.webp",
          },
          {
            title: "2D motion graphics",
            body: "Titles, transitions, lower thirds and screen content for events and broadcast.",
            image: "/assets/cards/2d-motion-graphics/1.webp",
          },
          {
            title: "Brand films and visual idents",
            body: "Logo animations and short films that set a brand's tone.",
            image: "/assets/cards/brand-films-visual-idents/1.webp",
          },
          {
            title: "Character animation",
            body: "Friendly guides and mascots that carry a story.",
            image: "/assets/cards/character-animation/1.webp",
          },
          {
            title: "Social and UI motion",
            body: "Short loops, stories and interface animation for apps and kiosks.",
            image: "/assets/cards/social-ui-motion-content/1.webp",
          },
        ],
      },
      {
        type: "prose",
        heading: "Motion graphics in Arabic and English",
        paragraphs: [
          "We produce motion graphics in Arabic and English, with right-to-left layouts and Arabic typography handled properly, not just translated text boxes.",
        ],
      },
      {
        type: "prose",
        heading: "How a 2D project runs",
        paragraphs: [
          "Script → storyboard and style frames → voice-over → animation → sound and subtitles → delivery in every aspect ratio.",
        ],
      },
    ],
    related: [PATHS.threeD, PATHS.liveAction, PATHS.interactive],
    cta: {
      heading: "Need something explained in motion?",
      text: "Send the topic, length and deadline. We reply within two working days.",
      button: BRIEF,
    },
  },
  {
    slug: "anamorphic-3d-content-creation",
    navLabel: "Anamorphic 3D",
    seo: {
      title: "3D Anamorphic Billboards in Dubai | Skyron",
      description:
        "Anamorphic 3D billboard content for corner, curved and flat LED screens in Dubai and the Middle East, created for the exact screen and viewing angle.",
    },
    h1: "3D anamorphic billboards for Dubai and the Middle East",
    intro: [
      "A 3D billboard, also called an anamorphic or naked-eye 3D billboard, uses forced perspective to make flat LED content look three-dimensional, as if it's stepping out of the screen. We create that content for corner, curved and flat LED screens across Dubai and the Middle East. Anamorphic work lives or dies on the maths, so every frame is built against the exact geometry of the screen and the main viewing position.",
      "Anamorphic 3D is one part of our wider content creation: the same team also makes 2D and 3D animation, AI content and live-action films.",
    ],
    banner: {
      images: [
        "/assets/banners/anamorphic-3d-content-creation/1.webp",
        "/assets/banners/anamorphic-3d-content-creation/2.webp",
      ],
    },
    hub: {
      title: "Anamorphic 3D billboards",
      text: "Forced-perspective content for corner, curved and flat LED that appears to break out of the screen.",
      linkLabel: "Anamorphic 3D",
    },
    sections: [
      {
        type: "prose",
        heading: "How a 3D billboard illusion works",
        paragraphs: [
          "The screen doesn't show 3D. The content is distorted in 3D software so that, from one viewing point, the brain reads depth. On a corner screen, the fold between the two faces becomes the edge of a \"box\" that objects can burst out of. The illusion depends on three things: the screen's exact dimensions, its pixel resolution, and where people stand or drive past. Get these wrong and the effect collapses.",
        ],
      },
      {
        type: "cards",
        heading: "Screen types we create anamorphic content for",
        cards: [
          {
            title: "Corner and L-shaped LED",
            body: "The strongest illusion. Two faces meet at an angle, giving a natural box for depth. Common on mall facades and street corners.",
            image: "/assets/banners/anamorphic-3d-content-creation/2.webp",
          },
          {
            title: "Curved and wrap-around LED",
            body: "Content flows around the curve for a wider viewing area. It suits atriums and building facades.",
            image: "/assets/cards/curved-wrap-around-displays/1.webp",
          },
          {
            title: "Flat and facade LED",
            body: "Depth comes from shadows, frames and perspective tricks rather than the screen's shape. It works best from a known viewing position, such as a road or plaza.",
            image: "/assets/cards/flat-facade-led-installations/1.webp",
          },
        ],
      },
      {
        type: "list",
        heading: "What we need from you",
        items: [
          "The screen's model, dimensions and pixel resolution (the media owner provides these)",
          "Photos or video from the main viewing positions",
          "Your brand assets, product files or campaign idea",
          "Run length and loop duration (often 10–30 seconds)",
        ],
      },
      {
        type: "steps",
        heading: "How we produce a 3D billboard",
        steps: [
          "**Screen survey:** we rebuild the screen and its surroundings in 3D.",
          "**Concept and storyboard:** the idea is planned around the illusion.",
          "**Previs from real viewing points:** you see how it looks from the street before the final render.",
          "**Animation and render** at the screen's native resolution.",
          "**Test on screen** with the media owner, then final adjustments.",
        ],
        outro: ["Typical production time: 3–6 weeks, depending on length and complexity."],
      },
      {
        type: "prose",
        heading: "What a 3D billboard costs in Dubai",
        paragraphs: [
          "Cost depends on the run length, screen resolution, how complex the 3D is (liquids, characters and products cost more than graphic shapes), and how many screen versions you need. We give an indicative budget within two working days of your brief.",
        ],
      },
      {
        type: "faq",
        heading: "Questions",
        items: [
          {
            question: "Can you book the screen time?",
            answer:
              "We create the content; screen time is booked with the media owner. We can coordinate with them for you.",
          },
          {
            question: "Does it work for people outside the sweet spot?",
            answer:
              "The effect is strongest from the main viewing position. We design so it still reads as good content from other angles.",
          },
          {
            question: "Can the same content run on different screens?",
            answer:
              "It has to be adapted to each screen's geometry. We plan versions from the start if you have several sites.",
          },
        ],
      },
      // "Our work" (2–3 frames labelled "Concept render") is added once
      // Skyron supplies the renders.
    ],
    related: [PATHS.threeD, PATHS.events, PATHS.projectionMapping],
    cta: {
      heading: "Have a screen and a campaign?",
      text: "Send us the screen details and your date. We reply within two working days.",
      button: BRIEF,
    },
  },
  {
    slug: "live-action-content-production",
    navLabel: "Live Action",
    seo: {
      title: "Brand Film & Video Production in Dubai | Skyron",
      description:
        "Brand films, commercials, corporate films and drone filming from concept to post, made in-house in Dubai and planned to combine with CGI and LED content.",
    },
    h1: "Brand film and video production in Dubai",
    intro: [
      "We script, shoot and finish live-action content in-house: commercials, corporate and brand films, documentaries, launch films and drone footage. Because the same team also makes our 3D and motion content, live footage and CGI fit together cleanly, whether the result plays on a phone, a stage screen or a facade.",
      "Live shoots and visual effects are one part of our wider content creation for interactive and immersive experiences.",
    ],
    banner: {
      images: [
        "/assets/banners/live-action-content-production/1.webp",
        "/assets/banners/live-action-content-production/2.webp",
      ],
    },
    hub: {
      title: "Live action production",
      text: "Brand films, commercials, documentaries and drone footage, filmed and finished in-house.",
      linkLabel: "Live action",
    },
    sections: [
      {
        type: "cards",
        heading: "What we film",
        cards: [
          {
            title: "Advertising and commercial films",
            body: "TV, digital and cinema spots, from idea to final grade.",
            image: "/assets/cards/advertising-commercial-films/1.webp",
          },
          {
            title: "Corporate and brand films",
            body: "Company stories, vision films and recruitment films for websites, events and visitor centres.",
            image: "/assets/cards/corporate-branded-films/1.webp",
          },
          {
            title: "Documentary and narrative content",
            body: "Real people and real places, filmed with care.",
            image: "/assets/cards/documentary-narrative-content/1.webp",
          },
          {
            title: "Product and launch films",
            body: "Product reveals for launch events, social media and retail screens.",
            image: "/assets/cards/product-launch-films/1.webp",
          },
          {
            title: "Live action with VFX",
            body: "Shoots planned for CGI, compositing and screen replacement.",
            image: "/assets/cards/live-shoot-visual-effects/1.webp",
          },
          {
            title: "Drone filming",
            body: "Aerials of sites, buildings and landscapes. We arrange the required GCAA and local permits.",
            image: "/assets/cards/drone-shoot/1.webp",
          },
        ],
      },
      {
        type: "prose",
        heading: "Filmed for experiential screens",
        paragraphs: [
          "A film for a 270° immersive room or an LED backdrop needs different framing, resolution and camera planning than a 16:9 video. We plan the shoot around the final screen, so the footage fits without stretching or cropping.",
        ],
      },
      {
        type: "prose",
        heading: "How a shoot runs",
        paragraphs: [
          "Concept and script → pre-production (locations, casting, permits, schedule) → shoot → edit → VFX, grade and sound → delivery in all formats.",
        ],
      },
    ],
    related: [PATHS.threeD, PATHS.twoD, PATHS.experienceCentres],
    cta: {
      heading: "Planning a shoot?",
      text: "Send the idea, locations and deadline. We reply within two working days.",
      button: BRIEF,
    },
  },
  {
    slug: "ai-driven-generative-content",
    navLabel: "AI Content",
    seo: {
      title: "AI Video & Generative Content Studio Dubai | Skyron",
      description:
        "AI-assisted video, avatars and generative visuals from a Dubai studio that art-directs every frame. Faster concepts, more versions, clear rights and labels.",
    },
    h1: "AI-assisted video and generative content, art-directed by people",
    intro: [
      "Skyron offers AI video production in Dubai with a human art director on every frame. We use generative AI where it helps: exploring more ideas early, making textures and backgrounds, producing language versions and building avatar presenters. Every output is reviewed and finished by our artists before it reaches a screen.",
      "Generative AI is one part of our wider content creation, alongside 2D and 3D animation, anamorphic 3D, live shoots and visual effects.",
    ],
    banner: {
      images: [
        "/assets/banners/ai-driven-generative-content/1.webp",
        "/assets/banners/ai-driven-generative-content/2.webp",
        "/assets/banners/ai-driven-generative-content/3.webp",
        "/assets/banners/ai-driven-generative-content/4.webp",
        "/assets/banners/ai-driven-generative-content/5.webp",
      ],
    },
    hub: {
      title: "AI-assisted content",
      text: "Generative tools for faster concepting and asset creation, always art-directed by hand.",
      linkLabel: "AI-driven content",
    },
    sections: [
      {
        type: "cards",
        heading: "Where AI helps in our pipeline",
        cards: [
          {
            title: "Concept and mood exploration",
            body: "Dozens of visual directions in days, so decisions happen early.",
            image: "/assets/cards/creative-storytelling/1.webp",
          },
          {
            title: "Asset and texture generation",
            body: "Environments, textures and backgrounds for 3D and motion work.",
            image: "/assets/cards/marketing-brand-content/1.webp",
          },
          {
            title: "AI avatars and presenters",
            body: "Multilingual presenter videos for training, explainers and HoloBox content.",
            image: "/assets/cards/education-learning/1.webp",
          },
          {
            title: "Versioning",
            body: "Cut-downs, aspect ratios and language versions of a finished film.",
            image: "/assets/cards/corporate-communication/1.webp",
          },
          {
            title: "Generative visuals for immersive rooms",
            body: "Evolving, data-driven or audience-reactive visuals for LED and projection.",
            image: "/assets/cards/data-driven-ai-powered-interaction/1.webp",
          },
        ],
      },
      {
        type: "list",
        heading: "How we use AI responsibly",
        variant: "tiles",
        items: [
          "**Labelled:** AI-generated concepts are marked as concepts. We tell you which parts of a deliverable used AI.",
          "**Rights-aware:** we use tools with commercial licences and don't imitate real people or living artists without permission.",
          "**Brand-safe:** every output passes human review for accuracy, cultural fit and brand guidelines.",
        ],
      },
      {
        type: "list",
        heading: "Good fits for AI-assisted content",
        variant: "chips",
        items: [
          "Internal training and onboarding",
          "Multilingual explainers",
          "Fast campaign variations",
          "Early concept visuals for pitches",
          "Ambient visuals for immersive spaces",
        ],
      },
    ],
    related: [PATHS.twoD, PATHS.threeD, PATHS.holograms],
    cta: {
      heading: "Want to see what AI can speed up for you?",
      text: "Send your brief. We reply within two working days.",
      button: BRIEF,
    },
  },
];

export function getCreativeSolutionsItem(slug: string): SolutionItem | undefined {
  return CREATIVE_SOLUTIONS_ITEMS.find((item) => item.slug === slug);
}
