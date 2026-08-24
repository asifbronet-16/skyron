import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import FeatureGrid from "@/components/FeatureGrid";
import StatCard from "@/components/home/StatCard";
import TrustedBySection from "@/components/home/TrustedBySection";
import { ChevronRight } from "@/components/icons";

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
    <main className="relative overflow-hidden">
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-60 top-[10%] h-130 w-130 rounded-full bg-[#FF2D78] opacity-35 blur-[100px] z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-75 bottom-10 h-130 w-130 rounded-full bg-[#31417D] opacity-35 z-10 blur-[100px]"
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
            <source src="/assets/OurStory/who-we-are.mp4" type="video/mp4" />
          </video>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#08060f_0%,rgba(8,6,15,0.9)_6%,rgba(8,6,15,0.6)_14%,rgba(8,6,15,0.25)_24%,transparent_38%,transparent_62%,rgba(8,6,15,0.25)_76%,rgba(8,6,15,0.6)_86%,rgba(8,6,15,0.9)_94%,#08060f_100%)]"
          />

          <div className="relative mx-auto w-full max-w-6xl">
            <div className="relative max-w-xl">
              {/* blueprint-style dashed frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -top-8 h-[calc(100%+4rem)] w-[calc(100%+3rem)] sm:-right-10 sm:w-[calc(100%+6rem)]"
              >
                <span className="absolute left-0 top-0 h-px w-full border-t border-dashed border-white/25" />
                <span className="absolute right-0 top-0 h-full w-px border-r border-dashed border-white/25" />
                <span className="absolute right-0 top-13 h-3 w-3 -translate-y-1/2 border border-white/30" />
                <span className="absolute bottom-0 right-0 h-3 w-3 border border-white/30" />
              </div>

              <span className="relative inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                About US
              </span>

              <p className="relative mt-6 text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
                From digital narratives to large scale immersive installations, our work
                transforms spaces into living stories where interaction becomes meaning,
                technology becomes invisible and experiences leave a lasting impact.
              </p>
            </div>
          </div>
        </section>

        <div className="relative bg-[#08060f]">
          <section className="relative px-6 pt-20 pb-20 sm:pt-24 sm:pb-28">
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

          <section className="relative min-h-130 overflow-hidden sm:min-h-155">
            <Image
              src="/assets/OurStory/galaxy.png"
              alt="Skyron — spatial experiences powered by intelligent technology"
              fill
              sizes="100vw"
              className="object-cover -scale-x-100"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#08060f] via-[#08060f]/75 to-transparent sm:via-[#08060f]/60" />
            {/* top + bottom falloff so the image melts into the sections around it, no hard edge */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#08060f_0%,transparent_14%,transparent_86%,#08060f_100%)]" />

            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-14 sm:py-20">
              <span className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                What We Do
              </span>

              <h2 className="mt-6 max-w-lg text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                We Craft Interactive Spatial Experiences Through Premium Content and Intelligent
                Technology
              </h2>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                Skyron Interactive Technologies is an experiential design consultancy and
                interactive content production studio, crafting immersive spatial experiences
                through premium content and intelligent technology. We combine holographic
                embodiments, AR, VR, and Extended Reality (XR) so brands and organizations can
                create experiences that are engaging, intuitive, and memorable.
              </p>

              <Link
                href="/#contact"
                className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-[linear-gradient(90deg,#9B1FA8_0%,#7B2C9E_35%,#2A7F92_100%)] py-2 pl-7 pr-2 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
              >
                Begin The Conversation
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                  <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </Link>
            </div>
          </section>

          <FeatureGrid
            lead="What Drives"
            accent="Every Project"
            subtitle="A studio is only as good as the principles it won't compromise on — these are ours."
            cards={VALUES}
          />

        <TrustedBySection marquee />
      </div>

        <CtaBanner />
      </div>
      <div className="">
        <Footer />
      </div>
    </main>
  );
}
