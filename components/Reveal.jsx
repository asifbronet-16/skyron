"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades + slides children in the first time they scroll into view.
 * Fires once (on mount if already visible, or on first intersect) and
 * then leaves the observer disconnected — no re-animating on scroll-back.
 *
 * <Reveal>...</Reveal>
 * <Reveal as="span" delay={150} distance={12}>...</Reveal>
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  distance = 24,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced-motion users by just showing content immediately.
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
        transform: visible ? "translateY(0)" : `translateY(${distance}px)`,
      }}
      className={`opacity-0 transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform] ${visible ? "opacity-100" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
