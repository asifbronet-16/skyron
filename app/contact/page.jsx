import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocations from "@/components/contact/OfficeLocations";
import { ChevronRight, Mail, MapPin, Phone, Whatsapp } from "@/components/icons";
import { OFFICES, SITE, whatsappUrl } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact — Skyron",
  description:
    "Start a project with Skyron. Send us your brief, chat with the team on WhatsApp, or visit our studio in Dubai.",
  path: "/contact",
});

const DETAILS = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: "Phone", value: SITE.phoneDisplay, href: `tel:${SITE.phone}` },
  {
    icon: MapPin,
    label: OFFICES.length > 1 ? "Offices" : "Office",
    value: OFFICES.map((office) => office.city).join(" · "),
    href: "#offices",
  },
];

// Pre-filled so the chat opens with context instead of a blank box.
const WHATSAPP_CHAT_URL = whatsappUrl(SITE.whatsapp, "Hi Skyron, I'd like to talk about a project.");

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      {/* glows are scoped to this wrapper (studio → careers card) instead of a
          single section, so the ambient wash bleeds across the whole page instead
          of getting clipped at one section's overflow-hidden edge */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-60 top-[10%] z-10 h-130 w-130 rounded-full bg-[#FF2D78] opacity-20 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-55 bottom-0 z-10 h-130 w-130 rounded-full bg-[#31417D] opacity-30 blur-[100px]"
        />

        <Navbar active="Contact" />

        {/* the studio leads the page, so its heading is the page's h1 */}
        <OfficeLocations headingAs="h1" className="pt-28 pb-12 sm:pt-44 sm:pb-16" />

        <section className="relative overflow-hidden bg-[#08060f] px-6 py-12 sm:py-24">
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_45%_at_75%_45%,rgba(56,189,248,.07),transparent_70%)]" />

          <div className="relative mx-auto grid max-w-296 gap-14 lg:grid-cols-2 lg:gap-16">
            {/* ── left column ── */}
            <Reveal as="div">
              <div className="flex items-center gap-4">
                <span className="h-0.5 w-16 bg-linear-to-r from-transparent via-[#5f30ca] to-[#317890]" />
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#8b7bd8]">
                  Get in touch
                </span>
              </div>

              <h2 className="mt-6 text-3xl leading-[1.1] tracking-normal text-white sm:text-4xl lg:text-5xl">
                Let&rsquo;s start a project
                <br />
                <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  together!
                </span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-relaxed text-white/55">
                Great experiences begin with bold ideas. Share your project details
                with us. Our team will connect with you to explore how we can bring
                your vision to life.
              </p>

              <ul className="mt-8 space-y-3">
                {DETAILS.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10">
                      <Icon className="h-4.5 w-4.5 text-violet-400" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">
                        {label}
                      </p>
                      <a href={href} className="text-[13px] text-white/90 transition hover:text-violet-300">
                        {value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_CHAT_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#25D366]/35 bg-[#25D366]/10 py-2 pl-2 pr-6 text-sm font-medium text-white
                           transition hover:border-[#25D366]/70 hover:bg-[#25D366]/20 hover:shadow-[0_0_30px_-8px_rgba(37,211,102,.6)]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <Whatsapp className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                Chat with us on WhatsApp
              </a>
            </Reveal>

            {/* ── right column: form card ── */}
            <ContactForm />
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#08060f] px-6 pt-4 pb-16 sm:pb-28">
          <Reveal
            distance={32}
            className="relative mx-auto flex max-w-296 flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-white/10 bg-[#0b0916]/80 p-6 sm:flex-row sm:items-center sm:p-10"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-[#5f30ca] to-[#317890]"
            />
            <div>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#8b7bd8]">
                Careers
              </span>
              <h2 className="mt-3 text-xl font-medium text-white sm:text-2xl">Want to build with us?</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/55">
                We&rsquo;re always keen to meet artists, designers and technologists who love
                turning spaces into stories.
              </p>
            </div>
            <Link
              href="/careers"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[linear-gradient(90deg,#9B1FA8_0%,#7B2C9E_35%,#2A7F92_100%)] py-2 pl-7 pr-2 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
            >
              View careers
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </Link>
          </Reveal>
        </section>
      </div>

      <Footer />
    </main>
  );
}
