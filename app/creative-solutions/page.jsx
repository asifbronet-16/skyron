import Image from "next/image";
import { altFor } from "@/constants/imageAlt";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Blocks, { CardGrid, RelatedServices } from "@/components/content/Blocks";
import { PATHS } from "@/constants/paths";
import { ALL_SOLUTIONS, CREATIVE_SECTION } from "@/lib/solutions";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Creative Content Studio in Dubai: 3D, 2D & Film | Skyron",
  description:
    "Content creation in Dubai: 2D/3D animation, anamorphic 3D, AI content, live shoots and VFX for LED walls, facades, holograms and experience centres.",
  path: PATHS.creativeSolutions,
});

// One card per Creative Solutions page, from its `hub` copy.
const SERVICE_CARDS = ALL_SOLUTIONS.filter((item) => item.section === CREATIVE_SECTION).map((item) => ({
  title: item.hub.title,
  body: item.hub.text,
  image: item.banner.images[0],
  link: { label: item.hub.linkLabel, href: item.href },
}));

const SECTIONS = [
  {
    type: "prose",
    heading: "Why in-house content matters",
    paragraphs: [
      "When the content team and the technology team are the same team, the content fits the hardware. Resolution, frame rate, colour and timing are planned together, so there are no surprises at the first test on site. It also means one point of contact and one schedule.",
    ],
  },
];

export default function CreativeSolutionsPage() {
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
            src="/assets/banners/creative-solutions.webp"
            alt={altFor("/assets/banners/creative-solutions.webp")}
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
                  lead="Creative solutions:"
                  accent="content made for spaces, not just screens"
                  className="mt-6"
                />
              </Reveal>

              <Reveal as="p" delay={200} className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                Skyron is a creative content studio in Dubai. Our in-house team produces 3D, 2D motion,
                anamorphic, live-action and AI-assisted content, and every piece is built for where it
                will play: a 20-metre facade, a corner LED screen, a HoloBox or a headset. Pixel maps,
                viewing distances and brightness are part of the brief from day one.
              </Reveal>

              <Reveal as="p" delay={260} className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                Content creation and creative storytelling are our core capability, and they power
                every experience we build, from experience centres to holograms.
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

        <RelatedServices paths={[PATHS.projectionMapping, PATHS.holograms, PATHS.experienceCentres]} />

        <CtaBanner
          heading="Need content for a screen, facade or space?"
          text="Tell us the format and the date. We reply within two working days."
        />
      </div>

      <Footer />
    </main>
  );
}
