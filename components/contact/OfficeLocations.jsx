import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowUpRight, Mail, MapPin, Phone, Whatsapp } from "@/components/icons";
import { OFFICES, whatsappUrl } from "@/constants/site";

// Keyless Google Maps embed + deep links, all driven by the office's `mapQuery`.
const mapEmbedUrl = (query) => `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;
const directionsUrl = (query) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

const pillClass =
  "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5 text-xs font-medium text-white/80 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white";

function OfficeCard({ office }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-linear-to-b from-violet-500/7 to-transparent p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-medium text-white">{office.city}</h3>
        {office.label && (
          <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-300">
            {office.label}
          </span>
        )}
      </div>
      <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-white/40">{office.country}</p>

      <address className="mt-4 flex gap-3 text-[13px] not-italic leading-relaxed text-white/70">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" strokeWidth={1.8} />
        <span>
          {office.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </span>
      </address>

      {(office.phone || office.email) && (
        <div className="mt-3 space-y-1.5 text-[13px]">
          {office.phone && (
            <a href={`tel:${office.phone}`} className="flex items-center gap-3 text-white/70 transition hover:text-violet-300">
              <Phone className="h-4 w-4 shrink-0 text-violet-400" strokeWidth={1.8} />
              {office.phoneDisplay ?? office.phone}
            </a>
          )}
          {office.email && (
            <a href={`mailto:${office.email}`} className="flex items-center gap-3 text-white/70 transition hover:text-violet-300">
              <Mail className="h-4 w-4 shrink-0 text-violet-400" strokeWidth={1.8} />
              {office.email}
            </a>
          )}
        </div>
      )}

      {/* mt-auto pins the actions to the card's foot when the map makes the row taller */}
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <a href={directionsUrl(office.mapQuery)} target="_blank" rel="noreferrer" className={pillClass}>
          Get directions
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
        {office.whatsapp && (
          <a href={whatsappUrl(office.whatsapp)} target="_blank" rel="noreferrer" className={pillClass}>
            <Whatsapp className="h-3.5 w-3.5 text-[#25D366]" aria-hidden="true" />
            WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}

function OfficeMap({ office }) {
  return (
    <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/8 bg-white/2 sm:min-h-80">
      {/* Inverted + hue-rotated so Google's light tiles sit in the dark palette. */}
      <iframe
        title={`Map of our ${office.city} office`}
        src={mapEmbedUrl(office.mapQuery)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0 invert-90 hue-rotate-180 saturate-75"
      />
    </div>
  );
}

/**
 * Every office from constants/site.ts, each as its own row: details card on
 * the left, its map on the right (stacked on mobile). Maps lazy-load, so
 * offices further down the page cost nothing until they're scrolled to.
 *
 * <OfficeLocations />
 * <OfficeLocations headingAs="h1" className="pt-28 pb-12 sm:pt-44 sm:pb-16" />  // as the page's opening section
 */
export default function OfficeLocations({ headingAs = "h2", className = "py-12 sm:py-24" }) {
  if (OFFICES.length === 0) return null;

  const multiple = OFFICES.length > 1;

  return (
    <section id="offices" className={`relative scroll-mt-24 overflow-hidden bg-[#08060f] px-6 lg:scroll-mt-32 ${className}`}>
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-16 bg-linear-to-r from-transparent via-[#5f30ca] to-[#317890]" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#8b7bd8]">
              {multiple ? "Our Offices" : "Our Office"}
            </span>
          </div>
          <SectionHeading
            as={headingAs}
            lead="Come Visit"
            accent={multiple ? "Our Studios" : "Our Studio"}
            inline
            className="mt-6"
          />
        </Reveal>

        <ul className="mt-10 flex flex-col gap-6">
          {OFFICES.map((office, i) => (
            <Reveal
              as="li"
              key={office.id}
              delay={Math.min(i, 3) * 100}
              className="grid gap-4 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-6"
            >
              <OfficeCard office={office} />
              <OfficeMap office={office} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
