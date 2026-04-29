import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { WorkEthic } from "@/components/WorkEthic";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apollo — Full-Stack Mobile Developer | React Native & Payments" },
      {
        name: "description",
        content:
          "Apollo (Felix) builds production React Native apps with Supabase, Firebase, AWS, and Paystack payment integrations. Hire a full-stack mobile developer who ships.",
      },
      { property: "og:title", content: "Apollo — Full-Stack Mobile Developer" },
      {
        property: "og:description",
        content:
          "Production React Native apps with bulletproof backends and live payment systems.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Projects />
        <Skills />
        <Services />
        <WorkEthic />
        <Contact />
      </main>
    </div>
  );
}
