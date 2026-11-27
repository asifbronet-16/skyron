import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Blocks from "@/components/content/Blocks";
import TrustedBySection from "@/components/home/TrustedBySection";
import { CASE_STUDIES_LIVE } from "@/constants/caseStudies";
import { PATHS } from "@/constants/paths";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Client Work & Concept Studies | Skyron",
  description:
    "Client work and concept studies from Skyron: content creation, projection mapping, holograms and experience centres across the Middle East.",
  path: PATHS.caseStudies,
  // Out of search (and the menu and sitemap) until the page has 2 real entries.
  noindex: !CASE_STUDIES_LIVE,
});

// Each study gets 3–4 frames from Skyron's own renders, labelled
// "Concept render", once they're supplied.
const SECTIONS = [
  {
    type: "cards",
    heading: "Concept studies",
    cards: [
      {
        title: "Concept study: an experience centre vision gallery for a government entity",
        details: [
          {
            label: "The question",
            text: "how to explain a 20-year national plan to ministers and the public in a 15-minute walk-through.",
          },
          {
            label: "Our approach",
            text: "a five-zone visitor journey, from today's challenge to the future city, using a projection-mapped city model, an LED wall and a hologram guide.",
          },
        ],
      },
      {
        title: "Concept study: a projection-mapped masterplan model for a sales gallery",
        details: [
          {
            label: "The question",
            text: "how to show buyers phases, roads and amenities that don't exist yet on one physical model.",
          },
          {
            label: "Our approach",
            text: "a 4-minute looping show mapped onto the model, with each phase lighting up in turn and a touch screen to jump between them.",
          },
        ],
      },
      {
        title: "Concept study: a corner LED anamorphic billboard for a Dubai mall launch",
        details: [
          {
            label: "The question",
            text: "how to make a product launch stop traffic on a corner screen in 15 seconds.",
          },
          {
            label: "Our approach",
            text: "the product breaks out of the screen's corner \"box\" from the main pedestrian viewing point, with a clean brand end frame for other angles.",
          },
        ],
      },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="relative">
      <Navbar active="Case Studies" />

      <section className="relative overflow-hidden bg-[#08060f] px-6 pt-24 pb-8 sm:pt-44 sm:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-60 top-[10%] h-130 w-130 rounded-full bg-[#FF2D78] opacity-20 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-55 bottom-0 h-130 w-130 rounded-full bg-[#31417D] opacity-30 blur-[100px]"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionHeading as="h1" lead="Client work and" accent="concept studies" align="center" inline />
          </Reveal>

          <Reveal as="p" delay={100} className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            Here are projects for our clients, shared with their permission, alongside concept
            studies that show how we think through a space before it&apos;s built. Concept studies
            are clearly labelled and use our own renders.
          </Reveal>

          <Reveal as="p" delay={200} className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            Each project shows our two strengths together: content creation and creative
            storytelling, and the technology that brings it into the space.
          </Reveal>
        </div>
      </section>

      <TrustedBySection marquee />

      <Blocks blocks={SECTIONS} />

      <CtaBanner
        heading="Want to see what we'd do with your space?"
        text="Ask us for a concept render. We reply within two working days."
        button={{ label: "Request a concept render", href: PATHS.brief }}
      />
      <Footer />
    </main>
  );
}
