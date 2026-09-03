import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// Cycled across cards in order so a long grid still reads as varied, not random.
const ACCENT_RULES = [
  "from-transparent via-violet-500 to-transparent",
  "from-transparent via-cyan-400 to-transparent",
  "from-transparent via-rose-500 to-transparent",
  "from-transparent via-fuchsia-500 to-transparent",
  "from-transparent via-teal-400 to-transparent",
  "from-transparent via-amber-400 to-transparent",
];

// Lets card copy mark a few words bold with **like this**, e.g. from a CMS
// field, without needing to hand-author JSX or trust raw HTML.
function renderInlineBold(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-white">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

/**
 * Reusable "title + subtitle + N feature cards" grid, driven entirely by props.
 *
 * <FeatureGrid
 *   lead="Where Imagination"
 *   accent="Becomes Dimension"
 *   subtitle="From cinematic animation to real-time 3D assets..."
 *   cards={[
 *     { title: "3D Animation & Motion Graphics", description: "...", image: "/assets/cards/3d-animation-motion-graphics/1.png" },
 *     ...
 *   ]}
 * />
 *
 * `image` is optional per card — when set, it fades in behind the copy on hover/focus.
 */
export default function FeatureGrid({ lead, accent, subtitle, cards = [], className = "" }) {
  return (
    <section className={`relative overflow-hidden bg-[#08060f] px-6 py-20 sm:py-28 ${className}`}>
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            lead={lead}
            accent={accent}
            inline
            align="center"
            accentClassName="from-violet-500 via-fuchsia-500 to-pink-500"
          />

          {subtitle && (
            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-white/50 sm:text-base">
              {renderInlineBold(subtitle)}
            </p>
          )}
        </Reveal>

        {cards.length > 0 && (
          <div className="mt-8 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => {
              const rule = ACCENT_RULES[i % ACCENT_RULES.length];
              return (
                <Reveal key={card.title} delay={Math.min(i, 5) * 90} distance={28} className="h-full">
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/6 bg-linear-to-b from-white/5 to-white/1 p-7 transition duration-300 hover:-translate-y-1 focus-within:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">
                    {/* accent hairline along the top edge */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${rule} opacity-70 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100`}
                    />

                    {/* background image, revealed on hover */}
                    {card.image && (
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
                      >
                        <Image
                          src={card.image}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#08060f]/80 via-[#08060f]/50 to-[#08060f]/15" />
                      </div>
                    )}

                    <h3 className="relative text-base font-semibold leading-snug text-white">{card.title}</h3>

                    <p className="relative mt-3 text-sm leading-relaxed text-white/50">
                      {renderInlineBold(card.description)}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
