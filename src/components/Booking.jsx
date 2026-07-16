import { useEffect } from "react";
import { Clock, CalendarCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { CALENDLY } from "../lib/brand";

const PERKS = [
  { icon: Clock, text: "A focused 30-minute call" },
  { icon: CalendarCheck, text: "Flexible timing that fits your schedule" },
  { icon: ShieldCheck, text: "No obligation, no pressure" },
];

export default function Booking() {
  // Load Calendly's inline-widget script once.
  useEffect(() => {
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section id="book" className="bg-navy-950 py-24 skyline">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="reveal mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cobalt-400">Book a Consultation</p>
          <h2 className="reveal text-4xl font-black tracking-tight sm:text-5xl">
            Grab a free spot on Brendon&apos;s calendar
          </h2>
          <p className="reveal mt-4 text-lg text-white/70">
            Pick a time that works for you. We&apos;ll talk through where you are, where you want to be, and the
            simplest path to get there.
          </p>

          <ul className="reveal mt-8 space-y-4">
            {PERKS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-cobalt-500/15 text-cobalt-400">
                  <Icon className="size-4" />
                </span>
                <span className="text-white/80">{text}</span>
              </li>
            ))}
          </ul>

          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white/50 hover:bg-white/5"
          >
            Open the calendar in a new tab
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="reveal overflow-hidden rounded-2xl border border-white/10 bg-white">
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY}
            style={{ minWidth: "320px", height: "640px" }}
          />
        </div>
      </div>
    </section>
  );
}
