import Image from "next/image";
import { altFor } from "@/constants/imageAlt";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import FeatureGrid from "@/components/FeatureGrid";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/home/ServiceCard";
import TrustedBySection from "@/components/home/TrustedBySection";
import { Mail, MapPin, Phone } from "@/components/icons";
import { PATHS } from "@/constants/paths";
import { SITE } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";
import { webPageGraph } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "About Skyron | Spatial Experience Studio in Dubai",
  description:
    "Skyron is a Dubai spatial experience studio: content creation, creative storytelling and immersive technology for clients across the Middle East and beyond.",
  path: PATHS.whoWeAre,
});

const STORY_PROCESS = [
  {
    number: "01",
    accent: "violet",
    title: "Pre-production",
    description: "Concept development, scripting, storyboarding and mood boards.",
    image: "/assets/cards/pre-production/1.webp",
  },
  {
    number: "02",
    accent: "cyan",
    title: "Production",
    description: "2D and 3D animation, live action, VFX or AI-assisted content, whichever serves the story best.",
    image: "/assets/cards/production/1.webp",
  },
  {
    number: "03",
    accent: "purple",
    title: "Post-production",
    description: "Editing, sound design, visual effects and colour grading, polished into one final output.",
    image: "/assets/cards/post-production/1.webp",
  },
];

const VALUES = [
  {
    title: "Design-first",
    description: "Every engagement starts with how people should feel, not the technology stack.",
  },
  {
    title: "Story-driven",
    description: "Projection, holograms and AR are only as good as the story running through them.",
  },
  {
    title: "Future-ready",
    description: "Platforms and pipelines chosen so the experience still works as displays and devices change.",
  },
  {
    title: "End-to-end",
    description:
      "Concept, content, hardware and on-site delivery under one roof, with one team accountable from first sketch to opening night.",
  },
  {
    title: "Craft obsessed",
    description: "Motion, sound and spatial detail, tuned frame by frame.",
  },
  {
    title: "Partnership minded",
    description: "We work inside your marketing, operations and venue teams, not as an outside vendor.",
  },
];

export default function WhoWeArePage() {
  return (
    <main className="relative overflow-hidden mt-18 sm:mt-30">
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
        <JsonLd data={webPageGraph({ type: "AboutPage", path: PATHS.whoWeAre, name: metadata.title })} />

        <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden px-6 pt-16 pb-16 sm:min-h-[85vh] sm:pt-40 sm:pb-32 lg:px-28">
          <Image
            src="/assets/banners/who-we-are/1.webp"
            alt={altFor("/assets/banners/who-we-are/1.webp")}
            fill
            preload
            sizes="100vw"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#08060f_0%,rgba(8,6,15,0.9)_6%,rgba(8,6,15,0.6)_14%,rgba(8,6,15,0.25)_24%,transparent_38%,transparent_62%,rgba(8,6,15,0.25)_76%,rgba(8,6,15,0.6)_86%,rgba(8,6,15,0.9)_94%,#08060f_100%)]"
          />

          <div className="relative mx-auto w-full max-w-7xl">
            <div className="relative max-w-xl">
              <Reveal as="p" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                About us
              </Reveal>

              <Reveal as="h1" delay={120} className="mt-6 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
                A spatial experience{" "}
                <span className="bg-linear-to-r from-violet-500 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
                  studio in Dubai
                </span>
              </Reveal>

              <Reveal as="p" delay={240} className="mt-6 text-base leading-normal text-white/85 sm:text-lg lg:text-lg">
                Skyron is an experiential design consultancy and immersive content production studio.
                We design and build spaces that explain an idea and make people feel it, combining
                storytelling, in-house content and technology such as projection mapping, holograms and
                AR/VR. We&apos;re based in Dubai and work with brands, developers, cultural institutions
                and government entities across the UAE, Saudi Arabia, the wider Middle East and beyond.
              </Reveal>

              <Reveal as="p" delay={320} className="mt-4 text-base leading-normal text-white/70">
                Content creation and creative storytelling sit at the core of everything we do, from 2D
                and 3D animation and anamorphic 3D to generative AI content, live shoots and visual
                effects.
              </Reveal>
            </div>
          </div>
        </section>

        <div className="relative bg-[#08060f]">
          <section className="relative min-h-130 overflow-hidden sm:min-h-155">
            <Image
              src="/assets/our-story/galaxy.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover -scale-x-100"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#08060f] via-[#08060f]/75 to-transparent sm:via-[#08060f]/60" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#08060f_0%,transparent_14%,transparent_86%,#08060f_100%)]" />

            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start px-6 pt-16 pb-16 text-left sm:min-h-[70vh] sm:justify-center sm:pt-24 sm:pb-24 lg:px-0">
              <Reveal>
                <SectionHeading text="What we believe" size="md" inline />
              </Reveal>

              <Reveal as="p" delay={120} className=" mt-6 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                Technology is the last decision, not the first. We start with the purpose of the space,
                the audience and the message, then choose the media that serves them. The result feels
                coherent rather than crowded, and it still makes sense to visitors a year after opening.
              </Reveal>
            </div>
          </section>

          <section className="relative px-6 pt-8 pb-8 sm:pt-16 sm:pb-24">
            <div className="relative mx-auto max-w-3xl text-center">
              <Reveal>
                <SectionHeading text="We are storytellers first" align="center" size="md" inline />
              </Reveal>

              <Reveal as="p" delay={120} className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
                Every project runs through a complete cinematic workflow, from the first conversation to
                the final grade:
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
              Then we put that content into the room: on facades, LED, holograms, headsets and
              interactive surfaces.
            </Reveal>
          </section>

          <FeatureGrid heading="What drives every project" cards={VALUES} />

          <section className="relative px-6 py-8 sm:py-16">
            <Reveal className="relative mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-10">
              <SectionHeading text="Company details" size="md" inline />
              <p className="mt-6 text-base font-medium text-white">{SITE.legalName}</p>
              <ul className="mt-4 space-y-3 text-sm text-white/70 sm:text-base">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-violet-400" strokeWidth={1.8} />
                  1st Floor, Office 101-14, Banat Abdullah Al Marzooqi Building, Al Khabeesi, Deira, Dubai, UAE
                </li>
                <li className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-3 transition hover:text-violet-300">
                    <Mail className="h-4.5 w-4.5 shrink-0 text-violet-400" strokeWidth={1.8} />
                    {SITE.email}
                  </a>
                  <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-3 transition hover:text-violet-300">
                    <Phone className="h-4.5 w-4.5 shrink-0 text-violet-400" strokeWidth={1.8} />
                    {SITE.phoneDisplay}
                  </a>
                </li>
              </ul>
            </Reveal>
          </section>

          <TrustedBySection marquee />
        </div>

        <CtaBanner
          heading="Let's talk about your space"
          text="Send your brief and we'll reply within two working days."
          button={{ label: "Get in touch", href: PATHS.brief }}
        />
      </div>
      <div className="">
        <Footer />
      </div>
    </main>
  );
}
