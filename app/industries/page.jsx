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

export default function IndustriesPage() {
  return (
    <main className="relative overflow-hidden mt-30">
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


          <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden">
 <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#08060f] via-[#08060f]/70 to-transparent"
            />
            {/* Video layer — absolute, full bleed, anchored right */}
            <div className="absolute inset-y-0 right-0 h-full w-[55%] overflow-hidden ">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full scale-125 object-cover object-[65%_50%] translate-x-[10%]"
              >
                <source src="/assets/OurStory/industries-we-serve.mp4" type="video/mp4" />
              </video>

             
            {/* top + bottom falloff so it melts into the sections around it */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#08060f_0%,transparent_16%,transparent_84%,#08060f_100%)]"
            />

            {/* extra ambient glow, scoped to the hero, left side */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-40 top-1/2 h-130 w-130 -translate-y-1/2 rounded-full bg-[#2A6DF4] opacity-40 blur-[110px]"
            />
            </div>

            <div className="relative mx-auto w-full
   px-6 pt-32 pb-24 sm:min-h-[85vh] sm:pt-40 sm:pb-32 lg:pl-28">
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
