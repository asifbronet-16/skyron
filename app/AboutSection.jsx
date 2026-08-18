"use client";

import Image from "next/image";

const CARDS = [
  {
    title: "Design-First",
    body: "Every experience starts with human emotion",
    side: "left",
    // tint = the wash inside the card, ring = the gradient hairline border
    tint: "from-violet-500/18 via-violet-500/6 to-transparent",
    ring: "from-violet-400/60 via-violet-400/15 to-transparent",
    pos: "lg:top-[8%] lg:left-0",
  },
  {
    title: "Future-Ready",
    body: "Built for evolving display platforms",
    side: "left",
    tint: "from-fuchsia-500/18 via-fuchsia-500/6 to-transparent",
    ring: "from-fuchsia-400/60 via-fuchsia-400/15 to-transparent",
    pos: "lg:top-[42%] lg:left-0",
  },
  {
    title: "End-to-End",
    body: "Concept to execution under one roof",
    side: "right",
    tint: "from-cyan-400/18 via-cyan-400/6 to-transparent",
    ring: "from-cyan-300/60 via-cyan-300/15 to-transparent",
    pos: "lg:top-[8%] lg:right-0",
  },
  {
    title: "Story-Driven",
    body: "Tech always serves the narrative",
    side: "right",
    tint: "from-purple-500/18 via-purple-500/6 to-transparent",
    ring: "from-purple-400/60 via-purple-400/15 to-transparent",
    pos: "lg:top-[42%] lg:right-0",
  },
];

function Card({ card }) {
  // right-hand cards are lit from the left, left-hand cards from the right,
  // so the gradients mirror to keep the light source consistent
  const dir = card.side === "left" ? "bg-linear-to-br" : "bg-linear-to-bl";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl p-px lg:absolute lg:w-[290px] ${card.pos ?? ""}`}
    >
      {/* gradient hairline */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-xl ${dir} ${card.ring} opacity-70`}
      />
      <div className="relative rounded-xl bg-[#0d0b18]/90 px-5 py-4 backdrop-blur-sm">
        <div
          className={`pointer-events-none absolute inset-0 rounded-xl ${dir} ${card.tint}`}
        />
        <div className="relative">
          <h3 className="text-[15px] font-semibold text-white">{card.title}</h3>
          <p className="mt-1.5 text-[13px] leading-snug text-white/55">
            {card.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#08060f] py-20 sm:py-28">
      {/* ambient wash behind everything */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_35%,rgba(56,189,248,.10),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="bg-linear-to-r from-violet-500 via-indigo-400 to-sky-400 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent sm:text-5xl lg:text-[56px]">
          Spaces you&rsquo;ll keep talking about
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-white/60 sm:text-lg">
          Skyron Interactive is a creative technology studio specializing in
          interactive experiential content production, blending storytelling,
          spatial design, motion graphics, and emerging technology to create
          unforgettable brand experiences.
        </p>

        {/* stage: image centered, cards floated either side on desktop */}
        <div className="relative mt-14 lg:mt-16 lg:h-[520px]">
          <div className="relative mx-auto h-[380px] w-full max-w-[520px] sm:h-[480px] lg:h-full">
            <Image
              src="/assets/vr-portrait.png"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-contain object-bottom [mask-image:radial-gradient(ellipse_65%_70%_at_50%_50%,#000_40%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_65%_70%_at_50%_50%,#000_40%,transparent_100%)]"
            />
          </div>

          {/* desktop: absolutely placed. mobile: 2-col grid below the image */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-0 lg:block">
            {CARDS.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
