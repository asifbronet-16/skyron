import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import CtaBanner from "@/components/CtaBanner";
import FaqSection from "@/components/home/FaqSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import Blocks from "@/components/content/Blocks";
import { PATHS } from "@/constants/paths";
import { SITE } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: SITE.title, description: SITE.description, path: PATHS.home });

// Approved home page copy for the sections between the logo strip and the FAQ.
const SECTIONS = [
  {
    type: "steps",
    heading: "How we work",
    intro: [
      "We research the purpose of the space and the people it's for, build the creative concept and the content around it, design the user experience, then choose the most appropriate technology.",
    ],
    steps: [
      "**Discover and research:** site visit, audience and stakeholder research, goals and success measures.",
      "**Concept and storytelling:** creative concept, script, storyboard and concept renders you can review.",
      "**User experience design:** visitor journey, interaction design, zoning and technical specification.",
      "**Content production and programming:** 2D/3D animation, anamorphic 3D, AI and live-action content, plus interactive software.",
      "**Installation and handover:** hardware installation, calibration, testing, rehearsal, training and support.",
    ],
    link: { label: "Read our approach", href: PATHS.ourApproach },
  },
  {
    type: "prose",
    heading: "Where we deliver",
    paragraphs: [
      `We're based in Dubai and deliver projects across all seven emirates (Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah), [Saudi Arabia](${PATHS.saudiArabia}), Qatar, the wider Middle East and beyond.`,
    ],
  },
  {
    type: "list",
    heading: "Who we work with",
    variant: "chips",
    items: [
      "Government entities and mega projects",
      "Museums, culture and heritage",
      "Real estate and master developers",
      "Retail, luxury and malls",
      "Live events and experiential marketing",
      "Entertainment and media",
    ],
    link: { label: "Industries we serve", href: PATHS.industries },
  },
];

export default function Home() {
  return (
    <main className="relative">
      <Navbar active="Home" />
      <div className="relative overflow-hidden bg-[#08060f]">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-60 top-[12%] h-130 w-130 rounded-full bg-[#FF2D78] opacity-30 blur-[80px]  z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-55 top-[30%] h-180 w-120 rounded-full bg-[#31417D] opacity-50 blur-[80px]  z-10"
        />
        <Hero />
        <AboutSection />
      </div>
      <div className="relative overflow-hidden bg-[#04030b]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-85 bottom-50 h-130 w-130 rounded-full bg-[#FF2D78] opacity-30 blur-[80px]  z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-80 top-[5%] h-130 w-130 rounded-full bg-[#31417D] opacity-50 blur-[80px]  z-10"
        />
        <CapabilitiesSection />
        <TrustedBySection marquee />
      </div>

      <Blocks blocks={SECTIONS} />

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-70 top-1/3 h-130 w-130 rounded-full  bg-[#31417D] blur-[130px]  opacity-50 z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-80 bottom-15 h-130 w-130 rounded-full bg-[#FF2D78] blur-[140px] opacity-20 z-10 "
        />
        <FaqSection />
      </div>
      <CtaBanner />
      <Footer />
    </main>
  );
}
