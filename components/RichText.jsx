import Link from "next/link";
import { isLive } from "@/lib/routes";

/**
 * Renders a copy string with its light markup (see `Rich` in
 * constants/types.ts): **bold** and [words](/path). A link whose page isn't
 * live yet renders as its plain words, so approved copy can name pages
 * before they exist.
 *
 * <RichText text="**Rent** for one-off events…" />
 */
export default function RichText({ text }) {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      return isLive(href) ? (
        <Link
          key={i}
          href={href}
          className="text-white/90 underline decoration-violet-400/50 underline-offset-4 transition-colors hover:text-white hover:decoration-violet-300"
        >
          {label}
        </Link>
      ) : (
        label
      );
    }
    return part;
  });
}
