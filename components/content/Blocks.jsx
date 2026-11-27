import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import SectionHeading from "@/components/SectionHeading";
import FaqSection from "@/components/home/FaqSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import { ChevronRight } from "@/components/icons";
import { altFor } from "@/constants/imageAlt";
import { isLive } from "@/lib/routes";
import { findSolution } from "@/lib/solutions";

// Renders the sections of a content page (ContentBlock in constants/types.ts)
// in one visual language, plus the pieces the pages share: cards, the
// "Label →" link, breadcrumbs and Related services.

// Cycled across cards in order so a long grid still reads as varied, not random.
const ACCENT_RULES = [
  "from-transparent via-violet-500 to-transparent",
  "from-transparent via-cyan-400 to-transparent",
  "from-transparent via-rose-500 to-transparent",
  "from-transparent via-fuchsia-500 to-transparent",
  "from-transparent via-teal-400 to-transparent",
  "from-transparent via-amber-400 to-transparent",
];

/** "Label →" link. Renders nothing while the page it points to isn't live. */
export function MoreLink({ link, className = "" }) {
  if (!link || !isLive(link.href)) return null;
  return (
    <Link
      href={link.href}
      className={`group/link inline-flex items-center gap-1.5 self-start text-sm font-medium text-sky-400 transition-colors hover:text-sky-300 ${className}`}
    >
      {link.label}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover/link:translate-x-0.5">
        →
      </span>
    </Link>
  );
}

function Paragraphs({ items = [], className = "" }) {
  return items.map((text, i) => (
    <p key={i} className={`text-sm leading-relaxed text-white/60 sm:text-base ${i > 0 ? "mt-4" : ""} ${className}`}>
      <RichText text={text} />
    </p>
  ));
}

function Details({ details }) {
  return (
    <dl className="relative mt-4 space-y-1.5 text-sm leading-relaxed">
      {details.map(({ label, text }) => (
        <div key={label}>
          <dt className="inline font-semibold text-white/85">{label}:</dt>{" "}
          <dd className="inline text-white/60">
            <RichText text={text} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={`h-4 w-4 shrink-0 ${className}`}>
      <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6.5 10.2 9 12.6l4.5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * One card: title, copy, optional bullets / "Best for" lines / link, and an
 * optional photo that sits behind the copy and fades out on hover.
 */
export function ContentCard({ card, index = 0, headingAs: Heading = "h3" }) {
  const rule = ACCENT_RULES[index % ACCENT_RULES.length];
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/6 bg-linear-to-b from-white/5 to-white/1 p-7 transition duration-300 hover:-translate-y-1 focus-within:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${rule} opacity-70 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100`}
      />

      {card.image && (
        <div className="absolute inset-0 opacity-100 transition-opacity duration-500 ease-out group-hover:opacity-0 group-focus-within:opacity-0">
          <Image
            src={card.image}
            alt={altFor(card.image)}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-[#08060f]/90 via-[#08060f]/65 to-[#08060f]/35" />
        </div>
      )}

      <Heading className="relative text-base font-semibold leading-snug text-white">{card.title}</Heading>

      {card.body && (
        <p className="relative mt-3 text-sm leading-relaxed text-white/65">
          <RichText text={card.body} />
        </p>
      )}

      {card.bullets?.length > 0 && (
        <ul className="relative mt-3 space-y-2">
          {card.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm leading-snug text-white/65">
              <CheckIcon className="mt-0.5 text-violet-400" />
              <span>
                <RichText text={bullet} />
              </span>
            </li>
          ))}
        </ul>
      )}

      {card.details?.length > 0 && <Details details={card.details} />}

      {(card.link || card.links) && (
        <div className="relative mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5">
          {(card.links ?? [card.link]).map((link) => (
            <MoreLink key={link.href + link.label} link={link} />
          ))}
        </div>
      )}
    </article>
  );
}

/** Grid of ContentCards: 4 across for 4 or 8 cards, otherwise 3 (2 on tablets). */
export function CardGrid({ cards, headingAs, className = "" }) {
  const n = cards.length;
  const columns = n === 4 || n === 8 ? "lg:grid-cols-4" : n === 2 ? "" : "lg:grid-cols-3";
  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${columns} ${className}`}>
      {cards.map((card, i) => (
        <Reveal key={card.title} delay={Math.min(i, 5) * 90} distance={28} className="h-full">
          <ContentCard card={card} index={i} headingAs={headingAs} />
        </Reveal>
      ))}
    </div>
  );
}

function Section({ children, className = "" }) {
  return (
    <section className={`relative bg-[#08060f] px-6 py-10 sm:py-16 ${className}`}>
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

// Narrow reading column for text-led sections.
function Column({ children }) {
  return <div className="mx-auto max-w-4xl">{children}</div>;
}

function Prose({ block }) {
  return (
    <Section>
      <Column>
        <Reveal>
          <SectionHeading text={block.heading} size="md" inline />
          <div className="mt-5 max-w-3xl">
            <Paragraphs items={block.paragraphs} />
          </div>
          <MoreLink link={block.link} className="mt-5" />
        </Reveal>
      </Column>
    </Section>
  );
}

function Cards({ block }) {
  return (
    <Section>
      <Reveal>
        <SectionHeading text={block.heading} align="center" size="md" inline accentClassName="from-violet-500 via-fuchsia-500 to-pink-500" />
        {block.intro && (
          <div className="mx-auto mt-5 max-w-3xl text-center">
            <Paragraphs items={block.intro} />
          </div>
        )}
      </Reveal>

      <CardGrid cards={block.cards} className="mt-8 sm:mt-12" />

      {block.table && <Table table={block.table} />}

      {block.outro && (
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <Paragraphs items={block.outro} />
        </div>
      )}
    </Section>
  );
}

function Table({ table }) {
  return (
    <Reveal className="mt-10">
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/2">
        <table className="w-full min-w-160 text-left text-sm">
          <thead className="bg-white/5">
            <tr>
              {table.columns.map((column) => (
                <th key={column} scope="col" className="px-5 py-3.5 font-semibold text-white">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map(([first, ...rest]) => (
              <tr key={first} className="border-t border-white/8">
                <th scope="row" className="px-5 py-3.5 font-medium text-white/90">
                  {first}
                </th>
                {rest.map((cell, i) => (
                  <td key={i} className="px-5 py-3.5 text-white/60">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.caption && <p className="mt-3 text-xs italic text-white/45 sm:text-sm">{table.caption}</p>}
    </Reveal>
  );
}

function Split({ block, flip }) {
  return (
    <Section>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <SectionHeading text={block.heading} size="md" inline />
          <div className="mt-5">
            <Paragraphs items={block.paragraphs} />
          </div>
          {block.details && <Details details={block.details} />}
        </Reveal>
        {block.image && (
          <Reveal delay={120} className={`relative aspect-4/3 overflow-hidden rounded-2xl border border-white/8 ${flip ? "lg:order-1" : ""}`}>
            <Image src={block.image} alt={altFor(block.image)} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </Reveal>
        )}
      </div>
    </Section>
  );
}

function Steps({ block }) {
  return (
    <Section>
      <Column>
        <Reveal>
          <SectionHeading text={block.heading} size="md" inline />
          {block.intro && (
            <div className="mt-5 max-w-3xl">
              <Paragraphs items={block.intro} />
            </div>
          )}
        </Reveal>

        <ol className="mt-8 space-y-3">
          {block.steps.map((step, i) => (
            <Reveal as="li" key={i} delay={Math.min(i, 6) * 70} distance={16} className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/3 p-4 sm:p-5">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-sky-400 text-sm font-semibold text-white"
              >
                {i + 1}
              </span>
              <span className="pt-1 text-sm leading-relaxed text-white/70 sm:text-base">
                <RichText text={step} />
              </span>
            </Reveal>
          ))}
        </ol>

        {block.outro && (
          <div className="mt-6">
            <Paragraphs items={block.outro} />
          </div>
        )}
        <MoreLink link={block.link} className="mt-6" />
      </Column>
    </Section>
  );
}

function List({ block }) {
  const variant = block.variant ?? "bullets";
  return (
    <Section>
      <Column>
        <Reveal>
          <SectionHeading text={block.heading} size="md" inline />
          {block.intro && (
            <div className="mt-5 max-w-3xl">
              <Paragraphs items={block.intro} />
            </div>
          )}
        </Reveal>

        {variant === "chips" && (
          <ul className="mt-8 flex flex-wrap gap-3">
            {block.items.map((item, i) => (
              <li key={i} className="rounded-full border border-white/12 bg-white/4 px-4 py-2 text-sm text-white/80">
                <RichText text={item} />
              </li>
            ))}
          </ul>
        )}

        {variant === "tiles" && (
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {block.items.map((item, i) => (
              <Reveal as="li" key={i} delay={Math.min(i, 5) * 70} distance={16} className="rounded-xl border border-white/8 bg-white/3 p-5 text-sm leading-relaxed text-white/65">
                <RichText text={item} />
              </Reveal>
            ))}
          </ul>
        )}

        {variant === "bullets" && (
          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-white/70 sm:text-base">
                <CheckIcon className="mt-1 text-violet-400" />
                <span>
                  <RichText text={item} />
                </span>
              </li>
            ))}
          </ul>
        )}

        {block.outro && (
          <div className="mt-6">
            <Paragraphs items={block.outro} />
          </div>
        )}
        <MoreLink link={block.link} className="mt-6" />
      </Column>
    </Section>
  );
}

/** A content page's sections, in order. Consecutive "split" sections alternate sides. */
export default function Blocks({ blocks = [] }) {
  let splits = 0;
  return blocks.map((block, i) => {
    switch (block.type) {
      case "prose":
        return <Prose key={i} block={block} />;
      case "cards":
        return <Cards key={i} block={block} />;
      case "split":
        return <Split key={i} block={block} flip={splits++ % 2 === 1} />;
      case "steps":
        return <Steps key={i} block={block} />;
      case "list":
        return <List key={i} block={block} />;
      case "faq":
        return <FaqSection key={i} heading={block.heading} items={block.items} />;
      case "logos":
        return <TrustedBySection key={i} heading={block.heading} marquee />;
      default:
        return null;
    }
  });
}

/**
 * Home › Section › Page. The last item is the current page. A crumb whose
 * page doesn't exist (e.g. "Markets") shows as plain text.
 */
export function Breadcrumbs({ items, className = "" }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-white/65 sm:text-sm">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 && (
              <span aria-hidden="true" className="text-white/35">
                ›
              </span>
            )}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-white/90">
                {item.label}
              </span>
            ) : item.href && isLive(item.href) ? (
              <Link href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * The 3-card Related services block above the CTA band. Takes service page
 * paths; any that isn't live yet is left out.
 */
export function RelatedServices({ paths = [], heading = "Related services" }) {
  const services = paths.map(findSolution).filter(Boolean);
  if (services.length === 0) return null;

  return (
    <Section>
      <Reveal>
        <SectionHeading text={heading} align="center" size="md" inline />
      </Reveal>
      <div className={`mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 ${services.length > 2 ? "lg:grid-cols-3" : ""}`}>
        {services.map((service, i) => (
          <Reveal key={service.href} delay={i * 90} distance={24} className="h-full">
            <Link
              href={service.href}
              className="group relative flex h-full min-h-52 flex-col justify-end overflow-hidden rounded-2xl border border-white/8 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              {service.banner.images[0] && (
                <Image
                  src={service.banner.images[0]}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04] motion-reduce:transform-none"
                />
              )}
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-[#08060f] via-[#08060f]/75 to-[#08060f]/20" />
              <h3 className="relative flex items-center justify-between gap-3 text-base font-semibold text-white">
                {service.navLabel}
                <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-white/65">{service.hub.text}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
