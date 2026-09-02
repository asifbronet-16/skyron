"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "@/components/icons";
// import { Instagram, Facebook, Youtube } from "@/components/icons";


const DELIVER = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Industries We Serve", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/#contact" },
];

// The two solution landing pages first, then the individual services beneath them.
// Every entry points at a real page; those with no page of their own yet —
// Experience Centres, Motion Graphics, Spatial Media — are parked below
// rather than linking to a 404.
const SERVICES = [
  { label: "Creative Solutions", href: "/creative-solutions" },
  { label: "Technology Solutions", href: "/technology-solutions" },
  { label: "Projection Mapping", href: "/technology-solutions/projection-mapping-solutions" },
  { label: "Hologram & HoloBox", href: "/technology-solutions/hologram-holobox-volumetric-display" },
  { label: "AR / VR / XR", href: "/technology-solutions/ar-vr-xr-immersive-technologies" },
  { label: "Brand Activations", href: "/technology-solutions/events-exhibitions-brand-activations" },
  { label: "Interactive Technology", href: "/technology-solutions/interactive-technologies" },
  // { label: "Experience Centres", href: "/services/experience-centres" },
  // { label: "Motion Graphics", href: "/services/motion-graphics" },
  // { label: "Spatial Media", href: "/services/spatial-media" },
];

// const SOCIALS = [
//   { icon: Instagram, label: "Instagram", href: "https://instagram.com/" },
//   { icon: Facebook, label: "Facebook", href: "https://facebook.com/" },
//   { icon: Youtube, label: "YouTube", href: "https://youtube.com/" },
// ];

function ColumnHeading({ children }) {
  return (
    <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-white">
      {children}
    </h3>
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

      <div className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-28">
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
              Transforming ideas into engaging digital and spatial experiences.
            </p>

            <div className="mt-4 space-y-0.5">
              <a
                href="mailto:hello@skyron.me"
                className="flex items-center gap-3 text-[15px] text-white/40 transition-colors hover:text-white"
              >
                <Mail className="h-4.25 w-4.25 text-indigo-400" strokeWidth={1.8} />
                hello@skyron.me
              </a>
              <a
                href="tel:+971508742345"
                className="flex items-center gap-3 text-[15px] text-white/40 transition-colors hover:text-white"
              >
                <Phone className="h-4.25 w-4.25 text-indigo-400" strokeWidth={1.8} />
                +971 50 874 2345
              </a>
            </div>

            {/* Social links — restore once the real profile URLs exist.
            <ul className="mt-4 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/4
                               text-white/40 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </a>
                </li>
              ))}
            </ul>
            */}
          </div>


          <div className="w-full">
            <LinkColumn title="What We Deliver" links={DELIVER} />
          </div>
          <div className="w-full">
            <LinkColumn title="Our Services" links={SERVICES} />
          </div>

          <div className="w-full">
            <ColumnHeading>Our Office</ColumnHeading>
            <address className="mt-4 text-sm not-italic leading-[1.85] text-white/40">
              1st Floor, Office 101-14
              <br />
              Banat Abdullah Al Marzooqi Building
              <br />
              Al Khabeesi, Deira
              <br />
              Dubai, UAE
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
