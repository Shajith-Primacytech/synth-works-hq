import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                <Zap className="w-4 h-4" strokeWidth={2.5} />
              </div>
              <span className="font-display font-extrabold text-lg">
                WorqFlo<span className="text-primary">.ai</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Work flows. You don't have to.
            </p>
          </div>
          <FooterCol
            title="Company"
            links={[
              ["About", "#about"],
              ["Instagram", "https://instagram.com/worqflo.ai"],
              ["LinkedIn", "#"],
              ["Upwork", "#"],
            ]}
          />
          <FooterCol
            title="Services"
            links={[
              ["AI Voice Agents", "#services"],
              ["Process Automation", "#services"],
              ["Micro-SaaS Development", "#services"],
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              ["Privacy Policy", "#"],
              ["Terms of Service", "#"],
              ["Contact", "#contact"],
            ]}
          />
        </div>
        <div className="pt-8 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech text-muted-foreground">
          <span>© 2026 WorqFlo AI</span>
          <span>Chennai, India → Global Clients</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="font-display font-bold text-sm mb-4">{title}</div>
      <ul className="space-y-2">
        {links.map(([l, h]) => (
          <li key={l}>
            <a href={h} className="text-sm text-muted-foreground hover:text-primary transition">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
