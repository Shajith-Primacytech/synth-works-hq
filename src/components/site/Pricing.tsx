import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "./Section";
import { BookCallButton } from "./BookCallButton";

const tiers = [
  {
    name: "One-Time Build",
    price: "$2.5K – $5K",
    note: "fixed scope",
    desc: "Single automation workflow. 2-week delivery. 30-day support.",
    perfect: "I have one clear pain point.",
    features: ["1 workflow scoped & built", "Documented handoff", "30-day bug support"],
    featured: false,
  },
  {
    name: "Monthly Retainer",
    price: "$1.5K – $3K",
    note: "/ month",
    desc: "Ongoing builds, priority support, monthly strategy calls.",
    perfect: "I need continuous optimization.",
    features: ["Ongoing builds & maintenance", "Priority Slack support", "Monthly strategy call"],
    featured: true,
  },
  {
    name: "Revenue Share",
    price: "Custom",
    note: "case-by-case",
    desc: "Zero upfront. We take a % of savings or revenue generated.",
    perfect: "Prove it first, pay later.",
    features: ["No upfront cost", "Aligned incentives", "Long-term partnership"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Engagement"
          title={<>Flexible ways to <span className="text-gradient-lime">work together.</span></>}
          subtitle="Pick the model that fits how you want to operate. We'll help you choose on the call."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                t.featured
                  ? "bg-gradient-to-b from-primary/10 to-transparent border border-primary/40 shadow-glow"
                  : "glass"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-mono-tech font-semibold uppercase tracking-wider">
                  Most popular
                </div>
              )}
              <div className="font-display font-bold text-xl mb-1">{t.name}</div>
              <div className="text-sm text-muted-foreground mb-5">{t.desc}</div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display font-extrabold text-3xl">{t.price}</span>
                <span className="font-mono-tech text-xs text-muted-foreground">{t.note}</span>
              </div>
              <div className="font-mono-tech text-[11px] text-primary mb-6">
                Perfect for: "{t.perfect}"
              </div>
              <ul className="space-y-2 mb-8 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition ${
                  t.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:border-primary hover:text-primary"
                }`}
              >
                Book a call <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
