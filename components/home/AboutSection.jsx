"use client";

import Image from "next/image";
import { altFor } from "@/constants/imageAlt";
import Reveal from "@/components/Reveal";

// The four reasons from the copy deck, each a bold lead-in and its text.
const CARDS = [
  {
    title: "Story first:",
    body: "we start with the purpose of the space, build the creative concept around it, then add the technology that suits it best.",
    side: "left",
    // tint = the wash inside the card, ring = the gradient hairline border
    tint: "from-violet-500/18 via-violet-500/6 to-transparent",
    ring: "from-violet-400/60 via-violet-400/15 to-transparent",
    pos: "lg:top-[4%] lg:left-0",
  },
  {
    title: "One team, end to end:",
    body: "user experience design, experiential technology and programming, content creation, hardware installation and on-site delivery under one roof.",
    side: "left",
    tint: "from-fuchsia-500/18 via-fuchsia-500/6 to-transparent",
    ring: "from-fuchsia-400/60 via-fuchsia-400/15 to-transparent",
    pos: "lg:top-[48%] lg:left-0",
  },
  {
    title: "In-house content development:",
    body: "2D and 3D animation, anamorphic 3D, generative AI content, live shoots and visual effects, made for custom resolutions and mediums.",
    side: "right",
    tint: "from-cyan-400/18 via-cyan-400/6 to-transparent",
    ring: "from-cyan-300/60 via-cyan-300/15 to-transparent",
    pos: "lg:top-[4%] lg:right-0",
  },
  {
    title: "Built for the Middle East and beyond:",
    body: "delivering in the UAE, Saudi Arabia, across the Middle East and beyond, with no language barrier.",
    side: "right",
    tint: "from-purple-500/18 via-purple-500/6 to-transparent",
    ring: "from-purple-400/60 via-purple-400/15 to-transparent",
    pos: "lg:top-[48%] lg:right-0",
  },
];

function Card({ card }) {
  // right-hand cards are lit from the left, left-hand cards from the right,
  // so the gradients mirror to keep the light source consistent
  const dir = card.side === "left" ? "bg-linear-to-br" : "bg-linear-to-bl";

  return (
    <li
      className={`relative w-full overflow-hidden rounded-xl p-px lg:absolute lg:w-72.5 ${card.pos ?? ""}`}
    >
      {/* gradient hairline */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-xl ${dir} ${card.ring} opacity-70`}
      />
      <div className="relative rounded-xl bg-[#0d0b18]/90 px-5 py-4 backdrop-blur-sm">
        <div
          className={`pointer-events-none absolute inset-0 rounded-xl ${dir} ${card.tint}`}
        />
        <p className="relative text-[13px] leading-relaxed text-white/60">
          <strong className="font-semibold text-white">{card.title}</strong> {card.body}
        </p>
      </div>
    </li>
  );
}

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#08060f] pt-8 sm:pt-16">

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal
          as="h2"
          className="bg-linear-[135deg] from-violet-500 via-indigo-400 to-sky-400 bg-clip-text text-transparent  text-center text-3xl font-normal tracking-tight  sm:text-4xl lg:text-[3.5rem] py-2"
        >
          Why organisations choose Skyron
        </Reveal>

        {/* stage: image centered, cards floated either side on desktop */}
        <div className="relative mt-14 lg:mt-16 lg:h-140">


          <div className="relative mx-auto h-95 w-full max-w-130 sm:h-120 lg:h-full">
            {/* glow first in the DOM, explicitly behind */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-50 left-1/2 z-0 h-120 w-120 -translate-x-1/2 rounded-full bg-[#15caff] opacity-90 blur-[140px]"
            />
            <Image
              src="/assets/vr-portrait.webp"
              alt={altFor("/assets/vr-portrait.webp")}
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              // className="z-20 object-contain object-bottom "
              className="z-20 object-contain object-bottom
              mask-[linear-gradient(to_top,transparent_0%,black_18%)]
              [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_18%)]
              lg:mask-none lg:[-webkit-mask-image:none]"
            />
          </div>

          {/* desktop: absolutely placed. mobile: 2-col grid below the image */}
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-0 lg:block">
            {CARDS.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
