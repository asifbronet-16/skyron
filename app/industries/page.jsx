import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";

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
              Industries We Serve
            </span>
            <span className="h-0.5 w-16 bg-linear-to-r from-[#317890] via-[#5f30ca] to-transparent" />
          </div>

          <SectionHeading lead="Built For Every" accent="Kind Of Story" align="center" className="mt-6" />

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            The medium changes with the audience. Here&apos;s where our projection, holographic,
            AR, and interactive work has found a home.
          </p>
        </div>
      </section>

      <FeatureGrid
        lead="Industries We"
        accent="Partner With"
        cards={INDUSTRIES}
        className="pt-0 sm:pt-0"
      />

      <CtaBanner />
      <Footer />
    </main>
  );
}
