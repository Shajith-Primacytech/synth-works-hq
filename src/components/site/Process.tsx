import { motion } from "framer-motion";
import { Handshake, Code2, GraduationCap, Rocket } from "lucide-react";
import { SectionHeader } from "./Section";

const steps = [
  { icon: Handshake, title: "Discovery Call", time: "30 min", desc: "We map your biggest time-sink and calculate ROI." },
  { icon: Code2, title: "Build Phase", time: "1–2 weeks", desc: "Build, test, iterate until production-ready." },
  { icon: GraduationCap, title: "Training & Handoff", time: "2–3 sessions", desc: "Your team learns to use and maintain it." },
  { icon: Rocket, title: "Support & Scale", time: "Ongoing", desc: "Optimize, troubleshoot, and add features as you grow." },
];

export function Process() {
  return (
    <section id="process" className="py-28 relative">
      <div className="absolute inset-0 grid-bg radial-mask opacity-30 -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="The process"
          title={<>How we work. <span className="text-gradient-lime">No surprises.</span></>}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative glass rounded-2xl p-6"
            >
              <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm flex items-center justify-center">
                0{i + 1}
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-5">
                <s.icon className="w-5 h-5" />
              </div>
              <div className="font-mono-tech text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                {s.time}
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
