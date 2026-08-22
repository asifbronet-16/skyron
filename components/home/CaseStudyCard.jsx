import Image from "next/image";
import Link from "next/link";

/**
 * One card from the "Where Creativity Meets Experience" grid.
 * Images are expected in /public (e.g. /work/ai-projects.jpg).
 */
export default function CaseStudyCard({
  tag,
  title,
  description,
  image,
  href = "#",
  cta = "View case study",
  priority = false,
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/6 bg-linear-to-b from-white/5 to-white/1 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_60px_-24px_rgba(99,102,241,0.45)] motion-reduce:transform-none motion-reduce:transition-none">
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 90vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04] motion-reduce:transform-none"
        />
        <div className="pointer-events-none absolute inset-x-0 w-full h-full opacity-40 bg-[#0d0c14] to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        {/* gradient hairline pill */}
        <span className="w-fit rounded-full bg-linear-to-r from-violet-500/70 to-sky-400/70 p-0.5">
          <span className="block rounded-full bg-[#0B0B12] px-6 py-1.5 text-[0.6rem] font-semibold tracking-wide text-white">
            {tag}
          </span>
        </span>

        <h3 className="text-base font-normal leading-snug text-white">{title}</h3>

        <p className="text-xs leading-normal text-slate-400">{description}</p>

        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[0.65rem] font-medium text-sky-400 transition-colors hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080D]"
        >
          {cta}
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
          >
            <path
              d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
