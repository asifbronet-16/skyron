import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowUpRight, Mail, MapPin, Phone, Whatsapp } from "@/components/icons";
import { OFFICES, whatsappUrl } from "@/constants/site";

// Keyless Google Maps embed + deep links, all driven by the office's `mapQuery`.
// t=h is satellite imagery with street labels (Google Maps' "Satellite" view);
// t=k drops the labels, t=m is the plain road map.
const mapEmbedUrl = (query) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&t=h&z=16&output=embed`;
const directionsUrl = (query) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

const pillClass =
  "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5 text-xs font-medium text-white/80 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white";

function OfficeCard({ office }) {
  return (
    // self-start + lg:min-h-96: a bit shorter than the map (lg:min-h-112) rather
    // than stretched to match it, with the actions pinned to the foot
    <div className="flex flex-col self-start rounded-2xl border border-white/10 bg-linear-to-b from-violet-500/7 to-transparent p-5 sm:p-6 lg:min-h-96">
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
    <div className="relative min-h-80 overflow-hidden rounded-2xl border border-white/8 bg-white/2 sm:min-h-96 lg:min-h-112">
      <iframe
        title={`Map of our ${office.city} office`}
        src={mapEmbedUrl(office.mapQuery)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
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
    // Gutters match the Navbar's (px-6, lg:px-28); max-w-296 caps it on wide
    // screens at the same width as the other sections on /contact.
    <section id="offices" className={`relative scroll-mt-24 overflow-hidden bg-[#08060f] px-6 lg:scroll-mt-32 lg:px-28 ${className}`}>
      <div className="relative mx-auto max-w-296">
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
              // z-20 lifts the row above the page's ambient glows (z-10), so they don't tint the map
              className="relative z-20 grid gap-4 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-6"
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
