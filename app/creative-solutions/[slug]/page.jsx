import { notFound } from "next/navigation";
import SolutionPage, { solutionMetadata } from "@/components/content/SolutionPage";
import { CREATIVE_SOLUTIONS_ITEMS, getCreativeSolutionsItem } from "@/constants/creativeSolutions";
import { CREATIVE_SECTION } from "@/lib/solutions";

export async function generateStaticParams() {
  return CREATIVE_SOLUTIONS_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getCreativeSolutionsItem(slug);
  return item ? solutionMetadata(item, CREATIVE_SECTION) : {};
}

export default async function CreativeSolutionsDetailPage({ params }) {
  const { slug } = await params;
  const item = getCreativeSolutionsItem(slug);
  if (!item) notFound();

  return <SolutionPage item={item} section={CREATIVE_SECTION} />;
}
