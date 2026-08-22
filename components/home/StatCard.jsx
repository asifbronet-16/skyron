/**
 * Small stat tile: gradient value + muted label, with an accent hairline on top.
 */
export default function StatCard({ value, label }) {
  return (
    <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.05] to-white/[0.01] px-6 py-7 text-center transition duration-300 hover:border-violet-500/30 hover:shadow-[0_20px_50px_-28px_rgba(139,92,246,0.7)]">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100"
      />

      <p className="bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
        {value}
      </p>

      <p className="mt-2 text-xs text-slate-400 sm:text-sm">{label}</p>
    </div>
  );
}
