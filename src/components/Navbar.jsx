import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { BRAND, CALENDLY, NAV_LINKS } from "../lib/brand";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-navy-950/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Logo size={40} />
          <span className="text-lg font-extrabold tracking-tight">{BRAND.name}</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-cobalt-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition-all hover:bg-cobalt-600 hover:shadow-cardHover lg:inline-flex"
        >
          Book Free Call
        </a>

        <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy-950/95 px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-white/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-cobalt-500 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
            >
              Book Free Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
