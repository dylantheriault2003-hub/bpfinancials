import { ArrowRight, ChevronDown } from "lucide-react";
import { CALENDLY } from "../lib/brand";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-navy-900 skyline">
      {/* atmospheric gradient + monogram watermark */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900" />
      <div className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 select-none text-[26rem] font-black leading-none text-white/[0.03]">
        BP
      </div>

      <div className="container-x relative z-10 grid items-center gap-12 pt-28 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:pt-20">
        <div>
          <div className="reveal mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-cobalt-400">
            <span className="h-px w-8 bg-cobalt-500" />
            Financial Services · Moncton, NB
          </div>

          <h1 className="reveal text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Take Control of
            <br />
            <span className="text-gradient-blue">Your Financial</span>
            <br />
            Future.
          </h1>

          <div className="reveal mt-7 flex flex-wrap gap-3">
            {["Protect.", "Grow.", "Secure Your Future."].map((p, i) => (
              <span
                key={p}
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                  i === 1
                    ? "border-cobalt-500 bg-cobalt-500/10 text-cobalt-400"
                    : "border-white/15 bg-white/5 text-white/80"
                }`}
              >
                {p}
              </span>
            ))}
          </div>

          <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-white/70">
            Customized financial plans to protect your income, grow your wealth, and reduce unnecessary taxes.
          </p>

          <div className="reveal mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cobalt-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white animate-pulseGlow transition-colors hover:bg-cobalt-600"
            >
              Book Your Free Consultation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Brendon portrait */}
        <div className="reveal relative mx-auto hidden w-full max-w-sm lg:block">
          <div className="absolute -inset-4 rounded-3xl bg-cobalt-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-800">
            <img src="/brendon-portrait.png" alt="Brendon Porter, financial planner" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-900 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-navy-950/70 px-4 py-2 backdrop-blur">
              <p className="text-sm font-bold">Brendon Porter</p>
              <p className="text-xs text-cobalt-400">Financial Planner</p>
            </div>
          </div>
        </div>
      </div>

      <a href="#services" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/40 hover:text-white/70">
        <ChevronDown className="size-6 animate-bounce" />
      </a>
    </section>
  );
}
