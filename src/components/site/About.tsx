import { motion } from "framer-motion";
import { Check } from "lucide-react";
import founder from "@/assets/founder.jpg";

const points = [
  "Top Rated Upwork freelancer (91% JSS, 14+ projects)",
  "MBA-trained strategist who understands business ops",
  "Specializes in US / UK / Australia SMB clients",
  "Full-stack: voice, workflows, AI, frontend",
  "Public building on Instagram @worqflo.ai",
];

export function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden glass">
            <img
              src={founder}
              alt="WorqFlo workspace"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 hidden sm:block">
            <div className="font-mono-tech text-xs text-primary">@worqflo.ai</div>
            <div className="text-xs text-muted-foreground">Chennai → Global</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 text-xs font-mono-tech text-primary mb-4">
            Why WorqFlo
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-[1.05] mb-5">
            Built by an AI automation specialist who actually <span className="text-gradient-lime">ships.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Mohamed runs WorqFlo from Chennai, India — building production AI systems for
            small and mid-sized businesses around the world. No agency layers. No account
            managers. Just a builder who knows what works.
          </p>
          <ul className="space-y-3 mb-8">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
          <div className="glass rounded-xl p-5">
            <div className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
              Our tagline
            </div>
            <div className="font-display font-bold text-2xl">
              Work flows. <span className="text-gradient-lime">You don't have to.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
