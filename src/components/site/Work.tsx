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
  size: "lg" | "md" | "sm";
};

const projects: Project[] = [
  {
    title: "Steel Trade Quote Automation",
    industry: "Manufacturing • B2B",
    summary: "Inbound quote requests automatically converted into branded quotations within minutes.",
    workflow: ["Gmail", "OpenAI extraction", "Google Sheets", "Telegram approval", "PDF Quote", "Reply Draft"],
    outcome: "Reduced quote turnaround from 4 hours to under 10 minutes.",
    tags: ["Make.com", "OpenAI", "Telegram", "Google Sheets"],
    size: "lg",
  },
  {
    title: "Clinic AI Voice Agent",
    industry: "Healthcare • GI Practice",
    summary: "AI receptionist that books, reschedules, and triages patient calls automatically.",
    workflow: ["Inbound Call", "Retell AI", "Availability Check", "Cal.com Booking", "SMS Confirmation"],
    outcome: "Handled 200+ patient appointments/month without manual coordination.",
    tags: ["Retell AI", "Twilio", "Cal.com"],
    size: "md",
  },
  {
    title: "Twitter Content Factory",
    industry: "Social Media • Content Ops",
    summary: "Automated viral content discovery and brand-adapted tweet generation system.",
    workflow: ["Apify Scraper", "Viral Detection", "AI Rewrite", "Approval Queue", "Auto Scheduler"],
    outcome: "Reduced manual content research time by over 15 hours/week.",
    tags: ["Apify", "n8n", "OpenAI", "Google Sheets"],
    size: "md",
  },
  {
    title: "AI Transaction Categorizer",
    industry: "Finance • Micro SaaS",
    summary: "Uploads bank statements and automatically categorizes transactions into clean reports.",
    workflow: ["PDF Upload", "OCR Extraction", "AI Categorization", "Excel Export", "Email Delivery"],
    outcome: "Turns messy bank statements into organized reports in under 60 seconds.",
    tags: ["Claude", "n8n", "Razorpay", "Lovable"],
    size: "md",
  },
  {
    title: "AI Car Deal Finder",
    industry: "Automotive • Lead Sourcing",
    summary: "Scrapes marketplaces and identifies undervalued vehicle opportunities automatically.",
    workflow: ["Marketplace Scraper", "Price Analysis", "AI Scoring", "Deal Dashboard", "SMS Outreach"],
    outcome: "Instantly surfaces high-margin car flipping opportunities daily.",
    tags: ["Apify", "Supabase", "Twilio", "OpenAI"],
    size: "md",
  },
  {
    title: "WhatsApp Quote Bot",
    industry: "Print Shop • B2C",
    summary: "Conversational quoting on WhatsApp with instant pricing for walk-in customers.",
    workflow: ["WhatsApp Message", "Intent Parsing", "Pricing Engine", "Quote Reply", "CRM Log"],
    outcome: "24/7 quote generation with zero staff intervention.",
    tags: ["Twilio", "OpenAI", "Airtable"],
    size: "sm",
  },
];

function Breakdown({ p }: { p: Project }) {
  return (
    <div className="rounded-xl bg-surface/40 border border-border p-5">
      <div className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground mb-3">
        Workflow
      </div>
      <div className="font-mono-tech text-[12px] leading-relaxed text-foreground/90 flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {p.workflow.map((step, i) => (
          <span key={step} className="inline-flex items-center gap-1.5">
            <span>{step}</span>
            {i < p.workflow.length - 1 && (
              <span className="text-primary/70">→</span>
            )}
          </span>
        ))}
      </div>
      <div className="my-4 h-px bg-border" />
      <div className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground mb-2">
        Outcome
      </div>
      <p className="text-sm text-foreground/90 leading-relaxed">{p.outcome}</p>
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
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground">
                  {p.industry}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="font-display font-bold text-xl leading-tight mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.summary}</p>

              <Breakdown p={p} />

              <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-border">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono-tech px-2 py-1 rounded-md bg-surface text-muted-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
