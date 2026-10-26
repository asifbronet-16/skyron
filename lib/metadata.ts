import type { Metadata } from "next";
import { SITE } from "@/constants/site";

type PageMeta = {
  title: string;
  description: string;
  // Path of the page, e.g. "/blogs". Resolved against the layout's metadataBase.
  path: string;
};

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
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE.name,
      title,
      description,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
