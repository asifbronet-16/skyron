import { notFound } from "next/navigation";
import SolutionPage, { solutionMetadata } from "@/components/content/SolutionPage";
import { MARKETS_SECTION, SAUDI_ARABIA, SAUDI_ARABIA_LIVE } from "@/constants/markets";

// Answers 404 until the page is approved for publishing (constants/markets.ts).
export const metadata = SAUDI_ARABIA_LIVE ? solutionMetadata(SAUDI_ARABIA, MARKETS_SECTION) : {};

export default function SaudiArabiaPage() {
  if (!SAUDI_ARABIA_LIVE) notFound();
  return <SolutionPage item={SAUDI_ARABIA} section={MARKETS_SECTION} areaServed={["SA"]} />;
}
