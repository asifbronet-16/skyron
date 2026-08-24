import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { Zap } from "@/components/icons";

/**
 * "Ready to create something extraordinary?" closing CTA card.
 * Self-contained section — drop it into any page, right above the Footer.
 *
 * <CtaBanner />
 * <CtaBanner lead="Let's build your next" accent="activation" />
 */
export default function CtaBanner({
  lead = "Ready To Create Something",
  accent = "Extraordinary?",
  subtext = "Let's start the conversation. Our team is ready to help you craft an experience your audience will never forget.",
  email = "hello@skyron.me",
  phone = "+971 50 874 2345",
  office = "Al Khabeesi, Deira, Dubai, UAE",
  className = "",
}) {
  const telHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

  return (
    <section className={`relative overflow-hidden bg-[#08060f] px-6 py-20 sm:py-28 ${className}`}>
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0916]/80 px-6 py-12 text-center backdrop-blur-sm sm:px-12 sm:py-16">
        {/* faint grid, fading out toward the edges */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12]
            bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
            bg-size-[32px_32px]
            mask-[radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/25 blur-[110px]"
        />

        <div className="relative">
          <SectionHeading lead={lead} accent={accent} align="center" />

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            {subtext}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 via-blue-500 to-cyan-400 px-6 py-3 text-sm font-medium text-white
                         shadow-[0_0_30px_-8px_rgba(99,102,241,.7)] transition hover:shadow-[0_0_38px_-6px_rgba(56,189,248,.8)]"
            >
              <Zap className="h-4 w-4" strokeWidth={2} fill="currentColor" />
              {email}
            </a>
            <a
              href={telHref}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {phone}
            </a>
          </div>

          <div className="mx-auto mt-10 max-w-2xl border-t border-white/10 pt-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">Email</p>
                <Link href={`mailto:${email}`} className="mt-1 block text-[13px] text-white/90 transition hover:text-violet-300">
                  {email}
                </Link>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">Phone</p>
                <Link href={telHref} className="mt-1 block text-[13px] text-white/90 transition hover:text-violet-300">
                  {phone}
                </Link>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">Office</p>
                <p className="mt-1 text-[13px] text-white/90">{office}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
