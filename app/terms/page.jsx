import { notFound } from "next/navigation";
import LegalPage from "@/components/content/LegalPage";
import { TERMS } from "@/constants/legal";
import { PATHS } from "@/constants/paths";
import { pageMetadata } from "@/lib/metadata";

// Answers 404 until Skyron's text is in constants/legal.ts.
export const metadata = TERMS
  ? pageMetadata({ title: TERMS.seo.title, description: TERMS.seo.description, path: PATHS.terms })
  : {};

export default function TermsPage() {
  if (!TERMS) notFound();
  return <LegalPage doc={TERMS} />;
}
