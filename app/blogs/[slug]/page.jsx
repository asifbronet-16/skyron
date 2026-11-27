import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import ArticleBody from "@/components/content/ArticleBody";
import DraftNotice from "@/components/content/DraftNotice";
import { Breadcrumbs, MoreLink, RelatedServices } from "@/components/content/Blocks";
import { BLOG_POSTS } from "@/constants/blogs";
import { PATHS } from "@/constants/paths";
import { DEFAULT_OG_IMAGE, pageMetadata } from "@/lib/metadata";
import { isLive } from "@/lib/routes";
import { articleGraph } from "@/lib/schema";

// Only published posts get a page; any other /blogs/<slug> answers 404.
export const dynamicParams = false;

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

const getPost = (slug) => BLOG_POSTS.find((post) => post.slug === slug);

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.seo.title,
    description: post.seo.description,
    path: `${PATHS.insights}/${post.slug}`,
    ...(post.date && {
      article: { publishedTime: post.date, modifiedTime: post.updated, author: post.author.name },
    }),
  });
}

export default async function InsightsPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `${PATHS.insights}/${post.slug}`;
  const breadcrumb = [
    { label: "Home", href: PATHS.home },
    { label: "Insights", href: PATHS.insights },
    { label: post.title, href: path },
  ];
  const reading = post.relatedReading.filter((link) => isLive(link.href));
  const byline = [post.author.role ? `${post.author.name}, ${post.author.role}` : post.author.name, `About ${post.readTime}`];

  return (
    <main className="relative overflow-hidden">
      {post.date && (
        <JsonLd
          data={articleGraph({
            headline: post.h1,
            path,
            author: post.author,
            datePublished: post.date,
            dateModified: post.updated,
            image: post.image ?? DEFAULT_OG_IMAGE,
            crumbs: breadcrumb,
          })}
        />
      )}
      {!post.date && <DraftNotice>Draft: no publish date set, so this post isn&apos;t published. Only visible in development.</DraftNotice>}

      <Navbar active="Insights" />

      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-60 top-[5%] z-10 h-130 w-130 rounded-full bg-[#FF2D78] opacity-15 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-55 top-[40%] z-10 h-130 w-130 rounded-full bg-[#31417D] opacity-30 blur-[110px]"
        />

        <article className="relative bg-[#08060f] px-6 pt-28 pb-12 sm:pt-44 sm:pb-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Breadcrumbs items={breadcrumb} className="[&_ol]:justify-start" />
              <h1 className="mt-6 text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {post.h1}
              </h1>
              <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/50">
                {byline.map((part, i) => (
                  <span key={part} className="flex items-center gap-3">
                    {i > 0 && <span aria-hidden="true">·</span>}
                    {part}
                  </span>
                ))}
                {post.date && (
                  <span className="flex items-center gap-3">
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </span>
                )}
              </p>
            </Reveal>

            <ArticleBody nodes={post.body} />

            {reading.length > 0 && (
              <aside className="mt-14 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-white">Related reading</p>
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {reading.map((link) => (
                    <li key={link.href}>
                      <MoreLink link={link} />
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </article>

        <RelatedServices paths={post.related} />
        <CtaBanner />
      </div>

      <Footer />
    </main>
  );
}
