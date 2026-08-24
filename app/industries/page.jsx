import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import FeatureGrid from "@/components/FeatureGrid";
import TrustedBySection from "@/components/home/TrustedBySection";
import { ChevronRight } from "@/components/icons";

export const metadata = {
  title: "Industries We Serve — Skyron",
  description:
    "From retail and hospitality to government and education — how Skyron adapts projection, holographic, and interactive experiences to different industries.",
};

const INDUSTRIES = [
  {
    title: "Retail & Retailtainment",
    description: "Storefront moments, product launches, and in-store activations that turn footfall into an experience worth posting about.",
  },
  {
    title: "Real Estate & Hospitality",
    description: "Immersive sales galleries, show-suite visualizations, and hotel or resort installations that sell a lifestyle, not just a floor plan.",
  },
  {
    title: "Government & Public Sector",
    description: "Cultural pavilions, heritage storytelling, and public exhibitions built to represent a nation or city on the world stage.",
  },
  {
    title: "Automotive",
    description: "Holographic reveals, showroom AR configurators, and motor-show activations that make a launch impossible to ignore.",
  },
  {
    title: "Corporate & Enterprise",
    description: "Experience centres, briefing rooms, and product showcases that turn a corporate story into a walk-through your visitors remember.",
  },
  {
    title: "Education & Museums",
    description: "Interactive exhibits and spatial learning environments that make complex ideas tangible for every age group.",
  },
  {
    title: "Entertainment & Media",
    description: "Concert visuals, immersive stage design, and volumetric content built for audiences who expect spectacle.",
  },
  {
    title: "Events & Exhibitions",
    description: "Brand activations and trade-show builds engineered to draw a crowd and hold it, hall after hall.",
  },
];

const HERO_PILLS = [
  { label: "Retail & Retailtainment", className: "top-[5%] right-[38%]", anim: "float-a", dur: "7s", delay: "0s", border: "border-cyan-300/50", glow: "0 0 18px -4px rgba(103,232,249,.45)" },
  { label: "Government & Public Sector", className: "top-[16%] left-[0%]", anim: "float-c", dur: "9.5s", delay: "1.2s", border: "border-violet-200/45", glow: "0 0 18px -4px rgba(221,214,254,.35)" },
  { label: "Automotive", className: "top-[30%] right-[6%]", anim: "float-b", dur: "8.2s", delay: "0.6s", border: "border-fuchsia-400/55", glow: "0 0 20px -4px rgba(232,121,249,.45)" },
  { label: "Hospitality & Real Estate", className: "top-[64%] left-[1%]", anim: "float-a", dur: "10s", delay: "2.1s", border: "border-pink-400/55", glow: "0 0 20px -4px rgba(244,114,182,.45)" },
  { label: "Corporate & Enterprise", className: "top-[68%] right-[3%]", anim: "float-c", dur: "7.8s", delay: "1.7s", border: "border-purple-400/50", glow: "0 0 18px -4px rgba(192,132,252,.40)" },
  { label: "Entertainment & Media", className: "top-[80%] left-[32%]", anim: "float-b", dur: "9s", delay: "0.3s", border: "border-sky-400/50", glow: "0 0 18px -4px rgba(56,189,248,.40)" },
];

export default function IndustriesPage() {
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
          className="pointer-events-none absolute -left-55 bottom-0 h-130 w-130 rounded-full bg-[#31417D] opacity-50 z-10 blur-[100px]"
        />

        <Navbar active="Our Story" />

        <div className="relative bg-[#08060f]">
          <section className="relative overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-24 lg:px-0 lg:pl-22 lg:pt-40 lg:pb-28">
            <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-8 lg:pl-12">
              {/* copy */}
              <div className="w-full max-w-xl">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                  Industries We Serve
                </span>

                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-[3.2rem]">
                  We Design Experiences That{" "}
                  <span className="bg-linear-to-r from-fuchsia-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                    Speak To Every Industry
                  </span>
                </h1>

                <p className="mt-7 max-w-md text-base leading-relaxed text-white/60">
                  From retail floors to government pavilions, we adapt projection, holographic, AR,
                  and interactive work to fit the room — and the audience standing in it.
                </p>

                <div className="mt-10">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#9B1FA8_0%,#7B2C9E_35%,#2A7F92_100%)] py-2 pl-7 pr-2 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
                  >
                    Start The Conversation
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                      <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  </Link>
                </div>
              </div>

              {/* video */}
              <div className="relative aspect-square w-full lg:aspect-auto lg:h-160">
                <div className="absolute inset-0 overflow-hidden rounded-2xl bg-[#08060f]">
                  <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                    <source src="/assets/OurStory/industries-we-serve.mp4" type="video/mp4" />
                  </video>
                  {/* top + bottom falloff */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#08060f_0%,transparent_18%,transparent_65%,#08060f_100%)]" />
                  {/* left falloff — heavier, since that edge sits against the copy */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#08060f]/90 via-transparent to-transparent from-0% via-10%" />
                </div>

                {/* floating industry pills */}
                {HERO_PILLS.map((pill) => (
                  <span
                    key={pill.label}
                    style={{
                      animationName: pill.anim,
                      animationDuration: pill.dur,
                      animationDelay: pill.delay,
                      animationIterationCount: "infinite",
                      animationTimingFunction: "ease-in-out",
                      boxShadow: pill.glow,
                    }}
                    className={`pill-float absolute hidden lg:block whitespace-nowrap rounded-full border bg-white/5 px-4 py-2 text-[11px] font-medium text-white/90 backdrop-blur-md sm:text-xs ${pill.className} ${pill.border}`}
                  >
                    {pill.label}
                  </span>
                ))}
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
