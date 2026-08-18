import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import FaqSection from "../components/FaqSection";
import EmpoweringSection from "../components/EmpoweringSection";
import TrustedBySection from "../components/TrustedBySection";
import CapabilitiesSection from "../components/CapabilitiesSection";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <main className="relative">
      <Navbar active="Home" />
      <Hero />
      <AboutSection />
      <CapabilitiesSection />
      <TrustedBySection marquee />
      <EmpoweringSection />
      <ServicesSection />

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-50 top-1/3 h-130 w-130 rounded-full  bg-[#31417D] blur-[130px]  opacity-60 z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-50 bottom-40 h-130 w-130 rounded-full bg-[#FF2D78] blur-[140px] opacity-30 z-10 "
        />
        <CaseStudiesSection />
        <FaqSection />
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
}
