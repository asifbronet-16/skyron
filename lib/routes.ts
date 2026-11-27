import { BLOG_POSTS, INSIGHTS_LIVE } from "@/constants/blogs";
import { CASE_STUDIES_LIVE } from "@/constants/caseStudies";
import { CREATIVE_SOLUTIONS_ITEMS } from "@/constants/creativeSolutions";
import { PRIVACY_POLICY, TERMS } from "@/constants/legal";
import { SAUDI_ARABIA_LIVE } from "@/constants/markets";
import { PATHS } from "@/constants/paths";
import { TECHNOLOGY_SOLUTIONS_ITEMS } from "@/constants/technologySolutions";

// Pages that always exist (a page.jsx under app/).
const ALWAYS_LIVE = new Set<string>([
  PATHS.home,
  PATHS.whoWeAre,
  PATHS.ourApproach,
  PATHS.industries,
  PATHS.careers,
  PATHS.contact,
  PATHS.creativeSolutions,
  PATHS.technologySolutions,
]);

/**
 * Whether an internal link has a published page behind it. The copy links
 * to pages that are approved but not published yet (Kinetic LED, the Saudi
 * Arabia page, the Insights posts, the legal pages...); those links stay out
 * of the site until the page goes live, then appear without touching the
 * content. External links always count as live.
 */
export function isLive(href: string): boolean {
  if (!href.startsWith("/")) return true;
  const path = href.split(/[?#]/)[0] || "/";

  if (ALWAYS_LIVE.has(path)) return true;
  if (path === PATHS.caseStudies) return CASE_STUDIES_LIVE;
  if (path === PATHS.insights) return INSIGHTS_LIVE;
  if (path === PATHS.saudiArabia) return SAUDI_ARABIA_LIVE;
  if (path === PATHS.privacyPolicy) return PRIVACY_POLICY !== null;
  if (path === PATHS.terms) return TERMS !== null;
  if (path.startsWith(`${PATHS.insights}/`)) {
    return BLOG_POSTS.some((post) => `${PATHS.insights}/${post.slug}` === path);
  }
  if (path.startsWith(`${PATHS.creativeSolutions}/`)) {
    return CREATIVE_SOLUTIONS_ITEMS.some((item) => `${PATHS.creativeSolutions}/${item.slug}` === path);
  }
  if (path.startsWith(`${PATHS.technologySolutions}/`)) {
    return TECHNOLOGY_SOLUTIONS_ITEMS.some((item) => `${PATHS.technologySolutions}/${item.slug}` === path);
  }
  return false;
}
