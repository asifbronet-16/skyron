import CaseStudyCard from "./CaseStudyCard";
import SectionHeading from "@/components/SectionHeading";

const defaultItems = [
  {
    tag: "Featured Work",
    title: "Future-Proof Your Business AI Projects",
    description:
      "End-to-end experiential content that blends AI-powered generation with live creative direction for unforgettable brand moments.",
    image: "/assets/CaseStudy/Business-Projects.png",
    href: "/work/future-proof",
  },
  {
    tag: "Innovation",
    title: "AI-Powered Projects for Scalable Success",
    description:
      "Intelligent experience systems that adapt to audience behavior in real-time, driving deeper engagement at every touchpoint.",
    image: "/assets/CaseStudy/AI-Powered.png",
    href: "/work/ai-powered",
  },
  {
    tag: "Efficiency",
    title: "Tailored AI Projects for Maximum Efficiency",
    description:
      "Custom-built immersive environments calibrated to your brand identity, audience profile, and measurable KPIs.",
    image: "/assets/CaseStudy/Maximum-Efficiency.png",
    href: "/work/tailored",
  },
  {
    tag: "Strategy",
    title: "Smarter Spatial Design at Scale",
    description:
      "Scalable experience frameworks that grow with your brand — from flagship installations to global rollouts.",
    image: "/assets/CaseStudy/Spatial-Design.png",
    href: "/work/spatial-design",
  },
];

export default function CaseStudiesSection({ items = defaultItems }) {
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
