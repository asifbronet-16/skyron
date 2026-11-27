import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Mail, Phone, Whatsapp, ChevronRight } from "@/components/icons";
import { PATHS } from "@/constants/paths";
import { SITE, WHATSAPP_URL } from "@/constants/site";

const BRIEF = { label: "Send us your brief", href: PATHS.brief };

/**
 * The call-to-action band above the footer: a heading, a line of text, the
 * brief button, and email, phone and WhatsApp. The defaults are the site-wide
 * version; most pages pass their own heading and text from the copy deck.
 *
 * <CtaBanner />
 * <CtaBanner heading="Planning a shoot?" text="Send the idea, locations and deadline. We reply within two working days." />
 */
export default function CtaBanner({
  heading = "Have a space that needs to say something?",
  text = "Send us your brief, site details and timeline. We reply within two working days with a concept direction, scope and an indicative budget.",
  button = BRIEF,
  className = "",
}) {
  const contacts = [
    { label: SITE.email, href: `mailto:${SITE.email}`, icon: Mail, iconProps: { strokeWidth: 1.8 } },
    { label: SITE.phoneDisplay, href: `tel:${SITE.phone}`, icon: Phone, iconProps: { strokeWidth: 1.8 } },
    { label: "WhatsApp", href: WHATSAPP_URL, icon: Whatsapp, external: true },
  ];

  return (
    <section className={`relative overflow-hidden bg-[#08060f] px-6 py-20 sm:py-28 ${className}`}>
      <Reveal
        as="div"
        distance={32}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0916]/80 px-6 py-8 text-center backdrop-blur-sm sm:px-12 sm:py-16"
      >
        {/* signature top border */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-[#5f30ca] to-[#317890]"
        />

        {/* faint grid, fading out toward the edges */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.10] blur-[1px]
            bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
            bg-size-[32px_32px]
            mask-[radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
        />

        <div className="relative">
          <SectionHeading text={heading} align="center" size="md" />

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">{text}</p>

          {/* ambient glow sitting between the copy and the CTAs */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 mx-auto  h-56 w-56 -mt-20">
            <span className="absolute inset-0 rounded-full bg-linear-to-r from-[#5f30ca] to-[#317890] opacity-30 blur-2xl" />
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href={button.href}
              className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-violet-600 via-blue-500 to-cyan-400 py-2 pl-7 pr-2 text-sm font-medium text-white
                         shadow-[0_0_30px_-8px_rgba(99,102,241,.7)] transition hover:shadow-[0_0_38px_-6px_rgba(56,189,248,.8)]"
            >
              {button.label}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </Link>
          </div>

          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-6">
            {contacts.map(({ label, href, icon: Icon, iconProps, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external && { target: "_blank", rel: "noreferrer" })}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[13px] font-medium text-white/90 transition hover:bg-white/10"
                >
                  <Icon className="h-4 w-4 text-violet-300" {...iconProps} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
