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
    intro:
      "End-to-end technology for the moment your brand has one shot to land — live events, exhibition stands, and pop-up activations built to stop a crowd.",
    body: [
      "We plan the technology around the footfall, the floor plan, and the few seconds you actually have someone's attention, then bring content, hardware, and staging together as one system rather than a pile of separate vendors.",
    ],
    highlights: [
      { title: "Stand & Booth Tech", body: "Screens, sensors, and staging integrated into the build, not bolted on after." },
      { title: "Live Show Control", body: "Reliable show-calling for multi-day activations with real footfall." },
      { title: "Pop-Up Ready", body: "Systems that can be trucked in, rigged, and struck fast." },
    ],
  },
  {
    slug: "interactive-technologies",
    label: "Interactive Technologies",
    eyebrow: "Technology Solutions",
    heading: { lead: "Interactive", accent: "Technologies" },
    intro:
      "Touch, gesture, and sensor-driven installations that respond to the person standing in front of them instead of playing on a loop.",
    body: [
      "From motion-tracked floors to gesture-controlled walls, we build the sensing and the software layer together, so the interaction feels instant and reliable on show day, not just in the demo.",
    ],
    highlights: [
      { title: "Touch & Gesture", body: "Multi-touch surfaces and camera-tracked gesture interaction." },
      { title: "Sensor-Driven", body: "Proximity, motion, and pressure sensing built into the experience logic." },
      { title: "Built to Run All Day", body: "Kiosk-hardened software designed for unattended, high-traffic use." },
    ],
  },
  {
    slug: "hologram-holobox-volumetric-display",
    label: "Hologram, Holobox & Volumetric Display",
    eyebrow: "Technology Solutions",
    heading: { lead: "Hologram, Holobox &", accent: "Volumetric Display" },
    intro:
      "Floating, glass-free 3D imagery — from holobox product reveals to full volumetric capture — for moments that need to look like nothing else in the room.",
    body: [
      "We handle the capture or CG asset, the optical hardware, and the content pipeline together, so what's on site matches what was promised in the pitch.",
    ],
    highlights: [
      { title: "Holobox Displays", body: "Glass-free floating imagery for product reveals and brand moments." },
      { title: "Volumetric Capture", body: "Real people and objects captured in 3D for playback from any angle." },
      { title: "Content-Matched Hardware", body: "We spec the display around the content, not the other way around." },
    ],
  },
  {
    slug: "ar-vr-xr-immersive-technologies",
    label: "AR, VR, XR Immersive Technologies",
    eyebrow: "Technology Solutions",
    heading: { lead: "AR, VR, XR", accent: "Immersive Technologies" },
    intro:
      "Augmented, virtual, and mixed reality experiences built to run reliably in a public venue, not just on a headset in the studio.",
    body: [
      "We design for the constraints of the real venue — queueing, sanitation, battery life, and staff turnover — so the experience holds up on day 30 of activation the same way it did on day one.",
    ],
    highlights: [
      { title: "AR Activations", body: "Markerless and marker-based AR for mobile, kiosk, and wearable delivery." },
      { title: "VR Experiences", body: "Headset-based experiences engineered for high-throughput public use." },
      { title: "Mixed Reality", body: "Physical sets blended with digital layers for hybrid installations." },
    ],
  },
  {
    slug: "projection-mapping-solutions",
    label: "Projection Mapping Solutions",
    eyebrow: "Technology Solutions",
    heading: { lead: "Projection Mapping", accent: "Solutions" },
    intro:
      "Building facades, interiors, and objects transformed with precisely mapped projection — content sculpted to fit the exact geometry of the surface.",
    body: [
      "Every mapping project starts with a 3D survey of the surface, so the content is built to the real geometry from the first frame instead of being warped to fit after the fact.",
    ],
    highlights: [
      { title: "Facade Mapping", body: "Large-scale architectural mapping for launches, festivals, and landmarks." },
      { title: "Object Mapping", body: "Precision mapping onto irregular and moving physical objects." },
      { title: "Multi-Projector Blending", body: "Seamless edge-blended coverage across the largest surfaces." },
    ],
  },
];

export function getTechnologySolutionsItem(slug) {
  return TECHNOLOGY_SOLUTIONS_ITEMS.find((item) => item.slug === slug);
}
