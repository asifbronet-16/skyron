/**
 * The legal pages, /privacy-policy and /terms. Their text comes from Skyron
 * after legal review; until it's pasted in here, each page answers 404 and
 * every link to it (footer, the line under the forms) stays hidden.
 *
 * Fill one in like this, as headings and paragraphs (see ArticleNode in
 * constants/types.ts):
 *
 * export const PRIVACY_POLICY: LegalDoc | null = {
 *   seo: { title: "Privacy Policy | Skyron", description: "How Skyron collects and uses personal data." },
 *   h1: "Privacy Policy",
 *   updated: "2026-12-15",
 *   body: [{ h2: "Who we are" }, { p: "..." }],
 * };
 */
import type { LegalDoc } from "./types";

export const PRIVACY_POLICY: LegalDoc | null = null;

export const TERMS: LegalDoc | null = null;
