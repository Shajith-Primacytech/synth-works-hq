const stack = [
  "Make.com", "n8n", "Claude API", "Supabase", "Retell AI",
  "Twilio", "OpenAI", "Stripe", "Vapi", "Cal.com", "Apify", "Lovable",
];

export function TrustBar() {
  const items = [...stack, ...stack];
  return (
    <section className="py-12 border-y border-border bg-surface/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-xs font-mono-tech uppercase tracking-[0.2em] text-muted-foreground">
          Built with best-in-class tools
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee gap-12 whitespace-nowrap w-max">
          {items.map((s, i) => (
            <span
              key={i}
              className="font-display font-bold text-2xl text-foreground/40 hover:text-primary transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
