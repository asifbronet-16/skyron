import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import StatCard from "@/components/home/StatCard";
import TrustedBySection from "@/components/home/TrustedBySection";

export const metadata = {
  title: "Who We Are — Skyron",
  description:
    "Skyron is a creative technology studio blending storytelling, spatial design, motion graphics, and emerging technology into unforgettable brand experiences.",
};

const STATS = [
  { value: "1K+", label: "Satisfied Customers" },
  { value: "1K+", label: "Projects Completed" },
  { value: "14+", label: "Winning Awards" },
];

const VALUES = [
  {
    title: "Design-First",
    description: "Every engagement starts with human emotion, not the technology stack — the medium is chosen to serve the idea, never the other way round.",
  },
  {
    title: "Story-Driven",
    description: "Projection mapping, holograms, and AR are only as good as the narrative running through them. Tech always serves the story.",
  },
  {
    title: "Future-Ready",
    description: "We build on platforms and pipelines that keep evolving, so the experiences we ship today still hold up as displays and devices change.",
  },
  {
    title: "End-to-End",
    description: "Concept, content, hardware, and on-site execution sit under one roof — one team accountable from first sketch to opening night.",
  },
  {
    title: "Craft Obsessed",
    description: "Motion, sound, and spatial detail are tuned frame by frame. We sweat the details most studios ship past.",
  },
  {
    title: "Partnership Minded",
    description: "We work embedded with marketing, ops, and venue teams — not as an outside vendor dropping off a delivery.",
  },
];

export default function WhoWeArePage() {
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
              Who We Are
            </span>
            <span className="h-0.5 w-16 bg-linear-to-r from-[#317890] via-[#5f30ca] to-transparent" />
          </div>

          <SectionHeading lead="The Studio Behind" accent="The Experience" align="center" className="mt-6" />

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            Skyron Interactive is a creative technology studio specializing in interactive
            experiential content production — blending storytelling, spatial design, motion
            graphics, and emerging technology into brand experiences people remember.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#08060f] px-6 pb-20 sm:pb-28">
        <div className="relative mx-auto max-w-3xl space-y-5 text-sm leading-relaxed text-white/55 sm:text-base">
          <p>
            We started at the intersection of three disciplines that rarely sit in one room:
            intelligent technology, cinematic content, and environment design. That combination
            is deliberate — a projection surface, a hologram, or an AR layer only lands when the
            story, the space, and the system are designed together, not bolted on at the end.
          </p>
          <p>
            Today that means working with brands, museums, government entities, and event
            producers across the region to turn ambitious ideas — a pavilion, a launch, an
            experience centre — into something an audience walks away still talking about.
          </p>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <FeatureGrid
        lead="What Drives"
        accent="Every Project"
        subtitle="A studio is only as good as the principles it won't compromise on — these are ours."
        cards={VALUES}
      />

      <TrustedBySection marquee />

      <CtaBanner />
      <Footer />
    </main>
  );
}
