import type { NextConfig } from "next";
import { LEGACY_WORDPRESS_POST_SLUGS } from "./constants/blogs";
import { CREATIVE_SOLUTIONS_ITEMS } from "./constants/creativeSolutions";
import { SITE } from "./constants/site";
import { TECHNOLOGY_SOLUTIONS_ITEMS } from "./constants/technologySolutions";

type Redirect = {
  source: string;
  destination: string;
  permanent: boolean;
  has?: { type: "host"; value: string }[];
};

// www.skyron.me answered with the same pages as skyron.me, and Google indexed
// both. Every www URL now redirects to the same path on the bare domain.
function canonicalHostRedirect(): Redirect {
  const host = new URL(SITE.url).hostname;
  return {
    source: "/:path*",
    // `value` is a regex, matched against the whole Host header.
    has: [{ type: "host", value: `www.${host}`.replace(/\./g, "\\.") }],
    destination: `${SITE.url}/:path*`,
    permanent: true,
  };
}

// Old WordPress URLs Google still crawls. The WP site served pages and posts
// at the root (/2d-content-creation/, /anamorphic-billboard-frame-by-frame)
// and date archives at /YYYY/MM/DD/. Order matters: first match wins.
//
// /blogs/<slug> is deliberately not redirected: a post that isn't published
// must answer 404, not send people (and Google) to the listing.
function legacyWordPressRedirects(): Redirect[] {
  const to = (source: string, destination: string): Redirect => ({
    source,
    destination,
    permanent: true,
  });

  return [
    ...CREATIVE_SOLUTIONS_ITEMS.map((item) =>
      to(`/${item.slug}`, `/creative-solutions/${item.slug}`)
    ),
    ...TECHNOLOGY_SOLUTIONS_ITEMS.map((item) =>
      to(`/${item.slug}`, `/technology-solutions/${item.slug}`)
    ),
    ...LEGACY_WORDPRESS_POST_SLUGS.map((slug) => to(`/${slug}`, "/blogs")),
    // Any date archive or dated post: /2025, /2025/01, /2025/01/02/whatever.
    to("/:year(\\d{4})/:rest*", "/blogs"),
  ];
}

// Security headers on every response, as specified in the developer handoff
// (fix 13). HSTS with includeSubDomains + preload makes browsers refuse plain
// HTTP on skyron.me and every subdomain for two years: every subdomain must
// serve HTTPS before this ships.
const SECURITY_HEADERS = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Serve AVIF where the browser supports it, WebP otherwise (handoff fix 19).
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [
      { source: "/(.*)", headers: SECURITY_HEADERS },
      // The hero videos (public/assets/*.mp4) were sent with max-age=0. Their
      // names don't change with their content, so give a video a new file
      // name when it's replaced, or visitors keep the old one for a year.
      {
        source: "/assets/:file(.*\\.mp4)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  experimental: {
    serverActions: {
      // Room for a CV upload on /careers (capped at 2.5MB in constants/careers.ts)
      // plus the rest of the form. The default is 1MB.
      bodySizeLimit: "3mb",
    },
  },
  async redirects() {
    return [canonicalHostRedirect(), ...legacyWordPressRedirects()];
  },
};

export default nextConfig;
