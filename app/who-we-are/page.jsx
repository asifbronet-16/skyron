import Image from "next/image";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import FeatureGrid from "@/components/FeatureGrid";
import ServiceCard from "@/components/home/ServiceCard";
import TrustedBySection from "@/components/home/TrustedBySection";

export const metadata = {
  title: "Who We Are — Skyron",
  description:
    "Skyron is a creative technology studio blending storytelling, spatial design, motion graphics, and emerging technology into unforgettable brand experiences.",
};

// Floating capability pills — same treatment as the homepage hero (Hero.jsx),
// reusing the float-a/b/c keyframes + .pill-float class from globals.css.
const HERO_PILLS = [
  { label: "Spatial Storytelling", className: "top-[10%] right-[28%]", anim: "float-a", dur: "7.4s", delay: "0s", border: "border-cyan-300/50", glow: "shadow-[0_0_18px_-4px_rgba(103,232,249,.45)]" },
  { label: "Cinematic Content", className: "top-[26%] right-[6%]", anim: "float-c", dur: "9s", delay: "1.1s", border: "border-violet-200/45", glow: "shadow-[0_0_18px_-4px_rgba(221,214,254,.35)]" },
  { label: "Intelligent Systems", className: "top-[46%] right-[32%]", anim: "float-b", dur: "8.4s", delay: "0.5s", border: "border-fuchsia-400/55", glow: "shadow-[0_0_20px_-4px_rgba(232,121,249,.45)]" },
  { label: "Immersive Design", className: "top-[64%] right-[10%]", anim: "float-a", dur: "10s", delay: "2s", border: "border-pink-400/55", glow: "shadow-[0_0_20px_-4px_rgba(244,114,182,.45)]" },
  { label: "Human-Centered Craft", className: "top-[80%] right-[30%]", anim: "float-c", dur: "8s", delay: "1.6s", border: "border-sky-400/50", glow: "shadow-[0_0_18px_-4px_rgba(56,189,248,.40)]" },
];

const STORY_PROCESS = [
  {
    number: "01",
    accent: "violet",
    title: "Pre-Production",
    description: "A strong creative foundation — concept development, scripting, storyboarding, and mood boards.",
    image: "/assets/cards/corporate-branded-films/4.jpeg",
  },
  {
    number: "02",
    accent: "cyan",
    title: "Production",
    description: "A tailored pipeline for the story at hand — 2D/3D animation, live-action, VFX, or AI-driven content, whichever serves it best.",
    image: "/assets/cards/corporate-branded-films/5.jpeg",
  },
  {
    number: "03",
    accent: "purple",
    title: "Post-Production",
    description: "Editing, sound design, visual effects, and color grading, polished into one immersive final output.",
    image: "/assets/cards/corporate-branded-films/6.jpeg",
  },
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
    <main className="relative overflow-hidden mt-30">
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

        <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden px-6 pt-32 pb-24 sm:min-h-[85vh] sm:pt-40 sm:pb-32 lg:px-28">
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

          <div className="relative mx-auto w-full max-w-7xl">
            <div className="relative max-w-xl">
              <Reveal as="span" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                About US
              </Reveal>

              <Reveal as="h1" delay={120} className="mt-6 text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl lg:text-3xl">
                We Craft Interactive Spatial Experiences Through{" "}
                <span className="bg-linear-to-r from-violet-500 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
                  Premium Content and Intelligent Technology
                </span>
              </Reveal>

              <Reveal as="p" delay={240} className="mt-6 text-base leading-normal text-white/85 sm:text-lg lg:text-lg">
                SKYRON Interactive Technologies LLC is an experiential design consultancy and
                content production studio crafting immersive, spatial experiences through premium
                content and intelligent technology — translating ideas into environments that
                invite exploration, emotion, and discovery. From digital narratives to
                large-scale installations, our work turns spaces into living stories, where
                interaction becomes meaning, technology becomes invisible, and experiences leave a
                lasting impact.
              </Reveal>
            </div>
          </div>
        </section>

        <div className="relative bg-[#08060f]">
          <section className="relative px-6 pt-20 pb-20 sm:pt-24 sm:pb-28">

            <div className="relative mx-auto mt-16 max-w-3xl text-center">
              <Reveal as="h2" className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                We Are{" "}
                <span className="bg-linear-to-r from-violet-500 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
                  Creative Story-Tellers
                </span>
              </Reveal>

              <Reveal as="p" delay={120} className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
                At Skyron, storytelling sits at the heart of everything we create. We work with
                clients from the first conversation to understand their vision, objectives, and
                audience — then carry that understanding through a complete cinematic workflow,
                built for clarity, quality, and impact at every stage.
              </Reveal>
            </div>

            <div className="relative mx-auto mt-10 grid max-w-5xl items-stretch gap-6 sm:grid-cols-3">
              {STORY_PROCESS.map((step, i) => (
                <Reveal key={step.number} delay={i * 120} distance={32}>
                  <ServiceCard {...step} className="h-full" />
                </Reveal>
              ))}
            </div>

            <Reveal as="p" className="relative mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-white/55 sm:text-base">
              Structured production married to creative storytelling — so every experience is as
              meaningful as it is visually compelling.
            </Reveal>
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

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#08060f_0%,transparent_14%,transparent_86%,#08060f_100%)]" />

            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-24 text-center sm:min-h-[85vh] sm:pt-40 sm:pb-32">
              <Reveal as="h2" className="mt-6 max-w-lg text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                We Craft Interactive Spatial Experiences Through{" "}
                <span className="bg-linear-to-r from-violet-500 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
                  Premium Content and Intelligent Technology
                </span>
              </Reveal>

              <Reveal as="p" delay={120} className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                Skyron Interactive Technologies is an experiential design consultancy and
                interactive content production studio, crafting immersive spatial experiences
                through premium content and intelligent technology. We combine holographic
                embodiments, AR, VR, and Extended Reality (XR) so brands and organizations can
                create experiences that are engaging, intuitive, and memorable.
              </Reveal>
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
