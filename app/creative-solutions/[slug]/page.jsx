import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionBanner from "@/components/SolutionBanner";
import CtaBanner from "@/components/CtaBanner";
import FeatureGrid from "@/components/FeatureGrid";
import { CREATIVE_SOLUTIONS_ITEMS, getCreativeSolutionsItem } from "@/constants/creativeSolutions";

export async function generateStaticParams() {
  return CREATIVE_SOLUTIONS_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getCreativeSolutionsItem(slug);
  if (!item) return {};

  return {
    title: `${item.label} — Skyron`,
    description: item.intro,
  };
}

export default async function CreativeSolutionsDetailPage({ params }) {
  const { slug } = await params;
  const item = getCreativeSolutionsItem(slug);

  if (!item) notFound();

  return (
    <main className="relative">
      <Navbar active="What We Do" />

      <SolutionBanner
        images={item.banner?.images}
        eyebrow={item.eyebrow}
        label={item.label}
        className="mt-16"
      />

      {(item.intro || item.body.length > 0 || item.highlights.length > 0) && (
        <section className="relative overflow-hidden bg-[#08060f] px-6 py-16 sm:py-20">
          <div className="relative mx-auto max-w-4xl">
            {item.intro && (
              <p className="max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                {item.intro}
              </p>
            )}

            {item.body.length > 0 && (
              <div className="mt-8 space-y-5">
                {item.body.map((paragraph, i) => (
                  <p key={i} className="max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {item.highlights.length > 0 && (
              <div className="mt-14 grid gap-5 sm:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-sm"
                  >
                    <h3 className="text-base font-semibold text-white">{highlight.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{highlight.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {item.features && <FeatureGrid {...item.features} />}

      <CtaBanner />
      <Footer />
    </main>
  );
}
