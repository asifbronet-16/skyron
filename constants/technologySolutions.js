/**
 * Content for the "Technology Solutions" flyout (under What We Do → Technology Solutions).
 * Each entry renders at /technology-solutions/[slug] via app/technology-solutions/[slug]/page.jsx.
 *
 * Add a new sub-page by adding an entry here — the Navbar flyout and the
 * dynamic route both read from this single list.
 */
export const TECHNOLOGY_SOLUTIONS_ITEMS = [
  {
    slug: "events-exhibitions-brand-activations",
    label: "Events, Exhibitions & Brand Activations",
    eyebrow: "Technology Solutions",
    heading: { lead: "Events, Exhibitions &", accent: "Brand Activations" },
    banner: {
      images: [
        "/assets/banners/events-exhibitions-brand-activations/1.jpeg",
        "/assets/banners/events-exhibitions-brand-activations/2.jpeg",
      ],
    },
    intro:
      "End-to-end technology for the moment your brand has one shot to land — live events, exhibition stands, and pop-up activations built to stop a crowd.",
    body: [
      "We plan the technology around the footfall, the floor plan, and the few seconds you actually have someone's attention, then bring content, hardware, and staging together as one system rather than a pile of separate vendors.",
    ],
    highlights: [],
    features: {
      lead: "Moments Built",
      accent: "To Be Remembered",
      subtitle:
        "From live events to trade shows and brand activations, we turn footfall into an experience people stop for — and talk about after.",
      cards: [
        {
          title: "Live Event Experiences",
          description:
            "Interactive content designed to **energize** audiences and elevate live moments — stage visuals and immersive motion graphics, real-time interactive visuals, audience-responsive content systems, and experiential storytelling for launches and ceremonies.",
          image: "/assets/banners/events-exhibitions-brand-activations/1.jpeg",
        },
        {
          title: "Exhibition & Trade Show Experiences",
          description:
            "Content-driven environments that attract, engage, and **convert** visitors — interactive exhibition installations, immersive brand zones and pavilions, touchless and sensor-based interaction, and spatial storytelling through digital scenography.",
          image: "/assets/banners/events-exhibitions-brand-activations/2.jpeg",
        },
        {
          title: "Brand Activations & Experiential Marketing",
          description:
            "We turn brands into experiences people can explore and **remember** — interactive brand installations, experiential pop-ups and roadshows, transparent LED and immersive display content, and AR-powered engagement experiences.",
          image: "/assets/banners/events-exhibitions-brand-activations/1.jpeg",
        },
      ],
    },
  },
  {
    slug: "interactive-technologies",
    label: "Interactive Technologies",
    eyebrow: "Technology Solutions",
    heading: { lead: "Interactive", accent: "Technologies" },
    banner: {
      images: [
        "/assets/banners/interactive-technologies/1.jpeg",
        "/assets/banners/interactive-technologies/2.jpeg",
        "/assets/banners/interactive-technologies/3.jpeg",
      ],
    },
    intro:
      "Touch, gesture, and sensor-driven installations that respond to the person standing in front of them instead of playing on a loop.",
    body: [
      "From motion-tracked floors to gesture-controlled walls, we build the sensing and the software layer together, so the interaction feels instant and reliable on show day, not just in the demo.",
    ],
    highlights: [],
    features: {
      lead: "Technology That",
      accent: "Responds To You",
      subtitle:
        "Touch, gesture, sensor, and voice-driven systems — the full interaction toolkit behind every hands-on installation we build.",
      cards: [
        {
          title: "Touch & Display Interaction",
          description:
            "Touch screens and kiosks, multi-touch tables, interactive LED walls, and **large-format** touch LED displays.",
          image: "/assets/banners/interactive-technologies/1.jpeg",
        },
        {
          title: "Gesture, Motion & Spatial Interaction",
          description:
            "Motion sensors and depth cameras, touchless gesture recognition, body and hand tracking, and **spatial tracking**.",
          image: "/assets/banners/interactive-technologies/2.jpeg",
        },
        {
          title: "Sensor & Context-Triggered Interaction",
          description:
            "Proximity detection, pressure and interactive floors, and environmental triggers such as **light, sound, and occupancy**.",
          image: "/assets/banners/interactive-technologies/3.jpeg",
        },
        {
          title: "Tangible & Object-Based Interaction",
          description:
            "Physical controls like dials, buttons, and tokens, RFID/NFC-enabled objects, and **interactive physical exhibits**.",
          image: "/assets/banners/interactive-technologies/1.jpeg",
        },
        {
          title: "Data-Driven & AI-Powered Interaction",
          description:
            "Real-time data visualization, adaptive content systems, and **AI-driven** content response.",
          image: "/assets/banners/interactive-technologies/2.jpeg",
        },
        {
          title: "Multi-User & Collaborative Interaction",
          description:
            "Simultaneous multi-user walls, collaborative learning and planning tables, and **group engagement** systems.",
          image: "/assets/banners/interactive-technologies/3.jpeg",
        },
        {
          title: "Interactive Projection Systems",
          description:
            "Interactive projection walls and floors, motion-triggered projection content, and projection onto **objects and installations**.",
          image: "/assets/banners/interactive-technologies/1.jpeg",
        },
        {
          title: "Haptic & Tactile Feedback",
          description:
            "Vibration-based feedback, force and localized tactile response, and **enhanced immersion** in interactive exhibits.",
          image: "/assets/banners/interactive-technologies/2.jpeg",
        },
        {
          title: "AR & Mixed Reality Interaction",
          description:
            "AR overlays via mobile or smart glasses, mixed reality touchpoints blending physical and digital layers, and **hybrid** online-to-offline continuity.",
          image: "/assets/banners/interactive-technologies/3.jpeg",
        },
        {
          title: "Voice & Mobile Interaction",
          description:
            "Voice assistants and conversational interfaces, QR/NFC/BLE engagement, and **app-based** controllers.",
          image: "/assets/banners/interactive-technologies/1.jpeg",
        },
      ],
    },
  },
  {
    slug: "hologram-holobox-volumetric-display",
    label: "Hologram, Holobox & Volumetric Display",
    eyebrow: "Technology Solutions",
    heading: { lead: "Hologram, Holobox &", accent: "Volumetric Display" },
    banner: {
      images: [
        "/assets/banners/hologram-holobox-volumetric-display/1.jpeg",
        "/assets/banners/hologram-holobox-volumetric-display/2.jpeg",
      ],
    },
    intro:
      "Floating, glass-free 3D imagery — from holobox product reveals to full volumetric capture — for moments that need to look like nothing else in the room.",
    body: [
      "We handle the capture or CG asset, the optical hardware, and the content pipeline together, so what's on site matches what was promised in the pitch.",
    ],
    highlights: [],
    features: {
      lead: "Presence Without",
      accent: "A Screen",
      subtitle:
        "Glass-free 3D imagery in every format — from life-size Holobox reveals to full 360° volumetric and mesh projection.",
      cards: [
        {
          title: "3D Volumetric LED",
          description:
            "3D volumetric LED displays deliver 360-degree immersive visuals with depth and motion, enabling **multi-angle viewing**, interactive engagement, and impactful storytelling.",
          image: "/assets/banners/hologram-holobox-volumetric-display/1.jpeg",
        },
        {
          title: "Holobox",
          description:
            "Designed for life-size projections, the Holobox enhances the presentation of people, products, AI avatars, or recorded or interactive content, offering an **immersive and striking** experience.",
          image: "/assets/banners/hologram-holobox-volumetric-display/2.jpeg",
        },
        {
          title: "Fan Hologram",
          description:
            "The holographic propeller ensures **maximum visibility** and impact on your audience. We guarantee immediate attractiveness at all your events.",
          image: "/assets/banners/hologram-holobox-volumetric-display/1.jpeg",
        },
        {
          title: "Pyramid Hologram",
          description:
            "Give your flagship product unparalleled visibility with our **270° holographic pyramids**. Grab everyone's attention, engage your customers, and boost your sales.",
          image: "/assets/banners/hologram-holobox-volumetric-display/2.jpeg",
        },
        {
          title: "Holographic Tube",
          description:
            "A 360° cylindrical holographic display that showcases a product or figure floating in mid-air, viewable from **every angle** — built for retail counters, lobbies, and showroom centrepieces.",
          image: "/assets/banners/hologram-holobox-volumetric-display/1.jpeg",
        },
        {
          title: "Mesh Hologram",
          description:
            "A 360° holographic mesh projection screen built for **large-scale hologram shows** and stage presentations.",
          image: "/assets/banners/hologram-holobox-volumetric-display/2.jpeg",
        },
      ],
    },
  },
  {
    slug: "ar-vr-xr-immersive-technologies",
    label: "AR, VR, XR Immersive Technologies",
    eyebrow: "Technology Solutions",
    heading: { lead: "AR, VR, XR", accent: "Immersive Technologies" },
    banner: {
      images: [
        "/assets/banners/ar-vr-xr-immersive-technologies/1.jpeg",
        "/assets/banners/ar-vr-xr-immersive-technologies/2.jpg",
      ],
    },
    intro:
      "Augmented, virtual, and mixed reality experiences built to run reliably in a public venue, not just on a headset in the studio.",
    body: [
      "We design for the constraints of the real venue — queueing, sanitation, battery life, and staff turnover — so the experience holds up on day 30 of activation the same way it did on day one.",
    ],
    highlights: [],
    features: {
      lead: "Experiences Built",
      accent: "To Be Explored",
      subtitle:
        "Configurators, training simulations, and immersive tools built on real-time engines for faster, more confident decisions.",
      cards: [
        {
          title: "VR Car Configurator",
          description:
            "Enables immersive vehicle visualization and customization through a VR headset. Powered by Unity's real-time rendering, it delivers intuitive interaction, high visual fidelity, and **faster, more engaging** decision-making for customers and dealers.",
          image: "/assets/banners/ar-vr-xr-immersive-technologies/1.jpeg",
        },
        {
          title: "VR Industrial Training",
          description:
            "Delivers immersive, realistic simulations for safe, hands-on learning, improved retention, and **enhanced performance** across complex industrial environments.",
          image: "/assets/banners/ar-vr-xr-immersive-technologies/2.jpg",
        },
        {
          title: "AR Furniture Configurator",
          description:
            "Allows users to visualize, customize, and place furniture in real environments, enabling confident decisions, enhanced engagement, and **seamless product exploration** through interactive augmented reality experiences.",
          image: "/assets/banners/ar-vr-xr-immersive-technologies/1.jpeg",
        },
      ],
    },
  },
  {
    slug: "projection-mapping-solutions",
    label: "Projection Mapping Solutions",
    eyebrow: "Technology Solutions",
    heading: { lead: "Projection Mapping", accent: "Solutions" },
    banner: {
      images: ["/assets/banners/projection-mapping-solutions/1.jpeg"],
    },
    intro:
      "Building facades, interiors, and objects transformed with precisely mapped projection — content sculpted to fit the exact geometry of the surface.",
    body: [
      "Every mapping project starts with a 3D survey of the surface, so the content is built to the real geometry from the first frame instead of being warped to fit after the fact.",
    ],
    highlights: [],
    features: {
      lead: "Content Mapped",
      accent: "To Reality",
      subtitle:
        "From facades to stage sets, every mapping project starts with the real geometry of the surface — not a guess.",
      cards: [
        {
          title: "Experiential Projection Mapping",
          description:
            "Mapped for experience centres, museums, exhibitions, and learning environments — used to support **storytelling and immersive** journeys.",
          image: "/assets/banners/projection-mapping-solutions/1.jpeg",
        },
        {
          title: "Interactive Projection Mapping",
          description:
            "Mapped across floors, walls, objects, and installations — built to enable **real-time audience** participation.",
          image: "/assets/banners/projection-mapping-solutions/1.jpeg",
        },
        {
          title: "Object & Product Projection Mapping",
          description:
            "Mapped onto physical products, scale models, and sculptures — used to explain **features and functionality**.",
          image: "/assets/banners/projection-mapping-solutions/1.jpeg",
        },
        {
          title: "Stage & Event Projection Mapping",
          description:
            "Mapped for stages, set pieces, and performance spaces — used to **enhance live** performances and presentations.",
          image: "/assets/banners/projection-mapping-solutions/1.jpeg",
        },
        {
          title: "Retail & Commercial Projection Mapping",
          description:
            "Mapped across store interiors and window displays — used to attract attention and enhance **retail storytelling**.",
          image: "/assets/banners/projection-mapping-solutions/1.jpeg",
        },
        {
          title: "Outdoor Projection Mapping",
          description:
            "Mapped onto building façades, landmarks, and outdoor structures — built for mass reach, iconic visuals, and **strong brand recall**.",
          image: "/assets/banners/projection-mapping-solutions/1.jpeg",
        },
      ],
    },
  },
];

export function getTechnologySolutionsItem(slug) {
  return TECHNOLOGY_SOLUTIONS_ITEMS.find((item) => item.slug === slug);
}
