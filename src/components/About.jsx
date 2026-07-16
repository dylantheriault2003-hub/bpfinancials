import { Quote } from "lucide-react";
import { CALENDLY } from "../lib/brand";

const STATS = [
  { value: "100+", label: "Clients helped" },
  { value: "Canada", label: "Currently expanding across" },
  { value: "Long-term", label: "Relationship driven" },
];

export default function About() {
  return (
    <section id="about" className="bg-navy-900 py-24 skyline">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* photo */}
        <div className="reveal relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-3xl border border-cobalt-500/30" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-800">
            <img src="/brendon-portrait.png" alt="Brendon Porter" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent p-5 pt-16">
              <p className="text-lg font-bold">Brendon Porter</p>
              <p className="text-sm text-cobalt-400">Financial Planner · {""}Founder</p>
            </div>
          </div>
        </div>

        {/* copy */}
        <div>
          <p className="reveal mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cobalt-400">About Brendon</p>
          <h2 className="reveal text-4xl font-black tracking-tight sm:text-5xl">
            Financial guidance you can trust.
          </h2>

          <div className="reveal mt-6 space-y-4 text-white/70">
            <p>
              I built my career from the ground up with a passion for helping people improve their financial future.
            </p>
            <p>
              After moving across the country to pursue bigger opportunities, I committed myself to learning the
              financial industry and building a business centered on service, education, and long-term relationships.
              Today, I lead a growing financial brokerage across Canada.
            </p>
            <p>
              My mission is simple: help families make informed financial decisions while creating opportunities for
              others to build successful careers in the industry. I believe that financial education can change lives,
              and I&apos;m committed to making that knowledge accessible to the people I serve.
            </p>
          </div>

          <blockquote className="reveal mt-7 border-l-2 border-cobalt-500 pl-5">
            <Quote className="mb-2 size-5 text-cobalt-400" />
            <p className="text-lg font-medium italic text-white">
              I simplify financial planning so you can make confident decisions that support your long-term goals.
            </p>
          </blockquote>

          <div className="reveal mt-9 grid grid-cols-3 gap-4">
            {STATS.map((s) => (
              <div key={s.value} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-xl font-black text-cobalt-400">{s.value}</p>
                <p className="mt-1 text-xs text-white/60">{s.label}</p>
              </div>
            ))}
          </div>

          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal mt-9 inline-flex rounded-full bg-cobalt-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-cobalt-600"
          >
            Work With Brendon
          </a>
        </div>
      </div>
    </section>
  );
}
