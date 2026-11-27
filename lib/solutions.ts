import { CREATIVE_SOLUTIONS_ITEMS } from "@/constants/creativeSolutions";
import { PATHS } from "@/constants/paths";
import { TECHNOLOGY_SOLUTIONS_ITEMS } from "@/constants/technologySolutions";
import type { SolutionItem } from "@/constants/types";

export type SolutionSection = { label: string; href: string };

export const CREATIVE_SECTION: SolutionSection = { label: "Creative Solutions", href: PATHS.creativeSolutions };
export const TECHNOLOGY_SECTION: SolutionSection = { label: "Technology Solutions", href: PATHS.technologySolutions };

export type SolutionEntry = SolutionItem & { href: string; section: SolutionSection };

/** Every service page, with its URL and the hub it sits under. */
export const ALL_SOLUTIONS: SolutionEntry[] = [
  ...CREATIVE_SOLUTIONS_ITEMS.map((item) => ({
    ...item,
    href: `${PATHS.creativeSolutions}/${item.slug}`,
    section: CREATIVE_SECTION,
  })),
  ...TECHNOLOGY_SOLUTIONS_ITEMS.map((item) => ({
    ...item,
    href: `${PATHS.technologySolutions}/${item.slug}`,
    section: TECHNOLOGY_SECTION,
  })),
];

/** The service page at `path`, if it's live. */
export function findSolution(path: string): SolutionEntry | undefined {
  return ALL_SOLUTIONS.find((item) => item.href === path);
}
