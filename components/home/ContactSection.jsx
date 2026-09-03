"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "@/components/icons";
import Reveal from "@/components/Reveal";

const DETAILS = [
  { icon: Mail, label: "Email", value: "hello@skyron.me", href: "mailto:hello@skyron.me" },
  { icon: Phone, label: "Phone", value: "+971 50 874 2345", href: "tel:+971508742345" },
  {
    icon: MapPin,
    label: "Office",
    value: "1st floor office 101-14, Banat Abdullah Al Marzooqi Building, Al Khabeesi, Deira, Dubai, UAE.",
  },
];

const inputBase =
  "w-full rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white " +
  "placeholder:text-white/30 outline-none transition " +
  "focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">
        {label} {required && <span className="text-violet-400">*</span>}
      </span>
      {children}
    </label>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    project: "",
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // wire to your endpoint
    console.log(form);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-[#08060f] py-12 sm:py-28 lg:scroll-mt-32">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_45%_at_75%_45%,rgba(56,189,248,.07),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:gap-16">
        {/* ── left column ── */}
        <Reveal as="div">
          {/* eyebrow with the fading rule */}
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-16 bg-linear-to-r from-transparent via-[#5f30ca] to-[#317890]" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#5f30ca]">
              Get in touch
            </span>
          </div>

          <h2 className="mt-6 text-2xl leading-[1.1] tracking-normal text-white sm:text-2xl lg:text-4xl">
            Let&rsquo;s start a project
            <br />
            <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              together!
            </span>
          </h2>

          <p className="mt-4 max-w-md text-base leading-relaxed text-white/55">
            Great experiences begin with bold ideas. Share your project details
            with us. Our team will connect with you to explore how we can bring
            your vision to life.
          </p>

          <ul className="mt-8 space-y-2">
            {DETAILS.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10">
                  <Icon className="h-4.5 w-4.5 text-violet-400" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-[13px] text-white/90 transition hover:text-violet-300"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="max-w-sm text-[13px] leading-relaxed text-white/90">
                      {value}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ── right column: form card ── */}
        <Reveal
          as="div"
          delay={120}
          className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/2 p-6 backdrop-blur-sm sm:p-8"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#2981ff] to-transparent opacity-70 transition-opacity duration-300 hover:opacity-100"
          />
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" required>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={update("name")}
                  className={inputBase}
                />
              </Field>
              <Field label="Company">
                <input
                  type="text"
                  placeholder="Company name"
                  value={form.company}
                  onChange={update("company")}
                  className={inputBase}
                />
              </Field>
              <Field label="Phone" required>
                <input
                  type="tel"
                  required
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={update("phone")}
                  className={inputBase}
                />
              </Field>
              <Field label="Email" required>
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={form.email}
                  onChange={update("email")}
                  className={inputBase}
                />
              </Field>
            </div>

            <Field label="Your project" required>
              <textarea
                required
                rows={6}
                placeholder="Tell us about your project..."
                value={form.project}
                onChange={update("project")}
                className={`${inputBase} resize-none`}
              />
            </Field>

            <button
              type="submit"
              className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl
                         bg-linear-to-r from-violet-600 via-blue-500 to-cyan-400
                         px-6 py-4 text-[15px] font-semibold text-white
                         shadow-[0_0_30px_-8px_rgba(99,102,241,.7)] transition
                         hover:shadow-[0_0_38px_-6px_rgba(56,189,248,.8)]
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              Send Message
              <Send className="h-4 w-4 transition group-hover:translate-x-0.5" strokeWidth={2} />
            </button>
          </form>
        </Reveal>
    </div>
    </section >
  );
}
