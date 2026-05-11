import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Section";

type Project = {
  title: string;
  industry: string;
  stat: string;
  desc: string;
  tags: string[];
  size: "lg" | "md" | "sm";
};

const projects: Project[] = [
  {
    title: "Steel Trade Quote Automation",
    industry: "Manufacturing • B2B",
    stat: "4hr → 10min turnaround",
    desc: "Inbound emails → AI extraction → Telegram alert → branded PDF quote, sent automatically.",
    tags: ["Make.com", "Claude", "PDFMonkey"],
    size: "lg",
  },
  {
    title: "Clinic AI Voice Agent",
    industry: "Healthcare • GI Practice",
    stat: "200+ appointments/mo",
    desc: "Inbound voice agent that books, reschedules, and triages patient calls.",
    tags: ["Retell AI", "Cal.com", "Twilio"],
    size: "md",
  },
  {
    title: "Twitter Content Factory",
    industry: "Crypto • Web3",
    stat: "7 accounts • 100+ posts/mo",
    desc: "Niche research, AI rewrite, scheduled publishing across multiple brand voices.",
    tags: ["n8n", "Claude", "Typefully"],
    size: "md",
  },
  {
    title: "Bank Statement Processor",
    industry: "FinTech • SaaS",
    stat: "$7/run • 2min processing",
    desc: "PDF upload → categorized Excel export. Sold as a self-serve micro-SaaS.",
    tags: ["Supabase", "OpenAI", "Stripe"],
    size: "md",
  },
  {
    title: "AuditFlo CRO Tool",
    industry: "Ecommerce • CRO",
    stat: "120+ checks • 2min audit",
    desc: "Automated ecommerce audit with scored report and prioritized fixes.",
    tags: ["n8n", "Apify", "Claude"],
    size: "md",
  },
  {
    title: "WhatsApp Quote Bot",
    industry: "Print Shop • B2C",
    stat: "24/7 quote generation",
    desc: "Conversational quoting on WhatsApp with instant pricing.",
    tags: ["Twilio", "OpenAI"],
    size: "sm",
  },
];

function CardArt({ title }: { title: string }) {
  // Stylized data-flow art per card (no real screenshots needed)
  return (
    <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-br from-surface to-background border border-border">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 225" fill="none">
        <defs>
          <linearGradient id={`g-${title}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.86 0.21 128)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.66 0.14 245)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          d="M40 60 L160 60 L200 130 L320 130 L360 80"
          stroke={`url(#g-${title})`}
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        {[
          [40, 60], [160, 60], [200, 130], [320, 130], [360, 80],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="14" fill="oklch(0.2 0 0)" stroke="oklch(0.86 0.21 128)" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="3" fill="oklch(0.86 0.21 128)" />
          </g>
        ))}
      </svg>
      <div className="absolute bottom-3 left-3 font-mono-tech text-[10px] text-muted-foreground">
        {title.toLowerCase().replace(/[^a-z]/g, "_").slice(0, 24)}.flow
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Featured work"
          title={<>Real builds. <span className="text-gradient-lime">Real outcomes.</span></>}
          subtitle="A snapshot of recent automations shipped for SMB clients across the US, UK and Australia."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`glass glass-hover rounded-2xl p-5 flex flex-col group ${
                p.size === "lg" ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <CardArt title={p.title} />
              <div className="mt-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground">
                    {p.industry}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="font-display font-bold text-xl leading-tight mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="font-mono-tech text-sm text-primary mb-4">→ {p.stat}</div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono-tech px-2 py-1 rounded-md bg-surface text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
