import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Process } from "@/components/site/Process";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Pricing } from "@/components/site/Pricing";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WorqFlo — AI Automation That Actually Works" },
      {
        name: "description",
        content:
          "WorqFlo builds AI voice agents, workflow automations and intelligence systems for SMBs in the US, UK and Australia. No fluff. Just results.",
      },
      { property: "og:title", content: "WorqFlo — AI Automation That Actually Works" },
      {
        property: "og:description",
        content:
          "Voice agents, workflow automation and AI systems built for SMBs. 4hr → 10min turnarounds, 15hrs/wk saved.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <Work />
      <Process />
      <Stats />
      <About />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
