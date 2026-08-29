import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";
import PhotoBackground from "@/components/PhotoBackground";
import { BLOG_POSTS } from "@/constants/blogs";

export const metadata = {
  title: "Blogs — Skyron",
  description:
    "Field notes from Skyron on spatial design, immersive technology, and the craft behind experiences that stick.",
};

export default function BlogsPage() {
  return (
    <main className="relative">
      <Navbar active="Blogs" />

      <section className="relative overflow-hidden bg-[#08060f] px-6 pt-36 pb-20 sm:pt-44 sm:pb-24">
        <PhotoBackground
          images={["/assets/banners/blogs/1.jpeg", "/assets/banners/blogs/2.jpeg"]}
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
          <Reveal className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-16 bg-linear-to-r from-transparent via-[#5f30ca] to-[#317890]" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#8b7bd8]">
              Blogs
            </span>
            <span className="h-0.5 w-16 bg-linear-to-r from-[#317890] via-[#5f30ca] to-transparent" />
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading lead="From The Studio" accent="Field Notes" align="center" className="mt-6" />
          </Reveal>

          <Reveal as="p" delay={200} className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            Thinking out loud about spatial design, immersive technology, and the craft behind
            experiences that stick.
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#08060f] px-6 pb-20 sm:pb-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={Math.min(i, 4) * 90} distance={28} className="h-full">
                <BlogCard
                  {...post}
                  href={`/blogs/${post.slug}`}
                  index={i}
                  priority={i === 0}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
