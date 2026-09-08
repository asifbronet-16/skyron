import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/home/ServiceCard";
import Reveal from "@/components/Reveal";
import { CREATIVE_SOLUTIONS_ITEMS } from "@/constants/creativeSolutions";

export const metadata = {
  title: "Creative Solutions — Skyron",
  description:
    "3D and 2D content, anamorphic LED, live-action production, and AI-driven generative content — the creative disciplines behind every Skyron experience.",
};

// Cycled across cards so a five-item grid still reads as varied, not random —
// same accent rotation ServiceCard already uses on the Our Approach process grid.
const ACCENTS = ["violet", "cyan", "rose", "purple"];

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
            src="/assets/banners/creative-solutions.png"
            alt="Creative Solutions"
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
                  What We Do
                </span>
              </Reveal>

              <Reveal delay={100}>
                <SectionHeading lead="Creative" accent="Solutions" className="mt-6" />
              </Reveal>

              <Reveal as="p" delay={200} className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                Five disciplines, one creative pipeline — 3D and 2D content, anamorphic LED, live-action
                production, and AI-assisted workflows, all built to move audiences across screens,
                facades, and spatial installations.
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#08060f] px-6 pb-8 sm:pb-28">
          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CREATIVE_SOLUTIONS_ITEMS.map((item, i) => (
                <Reveal key={item.slug} delay={Math.min(i, 5) * 90} distance={28} className="h-full">
                  <Link href={`/creative-solutions/${item.slug}`} className="block h-full">
                    <ServiceCard
                      number={String(i + 1).padStart(2, "0")}
                      accent={ACCENTS[i % ACCENTS.length]}
                      title={item.label}
                      description={item.intro}
                      image={item.banner?.images?.[0]}
                      className="h-full"
                    />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </div>

      <Footer />
    </main>
  );
}
