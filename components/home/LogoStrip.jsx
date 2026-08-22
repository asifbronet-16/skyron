import Image from "next/image";

function Logo({ src, name, width = 148, height = 148 }) {
  return (
    <li className="flex shrink-0 items-center justify-center px-6">
      <Image
        src={src}
        alt={name}
        width={width}
        height={height}
        className="h-24 w-auto object-contain grayscale transition duration-300 hover:grayscale-0 sm:h-28"
      />
    </li>
  );
}

/**
 * Renders client logos in a row.
 * `marquee` makes the row scroll continuously (list is duplicated for a seamless loop).
 * Logos should be white/monochrome SVGs or PNGs in /public.
 */
export default function LogoStrip({ logos = [], marquee = false, speed = 16 }) {
  if (!marquee) {
    return (
      <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8 sm:gap-x-10">
        {logos.map((logo) => (
          <Logo key={logo.name} {...logo} />
        ))}
      </ul>
    );
  }

  return (
    <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <style>{`
        @keyframes skyron-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-25%); }
        }
        .skyron-marquee {
          animation: skyron-marquee ${speed}s linear infinite;
          width: max-content;
        }
        .skyron-marquee:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .skyron-marquee { animation: none; }
        }
      `}</style>

      <ul className="skyron-marquee flex items-center">
        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <Logo key={`${logo.name}-${i}`} {...logo} />
        ))}
      </ul>
    </div>
  );
}
