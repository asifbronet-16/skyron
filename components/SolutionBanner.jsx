"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Full-bleed banner: one background image, or several auto-rotating into a
 * carousel, with the solution's name overlaid on top. Used at the head of
 * a solution detail page (e.g. /creative-solutions/[slug]).
 *
 * No images yet? It falls back to the site's dark gradient-orb background
 * so a page still looks intentional before real photography is dropped in.
 *
 * <SolutionBanner label="2D Content Creation" eyebrow="Creative Solutions" images={["/assets/banners/2d-content-creation/1.jpeg"]} />
 * <SolutionBanner label="3D Content Creation" images={[img1, img2, img3]} interval={7000} />
 */
export default function SolutionBanner({
  images = [],
  label,
  eyebrow,
  interval = 6000,
  className = "",
}) {
  const slides = images.filter(Boolean);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  return (
    <section
      className={`relative isolate flex h-[280px] w-full items-center justify-center overflow-hidden bg-[#08060f] sm:h-[380px] lg:h-165 ${className}`}
    >
      {slides.length > 0 ? (
        slides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            preload={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))
      ) : (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-[10%] h-100 w-100 rounded-full bg-[#FF2D78] opacity-20 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 bottom-0 h-100 w-100 rounded-full bg-[#31417D] opacity-30 blur-[100px]"
          />
        </>
      )}

      {/* vignette so the label stays legible over whatever image lands here */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,6,15,0.5)_0%,rgba(8,6,15,0.2)_40%,rgba(8,6,15,0.75)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#08060f]/70 via-transparent to-[#08060f]/70" />

      <div className="relative z-10 px-6 text-center">
        {eyebrow && (
          <span className="mb-4 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#8b7bd8]">
            {eyebrow}
          </span>
        )}
        {label && (
          <h1 className="text-2xl font-semibold tracking-[0.06em] drop-shadow-[0_4px_30px_rgba(0,0,0,0.65)] sm:text-4xl lg:text-5xl border-2 text-transparent bg-clip-text bg-[linear-gradient(110deg,rgba(255,255,255,0.25)_30%,#fff_50%,rgba(255,255,255,0.25)_70%)] bg-size-[200%_100%] animate-shine">
            {label}
          </h1>
        )}
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-5 bg-white" : "w-1.5 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
