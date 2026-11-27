import { existsSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionBanner from "@/components/SolutionBanner";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import Blocks, { Breadcrumbs, RelatedServices } from "@/components/content/Blocks";
import { ChevronRight } from "@/components/icons";
import JsonLd from "@/components/JsonLd";
import DraftNotice from "@/components/content/DraftNotice";
import { PATHS } from "@/constants/paths";
import { pageMetadata } from "@/lib/metadata";
import { isLive } from "@/lib/routes";
import { serviceGraph } from "@/lib/schema";

/**
 * Metadata for a service page: its approved title and meta description, and
 * its own link preview once public/og/<slug>.jpg exists (1200×630).
 */
export function solutionMetadata(item, section) {
  const ownImage = `/og/${item.slug}.jpg`;
  return pageMetadata({
    title: item.seo.title,
    description: item.seo.description,
    path: `${section.href}/${item.slug}`,
    ...(existsSync(path.join(process.cwd(), "public", ownImage)) && { image: ownImage }),
  });
}

/**
 * One service page (/creative-solutions/[slug], /technology-solutions/[slug])
 * or market page (/markets/saudi-arabia), built from its entry in constants/:
 * banner with breadcrumb and H1, intro, its sections, Related services and
 * its own CTA band. `areaServed` is the Service schema's (country codes).
 */
export default function SolutionPage({ item, section, areaServed }) {
  const path = `${section.href}/${item.slug}`;
  const breadcrumb = [
    { label: "Home", href: PATHS.home },
    { label: section.label, href: section.href },
    { label: item.navLabel, href: path },
  ];

  return (
    <main className="relative overflow-hidden">
      <JsonLd
        data={serviceGraph({
          name: item.navLabel,
          serviceType: item.hub.title,
          path,
          // Every crumb in the schema needs a page; one without (e.g. Markets) is left out.
          crumbs: breadcrumb.filter((crumb) => crumb.href === path || isLive(crumb.href)),
          ...(areaServed && { areaServed }),
        })}
      />
      {item.live === false && <DraftNotice />}
      <Navbar active="What We Do" />

      <SolutionBanner images={item.banner.images} title={item.h1} className="mt-16">
        <Breadcrumbs items={breadcrumb} />
      </SolutionBanner>

      {/* glows are scoped to this wrapper (intro → CtaBanner), not SolutionBanner —
          that component already carries its own self-contained glow/shine treatment,
          so layering the page-level ambient wash on top of it would fight its look. */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 z-10 h-100 w-100 rounded-full bg-[#31417D] opacity-20 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 z-10 h-100 w-100 rounded-full bg-[#5f30ca] opacity-20 blur-[110px]"
        />

        <section className="relative overflow-hidden bg-[#08060f] px-6 pt-10 pb-4 sm:pt-20 sm:pb-8">
          <div className="relative mx-auto max-w-4xl">
            {item.intro.map((paragraph, i) => (
              <Reveal
                as="p"
                key={i}
                delay={i * 80}
                className={`max-w-3xl leading-relaxed ${i === 0 ? "text-base text-white/75 sm:text-lg" : "mt-5 text-sm text-white/60 sm:text-base"}`}
              >
                <RichText text={paragraph} />
              </Reveal>
            ))}

            {item.buttons && (
              <Reveal delay={200} className="mt-8 flex flex-wrap items-center gap-4">
                {item.buttons.map((button, i) =>
                  i === 0 ? (
                    <Link
                      key={button.label}
                      href={button.href}
                      className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#9B1FA8_0%,#7B2C9E_35%,#2A7F92_100%)] py-2 pl-7 pr-2 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
                    >
                      {button.label}
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                        <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
                      </span>
                    </Link>
                  ) : (
                    <Link
                      key={button.label}
                      href={button.href}
                      className="rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/5"
                    >
                      {button.label}
                    </Link>
                  )
                )}
              </Reveal>
            )}
          </div>
        </section>

        <Blocks blocks={item.sections} />

        <RelatedServices paths={item.related} />

        <CtaBanner heading={item.cta.heading} text={item.cta.text} button={item.cta.button} />
      </div>

      <Footer />
    </main>
  );
}
