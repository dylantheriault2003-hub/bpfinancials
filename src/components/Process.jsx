import { CalendarCheck, FileText, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Book a free call",
    desc: "Pick a time that works. We talk through your goals, your income, and what's keeping you up at night.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Get your custom plan",
    desc: "You receive a clear, written financial plan — protection, investments, and tax strategy in plain language.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Grow with confidence",
    desc: "We put the plan in motion and review it together regularly, adjusting as your life changes.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-navy-950 py-24 skyline">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cobalt-400">How It Works</p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Three steps to a real plan</h2>
          <p className="mt-4 text-lg text-white/60">
            No jargon, no 60-page binders. A straightforward process designed to get you clarity fast.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          {/* connector line (desktop) */}
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-14 hidden h-px bg-gradient-to-r from-cobalt-500/0 via-cobalt-500/40 to-cobalt-500/0 md:block" />

          {STEPS.map(({ icon: Icon, step, title, desc }) => (
            <div
              key={step}
              className="reveal group relative rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-cobalt-500/50 hover:bg-white/[0.07] md:text-left"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-cobalt-500/15 text-cobalt-400 transition-colors group-hover:bg-cobalt-500 group-hover:text-white">
                  <Icon className="size-6" />
                </span>
                <span className="text-4xl font-black text-white/10 transition-colors group-hover:text-cobalt-500/30">
                  {step}
                </span>
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
