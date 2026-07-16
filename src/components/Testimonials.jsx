import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Brendon took the time to actually understand my situation. For the first time I feel like I have a real plan for retirement.",
    name: "Sarah M.",
    role: "Moncton, NB",
  },
  {
    quote:
      "He made buying our first home feel doable. Clear advice, no pressure, and he saved us more than we expected on taxes.",
    name: "James & Kayla",
    role: "Dieppe, NB",
  },
  {
    quote:
      "As a business owner I needed protection I could trust. Brendon set everything up and checks in regularly. Highly recommend.",
    name: "Marc L.",
    role: "Riverview, NB",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-clarity-50 py-24 text-navy-900">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cobalt-600">Client Results</p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Trusted by families across the Maritimes</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="reveal group relative overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-8 shadow-card transition-all hover:-translate-y-1"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-cobalt-500 transition-transform duration-300 group-hover:scale-x-100" />
              <div className="mb-4 flex gap-1 text-cobalt-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-navy-900/80">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6">
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-navy-900/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
