import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-mask opacity-50 -z-10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 text-xs font-mono-tech text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Free 30-min strategy call
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-6xl leading-[1.05] mb-5">
            Ready to <span className="text-gradient-lime">automate</span> your business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Book a 30-minute strategy call. We'll identify your biggest time-sink and show
            you exactly how to automate it. No pitch, no pressure.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:Shajithautomate@gmail.com"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition btn-glow"
            >
              Book strategy call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:Shajithautomate@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition"
            >
              <Mail className="w-4 h-4" />
              Shajithautomate@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
