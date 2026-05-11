import CountUp from "react-countup";
import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const stats = [
  { value: 15, suffix: "+", label: "Hours saved per week", per: "for the average client" },
  { value: 91, suffix: "%", label: "Job Success Score", per: "Top Rated on Upwork" },
  { value: 14, suffix: "+", label: "Projects shipped", per: "across 3 continents" },
  { value: 50, suffix: "K+", prefix: "$", label: "Automation value", per: "delivered to date" },
];

export function Stats() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Proof"
          title={<>Results that <span className="text-gradient-lime">speak.</span></>}
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="font-display font-extrabold text-4xl sm:text-5xl text-gradient-lime">
                <CountUp end={s.value} duration={2.4} prefix={s.prefix ?? ""} suffix={s.suffix ?? ""} enableScrollSpy scrollSpyOnce />
              </div>
              <div className="mt-2 text-sm font-semibold">{s.label}</div>
              <div className="font-mono-tech text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                {s.per}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
