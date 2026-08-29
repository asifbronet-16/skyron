"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Full-bleed cross-fading photo background — the same carousel mechanic
 * SolutionBanner uses, extracted so any section can drop a photo (or a
 * slow-rotating set of photos) behind its own content. Renders only the
 * <Image> layer; the caller supplies its own vignette/gradient overlays and
 * foreground content on top (e.g. `relative z-10`).
 *
 * <PhotoBackground images={["/assets/banners/blogs/1.jpeg", "/assets/banners/blogs/2.jpeg"]} />
 */
export default function PhotoBackground({ images = [], interval = 6000, className = "" }) {
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

  if (slides.length === 0) return null;

  return (
    <>
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          } ${className}`}
        />
      ))}
    </>
  );
}
