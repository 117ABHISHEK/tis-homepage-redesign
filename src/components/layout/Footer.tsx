import { contact, footerLinks, socials } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="bg-brand-navy/95 py-12 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold text-white">Tulas International School</p>
          <p className="mt-3 text-sm">{contact.address}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-brand-yellow">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ul aria-label="Social media" className="flex flex-wrap gap-4 text-sm md:justify-end">
          {socials.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-10 text-center text-xs text-white/60">
        Copyright © {new Date().getFullYear()} Tulas International School, Dehradun. All Rights Reserved.
      </p>
    </footer>
  );
}