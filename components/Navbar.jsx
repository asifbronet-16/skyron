"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "@/components/icons";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar({ active = "Home" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 bg-[#08060f]/70 backdrop-blur-md transition-colors">
      {/* ambient rule — violet → magenta → cyan, fading out at both ends */}
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px w-full bg-linear-to-r from-transparent via-fuchsia-500 to-transparent" />
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px w-full bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-80 mask-[linear-gradient(to_right,transparent,#000_55%,#000)]" />

      <nav className="mx-auto flex items-center justify-between px-6 py-4 lg:px-28 lg:py-7">
        {/* Logo */}
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/assets/image-2.png"
            alt="Skyron"
            width={160}
            height={45}
            priority
            className="h-10 w-auto lg:h-16"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = link.label === active;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors ${isActive
                  ? "font-semibold uppercase tracking-wider text-white"
                  : "font-medium text-white/70 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            // className="rounded-full bg-linear-to-r from-[#22d3ee] via-[#a855f7] to-[#e849c4] p-[2px] transition-shadow duration-300 hover:shadow-[0_0_20px_-2px_rgba(168,85,247,0.7)]"
            className="gradient-border rounded-full p-0.5"
          >
            <span className="block rounded-full bg-[#08060f] px-7 py-1 text-sm font-medium text-white">
              Contact
            </span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.8} /> : <Menu className="h-5 w-5" strokeWidth={1.8} />}
        </button>
      </nav>

    </header>

    {/* Backdrop */}
    <div
      aria-hidden="true"
      onClick={() => setOpen(false)}
      className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
    />

    {/* Slide-in mobile menu — anchored to the left edge */}
    <div
      className={`fixed left-0 top-16 bottom-0 z-50 w-72 max-w-[80vw] border-r border-white/10 bg-[#08060f]/95 px-6 py-8 backdrop-blur transition-transform duration-300 ease-out lg:hidden ${open ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      <div className="flex flex-col gap-5">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`text-base ${link.label === active ? "text-white" : "text-white/70"
              }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-2 w-fit rounded-full bg-linear-to-r from-[#22d3ee] via-[#a855f7] to-[#e849c4] p-px"
        >
          <span className="block rounded-full bg-[#08060f] px-7 py-2.5 text-sm text-white">
            Contact
          </span>
        </Link>
      </div>
    </div>
    </>
  );
}
