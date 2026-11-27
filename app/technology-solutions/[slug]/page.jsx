import { notFound } from "next/navigation";
import SolutionPage, { solutionMetadata } from "@/components/content/SolutionPage";
import { TECHNOLOGY_SOLUTIONS_ITEMS, getTechnologySolutionsItem } from "@/constants/technologySolutions";
import { TECHNOLOGY_SECTION } from "@/lib/solutions";

export async function generateStaticParams() {
  return TECHNOLOGY_SOLUTIONS_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getTechnologySolutionsItem(slug);
  return item ? solutionMetadata(item, TECHNOLOGY_SECTION) : {};
}

export default async function TechnologySolutionsDetailPage({ params }) {
  const { slug } = await params;
  const item = getTechnologySolutionsItem(slug);
  if (!item) notFound();

  return <SolutionPage item={item} section={TECHNOLOGY_SECTION} />;
}
