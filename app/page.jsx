import Hero from "../components/Hero";
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
      <div className="relative overflow-hidden bg-[#04030b]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-60 top-[47%] h-130 w-130 rounded-full bg-[#FF2D78] opacity-30 blur-[80px]  z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-55 bottom-20 h-130 w-130 rounded-full bg-[#31417D] opacity-50 blur-[80px]  z-10"
        />
      <CapabilitiesSection />
      <TrustedBySection marquee />
      </div>

      <div className="relative overflow-hidden bg-[#04030b]">
       <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-60 top-[47%] h-130 w-130 rounded-full bg-[#FF2D78] opacity-30 blur-[80px]  z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-55 bottom-20 h-130 w-130 rounded-full bg-[#31417D] opacity-50 blur-[80px]  z-10"
        />
        <EmpoweringSection>
          <video
            src="/assets/icon-rotate.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </EmpoweringSection>
        <ServicesSection />
      </div>

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-70 top-1/3 h-130 w-130 rounded-full  bg-[#31417D] blur-[130px]  opacity-50 z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-80 bottom-15 h-130 w-130 rounded-full bg-[#FF2D78] blur-[140px] opacity-20 z-10 "
        />
        <CaseStudiesSection />
        <FaqSection />
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
}
