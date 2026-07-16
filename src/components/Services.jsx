import { PiggyBank, TrendingUp, Home, ShieldCheck, Receipt, Building2 } from "lucide-react";

const SERVICES = [
  {
    icon: PiggyBank,
    title: "Retirement & Wealth Planning",
    desc: "Build a clear roadmap to retire on your terms and grow lasting wealth.",
  },
  {
    icon: TrendingUp,
    title: "Investment Strategies",
    desc: "Personalized portfolios aligned to your goals and risk tolerance.",
  },
  {
    icon: Home,
    title: "First Home Purchase Planning",
    desc: "Get mortgage-ready and buy your first home with confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Life & Disability Insurance",
    desc: "Protect your family and your income against the unexpected.",
  },
  {
    icon: Receipt,
    title: "Tax-Efficient Strategies",
    desc: "Keep more of what you earn with smart, legal tax planning.",
  },
  {
    icon: Building2,
    title: "Business Protection & Succession",
    desc: "Safeguard your business and plan a smooth, secure transition.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-clarity-50 py-24 text-navy-900">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cobalt-600">What I Do</p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Full-service financial planning
          </h2>
          <p className="mt-4 text-lg text-navy-900/60">
            Everything you need to protect what matters and build toward the future you want.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="reveal group rounded-2xl border border-navy-900/10 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-cobalt-500 hover:shadow-cardHover"
            >
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-cobalt-500/10 text-cobalt-600 transition-colors group-hover:bg-cobalt-500 group-hover:text-white">
                <Icon className="size-6" />
              </div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
