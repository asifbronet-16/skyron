/**
 * The Technology Solutions pages (What We Do → Technology Solutions), one
 * /technology-solutions/[slug] page each, rendered by
 * components/content/SolutionPage.jsx. The menu, the hub page and Related
 * services all read this list, in this order.
 *
 * Copy is the approved text from Skyron-Website-Content-FINAL, word for word.
 * Don't reword it here: changes go back to Skyron marketing first.
 *
 * An entry with `live: false` is approved but unpublished: it's left out of
 * this list (and so out of the menu, the hub, the sitemap and Related
 * services) except as a draft under `npm run dev`. Kinetic LED goes live
 * "once the page is live" in Month 2–3: set its `live` to true.
 */
import { SHOW_DRAFTS } from "./drafts";
import { PATHS } from "./paths";
import type { SolutionItem } from "./types";

const BRIEF = { label: "Send us your brief", href: PATHS.brief };

const ALL_ITEMS: SolutionItem[] = [
  {
    slug: "experience-centre-consulting-execution",
    navLabel: "Experience Centres",
    seo: {
      title: "Experience Centre Design Company in the UAE | Skyron",
      description:
        "Experience centre design in the UAE and Middle East: story, content creation, space and technology for government and enterprise, from one Dubai team.",
    },
    h1: "Experience centre design and delivery in the UAE and the Middle East",
    intro: [
      "Skyron is an experience centre design company based in Dubai. We plan, design and build experience centres, visitor centres and innovation galleries for government entities, developers and enterprises across the UAE, Saudi Arabia, the wider Middle East and beyond. One team carries the work from the first question to opening day: the story, the visitor journey, the space, the content and the technology.",
      "Content creation and creative storytelling are at the heart of every centre we deliver: we write, design and produce the films, 3D and interactive content in-house.",
    ],
    buttons: [BRIEF, { label: "Request a concept render", href: PATHS.brief }],
    banner: { images: ["/assets/banners/experience-centre/1.webp"] },
    hub: {
      title: "Experience centres",
      text: "Visitor centres, vision galleries and sales pavilions, from strategy to opening day.",
      linkLabel: "Experience centre design",
    },
    sections: [
      {
        type: "prose",
        heading: "What an experience centre is for",
        paragraphs: [
          "An experience centre is a physical space built to make one idea understood and remembered. That idea might be a national vision, a giga-project, a new district or a technology. A brochure explains the idea; a good experience centre lets visitors feel its scale, see its future and leave able to retell it.",
          "Most centres that disappoint fail for the same reason: the technology was chosen before the story was written. We work the other way round. Great experiences begin with a question, not a technology.",
        ],
      },
      {
        type: "list",
        heading: "Who we build for",
        variant: "tiles",
        items: [
          "**Government entities and authorities:** vision galleries, strategy and policy showcases, and VIP briefing rooms that explain long-term plans to ministers, delegations and the public.",
          "**Giga-projects and master developers:** sales galleries and visitor pavilions with interactive masterplans, scale models with projection, and immersive films that show a place before it exists.",
          "**Energy, utilities and infrastructure:** corporate visitor centres that turn complex systems such as power, water and sustainability into journeys a visitor can follow in 20 minutes.",
          "**Culture and heritage:** museum media, interpretation galleries and immersive rooms that tell regional stories with care.",
          "**Brands and corporates:** showrooms, innovation hubs and customer experience centres where products are demonstrated, not just displayed.",
        ],
      },
      {
        type: "cards",
        heading: "What we deliver",
        intro: ["You can bring us in at any stage, from early consulting to a refresh of an existing centre."],
        cards: [
          {
            title: "Consulting and strategy",
            body: "Stakeholder workshops, audience definition, key messages, visitor journey mapping and a content masterplan that fixes what each zone has to say and why.",
          },
          {
            title: "Experience and spatial design",
            body: "Zoning, visitor flow, dwell times and sightlines, storyboards and concept renders. We work alongside your architect and fit-out contractor, or lead the experience layer for them.",
          },
          {
            title: "Content production",
            body: "3D animation, cinematic films, motion graphics, interactive applications and data visualisation. All of it is produced in-house and made for the exact screens, surfaces and viewing distances in the room.",
          },
          {
            title: "Technology design and integration",
            body: "We choose the technology after the story is set, and only where it earns its place:",
            bullets: [
              `[Projection mapping](${PATHS.projectionMapping}) on models, walls and floors`,
              `[Holograms and HoloBox displays](${PATHS.holograms}) for life-size presenters and products`,
              `[AR, VR and XR experiences](${PATHS.arVr}) for places that can't be visited yet`,
              `[Interactive technologies](${PATHS.interactive}) such as touch tables, sensors and touchless interaction`,
              "LED walls, immersive rooms and show control that runs the whole space from one system",
            ],
          },
          {
            title: "Installation, testing and handover",
            body: "On-site integration, calibration, content loading, rehearsal runs, operator training and documentation.",
          },
          {
            title: "After opening",
            body: "Content updates and refresh programmes, so the centre still tells the current story in year three.",
          },
        ],
      },
      {
        type: "steps",
        heading: "How an experience centre project runs",
        steps: [
          "**Discovery:** we meet stakeholders, visit the site or study the drawings, and agree on audiences, messages and success measures.",
          "**Visitor journey and content masterplan:** we map the route through the space zone by zone, with what each visitor should think, feel and do at each point.",
          "**Concept design:** storyboards, spatial sketches and concept renders, so decision makers can see the centre before committing to the build.",
          "**Detailed design and technical specification:** equipment lists, content specifications, power and data requirements, and coordination with the architect and fit-out team.",
          "**Content production:** films, 3D, interactive applications and data visualisation, reviewed with you at set milestones.",
          "**Integration and testing:** installation, calibration, show control programming and full rehearsal runs with real visitor scenarios.",
          "**Handover and refresh:** operator training, documentation and a plan for keeping the content current.",
        ],
      },
      {
        type: "list",
        heading: "What makes an experience centre work",
        variant: "tiles",
        items: [
          "**One clear story.** Every zone answers to a single message. If a screen doesn't move the story forward, it shouldn't be there.",
          "**A journey with a rhythm.** Visitors need moments of scale, moments of detail and moments to pause. We design the pacing as carefully as the visuals.",
          "**Technology that disappears.** The best centres are remembered for what visitors understood, not for the equipment.",
          "**Content that can be updated.** Plans change and projects move forward. We build content systems your team can update without rebuilding the room.",
          "**Designed for the real audience.** A ministerial delegation, a school group and an investor need different depths. Good centres serve all three on the same route.",
        ],
        link: { label: "What makes an experience centre work", href: PATHS.postExperienceCentreWork },
      },
      {
        type: "list",
        heading: "Timelines and budgets",
        intro: [
          "Every experience centre is different, so we don't publish fixed prices. These are the main things that set cost and time:",
        ],
        items: [
          "the floor area and the number of zones",
          "how much content is custom-made versus adapted",
          "the technology mix (projection, LED, holograms, interactive, XR)",
          "whether the base build and fit-out are already under way",
          "the number of languages",
          "the review and approval stages your organisation needs",
        ],
        outro: [
          "Send us your brief, site details and timeline. We reply within two working days with a concept direction, an outline scope and an indicative budget.",
        ],
      },
      {
        type: "list",
        heading: "Where we deliver",
        intro: ["We're based in Dubai and deliver across the Middle East and beyond:"],
        variant: "tiles",
        items: [
          "**United Arab Emirates:** Dubai, Abu Dhabi and the northern emirates",
          `**Saudi Arabia:** [Riyadh, Jeddah, the Eastern Province and giga-project sites](${PATHS.saudiArabia})`,
          "**Qatar:** Doha",
          "**Wider Middle East and beyond:** on request",
        ],
        outro: ["Content can be produced in Arabic and English."],
      },
      { type: "logos", heading: "Trusted by organisations across the region" },
      {
        type: "faq",
        heading: "Questions we're often asked",
        items: [
          {
            question: "Do you only design, or do you also build?",
            answer:
              "Both. We can take a centre from strategy to opening day, or join at a single stage such as the content masterplan, content production or technology integration.",
          },
          {
            question: "Can you work with our architect and fit-out contractor?",
            answer:
              "Yes. We usually lead the experience layer (story, content and technology) and coordinate drawings, power, data and equipment positions with the architect and fit-out team.",
          },
          {
            question: "Can you refresh an existing experience centre?",
            answer:
              "Yes. Many centres have sound hardware but outdated content. We audit what's there, keep what still works, and replace the story, films and interactive content around it.",
          },
          {
            question: "Who updates the content after handover?",
            answer:
              "Your team can, for anything we build to be updated. We can also run a refresh programme for larger changes.",
          },
          {
            question: "Do you deliver outside the UAE?",
            answer:
              "Yes. We deliver projects across Saudi Arabia, Qatar, the wider Middle East and beyond from our Dubai office.",
          },
          {
            question: "How do we start?",
            answer:
              "Send us your brief, site drawings or photos, and your timeline. We'll reply within two working days.",
          },
        ],
      },
    ],
    // Not specified in the copy deck: the three technologies the page itself
    // names under "Technology design and integration".
    related: [PATHS.projectionMapping, PATHS.holograms, PATHS.interactive],
    cta: {
      heading: "Planning an experience centre?",
      text: "Tell us what the space needs to say. We'll come back within two working days with a concept direction, scope and indicative budget.",
      button: BRIEF,
    },
  },
  {
    slug: "projection-mapping-solutions",
    navLabel: "Projection Mapping",
    seo: {
      title: "Projection Mapping Company in Dubai & Middle East | Skyron",
      description:
        "Skyron is a projection mapping company in Dubai. We create the content and map facades, interiors, models and stages across the Middle East and beyond.",
    },
    h1: "Projection mapping company in Dubai and the Middle East",
    intro: [
      `Skyron is a projection mapping company based in Dubai. We turn building facades, interiors, scale models, objects and stages into moving stories, for national celebrations, launches, museums and [experience centres](${PATHS.experienceCentres}) across the UAE, Saudi Arabia, the wider Middle East and beyond. Every project starts with a 3D survey of the real surface, so the content fits from the first frame instead of being warped into place afterwards.`,
      "Our in-house content creation team builds the 2D and 3D animation for each surface, so the story is written for the building, not adapted to it.",
    ],
    banner: { images: ["/assets/banners/projection-mapping-solutions/1.webp"] },
    hub: {
      title: "Projection mapping",
      text: "Facades, interiors, models and stages, mapped to the real surface geometry.",
      linkLabel: "Projection mapping",
    },
    sections: [
      {
        type: "prose",
        heading: "What is projection mapping?",
        paragraphs: [
          "Projection mapping, also called 3D projection mapping or video mapping, uses projectors and specialised software to fit video exactly onto a three-dimensional surface, such as a building, a car or a city model. Because the content follows every edge, window and curve, the surface itself appears to move, change or come apart.",
        ],
      },
      {
        type: "cards",
        heading: "Types of projection mapping we deliver",
        cards: [
          {
            title: "Building and outdoor projection mapping",
            body: "Facades, landmarks, heritage sites and towers, for National Day, Ramadan, Founding Day, festivals and openings. Built for mass reach and photos people share.",
            image: "/assets/cards/outdoor-projection-mapping/1.webp",
          },
          {
            title: "Experience centre and museum mapping",
            body: "Permanent or long-run mapping in visitor centres, museums and galleries, telling a story along the visitor journey.",
            image: "/assets/cards/experiential-projection-mapping/1.webp",
          },
          {
            title: "Scale model and product mapping",
            body: "Content mapped onto masterplan models, products and sculptures to show phases, flows and features. Popular in real-estate sales galleries.",
            image: "/assets/cards/object-product-projection-mapping/1.webp",
          },
          {
            title: "Interactive projection mapping",
            body: "Floors, walls and objects that react to touch and movement, in real time.",
            image: "/assets/cards/interactive-projection-mapping/1.webp",
          },
          {
            title: "Stage and event mapping",
            body: "Set pieces, stages and performance spaces mapped for launches, ceremonies and shows.",
            image: "/assets/cards/stage-event-projection-mapping/1.webp",
          },
          {
            title: "Retail and window mapping",
            body: "Store interiors and windows mapped to attract attention and tell product stories.",
            image: "/assets/cards/retail-commercial-projection-mapping/1.webp",
          },
        ],
      },
      {
        type: "steps",
        heading: "How a projection mapping project runs",
        steps: [
          "**Site survey:** 3D scan or measured drawings of the surface, plus light levels, power and projector positions.",
          "**Concept and storyboard:** the story built around the surface's architecture.",
          "**Technical design:** projector count, lenses, brightness, positions and media servers, worked out on a 3D model of the site.",
          "**Content production:** 2D and 3D content made to the surface template.",
          "**Previs:** you watch the show on a virtual model of the site before anything is installed.",
          "**Installation and alignment:** rigging, blending and fine alignment on site, usually at night.",
          "**Show:** operation on the night or nights, or handover for permanent installs.",
        ],
      },
      {
        type: "list",
        heading: "What we need to know from you",
        items: [
          "The surface (building, room, model or object) and its size",
          "Indoor or outdoor; one night or permanent",
          "Show length and number of nights",
          "Where the audience will stand",
          "The date, and who owns the building or venue",
        ],
      },
      {
        type: "prose",
        heading: "Permits and approvals in Dubai, Riyadh and Doha",
        paragraphs: [
          "Outdoor shows usually need approval from the building owner and the relevant municipal or event authorities. We help plan for these early, because they often set the timeline.",
        ],
      },
      {
        type: "list",
        heading: "What affects projection mapping cost",
        variant: "tiles",
        items: [
          "**Surface size and brightness needed:** bigger facades and brighter surroundings need more, and stronger, projectors.",
          "**Show length:** custom content is the biggest creative cost, so every extra minute counts.",
          "**Nights or permanent:** hire versus purchase of the hardware.",
          "**Complexity:** 3D illusions, interactivity and live elements take more production time.",
          "**Site logistics:** scaffolding, towers, power, security and permits.",
        ],
        outro: ["We give an indicative budget within two working days."],
        link: { label: "Projection mapping cost in the UAE and Middle East", href: PATHS.postProjectionMappingCost },
      },
      {
        type: "faq",
        heading: "Questions",
        items: [
          {
            question: "Does it work in Dubai's city light?",
            answer:
              "Yes, with enough projector brightness and the right timing. Ambient light from surrounding buildings is one of the first things we measure.",
          },
          {
            question: "How long does it take?",
            answer:
              "One-off shows typically take 6–12 weeks from brief to show night, depending on content length and permits.",
          },
          {
            question: "Can you project onto a heritage building?",
            answer:
              "Yes. Projection is light only, with nothing fixed to the facade, which is why it's used on heritage sites. Approvals still apply.",
          },
          {
            question: "Can the content be reused?",
            answer:
              "It's made for one surface, but parts can be adapted for social media, LED screens or other venues.",
          },
        ],
      },
      // "Our work" (approved client logos plus 2–3 renders labelled
      // "Concept render") is added once Skyron supplies them.
    ],
    related: [PATHS.threeD, PATHS.anamorphic, PATHS.kineticLed],
    cta: {
      heading: "Planning projection mapping in Dubai?",
      text: "Send a photo of the building or space, the date and the audience. We reply within two working days.",
      button: BRIEF,
    },
  },
  {
    slug: "kinetic-led-installations",
    live: false,
    navLabel: "Kinetic LED",
    seo: {
      title: "Kinetic LED Walls & Installations in Dubai | Skyron",
      description:
        "Kinetic LED walls, moving LED sculptures and motorised displays, with motion content created in-house, for lobbies and launches in Dubai and the Middle East.",
    },
    h1: "Kinetic LED walls and installations in Dubai",
    intro: [
      "A kinetic LED wall is a display that moves. LED panels, pixels or spheres are mounted on motors, so the screen itself changes shape while the content plays across it. Skyron designs kinetic LED installations and kinetic sculptures for lobbies, atriums, launches and experience centres across Dubai and the Middle East, with the motion and the content choreographed together.",
      "We create the motion content in-house, so the movement and the visuals are choreographed together.",
    ],
    buttons: [BRIEF],
    // No kinetic LED photography yet: the banner falls back to the site's
    // gradient background until images are supplied.
    banner: { images: [] },
    hub: {
      title: "Kinetic LED installations",
      text: "Moving LED sculptures and walls for atriums, lobbies and launches.",
      linkLabel: "Kinetic LED",
    },
    sections: [
      {
        type: "prose",
        heading: "Why kinetic LED works",
        paragraphs: [
          "A flat screen asks people to watch. A moving one makes them stop. When a wall folds, ripples or opens, the movement becomes part of the story: a logo assembling itself, a skyline rising, a product being revealed. Because the motion is programmed in sync with the content, every movement means something.",
        ],
      },
      {
        type: "cards",
        heading: "Kinetic LED formats",
        cards: [
          {
            title: "Kinetic LED walls",
            body: "Rows or grids of LED panels that move forward and back, tilt or rotate, turning a flat wall into a moving surface.",
            details: [{ label: "Best for", text: "lobbies, launches and brand walls." }],
          },
          {
            title: "Kinetic LED spheres and pixels",
            body: "Hundreds of LED balls or bars raised and lowered on cables to draw shapes in the air.",
            details: [{ label: "Best for", text: "atriums, hotel lobbies and malls with height." }],
          },
          {
            title: "Rotating and folding LED displays",
            body: "Screens that turn, fold or split open to reveal a product or a second display.",
            details: [{ label: "Best for", text: "product reveals and stage moments." }],
          },
          {
            title: "Kinetic sculptures",
            body: "Bespoke moving structures with integrated LED, designed as a permanent landmark.",
            details: [{ label: "Best for", text: "experience centres, headquarters and destinations." }],
          },
        ],
      },
      {
        type: "prose",
        heading: "Content and motion, choreographed together",
        paragraphs: [
          "The hard part of kinetic LED isn't the motors. It's timing the motion to the content so each movement lands on the beat. We build the 3D content and the motion sequence in the same timeline, preview it in a 3D model of the installation, then program the show control.",
        ],
      },
      {
        type: "steps",
        heading: "How a kinetic LED project runs",
        steps: [
          "**Site and structure check:** ceiling height, load, power and viewing positions",
          "**Concept:** what the movement should say, with storyboards and motion sketches",
          "**Technical design:** format, motor count, LED spec and safety design with the hardware partner",
          "**Content and motion programming:** previewed in 3D before installation",
          "**Installation, testing and handover:** including a maintenance plan",
        ],
      },
      {
        type: "list",
        heading: "Kinetic LED wall rental or permanent installation",
        variant: "tiles",
        items: [
          "**Rental:** for launches, exhibitions and events. Shorter shows, using modular systems.",
          "**Permanent:** for lobbies, flagship stores and experience centres, with maintenance and content updates.",
        ],
      },
      {
        type: "list",
        heading: "What affects kinetic LED screen price",
        items: [
          "Size and number of moving elements (motors are a major cost)",
          "Type of movement (simple in-and-out costs less than multi-axis)",
          "LED resolution and brightness",
          "Structure, rigging and safety engineering",
          "Length of the show and amount of custom content",
          "Rental period, or purchase and maintenance",
        ],
        outro: ["We give an indicative budget within two working days of your brief."],
      },
      {
        type: "faq",
        heading: "Questions",
        items: [
          {
            question: "Is kinetic LED safe above people?",
            answer:
              "Moving elements above a crowd need certified rigging and safety systems. We design with the hardware partner and the venue's engineers, and follow the venue's approval process.",
          },
          {
            question: "How loud is it?",
            answer:
              "Modern systems are quiet, but motor noise depends on the format. We check it against the space during design.",
          },
          {
            question: "Can it be interactive?",
            answer: "Yes. Movement can react to sensors, visitors or live data.",
          },
        ],
      },
    ],
    related: [PATHS.projectionMapping, PATHS.anamorphic, PATHS.experienceCentres],
    cta: {
      heading: "Want a wall that moves?",
      text: "Tell us the space, the height and the moment. We reply within two working days.",
      button: BRIEF,
    },
  },
  {
    slug: "hologram-holobox-volumetric-display",
    navLabel: "Holograms & HoloBox",
    seo: {
      title: "Hologram & HoloBox Displays in the UAE | Skyron",
      description:
        "HoloBox, fan, pyramid, mesh and volumetric hologram displays with content made in-house, for events, retail and experience centres in Dubai and the Middle East.",
    },
    h1: "Hologram and HoloBox displays in Dubai and the UAE",
    intro: [
      "Among hologram companies in the UAE, Skyron is the one that makes the content as well as the hologram. We design hologram experiences for events, retail, lobbies and experience centres across Dubai and the Middle East, and handle the three things that decide whether a hologram works: the right display for the room, content made for that display, and setup on site. What you see on the day matches what was promised in the pitch.",
      "Our content creation team produces the 3D models, filmed presenters, AI avatars and animations that play on every hologram we deliver.",
    ],
    banner: {
      images: [
        "/assets/banners/hologram-holobox-volumetric-display/1.webp",
        "/assets/banners/hologram-holobox-volumetric-display/2.webp",
      ],
    },
    hub: {
      title: "Holograms and HoloBox",
      text: "HoloBox, fan, pyramid, tube, mesh and volumetric LED, with the content to match.",
      linkLabel: "Hologram displays",
    },
    sections: [
      {
        type: "cards",
        heading: "Hologram display formats, and when each one works",
        intro: [
          "\"Hologram\" covers several technologies. Viewing distance, ambient light and audience size decide which one fits.",
        ],
        cards: [
          {
            title: "HoloBox",
            body: "A life-size booth that shows a person, product or AI avatar as if they're standing inside it.",
            details: [
              { label: "Best for", text: "presenters, product launches, lobbies and showrooms." },
              { label: "Avoid if", text: "it will sit in direct sunlight." },
            ],
            image: "/assets/cards/holobox/1.webp",
          },
          {
            title: "Fan hologram",
            body: "Spinning LED blades that make images appear to float in the air. Can be linked into larger walls.",
            details: [
              { label: "Best for", text: "logos, loops and retail displays." },
              { label: "Avoid if", text: "viewers stand very close or at sharp angles." },
            ],
            image: "/assets/cards/fan-hologram/1.webp",
          },
          {
            title: "Pyramid hologram",
            body: "A glass pyramid showing a floating 3D object, visible from up to 270°.",
            details: [
              { label: "Best for", text: "one hero product on a counter or plinth." },
              { label: "Avoid if", text: "a crowd needs to see it at once." },
            ],
            image: "/assets/cards/pyramid-hologram/1.webp",
          },
          {
            title: "Holographic tube",
            body: "A 360° cylinder with a product or figure floating inside.",
            details: [{ label: "Best for", text: "retail counters, lobbies and showroom centrepieces." }],
            image: "/assets/cards/holographic-tube/1.webp",
          },
          {
            title: "Mesh hologram",
            body: "A near-invisible stage mesh that makes projected performers and objects appear to float.",
            details: [
              { label: "Best for", text: "stage shows, keynotes and large audiences." },
              { label: "Avoid if", text: "you can't control the lighting." },
            ],
            image: "/assets/cards/mesh-hologram/1.webp",
          },
          {
            title: "3D volumetric LED",
            body: "LED systems that show imagery with real depth, viewable from many angles.",
            details: [{ label: "Best for", text: "centrepieces in experience centres and flagship stores." }],
            image: "/assets/cards/3d-volumetric-led/1.webp",
          },
        ],
        table: {
          columns: ["Format", "Audience", "Viewing distance", "Light", "Typical use"],
          rows: [
            ["HoloBox", "Small groups", "1–5 m", "Indoor", "Presenters, launches"],
            ["Fan", "Passers-by", "2–10 m", "Indoor, low light best", "Logos, retail"],
            ["Pyramid", "1–3 people", "Under 1.5 m", "Indoor", "Single product"],
            ["Tube", "Small groups", "1–3 m", "Indoor", "Product centrepiece"],
            ["Mesh", "Large audience", "5 m+", "Dark, controlled", "Stage shows"],
            ["Volumetric LED", "Groups", "1–8 m", "Indoor", "Experience centres"],
          ],
          caption: "Distances are general guidance. We confirm them for your room during the site check.",
        },
      },
      {
        type: "prose",
        heading: "The content is what makes a hologram work",
        paragraphs: [
          "A hologram is only as good as what plays on it. Content has to be built for black backgrounds, the display's resolution and the viewing angle. We produce it in-house: 3D product models, filmed presenters on a black set, AI avatars and animated logos.",
        ],
      },
      {
        type: "list",
        heading: "HoloBox rental or purchase in the UAE",
        variant: "tiles",
        items: [
          "**Rent** for one-off events, launches and exhibitions: hardware, content, setup and an on-site operator for the event period.",
          "**Buy** for permanent use in lobbies, showrooms and experience centres: we supply, install, train your team and update content.",
        ],
        outro: ["We'll recommend the right option and give an indicative budget within two working days."],
        link: { label: "HoloBox: rent or buy?", href: PATHS.postHoloboxRentVsBuy },
      },
      {
        type: "steps",
        heading: "How a hologram project runs",
        steps: [
          "Brief and site check (light, space, power, viewing positions)",
          "Format recommendation and content concept",
          "Content production (filming, 3D or avatar)",
          "Testing on the actual display",
          "Delivery, installation and on-site support",
        ],
      },
      {
        type: "faq",
        heading: "Questions",
        items: [
          {
            question: "Can people walk around it?",
            answer:
              "Pyramids, tubes and volumetric LED can be viewed from several sides. HoloBox, fan and mesh are viewed from the front.",
          },
          {
            question: "Can it be interactive?",
            answer: "Yes. HoloBox presenters can respond to touch screens, sensors or AI conversation.",
          },
          {
            question: "Can you show a real person live?",
            answer: "Yes. A presenter can be filmed elsewhere and streamed into a HoloBox in real time.",
          },
        ],
      },
    ],
    related: [PATHS.events, PATHS.experienceCentres, PATHS.threeD],
    cta: {
      heading: "Planning a hologram moment?",
      text: "Tell us the room, the date and what should appear. We reply within two working days.",
      button: BRIEF,
    },
  },
  {
    slug: "ar-vr-xr-immersive-technologies",
    navLabel: "AR, VR & XR",
    seo: {
      title: "AR, VR & XR Experiences in Dubai | Skyron",
      description:
        "AR, VR and XR experiences from Dubai: VR training, car and product configurators, virtual property tours and exhibition experiences built for public venues.",
    },
    h1: "AR, VR and XR experiences built for real venues",
    intro: [
      "Skyron is one of the AR and VR companies in Dubai that builds for public venues, not just the studio. We create augmented, virtual and mixed reality experiences for brands, developers, trainers and experience centres across the Middle East, and design for the realities of the venue: queues, hygiene, battery life, staff changes and heavy use. The experience works on day 30 of an activation the same way it did on day one.",
      "We create the 3D content, environments and storytelling in-house, so every AR, VR and XR experience looks and feels right.",
    ],
    banner: { images: ["/assets/banners/ar-vr-xr-immersive-technologies/1.webp"] },
    hub: {
      title: "AR, VR and XR",
      text: "Configurators, training simulations and virtual tours built for public venues.",
      linkLabel: "AR and VR",
    },
    sections: [
      {
        type: "list",
        heading: "AR, VR or XR: which one?",
        variant: "tiles",
        items: [
          "**AR (augmented reality):** digital objects placed in the real world through a phone, tablet or glasses. Best when people should stay aware of their surroundings, such as placing furniture in a room or seeing a building on its empty plot.",
          "**VR (virtual reality):** a fully virtual world in a headset. Best for training, places that don't exist yet, and experiences that need full focus.",
          "**XR / mixed reality:** digital and physical combined. Best for hands-on training and exhibits that mix real objects with virtual layers.",
        ],
      },
      {
        type: "cards",
        heading: "AR and VR experiences we build",
        cards: [
          {
            title: "VR car and product configurators",
            body: "Customers explore and customise a vehicle or product at full scale, for showrooms and launches.",
            image: "/assets/cards/vr-car-configurator/1.webp",
          },
          {
            title: "VR industrial and safety training",
            body: "Realistic simulations for high-risk or expensive tasks, so people can practise safely and repeat.",
            image: "/assets/cards/vr-industrial-training/1.webp",
          },
          {
            title: "AR product and furniture configurators",
            body: "Place products in a real room at true scale from a phone.",
            image: "/assets/cards/ar-furniture-configurator/1.webp",
          },
          {
            title: "Virtual property tours and masterplans",
            body: "Walk through a home or district before it's built, for sales galleries and roadshows.",
            image: "/assets/cards/architectural-visualization-walkthroughs/1.webp",
          },
          {
            title: "VR and AR for exhibitions",
            body: "Short, high-throughput experiences for GITEX, LEAP and other trade shows.",
            image: "/assets/banners/ar-vr-xr-immersive-technologies/1.webp",
          },
          {
            title: "AR for print, packaging and outdoor",
            body: "Scan a poster, pack or billboard to unlock 3D content.",
            image: "/assets/cards/ar-mixed-reality-interaction/1.webp",
          },
        ],
      },
      {
        type: "list",
        heading: "Built for public use",
        items: [
          "3–5 minute experiences designed for steady queues",
          "Hygiene covers and cleaning routines for headsets",
          "Charging and spare-device rotation planned for full event days",
          "Simple start screens that staff can learn in 10 minutes",
          "Content that also plays on a screen for the people waiting",
        ],
      },
    ],
    related: [PATHS.threeD, PATHS.experienceCentres, PATHS.interactive],
    cta: {
      heading: "Have something people should step into?",
      text: "Tell us the audience, venue and goal. We reply within two working days.",
      button: BRIEF,
    },
  },
  {
    slug: "interactive-technologies",
    navLabel: "Interactive Technologies",
    seo: {
      title: "Interactive Installations in Dubai & Middle East | Skyron",
      description:
        "Touch tables, gesture walls and interactive floors, with interactive content created in-house, for museums, experience centres and brands in the Middle East.",
    },
    h1: "Interactive installations that respond to people",
    intro: [
      "We build interactive installations in Dubai and across the Middle East: touch tables, gesture walls, interactive floors and sensor-driven exhibits for museums, experience centres, retail and events. We develop the sensing and the software together, so the interaction feels instant and reliable on day 300, not just in the demo.",
      "We also create the interactive content in-house: 2D and 3D animation, real-time graphics and generative visuals designed for touch and movement.",
    ],
    banner: {
      images: [
        "/assets/banners/interactive-technologies/1.webp",
        "/assets/banners/interactive-technologies/2.webp",
        "/assets/banners/interactive-technologies/3.webp",
      ],
    },
    hub: {
      title: "Interactive technologies",
      text: "Touch, gesture, sensor and voice-driven installations.",
      linkLabel: "Interactive installations",
    },
    sections: [
      {
        type: "split",
        heading: "Touch screens, tables and interactive walls",
        paragraphs: ["Touch kiosks, multi-touch tables, interactive LED walls and large touch displays."],
        details: [{ label: "Used for", text: "interactive masterplans, product explorers, wayfinding and visitor information." }],
        image: "/assets/cards/touch-display-interaction/1.webp",
      },
      {
        type: "split",
        heading: "Movement, gesture and presence",
        paragraphs: ["Depth cameras, body and hand tracking, touchless gesture control and proximity triggers."],
        details: [
          {
            label: "Used for",
            text: "games in malls, museum exhibits, touch-free kiosks, and content that wakes up as people approach.",
          },
        ],
        image: "/assets/cards/gesture-motion-spatial-interaction/1.webp",
      },
      {
        type: "split",
        heading: "Interactive floor and wall projection",
        paragraphs: ["Projection on walls, floors, tables and objects that reacts to touch and movement."],
        details: [{ label: "Used for", text: "children's zones, immersive rooms and product demos on scale models." }],
        image: "/assets/cards/interactive-projection-systems/1.webp",
      },
      {
        type: "split",
        heading: "Objects, data and voice",
        paragraphs: [
          "Physical dials, buttons and RFID/NFC tokens; live data visualisation; adaptive and AI-driven content; voice interfaces; QR and app-based control; haptic feedback.",
        ],
        details: [{ label: "Used for", text: "hands-on exhibits, data walls and multilingual guides." }],
        image: "/assets/cards/tangible-object-based-interaction/1.webp",
      },
      {
        type: "split",
        heading: "Multi-user and group interaction",
        paragraphs: ["Walls and tables where several people interact at once."],
        details: [{ label: "Used for", text: "collaborative planning tables, school groups and VIP briefings." }],
        image: "/assets/cards/multi-user-collaborative-interaction/1.webp",
      },
      {
        type: "prose",
        heading: "Built to survive the public",
        paragraphs: [
          "Public installations get used hard. We plan for hygiene, fingerprints, sunlight, accessibility, staff turnover and recovery after power cuts. Content can be updated from a simple dashboard.",
        ],
      },
    ],
    related: [PATHS.projectionMapping, PATHS.experienceCentres, PATHS.arVr],
    cta: {
      heading: "Want visitors to touch, move and play?",
      text: "Tell us about the space and audience. We reply within two working days.",
      button: BRIEF,
    },
  },
  {
    slug: "events-exhibitions-brand-activations",
    navLabel: "Events & Brand Activations",
    seo: {
      title: "Brand Activation & Exhibition Technology Dubai | Skyron",
      description:
        "Technology for brand activations, launches and exhibition stands in Dubai, Riyadh and Doha: holograms, projection, LED and interactive, run as one system.",
    },
    h1: "Brand activation and exhibition technology in Dubai and the Middle East",
    intro: [
      "Skyron works alongside brand activation agencies and brands in Dubai, Riyadh and Doha as the technology and content partner. We plan the technology for launches, exhibition stands and pop-ups around the footfall, the floor plan and the few seconds you have someone's attention. Then we bring content, hardware and staging together as one system rather than a pile of separate vendors.",
      "We also create the content in-house, from stage visuals and 3D animation to AI and live-action films, so every screen at your event tells the same story.",
    ],
    banner: {
      images: [
        "/assets/banners/events-exhibitions-brand-activations/1.webp",
        "/assets/banners/events-exhibitions-brand-activations/2.webp",
      ],
    },
    hub: {
      title: "Events, exhibitions and brand activations",
      text: "Technology for launches, stands and pop-ups.",
      linkLabel: "Brand activations",
    },
    sections: [
      {
        type: "cards",
        heading: "What we deliver for events and activations",
        cards: [
          {
            title: "Live events and launches",
            body: "Stage visuals and screen content, product reveals with holograms or projection, real-time interactive visuals, and audience-responsive content for launches and ceremonies.",
            image: "/assets/cards/stage-event-projection-mapping/1.webp",
          },
          {
            title: "Exhibitions and trade shows",
            body: "Interactive stand installations, immersive brand zones and pavilions, touchless and sensor-based interaction, and digital scenography that draws visitors in from the aisle.",
            image: "/assets/banners/events-exhibitions-brand-activations/1.webp",
          },
          {
            title: "Brand activations and pop-ups",
            body: "Interactive brand installations, mall and roadshow pop-ups, transparent LED and HoloBox reveals, and AR experiences people share.",
            image: "/assets/cards/brand-activations-experiential-marketing/1.webp",
          },
        ],
      },
      {
        type: "prose",
        heading: "Exhibition stand and activation ideas around the regional calendar",
        paragraphs: [
          `We plan around the dates that matter in the region: GITEX and Dubai Design Week in Dubai, LEAP and Riyadh Season in [Saudi Arabia](${PATHS.saudiArabia}), Ramadan and Eid campaigns, UAE National Day (2 December), Saudi Founding Day (22 February) and Saudi National Day (23 September). Bring us in 8–12 weeks before the date.`,
        ],
      },
      {
        type: "prose",
        heading: "Why one team matters on event day",
        paragraphs: [
          "The stand opens at 10:00 and nothing can fail. When the same team made the content and integrated the hardware, there's one person to call, and they already know the system.",
        ],
      },
      {
        type: "faq",
        heading: "Questions",
        items: [
          {
            question: "Do you build the stand itself?",
            answer: "We deliver the technology and content layer and work with your stand builder or ours.",
          },
          {
            question: "Can you supply hardware for a short event?",
            answer: "Yes, we arrange the hardware for the event period.",
          },
        ],
      },
    ],
    related: [PATHS.holograms, PATHS.interactive, PATHS.anamorphic],
    cta: {
      heading: "Have an event date?",
      text: "Send the date, venue and stand size. We reply within two working days.",
      button: BRIEF,
    },
  },
];

export const TECHNOLOGY_SOLUTIONS_ITEMS = ALL_ITEMS.filter((item) => item.live !== false || SHOW_DRAFTS);

export function getTechnologySolutionsItem(slug: string): SolutionItem | undefined {
  return TECHNOLOGY_SOLUTIONS_ITEMS.find((item) => item.slug === slug);
}
