import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import FeatureGrid from "@/components/FeatureGrid";
import TrustedBySection from "@/components/home/TrustedBySection";
import Reveal from "@/components/Reveal";
import { ChevronRight } from "@/components/icons";

export const metadata = {
  title: "Industries We Serve — Skyron",
  description:
    "From retail and hospitality to government and education — how Skyron adapts projection, holographic, and interactive experiences to different industries.",
};

const INDUSTRIES = [
  {
    title: "Corporate, Government & Mega Projects",
    description: "Experience-led content for corporate showcases, innovation centers, government initiatives, and large-scale regional developments.",
    image: "/assets/banners/industries/1.png",
  },
  {
    title: "Exhibitions, Museums & Cultural Projects",
    description: "Immersive environments, interactive narratives, and spatial media designed to educate, engage, and inspire diverse audiences.",
    image: "/assets/banners/events-exhibitions-brand-activations/1.jpeg",
  },
  {
    title: "Live Events & Experiential Marketing",
    description: "High-impact brand activations, product launches, festivals, and corporate events powered by interactive technology and immersive content.",
    image: "/assets/banners/events-exhibitions-brand-activations/2.jpeg",
  },
  {
    title: "Luxury, Retail & Mall Experiences",
    description: "Premium interactive installations and experiential content for luxury brands, flagship stores, shopping malls, and destination retail spaces.",
    image: "/assets/cards/industries/3.png",
  },
  {
    title: "Real Estate, Architecture & Destination Marketing",
    description: "Interactive visualizations, immersive presentations, and experiential showcases for properties, master plans, and landmark destinations.",
    image: "/assets/cards/industries/1.png",
  },
  {
    title: "Entertainment & Media",
    description: "Film launches, OTT promotions, music events, fan experiences, and immersive storytelling installations that turn audiences into participants.",
    image: "/assets/cards/industries/2.png",
  },
];

export default function IndustriesPage() {
  return (
    <main className="relative overflow-hidden mt-18 sm:mt-30">

      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-70 top-[10%] h-130 w-130 rounded-full bg-[#FF2D78] opacity-35 blur-[120px] z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-55 bottom-0 h-130 w-130 rounded-full bg-[#31417D] opacity-50 z-10 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-80 h-130 w-130  rounded-full bg-[#2A6DF4] opacity-40 blur-[110px] z-10"
        />

        <Navbar active="Our Story" />

        <div className="relative bg-[#08060f]">


          <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden px-6 pt-16 pb-16 sm:min-h-[85vh] sm:pt-40 sm:pb-32 lg:px-34">

            {/* Image layer — absolute, full bleed, anchored right */}
            <div className="absolute inset-y-0 right-0 h-full w-[55%] overflow-hidden">
              <img src="/assets/banners/industries/1.png" alt="Industries we Work with" className="absolute inset-0 -z-10 h-full w-full object-cover" />

              {/* top + bottom falloff so the image melts into the sections around it */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#08060f_0%,transparent_16%,transparent_84%,#08060f_100%)]"
              />

              {/* left-edge falloff, scoped to the video itself (not the whole section) so it's
                  fully opaque right at the container's edge — no visible seam — and eases out
                  from there instead of already being partway faded when the video starts */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#08060f_0%,#08060f_10%,rgba(8,6,15,0.85)_22%,rgba(8,6,15,0.55)_36%,rgba(8,6,15,0.25)_50%,transparent_65%)]"
              />
            </div>

            <div className="relative mx-auto w-full ">
              <div className="w-full max-w-xl">
                <Reveal as="span" className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                  Industries We Serve
                </Reveal>

                <Reveal as="h1" delay={100} className="mt-6 text-[2.25rem] font-semibold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-[3.2rem]">
                  We Partner With Industries{" "}
                  <span className="bg-linear-to-r from-fuchsia-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                    Where Experience Drives Impact
                  </span>
                </Reveal>

                <Reveal as="p" delay={200} className="mt-7 max-w-md text-base leading-relaxed text-white/60">
                  Our interactive and immersive content is designed to perform at scale — across
                  live, digital, and spatial environments.
                </Reveal>

                <Reveal delay={300} className="mt-10">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#9B1FA8_0%,#7B2C9E_35%,#2A7F92_100%)] py-2 pl-7 pr-2 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
                  >
                    Start The Conversation
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                      <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  </Link>
                </Reveal>
              </div>
            </div>

          </section>

          <FeatureGrid
            lead="Industries We"
            accent="Partner With"
            cards={INDUSTRIES}
          />

          <TrustedBySection />
        </div>

        <CtaBanner />
      </div>

      <Footer />
    </main>
  );
}
