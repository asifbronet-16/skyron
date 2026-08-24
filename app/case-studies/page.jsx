import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import CaseStudyCard from "@/components/home/CaseStudyCard";
import { CASE_STUDIES_ITEMS } from "@/constants/caseStudies";

export const metadata = {
  title: "Case Studies — Skyron",
  description:
    "Featured work from Skyron — experiential content, brand activations, and spatial installations built to be remembered.",
};

export default function CaseStudiesPage() {
  return (
    <main className="relative">
      <Navbar active="Case Studies" />

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
              Case Studies
            </span>
            <span className="h-0.5 w-16 bg-linear-to-r from-[#317890] via-[#5f30ca] to-transparent" />
          </div>

          <SectionHeading lead="Where Creativity" accent="Meets Experience" align="center" className="mt-6" />

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            A look at the experiences we&apos;ve shipped — from AI-driven brand activations to spatial
            installations built for scale.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#08060f] px-6 pb-20 sm:pb-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {CASE_STUDIES_ITEMS.map((item, i) => (
              <CaseStudyCard key={item.title} {...item} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
