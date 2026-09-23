import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";
import { BLOG_POSTS, BLOG_POST_PAGES_LIVE } from "@/constants/blogs";
import { CREATIVE_SOLUTIONS_ITEMS } from "@/constants/creativeSolutions";
import { TECHNOLOGY_SOLUTIONS_ITEMS } from "@/constants/technologySolutions";

// Every static page.jsx under app/. Add new top-level pages here.
const STATIC_ROUTES = [
  "/",
  "/who-we-are",
  "/our-approach",
  "/industries",
  "/creative-solutions",
  "/technology-solutions",
  "/case-studies",
  "/blogs",
];

// Dynamic routes read the same lists as their generateStaticParams, so a new
// solution or blog post shows up here without touching this file.
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE.url}${path === "/" ? "" : path}`;

  return [
    ...STATIC_ROUTES.map((path) => ({
      url: url(path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...CREATIVE_SOLUTIONS_ITEMS.map((item) => ({
      url: url(`/creative-solutions/${item.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...TECHNOLOGY_SOLUTIONS_ITEMS.map((item) => ({
      url: url(`/technology-solutions/${item.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...(BLOG_POST_PAGES_LIVE
      ? BLOG_POSTS.map((post) => ({
          url: url(`/blogs/${post.slug}`),
          lastModified: new Date(post.date),
          changeFrequency: "yearly" as const,
          priority: 0.6,
        }))
      : []),
  ];
}
