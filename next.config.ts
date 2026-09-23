import type { NextConfig } from "next";
import { BLOG_POSTS, BLOG_POST_PAGES_LIVE } from "./constants/blogs";
import { CREATIVE_SOLUTIONS_ITEMS } from "./constants/creativeSolutions";
import { TECHNOLOGY_SOLUTIONS_ITEMS } from "./constants/technologySolutions";

type Redirect = { source: string; destination: string; permanent: boolean };

// Old WordPress URLs Google still crawls. The WP site served pages and posts
// at the root (/2d-content-creation/, /anamorphic-billboard-frame-by-frame)
// and date archives at /YYYY/MM/DD/. Order matters: first match wins.
function legacyWordPressRedirects(): Redirect[] {
  const to = (source: string, destination: string): Redirect => ({
    source,
    destination,
    permanent: true,
  });
  const postPath = (slug: string) => (BLOG_POST_PAGES_LIVE ? `/blogs/${slug}` : "/blogs");

  return [
    ...CREATIVE_SOLUTIONS_ITEMS.map((item) =>
      to(`/${item.slug}`, `/creative-solutions/${item.slug}`)
    ),
    ...TECHNOLOGY_SOLUTIONS_ITEMS.map((item) =>
      to(`/${item.slug}`, `/technology-solutions/${item.slug}`)
    ),
    ...BLOG_POSTS.map((post) => to(`/${post.slug}`, postPath(post.slug))),
    // Date-style post permalinks for posts we still have.
    ...BLOG_POSTS.map((post) =>
      to(`/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/${post.slug}`, postPath(post.slug))
    ),
    // Until post pages exist, /blogs/<slug> (linked from the blog cards and
    // already indexed) 404s — send it to the listing. Only known slugs, so
    // this can never shadow a real post page later.
    ...(BLOG_POST_PAGES_LIVE
      ? []
      : BLOG_POSTS.map((post) => to(`/blogs/${post.slug}`, "/blogs"))),
    // Any other date archive or dated post: /2025, /2025/01, /2025/01/02/whatever.
    to("/:year(\\d{4})/:rest*", "/blogs"),
  ];
}

const nextConfig: NextConfig = {
  async redirects() {
    return legacyWordPressRedirects();
  },
};

export default nextConfig;
