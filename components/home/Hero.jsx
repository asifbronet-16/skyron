import Link from "next/link";

const PILLS = [
  { label: "Digital Physical Systems", className: "top-[5%] right-[40%]", anim: "float-a", dur: "7s", delay: "0s", border: "border-cyan-300/50", glow: "0 0 18px -4px rgba(103,232,249,.45)" },
  { label: "Experiential Installation", className: "top-[15%] left-[0%]", anim: "float-c", dur: "9.5s", delay: "1.2s", border: "border-violet-200/45", glow: "0 0 18px -4px rgba(221,214,254,.35)" },
  { label: "Immersive Experiences", className: "top-[28%] right-[10%]", anim: "float-b", dur: "8.2s", delay: "0.6s", border: "border-fuchsia-400/55", glow: "0 0 20px -4px rgba(232,121,249,.45)" },
  { label: "Interaction Design", className: "top-[66%] left-[1%]", anim: "float-a", dur: "10s", delay: "2.1s", border: "border-pink-400/55", glow: "0 0 20px -4px rgba(244,114,182,.45)" },
  { label: "Premium Content", className: "top-[65%] right-[5%]", anim: "float-c", dur: "7.8s", delay: "1.7s", border: "border-purple-400/50", glow: "0 0 18px -4px rgba(192,132,252,.40)" },
  { label: "Creative Technology", className: "top-[78%] left-[34%]", anim: "float-b", dur: "9s", delay: "0.3s", border: "border-sky-400/50", glow: "0 0 18px -4px rgba(56,189,248,.40)" },
];

export default function Hero() {
  return ( 
      <section className="relative min-h-screen  overflow-hidden px-6 lg:px-0 lg:pl-22 lg:mt-30 mt-16">
       

        <div className="relative flex items-center gap-12 px-6 lg:px-0  pb-20  pt-20  lg:gap-8 lg:pl-12 lg:pb-28 lg:pt-14">
          {/* Left column */}
          <div className="max-w-xl absolute lg:relative z-10">
            <h1 className="text-[2.25rem] font-light leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Great experiences begin with a question, not a technology
            </h1>

            <p className="mt-7 max-w-md text-base leading-relaxed text-white/60">
              Skyron is a spatial experience studio. We sit at the intersection of
              intelligent technology, cinematic content, and environment design to
              create moments that don&apos;t just communicate ideas&mdash;they make
              people feel them.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/work"
                className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/5"
              >
                Explore Our Work
              </a>
              <Link
                href="/contact"
                className="inline-block rounded-full bg-[linear-gradient(90deg,#9B1FA8_0%,#7B2C9E_35%,#2A7F92_100%)] px-8 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right column — video slot + floating pills */}
          <div className="relative aspect-square w-full lg:aspect-auto lg:h-160">
            {/* Replace this block with your <video> once the asset is exported */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl bg-[#08060f] ">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-fit lg:object-cover lg:object-[100%_50%] scale-120 mix-blend-screen"
              >
                <source src="assets/new-bg.mp4" type="video/mp4" />
              </video>
              {/* top + bottom falloff */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#08060f_0%,transparent_18%,transparent_65%,#08060f_100%)]" />

              {/* left falloff — heavier, since that edge sits against the copy */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#08060f]/90 via-transparent to-transparent from-0% via-10%" />
            </div>


            {/* Floating capability pills */}
            {PILLS.map((pill) => (
              <span
                key={pill.label}
                style={{
                  animationName: pill.anim,
                  animationDuration: pill.dur,
                  animationDelay: pill.delay,
                  animationIterationCount: "infinite",
                  animationTimingFunction: "ease-in-out",
                }}
                className={`pill-float absolute hidden lg:block whitespace-nowrap rounded-full border bg-white/5 px-4 py-2 text-[11px] font-medium text-white/90 backdrop-blur-md sm:text-xs ${pill.className} ${pill.border} ${pill.glow}`}
              >
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </section>
  );
}
