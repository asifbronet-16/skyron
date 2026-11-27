import type { Metadata } from "next";
import { SITE } from "@/constants/site";

type PageMeta = {
  title: string;
  description: string;
  // Path of the page, e.g. "/blogs". Resolved against the layout's metadataBase.
  path: string;
  // Keeps the page out of search results while it has no real content yet
  // (links on it are still followed). Leave it out of the sitemap too.
  noindex?: boolean;
  // Link-preview image (1200×630, under /public). Defaults to the site-wide one.
  image?: string;
  // For an Insights post: marks the preview as an article, with its date.
  article?: { publishedTime: string; modifiedTime?: string; author: string };
};

// The site-wide link preview (LinkedIn, WhatsApp, X...). A service page uses
// /og/<slug>.jpg instead once that file exists (see SolutionPage.jsx).
export const DEFAULT_OG_IMAGE = "/og/default.jpg";

/**
 * Metadata for one page: title and description, plus the canonical URL and
 * the Open Graph / Twitter link previews, all pointing at that page.
 *
 * Next merges metadata shallowly, so these objects can't live in the root
 * layout: any page that set only a title would inherit them whole, telling
 * search engines it's a copy of the home page and sharing with the home
 * page's preview. Every page builds its own here instead.
 *
 * export const metadata = pageMetadata({ title: "Blogs — Skyron", description: "...", path: "/blogs" });
 */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
  image = DEFAULT_OG_IMAGE,
  article,
}: PageMeta): Metadata {
  const ogImage = { url: image, width: 1200, height: 630, alt: title };
  return {
    title,
    description,
    ...(noindex && { robots: { index: false, follow: true } }),
    alternates: { canonical: path },
    openGraph: {
      ...(article
        ? {
            type: "article",
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime ?? article.publishedTime,
            authors: [article.author],
          }
        : { type: "website" }),
      url: path,
      siteName: SITE.name,
      title,
      description,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
