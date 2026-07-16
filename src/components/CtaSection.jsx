import { ArrowRight } from "lucide-react";
import { CALENDLY } from "../lib/brand";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt-500/20 blur-[120px]" />
      <div className="container-x relative z-10 text-center">
        <h2 className="reveal mx-auto max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
          Ready to build your financial plan?
        </h2>
        <p className="reveal mx-auto mt-5 max-w-xl text-lg text-white/70">
          One free consultation is all it takes to get clarity on your money and a plan you can act on.
        </p>
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal group mt-10 inline-flex items-center gap-2 rounded-full bg-cobalt-500 px-10 py-5 text-base font-bold uppercase tracking-wide text-white animate-pulseGlow transition-colors hover:bg-cobalt-600"
        >
          Book Free Consultation
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
