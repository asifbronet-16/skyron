const ACCENTS = {
  violet: {
    rule: "from-transparent via-violet-500 to-transparent",
    tile: "border-violet-500/25 bg-violet-500/10 text-violet-200",
    glow: "hover:border-violet-500/30 hover:shadow-[0_24px_60px_-28px_rgba(139,92,246,0.7)]",
  },
  teal: {
    rule: "from-transparent via-teal-400 to-transparent",
    tile: "border-teal-400/25 bg-teal-400/10 text-teal-100",
    glow: "hover:border-teal-400/30 hover:shadow-[0_24px_60px_-28px_rgba(45,212,191,0.6)]",
  },
  rose: {
    rule: "from-transparent via-rose-500 to-transparent",
    tile: "border-rose-500/25 bg-rose-500/10 text-rose-100",
    glow: "hover:border-rose-500/30 hover:shadow-[0_24px_60px_-28px_rgba(244,63,94,0.6)]",
  },
};

/**
 * `icon` is a component (e.g. CubeIcon), not an element — it renders here.
 * `accent` is one of: violet | teal | rose.
 */
export default function CapabilityCard({ icon: Icon, title, description, accent = "violet" }) {
  const a = ACCENTS[accent] ?? ACCENTS.violet;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/6 bg-linear-to-b from-white/4 to-white/1 p-7 transition duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none ${a.glow}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-[2.5px] bg-linear-to-r ${a.rule} opacity-90 transition-opacity duration-300 group-hover:opacity-100`}
      />

      {Icon && (
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl border ${a.tile}`}
        >
          <Icon />
        </span>
      )}

      <h3 className="mt-6 text-sm font-semibold leading-snug text-white sm:text-sm">{title}</h3>

      <p className="mt-4 text-xs leading-relaxed text-slate-400">{description}</p>
    </article>
  );
}
