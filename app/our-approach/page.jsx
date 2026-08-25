import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import FaqSection from "@/components/home/FaqSection";
import ServiceCard from "@/components/home/ServiceCard";

export const metadata = {
  title: "Our Approach — Skyron",
  description:
    "How Skyron takes an idea from first brief to opening night — discovery, design, build, and on-site delivery under one accountable team.",
};

const STEPS = [
  {
    number: "01",
    accent: "violet",
    title: "Discover",
    description:
      "We start with the audience and the space, not the tech. Objectives, venue constraints, and the story you need told shape the brief.",
  },
  {
    number: "02",
    accent: "cyan",
    title: "Design",
    description:
      "Concepts, storyboards, and spatial layouts come together so you can see and approve the experience long before anything is built.",
  },
  {
    number: "03",
    accent: "rose",
    title: "Develop",
    description:
      "Content, motion, and interactive systems are built in parallel with hardware and integration planning — one team, one timeline.",
  },
  {
    number: "04",
    accent: "purple",
    title: "Deliver",
    description:
      "On-site install, calibration, and rehearsal happen under the same team that designed it, so nothing gets lost in handoff.",
  },
  {
    number: "05",
    accent: "violet",
    title: "Support",
    description:
      "Launch day isn't the finish line. We stay on for run-of-show support, content refreshes, and iteration as the experience evolves.",
  },
];

const PRINCIPLES = [
  {
    title: "Collaboration First",
    description: "You're in the room for every major decision — concept reviews, tech walkthroughs, and on-site rehearsals included.",
  },
  {
    title: "Iterative by Design",
    description: "We prototype early and test on real hardware fast, so surprises show up in a rehearsal, not on opening night.",
  },
  {
    title: "One Accountable Team",
    description: "Creative, technical, and production sit under one roof — no vendor hand-offs, no dropped context between teams.",
  },
  {
    title: "Built to Scale",
    description: "Every system is designed with the next activation in mind, so what we build together keeps paying off.",
  },
];

const APPROACH_FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most activations run 6–12 weeks from signed brief to opening night, depending on scale and fabrication lead times. You'll get a realistic timeline out of the discovery stage, not an optimistic one.",
  },
  {
    question: "Do you work with our internal marketing or ops team?",
    answer:
      "Yes — we embed with your team rather than working at arm's length. You're in the room for concept reviews, tech walkthroughs, and on-site rehearsals.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay on for run-of-show support, content refreshes, and iteration as the experience evolves. Launch day is the start of the relationship, not the end of the project.",
  },
  {
    question: "Can you take over a project that's already underway?",
    answer:
      "Sometimes — it depends what's already been locked in. Send us where things stand and we'll tell you honestly whether we can add value.",
  },
  {
    question: "How do you handle scope changes mid-project?",
    answer:
      "Every stage ends with a sign-off, so changes get scoped and priced before they touch the timeline — no surprise invoices at the end.",
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

        <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden px-6 pt-32 pb-24 sm:min-h-[85vh] sm:pt-40 sm:pb-32">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          >
            <source src="/assets/OurStory/our-approach.mp4" type="video/mp4" />
          </video>

          {/* eased top/bottom falloff so the video melts into the sections around it */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#08060f_0%,rgba(8,6,15,0.9)_6%,rgba(8,6,15,0.6)_14%,rgba(8,6,15,0.25)_24%,transparent_38%,transparent_62%,rgba(8,6,15,0.25)_76%,rgba(8,6,15,0.6)_86%,rgba(8,6,15,0.9)_94%,#08060f_100%)]"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-0.5 w-16 bg-linear-to-r from-transparent via-[#5f30ca] to-[#317890]" />
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#a996f0]">
                Our Approach
              </span>
              <span className="h-0.5 w-16 bg-linear-to-r from-[#317890] via-[#5f30ca] to-transparent" />
            </div>

            <SectionHeading lead="How We Bring" accent="Ideas To Life" align="center" className="mt-6" />

            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              A five-stage process that keeps creative, technical, and on-site teams working from
              the same brief — from the first conversation to the moment the lights come up.
            </p>
          </div>
        </section>

        <div className="relative bg-[#08060f]">
          <section className="relative overflow-hidden bg-[#08060f] px-6 pt-16 pb-20 sm:pt-20 sm:pb-28">
            <div className="relative mx-auto max-w-6xl">
              <SectionHeading
                lead="Our"
                accent="Process"
                inline
                align="center"
                accentClassName="from-violet-500 via-fuchsia-500 to-pink-500"
              />

              <div className="mt-14 grid items-stretch gap-10 sm:grid-cols-2 xl:grid-cols-4">
                {STEPS.map((step) => (
                  <ServiceCard
                    key={step.number}
                    {...step}
                    className="justify-center py-8"
                  />
                ))}
              </div>
            </div>
          </section>

          <FeatureGrid
            lead="Principles We"
            accent="Don't Bend On"
            subtitle="The process only works if the team behind it holds to the same standards on every project."
            cards={PRINCIPLES}
            className="pt-0 sm:pt-0"
          />
          <FaqSection items={APPROACH_FAQS} />
        </div>

      <CtaBanner />
      </div>
      <Footer />
    </main>
  );
}
