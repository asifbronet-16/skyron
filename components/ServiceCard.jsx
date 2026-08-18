const ACCENTS = {
  violet: {
    number: "text-violet-500",
    rule: "from-transparent via-violet-500 to-transparent",
    check: "text-violet-400",
    glow: "hover:shadow-[0_24px_60px_-28px_rgba(139,92,246,0.7)] hover:border-violet-500/30",
  },
  cyan: {
    number: "text-cyan-400",
    rule: "from-transparent via-cyan-400 to-transparent",
    check: "text-cyan-400",
    glow: "hover:shadow-[0_24px_60px_-28px_rgba(34,211,238,0.6)] hover:border-cyan-400/30",
  },
  rose: {
    number: "text-rose-500",
    rule: "from-transparent via-rose-500 to-transparent",
    check: "text-rose-500",
    glow: "hover:shadow-[0_24px_60px_-28px_rgba(244,63,94,0.6)] hover:border-rose-500/30",
  },
  purple: {
    number: "text-purple-500",
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
 */
export default function ServiceCard({ number, title, description, points = [], accent = "violet" }) {
  const a = ACCENTS[accent] ?? ACCENTS.violet;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-7 transition duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none ${a.glow}`}
    >
      {/* accent hairline along the top edge */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${a.rule} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
      />

      <p className={`text-5xl font-bold leading-none tracking-tight ${a.number}`}>{number}</p>

      <h3 className="mt-8 text-lg font-semibold leading-snug text-white">{title}</h3>

      <p className="mt-4 text-sm leading-relaxed text-slate-400">{description}</p>

      {points.length > 0 && (
        <ul className="mt-6 flex flex-col gap-3">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm leading-snug text-slate-300">
              <CheckIcon className={`mt-0.5 ${a.check}`} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
