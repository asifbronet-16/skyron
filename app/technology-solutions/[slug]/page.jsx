import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionBanner from "@/components/SolutionBanner";
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
      <Navbar active="What We Do" />

      <SolutionBanner
        images={item.banner?.images}
        eyebrow={item.eyebrow}
        label={item.label}
        className="mt-16"
      />

      {/* glows are scoped to this wrapper (intro → CtaBanner), not SolutionBanner —
          that component already carries its own self-contained glow/shine treatment,
          so layering the page-level ambient wash on top of it would fight its look.
          Scoping starts here instead, and the wash bleeds across everything below it
          rather than getting clipped at any one section's own overflow-hidden edge. */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 z-10 h-100 w-100 rounded-full bg-[#31417D] opacity-20 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 z-10 h-100 w-100 rounded-full bg-[#5f30ca] opacity-20 blur-[110px]"
        />

        <section className="relative overflow-hidden bg-[#08060f] px-6 py-8 sm:py-20">
          <div className="relative mx-auto max-w-4xl">
            {item.intro && (
              <Reveal as="p" className="max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                {item.intro}
              </Reveal>
            )}

            {item.body.length > 0 && (
              <div className="mt-8 space-y-5">
                {item.body.map((paragraph, i) => (
                  <Reveal as="p" key={i} delay={100 + i * 80} className="max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
                    {paragraph}
                  </Reveal>
                ))}
              </div>
            )}

            {item.highlights.length > 0 && (
              <div className="mt-8 sm:mt-14 grid gap-5 sm:grid-cols-2">
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
