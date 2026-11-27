import { notFound } from "next/navigation";
import LegalPage from "@/components/content/LegalPage";
import { PRIVACY_POLICY } from "@/constants/legal";
import { PATHS } from "@/constants/paths";
import { pageMetadata } from "@/lib/metadata";

// Answers 404 until Skyron's text is in constants/legal.ts.
export const metadata = PRIVACY_POLICY
  ? pageMetadata({ title: PRIVACY_POLICY.seo.title, description: PRIVACY_POLICY.seo.description, path: PATHS.privacyPolicy })
  : {};

export default function PrivacyPolicyPage() {
  if (!PRIVACY_POLICY) notFound();
  return <LegalPage doc={PRIVACY_POLICY} />;
}
