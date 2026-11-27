import Image from "next/image";
import { altFor } from "@/constants/imageAlt";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import FaqSection from "@/components/home/FaqSection";
import CapabilityCard from "@/components/home/CapabilityCard";
import {
  SearchIcon,
  LightbulbIcon,
  BlueprintIcon,
  GearIcon,
  RocketIcon,
  ShieldCheckIcon,
} from "@/components/home/CapabilityIcons";
import Reveal from "@/components/Reveal";
import { PATHS } from "@/constants/paths";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How We Work | Experience Design Process | Skyron",
  description:
    "Our six-step process for immersive experiences: discovery, concept, design, production, installation and support. Most activations take 6–12 weeks.",
  path: PATHS.ourApproach,
});

const STEPS = [
  {
    icon: SearchIcon,
    image: "/assets/cards/our-approach/1.webp",
    accent: "violet",
    title: "1. Discovery",
    description:
      "We listen, visit the site or study the drawings, and meet the people who'll use the space. We agree on audience, key messages, constraints and how success will be measured.",
  },
  {
    icon: LightbulbIcon,
    image: "/assets/cards/our-approach/2.webp",
    accent: "teal",
    title: "2. Concept development",
    description:
      "We define the story, the visitor flow and the technology direction, check feasibility and cost, and present a clear concept with renders and a roadmap.",
  },
  {
    icon: BlueprintIcon,
    image: "/assets/cards/our-approach/3.webp",
    accent: "rose",
    title: "3. Design and experience architecture",
    description:
      "Concepts become detailed designs: interaction logic, visual language, equipment lists and system diagrams. We prototype and pre-visualise before production, so problems show up on screen, not on site.",
  },
  {
    icon: GearIcon,
    image: "/assets/cards/our-approach/4.webp",
    accent: "violet",
    title: "4. Production and integration",
    description:
      "Our team produces the content, builds the software and integrates the hardware, with reviews and demos at set checkpoints.",
  },
  {
    icon: RocketIcon,
    image: "/assets/cards/our-approach/5.webp",
    accent: "teal",
    title: "5. Installation and launch",
    description:
      "We install, calibrate and test on site, rehearse with real scenarios, and hand over with documentation and operator training.",
  },
  {
    icon: ShieldCheckIcon,
    image: "/assets/cards/our-approach/6.webp",
    accent: "rose",
    title: "6. Support after launch",
    description:
      "We stay on for run-of-show support, content refreshes and changes as the experience evolves.",
  },
];

const PRINCIPLES = [
  {
    title: "Collaboration first",
    description: "You're in the room for every major decision: concept reviews, technical walkthroughs and on-site rehearsals.",
  },
  {
    title: "Iterative by design",
    description: "We prototype early and test on real hardware fast, so surprises show up in a rehearsal, not on opening night.",
  },
  {
    title: "One accountable team",
    description: "Creative, technical and production sit under one roof, with no vendor hand-offs and no lost context between teams.",
  },
  {
    title: "Built to scale",
    description: "Every system is designed with the next activation in mind, so what we build together keeps paying off.",
  },
];

const APPROACH_FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most activations take 6–12 weeks from signed brief to opening night, depending on scale and fabrication lead times. Permanent experience centres take longer. You'll get a realistic timeline from the discovery stage, not an optimistic one.",
  },
  {
    question: "Do you work with our internal marketing or ops team?",
    answer:
      "Yes. We work as part of your team rather than at arm's length. You're in the room for concept reviews, technical walkthroughs and on-site rehearsals.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay on for run-of-show support, content refreshes and changes as the experience evolves. Launch day is the start of the relationship, not the end of the project.",
  },
  {
    question: "Can you take over a project that's already underway?",
    answer:
      "Sometimes. It depends on what's already been locked in. Send us where things stand and we'll tell you honestly whether we can add value.",
  },
  {
    question: "How do you handle scope changes mid-project?",
    answer:
      "Every stage ends with a sign-off, so changes are scoped and priced before they touch the timeline. No surprise invoices at the end.",
  },
];

export default function OurApproachPage() {
  return (
    <main className="relative overflow-hidden">
      {/* glows are scoped to this wrapper (hero → CtaBanner) so bottom-0 lands on
          CtaBanner's opaque, full-bleed background instead of bleeding past Footer's
          narrower, centered container into the page's side gutters */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-60 top-[10%] h-130 w-130 rounded-full bg-[#FF2D78] opacity-35 blur-[100px] z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-35 bottom-0 h-130 w-130 rounded-full bg-[#31417D] opacity-80 z-10 blur-[100px]"
        />

        <Navbar active="Our Story" />

        <section className="relative flex min-h-screen items-center overflow-hidden px-6 -mt-10 lg:mt-16 py-28 pb-16 sm:min-h-[85vh] sm:pt-40 sm:pb-32">
          <Image
            src="/assets/banners/our-approach/1.webp"
            alt={altFor("/assets/banners/our-approach/1.webp")}
            fill
            preload
            sizes="100vw"
            className="-z-10 object-cover"
          />

          {/* eased top/bottom falloff so the image melts into the sections around it */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#08060f_0%,rgba(8,6,15,0.9)_6%,rgba(8,6,15,0.6)_14%,rgba(8,6,15,0.25)_24%,transparent_38%,transparent_62%,rgba(8,6,15,0.25)_76%,rgba(8,6,15,0.6)_86%,rgba(8,6,15,0.9)_94%,#08060f_100%)]"
          />

          {/* left-edge scrim so the copy sits on a dark, readable field and the photo
              stays visible on the right — heavier on mobile, where the text runs wider */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10
            bg-[linear-gradient(to_right,rgba(8,6,15,0.92)_0%,rgba(8,6,15,0.82)_45%,rgba(8,6,15,0.55)_75%,rgba(8,6,15,0.3)_100%)]
            sm:bg-[linear-gradient(to_right,#08060f_0%,rgba(8,6,15,0.9)_18%,rgba(8,6,15,0.7)_38%,rgba(8,6,15,0.35)_56%,transparent_78%)]"
          />

          <div className="relative mx-auto w-full max-w-7xl text-left">
            <div className="max-w-2xl">
              <Reveal className="flex items-center gap-4">
                <span className="h-0.5 w-16 bg-linear-to-r from-[#5f30ca] to-[#317890]" />
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#a996f0]">
                  Our approach
                </span>
              </Reveal>

              <Reveal delay={100}>
                <SectionHeading as="h1" lead="We begin with understanding," accent="not execution" className="mt-6" />
              </Reveal>

              <Reveal as="div" delay={200} className="mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-white/70 sm:text-base">
                <p>
                  Every Skyron project starts by looking closely at four things: the purpose of the
                  space, the people it&apos;s for, the message it has to carry and the response it
                  should create.
                </p>
                <p>
                  Content creation runs through every stage: we write, design and produce the content
                  in-house, so the story and the technology are built together.
                </p>
                <p>
                  From there, we shape the journey: how the audience enters the experience, how the
                  story unfolds, where moments of interaction happen, and how content moves through the
                  space with clarity and impact. Only after that do we choose the media, systems and
                  technologies to support it.
                </p>
                <p>
                  This is what lets our work feel coherent rather than crowded, thoughtful rather than
                  decorative, and tailored rather than interchangeable.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="relative bg-[#08060f]">
          <section className="relative overflow-hidden bg-[#08060f] px-6 pt-8 pb-8 sm:pt-20 sm:pb-28">
            <div className="relative mx-auto max-w-6xl">
              <Reveal>
                <SectionHeading
                  text="Our experience design process"
                  inline
                  align="center"
                  size="md"
                  accentClassName="from-violet-500 via-fuchsia-500 to-pink-500"
                />
              </Reveal>

              <div className="mt-8 sm:mt-14 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {STEPS.map((step, i) => (
                  <Reveal key={step.title} delay={Math.min(i, 5) * 90} distance={28} className="h-full">
                    <CapabilityCard {...step} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <FeatureGrid
            heading="Principles we don't bend on"
            subtitle="The process only works if the team behind it holds to the same standards on every project."
            cards={PRINCIPLES}
            className="pt-0 sm:pt-0"
          />
          <FaqSection items={APPROACH_FAQS} />
        </div>

      <CtaBanner
        heading="Ready to start with discovery?"
        text="Send your brief and we'll reply within two working days."
      />
      </div>
      <Footer />
    </main>
  );
}
