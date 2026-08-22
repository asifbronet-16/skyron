import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import FaqSection from "@/components/home/FaqSection";
import EmpoweringSection from "@/components/home/EmpoweringSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import ServicesSection from "@/components/home/ServicesSection";

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
