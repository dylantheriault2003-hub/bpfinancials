import { useState } from "react";
import { Plus } from "lucide-react";
import { CALENDLY } from "../lib/brand";

const FAQS = [
  {
    q: "How much does a consultation cost?",
    a: "Nothing. The first consultation is completely free — it's a chance to talk through where you are financially and where you want to go. No pressure, no obligation.",
  },
  {
    q: "Do I need a lot of money to start working with you?",
    a: "Not at all. Most of my clients are everyday families and professionals, not millionaires. Whether you're buying your first home, starting to invest, or planning retirement, we build a plan around your situation.",
  },
  {
    q: "What happens on the first call?",
    a: "We spend about 30 minutes getting clear on your goals, your current finances, and any concerns. From there, I'll tell you honestly whether and how I can help — and outline the next steps.",
  },
  {
    q: "Are you tied to one bank or insurance company?",
    a: "No. As an independent broker I work with multiple providers, which means recommendations are built around what fits you best — not one company's product shelf.",
  },
  {
    q: "Can we meet virtually?",
    a: "Yes. I work with clients across Canada, so meetings happen wherever is easiest for you — video call, phone, or in person around Moncton.",
  },
];

function FaqItem({ q, a, open, onClick }) {
  return (
    <div className="reveal overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-card">
      <button
        onClick={onClick}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-bold">{q}</span>
        <span
          className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open ? "rotate-45 bg-cobalt-500 text-white" : "bg-cobalt-500/10 text-cobalt-600"
          }`}
        >
          <Plus className="size-4" />
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="px-6 pb-6 text-navy-900/60">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="bg-clarity-50 py-24 text-navy-900">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="text-center lg:text-left">
          <p className="reveal mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cobalt-600">FAQ</p>
          <h2 className="reveal text-4xl font-black tracking-tight sm:text-5xl">
            Questions? Good — you should have them.
          </h2>
          <p className="reveal mt-4 text-lg text-navy-900/60">
            Your finances matter. Here are honest answers to the things people ask before booking a call.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal mt-8 inline-flex rounded-full bg-cobalt-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-cobalt-600"
          >
            Ask Me Directly
          </a>
        </div>

        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <FaqItem key={f.q} {...f} open={openIdx === i} onClick={() => setOpenIdx(openIdx === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
