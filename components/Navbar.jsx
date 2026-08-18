"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex  items-center justify-between px-6 py-7 lg:px-28">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/image-2.png"
            alt="Skyron"
            width={160}
            height={45}
            priority
            className="h-7 w-auto lg:h-16"
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
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#08060f]/95 px-6 py-6 backdrop-blur lg:hidden">
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
      )}
    </header>
  );
}
