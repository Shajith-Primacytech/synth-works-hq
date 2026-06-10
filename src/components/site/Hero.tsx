import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, FileText, MessageSquare } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { BookCallButton } from "./BookCallButton";

const flow = [
  { icon: Mail, label: "Email received", time: "00:00" },
  { icon: Sparkles, label: "AI extracts data", time: "00:12" },
  { icon: FileText, label: "Quote generated", time: "00:45" },
  { icon: MessageSquare, label: "Customer replied", time: "10:00" },
];

const metrics = [
  { value: "4hrs → 10min", label: "Quote turnaround" },
  { value: "15hrs/wk", label: "Manual work saved" },
  { value: "120+", label: "Automated checks" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-30 radial-mask"
        />
        <div className="absolute inset-0 grid-bg radial-mask opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono-tech text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Now booking Q3 builds
          </div>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            AI Automation
            <br />
            That <span className="text-gradient-lime">Actually Works</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            We build intelligent systems that replace manual work for SMBs in the US, UK, and
            Australia. No fluff. Just results.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition btn-glow"
            >
              See our work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition"
            >
              Book strategy call
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono-tech text-muted-foreground">
            <span>★ Top Rated on Upwork</span>
            <span className="opacity-40">/</span>
            <span>91% Job Success</span>
            <span className="opacity-40">/</span>
            <span>14+ Projects Shipped</span>
          </div>
        </motion.div>

        {/* Right - Workflow viz */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="glass rounded-2xl p-6 relative">
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
              </div>
              <span className="font-mono-tech text-[10px] text-muted-foreground">
                workflow.run()
              </span>
            </div>
            <div className="space-y-3">
              {flow.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.25, duration: 0.5 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface/50 border border-border"
                >
                  <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    <step.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{step.label}</div>
                    <div className="font-mono-tech text-[10px] text-muted-foreground">
                      step_{i + 1}
                    </div>
                  </div>
                  <span className="font-mono-tech text-xs text-primary">{step.time}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating metrics */}
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.2, duration: 0.6 }}
              className={`hidden lg:block absolute glass rounded-xl px-4 py-3 animate-float ${
                i === 0
                  ? "-left-12 top-8"
                  : i === 1
                  ? "-right-10 top-1/2"
                  : "-left-6 -bottom-6"
              }`}
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className="font-mono-tech text-sm text-primary font-semibold">{m.value}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
