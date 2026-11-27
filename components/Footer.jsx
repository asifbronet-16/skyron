import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram, Facebook, Youtube, Behance, Linkedin, Whatsapp } from "@/components/icons";
import { PATHS } from "@/constants/paths";
import { OFFICES, SITE, SOCIALS, WHATSAPP_URL } from "@/constants/site";
import { isLive } from "@/lib/routes";

// The footer's link lists, as in the copy deck. A link whose page isn't live
// yet (Insights before its first post, the legal pages) is left out.
const DELIVER = [
  { label: "Home", href: PATHS.home },
  { label: "Who We Are", href: PATHS.whoWeAre },
  { label: "Our Approach", href: PATHS.ourApproach },
  { label: "Industries We Serve", href: PATHS.industries },
  { label: "Insights", href: PATHS.insights },
  { label: "Careers", href: PATHS.careers },
  { label: "Contact", href: PATHS.contact },
].filter((link) => isLive(link.href));

const SERVICES = [
  { label: "Content Creation", href: PATHS.creativeSolutions },
  { label: "Experience Centres", href: PATHS.experienceCentres },
  { label: "Creative Solutions", href: PATHS.creativeSolutions },
  { label: "Technology Solutions", href: PATHS.technologySolutions },
  { label: "Projection Mapping", href: PATHS.projectionMapping },
  { label: "Holograms & HoloBox", href: PATHS.holograms },
  { label: "AR / VR / XR", href: PATHS.arVr },
  { label: "Brand Activations", href: PATHS.events },
  { label: "Interactive Technology", href: PATHS.interactive },
].filter((link) => isLive(link.href));

const LEGAL = [
  { label: "Privacy Policy", href: PATHS.privacyPolicy },
  { label: "Terms of Use", href: PATHS.terms },
].filter((link) => isLive(link.href));

// The profile URLs live in constants/site.ts (the root layout reads the same
// list for its Organization JSON-LD); this only maps each one to its mark.
const SOCIAL_ICONS = {
  whatsapp: Whatsapp,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  behance: Behance,
  linkedin: Linkedin,
};

// WhatsApp leads the row as the quickest way to reach us, but it stays out of
// constants' SOCIALS — schema.org's `sameAs` is for profiles, not a chat link.
const CONTACT_LINKS = [
  { key: "whatsapp", label: "WhatsApp", href: WHATSAPP_URL },
  ...SOCIALS,
];

// A label, not a heading: footer columns shouldn't add to the page's outline.
function ColumnHeading({ children }) {
  return (
    <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-white">
      {children}
    </p>
  );
}

function LinkColumn({ title, links }) {
  return (
    <div>
      <ColumnHeading>{title}</ColumnHeading>
      <ul className="mt-4">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-sm text-white/40 transition-colors hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#08060f] max-w-328 mx-auto">
      {/* gradient rule — violet → magenta → cyan, fading out at both ends */}
      <div className="relative h-px w-full bg-linear-to-r from-transparent via-fuchsia-500 to-transparent" />
      <div className="relative -mt-px h-px w-full bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-80 mask-[linear-gradient(to_right,transparent,#000_55%,#000)]" />
      {/* soft bloom under the rule */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 [background:radial-gradient(60%_100%_at_50%_0%,rgba(168,85,247,.10),transparent_70%)]" />

      <div className="relative px-6 py-10 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-28">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:flex lg:items-start lg:justify-evenly lg:gap-10">
          {/* brand */}
          <div className="w-full">
            <Image
              src="/assets/image-2.png"
              alt="Skyron"
              width={190}
              height={26}
              className="h-12 w-auto -ml-4 -mt-3"
            />

            <p className=" text-[15px] leading-relaxed text-white/40">
              Spatial experience studio in Dubai: content creation and immersive experiences for the
              Middle East and beyond.
            </p>

            <div className="mt-4 space-y-0.5">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-[15px] text-white/40 transition-colors hover:text-white"
              >
                <Mail className="h-4.25 w-4.25 text-indigo-400" strokeWidth={1.8} />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-3 text-[15px] text-white/40 transition-colors hover:text-white"
              >
                <Phone className="h-4.25 w-4.25 text-indigo-400" strokeWidth={1.8} />
                {SITE.phoneDisplay}
              </a>
            </div>

            {/* all six on one line — the tiles step down a size on the narrowest
                phones so the row never has to wrap */}
            <ul className="mt-5 flex items-center gap-2 sm:gap-2.5">
              {CONTACT_LINKS.map(({ key, label, href }) => {
                const Icon = SOCIAL_ICONS[key];
                return (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      title={label}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 bg-white/4
                                 text-white/40 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white
                                 sm:h-9 sm:w-9"
                    >
                      <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>


          <div className="w-full">
            <LinkColumn title="What we deliver" links={DELIVER} />
          </div>
          <div className="w-full">
            <LinkColumn title="Our services" links={SERVICES} />
          </div>

          <div className="w-full">
            <ColumnHeading>{OFFICES.length > 1 ? "Our offices" : "Our office"}</ColumnHeading>
            {OFFICES.map((office) => (
              <address key={office.id} className="mt-4 text-sm not-italic leading-[1.85] text-white/40">
                {OFFICES.length > 1 && <span className="block font-medium text-white/70">{office.city}</span>}
                {office.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                {office.hours && <span className="mt-1 block">{office.hours}</span>}
              </address>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/8 pt-6 text-[13px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          {LEGAL.length > 0 && (
            <ul className="flex items-center gap-2">
              {LEGAL.map(({ label, href }, i) => (
                <li key={href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">·</span>}
                  <Link href={href} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
