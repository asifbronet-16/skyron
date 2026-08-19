import Image from "next/image";

import StatCard from "./StatCard";

const defaultStats = [
  { value: "1K+", label: "Satisfied Customers" },
  { value: "1K+", label: "Projects Completed" },
  { value: "14+", label: "Winning Awards" },
];

/**
 * Left column takes the animation. Either:
 *   <EmpoweringSection media="/media/hand.gif" mediaAlt="..." />
 * or drop anything you like in as children (video, Lottie, canvas):
 *   <EmpoweringSection><video ... /></EmpoweringSection>
 */
export default function EmpoweringSection({
  media,
  mediaAlt = "",
  stats = defaultStats,
  children,
}) {
  return (
    <section className="relative overflow-hidden py-12 sm:py-20">
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-rose-700/15 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-10 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[150px]"
      /> */}

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* media */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-3/4 w-full mask-[radial-gradient(ellipse_55%_85%_at_50%_50%,black_40%,transparent_100%)]">
            {children ??
              (media ? (
                <Image
                  src={media}
                  alt={mediaAlt}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-contain"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex h-full w-full items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/2 text-xs tracking-wide text-slate-600"
                >
                  animation goes here
                </div>
              ))}
          </div>
        </div>

        {/* copy */}
        <div>
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Empowering Innovation with{" "}
            <span className="bg-linear-to-r from-indigo-500 via-blue-500 to-sky-400 bg-clip-text text-transparent">
              Intelligent AI Solutions
            </span>{" "}
            Built for Your Success.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            We empower innovation through intelligent AI solutions designed to drive your success.
            By combining advanced technology with strategic insights, we create smarter, more
            efficient digital experiences.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
