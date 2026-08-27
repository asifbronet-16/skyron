import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import FeatureGrid from "@/components/FeatureGrid";
import Reveal from "@/components/Reveal";
import { TECHNOLOGY_SOLUTIONS_ITEMS, getTechnologySolutionsItem } from "@/constants/technologySolutions";

export async function generateStaticParams() {
  return TECHNOLOGY_SOLUTIONS_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getTechnologySolutionsItem(slug);
  if (!item) return {};

  return {
    title: `${item.label} — Skyron`,
    description: item.intro,
  };
}

export default async function TechnologySolutionsDetailPage({ params }) {
  const { slug } = await params;
  const item = getTechnologySolutionsItem(slug);

  if (!item) notFound();

  return (
    <main className="relative overflow-hidden">
      {/* glows are scoped to this wrapper (hero → CtaBanner) instead of the hero
          section alone, so the ambient wash bleeds across the sections below it
          instead of getting clipped at the hero's own overflow-hidden edge */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-60 top-[10%] z-10 h-130 w-130 rounded-full bg-[#FF2D78] opacity-20 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-55 bottom-0 z-10 h-130 w-130 rounded-full bg-[#31417D] opacity-30 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[8%] z-10 h-130 w-130 -translate-x-1/2 rounded-full bg-[#5f30ca] opacity-15 blur-[130px]"
        />

        <Navbar active="What We Do" />

        <section className="relative overflow-hidden bg-[#08060f] pt-36 pb-24 sm:pt-44 sm:pb-28">
          <div className="relative mx-auto max-w-4xl px-6">
            <Reveal className="flex items-center gap-4">
              <span className="h-0.5 w-16 bg-linear-to-r from-transparent via-[#5f30ca] to-[#317890]" />
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#5f30ca]">
                {item.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={100}>
              <SectionHeading lead={item.heading.lead} accent={item.heading.accent} className="mt-6" />
            </Reveal>

            <Reveal as="p" delay={200} className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              {item.intro}
            </Reveal>

            {item.body.length > 0 && (
              <div className="mt-8 space-y-5">
                {item.body.map((paragraph, i) => (
                  <Reveal as="p" key={i} delay={280 + i * 80} className="max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
                    {paragraph}
                  </Reveal>
                ))}
              </div>
            )}

            {item.highlights.length > 0 && (
              <div className="mt-14 grid gap-5 sm:grid-cols-2">
                {item.highlights.map((highlight, i) => (
                  <Reveal key={highlight.title} delay={Math.min(i, 4) * 90} distance={24}>
                    <div className="relative overflow-hidden rounded-xl border border-white/8 bg-white/3 p-6 backdrop-blur-sm">
                      <h3 className="text-base font-semibold text-white">{highlight.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">{highlight.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {item.features && <FeatureGrid {...item.features} />}

        <CtaBanner />
      </div>

      <Footer />
    </main>
  );
}
