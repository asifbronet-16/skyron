import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";
import { BLOG_POSTS, INSIGHTS_LIVE } from "@/constants/blogs";
import { CASE_STUDIES_LIVE } from "@/constants/caseStudies";
import { PATHS } from "@/constants/paths";
import { isLive } from "@/lib/routes";
import { CREATIVE_SOLUTIONS_ITEMS } from "@/constants/creativeSolutions";
import { TECHNOLOGY_SOLUTIONS_ITEMS } from "@/constants/technologySolutions";

// Every static page.jsx under app/ that search engines should index. Add new
// top-level pages here. /case-studies and /blogs are noindex until they have
// real content, and the Saudi Arabia and legal pages 404 until they're
// published, so each joins only then.
const STATIC_ROUTES = [
  "/",
  "/who-we-are",
  "/our-approach",
  "/industries",
  "/creative-solutions",
  "/technology-solutions",
  ...(CASE_STUDIES_LIVE ? ["/case-studies"] : []),
  ...(INSIGHTS_LIVE ? ["/blogs"] : []),
  "/careers",
  "/contact",
  ...[PATHS.saudiArabia, PATHS.privacyPolicy, PATHS.terms].filter(isLive),
];

// When each page's content last really changed, for lastModified. Every
// page got its approved copy in the 2026 content update; when you change a
// page later, add its path here with the date of that change.
const CONTENT_UPDATED = "2026-11-27";
const LAST_MODIFIED: Record<string, string> = {};

// Dynamic routes read the same lists as their generateStaticParams, so a new
// solution or blog post shows up here without touching this file.
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE.url}${path === "/" ? "" : path}`;
  const lastModified = (path: string) => new Date(LAST_MODIFIED[path] ?? CONTENT_UPDATED);

  return [
    ...STATIC_ROUTES.map((path) => ({
      url: url(path),
      lastModified: lastModified(path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...CREATIVE_SOLUTIONS_ITEMS.map((item) => ({
      url: url(`/creative-solutions/${item.slug}`),
      lastModified: lastModified(`/creative-solutions/${item.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...TECHNOLOGY_SOLUTIONS_ITEMS.map((item) => ({
      url: url(`/technology-solutions/${item.slug}`),
      lastModified: lastModified(`/technology-solutions/${item.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Drafts (no date) only exist under `npm run dev`.
    ...BLOG_POSTS.map((post) => ({
      url: url(`/blogs/${post.slug}`),
      lastModified: new Date(post.updated ?? post.date ?? CONTENT_UPDATED),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
