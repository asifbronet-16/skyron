import Link from "next/link";
import { preload } from "react-dom";
import Reveal from "@/components/Reveal";
import { CASE_STUDIES_LIVE } from "@/constants/caseStudies";
import { PATHS } from "@/constants/paths";


const HERO_POSTER = "/assets/new-bg-poster.webp";

export default function Hero() {
  // The video's poster is what paints first, so it's the one image preloaded.
  preload(HERO_POSTER, { as: "image", fetchPriority: "high" });

  return ( 
      <section className="relative min-h-screen  overflow-hidden lg:px-0 lg:pl-22 lg:mt-30 mt-16">
       

        <div className="relative flex items-center lg:flex-row flex-col-reverse gap-2 lg:px-0  pb-4  pt-10  lg:gap-8 lg:pl-12 lg:pb-24 lg:pt-14">
          {/* Left column */}
          <div className="max-w-xl px-6 lg:px-0">
            <Reveal as="p" className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#a996f0]">
              <span aria-hidden="true" className="h-0.5 w-10 shrink-0 bg-linear-to-r from-[#5f30ca] to-[#317890]" />
              Great experiences begin with a question, not a technology
            </Reveal>

            <Reveal as="h1" delay={80} className="mt-6 text-[2rem] font-light leading-[1.15] tracking-tight text-white sm:text-[2.6rem] lg:text-[2.9rem]">
              Immersive content and experiences, created in Dubai{" "}
              <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
                for the Middle East and beyond
              </span>
            </Reveal>

            <Reveal as="p" delay={160} className="mt-7 text-[15px] leading-relaxed text-white/60">
              Skyron is a spatial experience studio and immersive experience agency in Dubai. Our core
              is content creation and creative storytelling: 2D and 3D animation, anamorphic 3D,
              generative AI content, live shoots and visual effects, made for interactive and
              immersive experiences. We bring that content to life through projection mapping,
              holograms, AR/VR, interactive installations and experience centres for brands,
              developers and government entities across the UAE, Saudi Arabia, the wider Middle East
              and beyond. One team handles the story, the content and the technology, from first
              sketch to opening night.
            </Reveal>

            <Reveal delay={240} className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={PATHS.brief}
                className="inline-block rounded-full bg-[linear-gradient(90deg,#9B1FA8_0%,#7B2C9E_35%,#2A7F92_100%)] px-8 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
              >
                Send us your brief
              </Link>
              {/* Points at /case-studies once that page is live (CASE_STUDIES_LIVE). */}
              <Link
                href={CASE_STUDIES_LIVE ? PATHS.caseStudies : PATHS.creativeSolutions}
                className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/5"
              >
                View our projects
              </Link>
            </Reveal>
          </div>

          {/* Right column — video */}
          <div className="relative aspect-square w-full pl-6 lg:pl-0 lg:aspect-auto lg:h-160">
            {/* Replace this block with your <video> once the asset is exported */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#08060f] ">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={HERO_POSTER}
                className="h-full w-full  object-cover object-[76%_100%] lg:object-[100%_50%] mix-blend-screen"
              >
                <source src="/assets/new-bg.mp4" type="video/mp4" />
              </video>
              {/* top + bottom falloff */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#08060f_0%,transparent_18%,transparent_65%,#08060f_100%)]" />

              {/* left falloff — heavier, since that edge sits against the copy */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#08060f]/90 via-transparent to-transparent from-0% via-10%" />
            </div>


          </div>
        </div>
      </section>
  );
}
