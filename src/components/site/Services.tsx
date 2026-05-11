import { motion } from "framer-motion";
import { Mic, Workflow, Brain } from "lucide-react";
import { SectionHeader } from "./Section";

const services = [
  {
    icon: Mic,
    title: "AI Voice Agents",
    desc: "24/7 appointment booking, lead qualification, and customer support that sounds human.",
    stat: "Handles 100+ calls/day",
    tags: ["Retell AI", "Twilio", "Cal.com"],
  },
  {
    icon: Workflow,
    title: "Process Automation",
    desc: "Email-to-quote, lead enrichment, CRM sync, and document processing on autopilot.",
    stat: "4 hours → 10 minutes",
    tags: ["Make.com", "n8n", "OpenAI"],
  },
  {
    icon: Brain,
    title: "AI Research & Intel",
    desc: "Content factories, deal finders, market intelligence, and competitor tracking.",
    stat: "1,000+ leads/month",
    tags: ["Claude API", "Apify", "Supabase"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="What we build"
          title={<>Systems that run your business <span className="text-gradient-lime">while you sleep</span></>}
          subtitle="Three core capabilities. Endless combinations. Built for SMBs that want leverage."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-7 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="font-mono-tech text-sm text-primary mb-5">→ {s.stat}</div>
              <div className="flex flex-wrap gap-1.5 pt-5 border-t border-border">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono-tech px-2 py-1 rounded-md bg-surface text-muted-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
