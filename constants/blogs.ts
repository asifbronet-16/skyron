/**
 * Insights (/blogs): every approved post, published or not.
 *
 * A post goes live when its `date` is set to the real publish date. The
 * first published post switches on everything else: the post cards on
 * /blogs, "Insights" in the menu and footer, /blogs in the sitemap, and
 * search indexing of /blogs. Until then a /blogs/<slug> URL is a plain 404.
 * (Under `npm run dev`, drafts show too; see constants/drafts.ts.)
 *
 * Copy is the approved text from Skyron-Website-Content-FINAL, word for word.
 * The handoff's schedule: the projection mapping post in week 5, the HoloBox
 * post in week 6.
 */
import { SHOW_DRAFTS } from "./drafts";
import { PATHS } from "./paths";
import type { BlogPost } from "./types";

const BRIEF = { label: "Send us your brief", href: PATHS.brief };

const ALL_POSTS: BlogPost[] = [
  {
    slug: "projection-mapping-cost-uae-gcc",
    tag: "Projection mapping",
    title: "Projection mapping cost in the UAE and Middle East: what sets the price",
    excerpt:
      "What projection mapping costs in Dubai and the Middle East, the six things that set the price, and how to get more show for your budget.",
    date: null,
    readTime: "7 min read",
    seo: {
      // The copy deck's title is missing its "|"; corrected here.
      title: "Projection Mapping Cost in the UAE & Middle East | Skyron",
      description:
        "What projection mapping costs in Dubai and the Middle East: the 6 things that set the price, budget tiers in AED, and how to get more show for less.",
    },
    h1: "Projection mapping cost in the UAE and Middle East: what sets the price",
    author: { name: "Skyron team" },
    body: [
      {
        p: `"How much does projection mapping cost?" is the first question most clients ask, and the honest answer is that it depends on six things. This guide explains each one, gives budget tiers for projects in Dubai, Riyadh and Doha, and shows where you can save without hurting the show. If you'd like a figure for your own project, our [projection mapping team in Dubai](${PATHS.projectionMapping}) can give you an indicative budget within two working days.`,
      },
      { p: "At Skyron, content creation is done in-house, so the content and the technology are quoted together." },
      { h2: "The short answer" },
      {
        p: "Projection mapping cost in the UAE ranges from a modest indoor product projection to a multi-night landmark show that needs a projector tower. The biggest cost drivers are the size and brightness of the surface, the length of custom content, and how many nights it runs.",
      },
      { h2: "Projection mapping price: budget tiers in the Middle East" },
      {
        table: {
          columns: ["Project type", "Typical scope", "Budget level"],
          rows: [
            ["Object or product mapping (indoor)", "One product, car or sculpture; 1–2 projectors; 1–3 min content", "Lower"],
            ["Scale model mapping (sales gallery)", "Masterplan model; 2–4 projectors; 3–5 min content; permanent", "Low to medium"],
            ["Interior or stage mapping", "Room, stage or set; 4–10 projectors; 5–10 min content", "Medium"],
            ["Building facade (one night)", "Mid-size facade; 6–16 high-brightness projectors; 5–8 min show", "Medium to high"],
            ["Landmark or multi-night show", "Large facade or tower; 16+ projectors; towers; several nights", "Highest"],
          ],
          caption:
            "Indicative ranges for projects in Dubai and the Middle East, including content, hardware hire and installation. Permits and venue fees are extra. Ask us for a quote in AED for your project.",
        },
      },
      { h2: "The 6 things that set projection mapping cost" },
      { h3: "1. Surface size and ambient light" },
      {
        p: "Bigger surfaces need more projectors, and brighter surroundings need stronger ones. Dubai's city light is a real factor: a facade next to illuminated towers needs far more brightness than one in a dark heritage setting. Projector brightness is the single biggest hardware cost.",
      },
      { h3: "2. Length of custom content" },
      {
        p: "Custom content is usually the biggest creative cost. Every minute is modelled, animated and rendered to the exact shape of the surface. A 3-minute show and an 8-minute show can differ in cost more than any hardware choice.",
      },
      { h3: "3. Number of nights, or permanent" },
      {
        p: "For one-off shows, projectors, media servers and towers are hired, so each extra night adds hire, crew and security. For permanent installations, such as experience centres and sales galleries, hardware is bought, and the cost per year falls the longer it runs.",
      },
      { h3: "4. Complexity of the show" },
      {
        p: "3D illusions that make a building appear to crumble, interactive elements, live cameras or synchronised lasers, water screens and drones all add production and programming time.",
      },
      { h3: "5. Site logistics" },
      {
        p: "Projector towers or scaffolding, generators if the site has no power, weather protection, overnight security and the crew to rig and align, usually at night.",
      },
      { h3: "6. Approvals" },
      {
        p: "Outdoor shows in Dubai, Abu Dhabi, Riyadh and Doha usually need approval from the building owner and the relevant authorities. Approvals affect the timeline more than the budget, but some venues charge fees.",
      },
      { h2: "Projection mapping setup cost: what's included" },
      { p: "A typical quote covers:" },
      {
        ul: [
          "Site survey and 3D model of the surface",
          "Concept, storyboard and previs",
          "Content production and sound",
          "Projectors, lenses, media servers and cabling (hire or purchase)",
          "Rigging, towers and power",
          "Installation, alignment and testing",
          "Crew on show nights",
          "Show control and operation",
        ],
      },
      { p: "Ask any supplier to show these as separate lines, so you can compare quotes properly." },
      { h3: "Projection mapping projector cost" },
      {
        p: "Projectors are rated in lumens (brightness). Facade shows typically use high-brightness laser projectors, often several stacked together. Hiring them for a few nights usually makes more sense than buying, unless the installation is permanent.",
      },
      { h2: "5 ways to get more show for your budget" },
      {
        ol: [
          "**Choose the surface wisely.** A smaller, darker, well-shaped facade often looks better than a huge bright one.",
          "**Shorten the show.** A tight 4-minute loop is often stronger than a 10-minute one, and much cheaper.",
          "**Reuse content.** Plan cut-downs for social media, LED screens and other venues from the start.",
          "**Book early.** Hardware is in high demand around National Day, Founding Day and Ramadan. Booking 8–12 weeks ahead gives you better options.",
          "**Combine nights.** If the show runs during a festival, more nights spread the content cost.",
        ],
      },
      { h2: "Building projection cost: two example scenarios" },
      { note: "Illustrative examples, not past projects." },
      { h3: "Example 1: a National Day facade in Dubai" },
      {
        p: "A 6-minute show on a 12-storey hotel facade for one night, with high-brightness projectors on a temporary tower across the road. Main costs: content and projector hire.",
      },
      { h3: "Example 2: a sales gallery model in Riyadh" },
      {
        p: "A 4-minute looping show on a 4 × 3 m masterplan model, permanent, with 4 projectors bought outright. Main costs: content and hardware purchase, with low running costs afterwards.",
      },
      { h2: "How to get an accurate quote" },
      { p: "Send us:" },
      {
        ul: [
          "Photos of the surface and its surroundings at night",
          "Rough dimensions",
          "The date and the number of nights",
          "Your ideal show length",
          "Where the audience will stand",
        ],
      },
      { p: "With that, we can return an indicative budget within two working days." },
      { button: BRIEF },
    ],
    relatedReading: [
      { label: "How projection mapping works", href: PATHS.projectionMapping },
      { label: "Planning projection mapping for Ramadan and Founding Day", href: "/blogs/projection-mapping-ramadan-founding-day" },
      { label: "Experience centres", href: PATHS.experienceCentres },
    ],
    related: [PATHS.projectionMapping, PATHS.experienceCentres, PATHS.anamorphic],
  },
  {
    slug: "holobox-rent-vs-buy-uae",
    tag: "Holograms",
    title: "HoloBox price in the UAE: should you rent or buy?",
    excerpt:
      "What renting and buying a HoloBox include, what each costs, and which makes sense for events, showrooms and experience centres.",
    date: null,
    readTime: "6 min read",
    seo: {
      title: "HoloBox Price in the UAE: Rent or Buy? | Skyron",
      description:
        "HoloBox rental vs purchase in Dubai and the UAE: what each costs, what's included, and which makes sense for events, showrooms and experience centres.",
    },
    h1: "HoloBox price in the UAE: should you rent or buy?",
    author: { name: "Skyron team" },
    body: [
      {
        p: `A HoloBox makes a person, product or avatar appear life-size inside a glowing booth, and it stops people in their tracks at launches, lobbies and exhibitions. The first practical question is usually about HoloBox price, and the second is whether to rent or buy. This guide compares both options for Dubai and the UAE, so you can pick the one that fits. For a recommendation on your own project, see our [hologram and HoloBox displays](${PATHS.holograms}).`,
      },
      { p: "Skyron creates HoloBox content in-house, from filmed presenters to 3D products and AI avatars." },
      { h2: "What a HoloBox is (and isn't)" },
      {
        p: "A HoloBox is a booth-shaped display with a transparent screen and a lit interior. Content filmed or rendered on a black background appears to float inside it with real depth. It isn't a true hologram in the physics sense, but in a room it reads as one. Several manufacturers make similar units, in life-size, desktop and modular versions.",
      },
      { h2: "HoloBox price: renting vs buying at a glance" },
      {
        table: {
          columns: ["", "Rent", "Buy"],
          rows: [
            ["Best for", "Launches, exhibitions, one-off events", "Lobbies, showrooms, experience centres"],
            ["Typical period", "1–14 days", "3+ years"],
            ["Cost", "Quoted per day or per event", "Quoted per unit"],
            ["Includes", "Unit, delivery, setup, operator, removal", "Unit, installation, training, warranty"],
            ["Content", "Usually extra", "Usually extra"],
            ["Content updates", "Per event", "You, or us on a plan"],
          ],
          caption: "How hologram display costs compare in the UAE. Content production is quoted separately.",
        },
      },
      { h2: "When renting makes sense" },
      { p: "Rent a HoloBox when:" },
      {
        ul: [
          "it's for a single event, launch or exhibition",
          "you want to test the format before committing",
          "you need several units for a short period",
          "you don't have space or staff to store and run one",
        ],
      },
      {
        p: "**What hologram rental in Dubai usually includes:** delivery to the venue, setup and testing, an operator during opening hours, and removal afterwards. Check whether content loading, insurance and venue power are included.",
      },
      { h2: "When buying makes sense" },
      { p: "Buy when:" },
      {
        ul: [
          "it will run for more than a few months, for example in a lobby, showroom or experience centre",
          "you'll update the content regularly (new products, new messages, seasonal campaigns)",
          "you'd rent it for more than a handful of events a year",
        ],
      },
      { p: "Rough rule: if you would rent it for more than a few weeks a year, buying usually costs less over three years." },
      { h2: "The cost most people forget: content" },
      { p: "A HoloBox is only as good as what plays on it, and content is usually quoted separately. Options include:" },
      {
        ul: [
          "**Filmed presenter:** a person filmed on a black set, with careful lighting so they look solid in the box",
          "**3D product:** a model of the product, rendered for the box's angle and resolution",
          "**AI avatar:** a multilingual digital presenter, faster to update",
          "**Animated logo or loop:** the simplest and cheapest option",
        ],
      },
      { p: "Plan content into the budget from the start. A great box with weak content still looks weak." },
      { h2: "Other costs to check" },
      {
        ul: [
          "**Power and placement:** a standard socket, but the box needs space behind and around it",
          "**Lighting:** bright spotlights or sunlight on the screen ruin the effect, so plan where it stands",
          "**Shipping and handling:** HoloBoxes are large and fragile, and moving between venues costs extra",
          "**Software and remote updates:** some units include remote content management, some don't",
          "**Interactivity:** touch screens, sensors or live streaming add cost",
        ],
      },
      { h2: "HoloBox vs other hologram displays" },
      { p: "If budget or space is tight, another format may fit better:" },
      {
        ul: [
          "**Fan hologram:** cheaper and eye-catching for logos, but not life-size",
          "**Pyramid hologram:** for one small product on a counter",
          "**Mesh hologram:** for stage shows to large audiences",
        ],
      },
      { h2: "Questions" },
      { h3: "Can I rent a HoloBox for one day in Dubai?" },
      { p: "Usually yes, but the price per day falls for longer hires." },
      { h3: "Can the person in the HoloBox be live?" },
      {
        p: "Yes. A presenter can be filmed elsewhere and streamed into the box in real time, which needs a stable connection and a camera setup.",
      },
      { h3: "How long does content take?" },
      { p: "Simple loops take days; a filmed presenter or 3D product usually takes 1–3 weeks." },
      { h2: "Getting a HoloBox quote" },
      {
        p: "Tell us the venue, the dates (or permanent), and what should appear in the box. We'll recommend rent or buy and give an indicative budget within two working days.",
      },
      { button: BRIEF },
    ],
    relatedReading: [
      { label: "Projection mapping cost in the UAE and Middle East", href: PATHS.postProjectionMappingCost },
      { label: "Designing holograms that don't feel like gimmicks", href: "/blogs/holograms-that-dont-feel-like-gimmicks" },
      { label: "Brand activations", href: PATHS.events },
    ],
    related: [PATHS.holograms, PATHS.events, PATHS.experienceCentres],
  },
];

/** Posts shown on the site: published ones (plus drafts under `npm run dev`). */
export const BLOG_POSTS = ALL_POSTS.filter((post) => post.date !== null || SHOW_DRAFTS);

export const INSIGHTS_LIVE = BLOG_POSTS.length > 0;

/** The topic filters on /blogs, in the copy deck's order. */
export const INSIGHTS_TOPICS = [
  "Projection mapping",
  "Holograms",
  "3D billboards",
  "Experience centres",
  "AR/VR",
  "Content creation",
];

/**
 * Post slugs from the old WordPress site, which served posts at the root
 * (/anamorphic-billboard-frame-by-frame) and as dated permalinks. Google still
 * crawls them, so next.config.ts redirects them to /blogs.
 */
export const LEGACY_WORDPRESS_POST_SLUGS = [
  "anatomy-of-a-projection-mapping-show",
  "spatial-design-next-brand-battleground",
  "ai-content-meets-human-art-direction",
  "holograms-that-dont-feel-like-gimmicks",
  "anamorphic-billboard-frame-by-frame",
  "what-makes-an-experience-centre-work",
];
