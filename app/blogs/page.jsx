import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import BlogList from "@/components/BlogList";
import Reveal from "@/components/Reveal";
import PhotoBackground from "@/components/PhotoBackground";
import { BLOG_POSTS, INSIGHTS_LIVE, INSIGHTS_TOPICS } from "@/constants/blogs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Insights on Immersive Experience Design | Skyron",
  description:
    "Practical guides on projection mapping, holograms, anamorphic billboards and experience centres in the UAE and the Middle East, from the Skyron studio in Dubai.",
  path: "/blogs",
  // Out of search (and the menu and sitemap) until the first post is live.
  noindex: !INSIGHTS_LIVE,
});

export default function BlogsPage() {
  return (
    <main className="relative">
      <Navbar active="Insights" />

      <section className="relative overflow-hidden bg-[#08060f] px-6 pt-24 pb-8 sm:pt-44 sm:pb-24">
        <PhotoBackground
          images={["/assets/banners/blogs/1.webp", "/assets/banners/blogs/2.webp"]}
        />

        {/* vignette so the copy stays legible over the photo — same treatment as SolutionBanner */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,6,15,0.6)_0%,rgba(8,6,15,0.3)_40%,rgba(8,6,15,0.85)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#08060f]/80 via-[#08060f]/40 to-[#08060f]/80" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-60 top-[10%] h-130 w-130 rounded-full bg-[#FF2D78] opacity-20 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-55 bottom-0 h-130 w-130 rounded-full bg-[#31417D] opacity-30 blur-[100px]"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionHeading as="h1" lead="Insights" accent="from the studio" align="center" inline />
          </Reveal>

          <Reveal as="p" delay={100} className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            Practical notes on projection mapping, holograms, 3D billboards and experience
            centres: how they work, what they cost and how to plan them in the UAE and the
            Middle East.
          </Reveal>

          <Reveal as="p" delay={200} className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            We also share how we approach content creation and creative storytelling for
            interactive and immersive experiences.
          </Reveal>
        </div>
      </section>

      {/* A card appears only once its post is published (constants/blogs.ts). */}
      {BLOG_POSTS.length > 0 && (
        <section className="relative overflow-hidden bg-[#08060f] px-6 pb-8 sm:pb-28">
          <div className="relative mx-auto max-w-7xl">
            <BlogList posts={BLOG_POSTS} topics={INSIGHTS_TOPICS} />
          </div>
        </section>
      )}

      <CtaBanner />
      <Footer />
    </main>
  );
}
