/**
 * Approved pages that aren't published yet (Kinetic LED, the Saudi Arabia
 * page, unpublished Insights posts) render under `npm run dev` with a
 * "Draft" banner, so they can be reviewed. Production builds never include
 * them: no page, no menu entry, no sitemap entry, no links to them.
 */
export const SHOW_DRAFTS = process.env.NODE_ENV === "development";
