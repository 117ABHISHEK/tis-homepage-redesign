"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navItems } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-brand-navy/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6"
      >
        <a href="#top" className="font-display text-xl font-bold text-white">
          TIS
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-white/90 hover:text-brand-yellow">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919837983791"
            className="hidden items-center gap-2 text-sm text-white sm:flex"
          >
            <Phone size={16} aria-hidden="true" /> +91-9837983791
          </a>
          <a
            href="#enquire"
            className="rounded-full bg-brand-yellow px-5 py-2 text-sm font-semibold text-brand-navy"
          >
            Enquire Now
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="bg-brand-navy px-4 pb-6 lg:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-white/90"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}