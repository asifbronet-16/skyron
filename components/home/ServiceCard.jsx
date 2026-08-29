import Image from "next/image";

const ACCENTS = {
  violet: {
    number: "bg-linear-to-br from-violet-300 via-violet-500 to-violet-700",
    rule: "from-transparent via-violet-500 to-transparent",
    check: "text-violet-400",
    glow: "hover:shadow-[0_24px_60px_-28px_rgba(139,92,246,0.7)] hover:border-violet-500/30",
  },
  cyan: {
   number: "bg-linear-to-br from-cyan-200 via-cyan-400 to-teal-600",
    rule: "from-transparent via-cyan-400 to-transparent",
    check: "text-cyan-400",
    glow: "hover:shadow-[0_24px_60px_-28px_rgba(34,211,238,0.6)] hover:border-cyan-400/30",
  },
  rose: {
    number: "bg-linear-to-br from-rose-300 via-rose-500 to-rose-800",
    rule: "from-transparent via-rose-500 to-transparent",
    check: "text-rose-500",
    glow: "hover:shadow-[0_24px_60px_-28px_rgba(244,63,94,0.6)] hover:border-rose-500/30",
  },
  purple: {
    number: "bg-linear-to-br from-purple-300 via-purple-500 to-fuchsia-700",
    rule: "from-transparent via-purple-500 to-transparent",
    check: "text-purple-400",
    glow: "hover:shadow-[0_24px_60px_-28px_rgba(168,85,247,0.65)] hover:border-purple-500/30",
  },
};

function CheckIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={`h-4 w-4 shrink-0 ${className}`}>
      <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M6.5 10.2 9 12.6l4.5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * One numbered service card. `accent` is one of: violet | cyan | rose | purple.
 * Class names are looked up from a map so Tailwind can see them at build time.
 *
 * `image` is optional — when set, it fades in behind the copy on hover/focus,
 * same treatment as FeatureGrid's cards.
 */
export default function ServiceCard({
  number,
  title,
  description,
  points = [],
  accent = "violet",
  image,
  className = "",
}) {
  const a = ACCENTS[accent] ?? ACCENTS.violet;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/6 bg-linear-to-b from-white/5 to-white/1 p-7 transition duration-300 hover:-translate-y-1 focus-within:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none ${a.glow} ${className}`}
    >
      {/* accent hairline along the top edge */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${a.rule} opacity-70 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100`}
      />

      {/* background image, revealed on hover — same mechanic as FeatureGrid's cards */}
      {image && (
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#08060f]/85 via-[#08060f]/55 to-[#08060f]/20" />
        </div>
      )}

      <p
        className={`relative inline-block w-full bg-clip-text text-[4rem] font-bold leading-none tracking-tighter text-transparent ${a.number}`}
        style={{ transform: "scale(1.25, 1.1)", transformOrigin: "left center" }}

      >{number}</p>

      <h3 className="relative mt-4 text-base font-normal leading-snug text-white">{title}</h3>

      <p className="relative mt-2 text-xs leading-relaxed text-white/40">{description}</p>

      {points.length > 0 && (
        <ul className="relative mt-4 flex flex-col gap-1">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-[0.6rem] leading-snug text-slate-300">
              <CheckIcon className={`mt-0.5 ${a.check}`} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
