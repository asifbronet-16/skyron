import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";

export const metadata = {
  title: "Our Approach — Skyron",
  description:
    "How Skyron takes an idea from first brief to opening night — discovery, design, build, and on-site delivery under one accountable team.",
};

const STEPS = [
  {
    title: "01 — Discover",
    description:
      "We start with the audience and the space, not the tech. Objectives, venue constraints, and the story you need told shape the brief.",
  },
  {
    title: "02 — Design",
    description:
      "Concepts, storyboards, and spatial layouts come together so you can see and approve the experience long before anything is built.",
  },
  {
    title: "03 — Develop",
    description:
      "Content, motion, and interactive systems are built in parallel with hardware and integration planning — one team, one timeline.",
  },
  {
    title: "04 — Deliver",
    description:
      "On-site install, calibration, and rehearsal happen under the same team that designed it, so nothing gets lost in handoff.",
  },
  {
    title: "05 — Support",
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

export default function OurApproachPage() {
  return (
    <main className="relative">
      <Navbar active="Our Story" />

      <section className="relative overflow-hidden bg-[#08060f] px-6 pt-36 pb-20 sm:pt-44 sm:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-60 top-[10%] h-130 w-130 rounded-full bg-[#FF2D78] opacity-20 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-55 bottom-0 h-130 w-130 rounded-full bg-[#31417D] opacity-30 blur-[100px]"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-16 bg-linear-to-r from-transparent via-[#5f30ca] to-[#317890]" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#8b7bd8]">
              Our Approach
            </span>
            <span className="h-0.5 w-16 bg-linear-to-r from-[#317890] via-[#5f30ca] to-transparent" />
          </div>

          <SectionHeading lead="How We Bring" accent="Ideas To Life" align="center" className="mt-6" />

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            A five-stage process that keeps creative, technical, and on-site teams working from
            the same brief — from the first conversation to the moment the lights come up.
          </p>
        </div>
      </section>

      <FeatureGrid lead="Our" accent="Process" cards={STEPS} className="pt-0 sm:pt-0" />

      <FeatureGrid
        lead="Principles We"
        accent="Don't Bend On"
        subtitle="The process only works if the team behind it holds to the same standards on every project."
        cards={PRINCIPLES}
        className="pt-0 sm:pt-0"
      />

      <CtaBanner />
      <Footer />
    </main>
  );
}
