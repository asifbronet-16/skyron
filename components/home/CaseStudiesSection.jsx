import CaseStudyCard from "./CaseStudyCard";
import SectionHeading from "@/components/SectionHeading";
import { CASE_STUDIES_ITEMS } from "@/constants/caseStudies";

export default function CaseStudiesSection({ items = CASE_STUDIES_ITEMS }) {
  return (
    <section className="relative overflow-hidden  py-20 sm:py-28">
      {/* ambient glow */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[140px]"
      /> */}

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <SectionHeading lead="Where Creativity" accent="Meets Experience" />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, i) => (
            <CaseStudyCard key={item.title} {...item} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
