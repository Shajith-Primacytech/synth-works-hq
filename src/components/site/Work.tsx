import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Section";

type Project = {
  title: string;
  industry: string;
  summary: string;
  workflow: string[];
  outcome: string;
  tags: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Steel Trade Quote Automation",
    industry: "Manufacturing • B2B",
    summary:
      "Inbound quote requests automatically converted into branded quotations within minutes.",
    workflow: [
      "Gmail",
      "OpenAI extraction",
      "Google Sheets",
      "Telegram approval",
      "PDF Quote",
      "Reply Draft",
    ],
    outcome: "Reduced quote turnaround from 4 hours to under 10 minutes.",
    tags: ["Make.com", "OpenAI", "Telegram", "Google Sheets"],
    featured: true,
  },
  {
    title: "Clinic AI Voice Agent",
    industry: "Healthcare • GI Practice",
    summary: "AI receptionist that books, reschedules, and triages patient calls automatically.",
    workflow: ["Inbound Call", "Retell AI", "Availability Check", "Cal.com Booking", "SMS Confirmation"],
    outcome: "Handled 200+ patient appointments/month without manual coordination.",
    tags: ["Retell AI", "Twilio", "Cal.com"],
  },
  {
    title: "Twitter Content Factory",
    industry: "Social Media • Content Ops",
    summary: "Automated viral content discovery and brand-adapted tweet generation system.",
    workflow: ["Apify Scraper", "Viral Detection", "AI Rewrite", "Approval Queue", "Auto Scheduler"],
    outcome: "Reduced manual content research time by over 15 hours/week.",
    tags: ["Apify", "n8n", "OpenAI", "Google Sheets"],
  },
  {
    title: "AI Transaction Categorizer",
    industry: "Finance • Micro SaaS",
    summary: "Uploads bank statements and automatically categorizes transactions into clean reports.",
    workflow: ["PDF Upload", "OCR Extraction", "AI Categorization", "Excel Export", "Email Delivery"],
    outcome: "Turns messy bank statements into organized reports in under 60 seconds.",
    tags: ["Claude", "n8n", "Razorpay", "Lovable"],
  },
  {
    title: "AI Car Deal Finder",
    industry: "Automotive • Lead Sourcing",
    summary: "Scrapes marketplaces and identifies undervalued vehicle opportunities automatically.",
    workflow: ["Marketplace Scraper", "Price Analysis", "AI Scoring", "Deal Dashboard", "SMS Outreach"],
    outcome: "Instantly surfaces high-margin car flipping opportunities daily.",
    tags: ["Apify", "Supabase", "Twilio", "OpenAI"],
  },
  {
    title: "WhatsApp Quote Bot",
    industry: "Print Shop • B2C",
    summary: "Conversational quoting on WhatsApp with instant pricing for walk-in customers.",
    workflow: ["WhatsApp Message", "Intent Parsing", "Pricing Engine", "Quote Reply", "CRM Log"],
    outcome: "24/7 quote generation with zero staff intervention.",
    tags: ["Twilio", "OpenAI", "Airtable"],
  },
];

function WorkflowList({ steps, dense = false }: { steps: string[]; dense?: boolean }) {
  return (
    <div
      className={`font-mono-tech ${dense ? "text-[11.5px]" : "text-[12px]"} leading-relaxed text-foreground/90 flex flex-wrap items-center gap-x-1.5 gap-y-1`}
    >
      {steps.map((step, i) => (
        <span key={step} className="inline-flex items-center gap-1.5">
          <span>{step}</span>
          {i < steps.length - 1 && <span className="text-primary/70">→</span>}
        </span>
      ))}
    </div>
  );
}

function CardHeader({ industry, title, summary }: { industry: string; title: string; summary: string }) {
  return (
    <>
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <span className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          {industry}
        </span>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>
      <h3 className="font-display font-bold text-[19px] leading-[1.2] tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-[13.5px] text-muted-foreground leading-relaxed">{summary}</p>
    </>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <span
          key={t}
          className="text-[10px] font-mono-tech px-2 py-1 rounded-md bg-surface/70 text-muted-foreground border border-border"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function LabeledBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-muted-foreground mb-2">
        {label}
      </div>
      {children}
    </div>
  );
}

function FeaturedCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass glass-hover rounded-2xl p-6 md:p-7 flex flex-col group md:col-span-2"
    >
      <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
        <div className="md:col-span-2 flex flex-col">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--lime-glow)]" />
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-primary">
              Featured case study
            </span>
          </div>
          <CardHeader industry={p.industry} title={p.title} summary={p.summary} />
          <div className="mt-5 pt-5 border-t border-border">
            <Tags tags={p.tags} />
          </div>
        </div>

        <div className="md:col-span-3 rounded-xl bg-surface/40 border border-border p-5 md:p-6 space-y-5">
          <LabeledBlock label="Workflow">
            <WorkflowList steps={p.workflow} />
          </LabeledBlock>
          <div className="h-px bg-border" />
          <LabeledBlock label="Outcome">
            <p className="text-[14px] text-foreground/90 leading-relaxed">{p.outcome}</p>
          </LabeledBlock>
        </div>
      </div>
    </motion.article>
  );
}

function StandardCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass glass-hover rounded-2xl p-5 md:p-6 flex flex-col group"
    >
      <CardHeader industry={p.industry} title={p.title} summary={p.summary} />

      <div className="mt-5 rounded-xl bg-surface/40 border border-border p-4 space-y-4">
        <LabeledBlock label="Workflow">
          <WorkflowList steps={p.workflow} dense />
        </LabeledBlock>
        <div className="h-px bg-border" />
        <LabeledBlock label="Outcome">
          <p className="text-[13px] text-foreground/90 leading-relaxed">{p.outcome}</p>
        </LabeledBlock>
      </div>

      <div className="mt-auto pt-5">
        <Tags tags={p.tags} />
      </div>
    </motion.article>
  );
}

export function Work() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Featured work"
          title={
            <>
              Real builds. <span className="text-gradient-lime">Real outcomes.</span>
            </>
          }
          subtitle="A snapshot of recent automations shipped for SMB clients across the US, UK and Australia."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
          <FeaturedCard p={featured} index={0} />
          {rest.map((p, i) => (
            <StandardCard key={p.title} p={p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
