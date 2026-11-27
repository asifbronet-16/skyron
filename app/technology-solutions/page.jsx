import Image from "next/image";
import { altFor } from "@/constants/imageAlt";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Blocks, { CardGrid } from "@/components/content/Blocks";
import { PATHS } from "@/constants/paths";
import { ALL_SOLUTIONS, TECHNOLOGY_SECTION } from "@/lib/solutions";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Immersive Technology Solutions in the UAE | Skyron",
  description:
    "Experience centres, projection mapping, holograms, AR/VR, interactive installations and brand activations, integrated by one Dubai team for the Middle East.",
  path: PATHS.technologySolutions,
});

// One card per live Technology Solutions page, from its `hub` copy. Kinetic
// LED's card appears with its page.
const SERVICE_CARDS = ALL_SOLUTIONS.filter((item) => item.section === TECHNOLOGY_SECTION).map((item) => ({
  title: item.hub.title,
  body: item.hub.text,
  image: item.banner.images[0],
  link: { label: item.hub.linkLabel, href: item.href },
}));

const SECTIONS = [
  {
    type: "prose",
    heading: "One integrated build, one accountable team",
    paragraphs: [
      "Most immersive projects use several technologies at once: a projection-mapped model, an LED wall, a hologram presenter and a touch table in one room. We design them as one system, with one content pipeline and one show control, so they start, sync and recover together. You deal with one team instead of five vendors.",
    ],
  },
];

export default function TechnologySolutionsPage() {
  return (
    <main className="relative overflow-hidden">
      {/* glows are scoped to this wrapper (hero → CtaBanner) instead of the hero
          section alone, so the ambient wash bleeds across the sections below it
          instead of getting clipped at the hero's own overflow-hidden edge */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-60 top-[10%] z-10 h-130 w-130 rounded-full bg-[#FF2D78] opacity-20 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-55 bottom-0 z-10 h-130 w-130 rounded-full bg-[#31417D] opacity-30 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[8%] z-10 h-130 w-130 -translate-x-1/2 rounded-full bg-[#5f30ca] opacity-15 blur-[130px]"
        />

        <Navbar active="What We Do" />

        <section className="relative flex min-h-[70vh] items-center overflow-hidden px-6 pt-24 pb-8 sm:min-h-[80vh] sm:pt-44 sm:pb-24">
          <Image
            src="/assets/banners/technology-solutions.webp"
            alt={altFor("/assets/banners/technology-solutions.webp")}
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
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#8b7bd8]">
                  What we do
                </span>
              </Reveal>

              <Reveal delay={100}>
                <SectionHeading
                  as="h1"
                  lead="Immersive technology solutions,"
                  accent="integrated as one build"
                  className="mt-6"
                />
              </Reveal>

              <Reveal as="p" delay={200} className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                Skyron is an immersive technology company in Dubai. We design, integrate and run the
                technology behind immersive spaces across the UAE, Saudi Arabia, the wider Middle East
                and beyond. Content, hardware, software and show control are planned together, so
                everything works on the day it matters.
              </Reveal>

              <Reveal as="p" delay={260} className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                Every technology we deliver is driven by content we create in-house: 2D and 3D
                animation, anamorphic 3D, generative AI content, live shoots and visual effects.
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#08060f] px-6 pt-2 pb-8 sm:pb-16">
          <div className="relative mx-auto max-w-7xl">
            <CardGrid cards={SERVICE_CARDS} />
          </div>
        </section>

        <Blocks blocks={SECTIONS} />

        <CtaBanner
          heading="Not sure which technology fits?"
          text="Tell us what the space needs to do. We'll recommend the right mix within two working days."
        />
      </div>

      <Footer />
    </main>
  );
}
