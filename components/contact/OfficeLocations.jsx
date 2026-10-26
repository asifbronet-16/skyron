"use client";

import { useState } from "react";
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

function OfficeCard({ office, active, selectable, onSelect }) {
  // With several offices the card's top half picks which one the map shows;
  // with one there's nothing to pick, so it stays plain content. Spans, not
  // <p>/<address>, because a <button> only allows phrasing content.
  const Header = selectable ? "button" : "div";
  const headerProps = selectable ? { type: "button", onClick: onSelect, "aria-pressed": active } : {};

  return (
    <li
      className={`rounded-2xl border p-5 transition-colors duration-300 sm:p-6 ${
        active
          ? "border-violet-500/50 bg-linear-to-b from-violet-500/10 to-transparent"
          : "border-white/8 bg-white/3 hover:border-white/15"
      }`}
    >
      <Header {...headerProps} className="block w-full rounded-lg text-left">
        <span className="flex items-center justify-between gap-3">
          <span className="text-lg font-medium text-white">{office.city}</span>
          {office.label && (
            <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-300">
              {office.label}
            </span>
          )}
        </span>
        <span className="mt-0.5 block text-[11px] uppercase tracking-[0.14em] text-white/40">
          {office.country}
        </span>
        <span className="mt-4 flex gap-3 text-[13px] leading-relaxed text-white/70">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" strokeWidth={1.8} />
          <span>
            {office.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </span>
        {selectable && <span className="sr-only">Show on map</span>}
      </Header>

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

      <div className="mt-5 flex flex-wrap gap-2">
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
    </li>
  );
}

/**
 * Every office from constants/site.ts with a live map. One office: its card
 * beside the map. Several: the cards become a picker for what the map shows.
 */
export default function OfficeLocations() {
  const [activeId, setActiveId] = useState(OFFICES[0]?.id);
  const active = OFFICES.find((office) => office.id === activeId) ?? OFFICES[0];
  if (!active) return null;

  const multiple = OFFICES.length > 1;

  return (
    <section id="offices" className="relative scroll-mt-24 overflow-hidden bg-[#08060f] px-6 py-12 sm:py-24 lg:scroll-mt-32">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-16 bg-linear-to-r from-transparent via-[#5f30ca] to-[#317890]" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#8b7bd8]">
              {multiple ? "Our Offices" : "Our Office"}
            </span>
          </div>
          <SectionHeading
            lead={multiple ? "Find Us Around" : "Come Visit"}
            accent={multiple ? "The World" : "Our Studio"}
            inline
            className="mt-6"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,24rem)_1fr]">
          <Reveal as="ul" delay={100} className="flex flex-col gap-4">
            {OFFICES.map((office) => (
              <OfficeCard
                key={office.id}
                office={office}
                active={office.id === active.id}
                selectable={multiple}
                onSelect={() => setActiveId(office.id)}
              />
            ))}
          </Reveal>

          <Reveal
            delay={200}
            className="relative min-h-80 overflow-hidden rounded-2xl border border-white/8 bg-white/2 sm:min-h-104"
          >
            {/* Inverted + hue-rotated so Google's light tiles sit in the dark palette.
                Keyed by office so switching offices loads a fresh map. */}
            <iframe
              key={active.id}
              title={`Map of our ${active.city} office`}
              src={mapEmbedUrl(active.mapQuery)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0 invert-90 hue-rotate-180 saturate-75"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
