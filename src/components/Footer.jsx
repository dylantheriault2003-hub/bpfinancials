import { MapPin, Mail } from "lucide-react";
import Logo from "./Logo";
import { BRAND, CALENDLY, NAV_LINKS } from "../lib/brand";

// Inline social glyphs — newer lucide-react dropped brand icons.
const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.05c0-1.2-.02-2.75-1.9-2.75-1.9 0-2.2 1.3-2.2 2.65V21h-4z" />
  </svg>
);
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-8h2.6l.4-3h-3V8.1c0-.9.25-1.5 1.5-1.5H17V3.9c-.3 0-1.3-.1-2.45-.1-2.4 0-4.05 1.45-4.05 4.15V10H8v3h2.5v8z" />
  </svg>
);
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const SOCIALS = [
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/brendon.porter.52" },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/brendonporter_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-navy-950 pt-16">
      <div className="container-x grid gap-12 pb-12 text-center md:grid-cols-[1.4fr_1fr_1fr] md:text-left">
        <div>
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <Logo size={40} />
            <span className="text-lg font-extrabold tracking-tight">{BRAND.name}</span>
          </div>
          <p className="mx-auto mt-4 max-w-xs text-sm text-white/60 md:mx-0">{BRAND.tagline}</p>
          <p className="mx-auto mt-4 max-w-xs text-sm text-white/50 md:mx-0">
            Customized financial planning to protect your income, grow your wealth, and secure your future.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Navigate</p>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Contact</p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <MapPin className="size-4 text-cobalt-400" />
              {BRAND.city}
            </li>
            <li>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 transition-colors hover:text-white md:justify-start"
              >
                <Mail className="size-4 text-cobalt-400" />
                Book a consultation
              </a>
            </li>
          </ul>
          <div className="mt-5 flex justify-center gap-3 md:justify-start">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-cobalt-500 hover:text-cobalt-400"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p>{BRAND.advisor} · Financial Services · {BRAND.city}</p>
        </div>
      </div>
    </footer>
  );
}
