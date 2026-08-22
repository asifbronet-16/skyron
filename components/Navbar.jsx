"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight } from "@/components/icons";
import { CREATIVE_SOLUTIONS_ITEMS } from "@/constants/creativeSolutions";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Our Story",
    href: "/our-story",
    children: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Our Approach", href: "/our-approach" },
      { label: "Industries We Serve", href: "/industries" },
    ],
  },
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      {
        label: "Creative Solutions",
        href: "/creative-solutions",
        children: CREATIVE_SOLUTIONS_ITEMS.map((item) => ({
          label: item.label,
          href: `/creative-solutions/${item.slug}`,
        })),
      },
      // No further breakdown for Technology Solutions yet — plain link, no flyout.
      { label: "Technology Solutions", href: "/technology-solutions" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blogs", href: "/blogs" },
];

/** Recursive accordion item for the mobile slide-in menu — supports any depth of children. */
function MobileNavItem({ link, path, active, openKeys, toggleKey, closeMenu, depth = 0 }) {
  const itemKey = [...path, link.label].join(" > ");
  const isOpen = openKeys.has(itemKey);

  if (link.children) {
    return (
      <div>
        <button
          type="button"
          onClick={() => toggleKey(itemKey)}
          aria-expanded={isOpen}
          className={`flex w-full items-center justify-between gap-3 text-left ${depth > 0 ? "text-sm" : "text-base"} ${link.label === active ? "text-white" : "text-white/70"
            }`}
        >
          {link.label}
          <ChevronDown
            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            strokeWidth={2}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${isOpen ? "mt-3 max-h-140 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col gap-3 border-l border-white/10 pl-4">
            {link.children.map((child) => (
              <MobileNavItem
                key={child.label}
                link={child}
                path={[...path, link.label]}
                active={active}
                openKeys={openKeys}
                toggleKey={toggleKey}
                closeMenu={closeMenu}
                depth={depth + 1}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      onClick={closeMenu}
      className={`block ${depth > 0 ? "text-sm" : "text-base"} ${link.label === active ? "text-white" : "text-white/70"
        }`}
    >
      {link.label}
    </Link>
  );
}

export default function Navbar({ active = "Home" }) {
  const [open, setOpen] = useState(false);
  const [openKeys, setOpenKeys] = useState(() => new Set());

  const closeMenu = () => setOpen(false);
  const toggleKey = (key) =>
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

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

            if (link.children) {
              const hasNestedChildren = link.children.some((child) => child.children);

              // Two-level dropdown: a first-level panel where some rows fly out a further submenu to the right.
              if (hasNestedChildren) {
                return (
                  <div key={link.label} className="group/menu relative">
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 text-sm transition-colors ${isActive
                        ? "font-semibold uppercase tracking-wider text-white"
                        : "font-medium text-white/70 hover:text-white"
                        }`}
                    >
                      {link.label}
                      <ChevronDown
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover/menu:rotate-180"
                        strokeWidth={2}
                      />
                    </Link>

                    {/* First-level dropdown — extra pt-4 keeps the hover area contiguous, no dead gap */}
                    <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover/menu:visible group-hover/menu:opacity-100">
                      <div className="w-64 rounded-xl border border-white/10 bg-[#0c0a16]/95 p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md">
                        {link.children.map((child) =>
                          child.children ? (
                            <div key={child.label} className="group/sub relative">
                              <button
                                type="button"
                                className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                              >
                                {child.label}
                                <ChevronRight className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                              </button>

                              {/* Second-level flyout — pl-2 bridges the hover gap to the right */}
                              <div className="invisible absolute left-full top-0 pl-2 opacity-0 transition-all duration-200 group-hover/sub:visible group-hover/sub:opacity-100">
                                <div className="w-72 rounded-xl border border-white/10 bg-[#0c0a16]/95 p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md">
                                  {child.children.map((grandchild) => (
                                    <Link
                                      key={grandchild.label}
                                      href={grandchild.href}
                                      className="block rounded-lg px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                                    >
                                      {grandchild.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block rounded-lg px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={link.label} className="group relative">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-sm transition-colors ${isActive
                      ? "font-semibold uppercase tracking-wider text-white"
                      : "font-medium text-white/70 hover:text-white"
                      }`}
                  >
                    {link.label}
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                      strokeWidth={2}
                    />
                  </Link>

                  {/* Dropdown — extra pt-4 keeps the hover area contiguous, no dead gap */}
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="w-60 rounded-xl border border-white/10 bg-[#0c0a16]/95 p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

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
            href="/#contact"
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
          <MobileNavItem
            key={link.label}
            link={link}
            path={[]}
            active={active}
            openKeys={openKeys}
            toggleKey={toggleKey}
            closeMenu={closeMenu}
          />
        ))}
        <Link
          href="/#contact"
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
