import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight, Sparkles, MessageCircle, Globe2, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Tier = {
  name: string;
  tagline: string;
  price: string;
  timeline: string;
  bestFor: string;
  deliverables: string[];
  featured: boolean;
};

const intlTiers: Tier[] = [
  {
    name: "Starter",
    tagline: "Launch a focused MVP — fast.",
    price: "From $1,200",
    timeline: "2–3 weeks",
    bestFor: "Solo founders & early-stage ideas",
    deliverables: [
      "1 mobile app OR marketing website",
      "Up to 5 screens / pages",
      "Auth (email + Google)",
      "Supabase or Firebase backend",
      "Basic admin / CMS",
      "Play Store or web deploy",
      "2 weeks post-launch support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    tagline: "Ship a real product with payments.",
    price: "From $2,800",
    timeline: "4–6 weeks",
    bestFor: "Funded startups & SMBs going live",
    deliverables: [
      "Mobile app + web dashboard",
      "Up to 12 screens / pages",
      "Paystack payments + webhooks",
      "Roles, permissions & RLS",
      "Push & email notifications",
      "Analytics & error tracking",
      "Play Store + TestFlight release",
      "30 days post-launch support",
    ],
    featured: true,
  },
  {
    name: "Pro",
    tagline: "Production-grade platform, end-to-end.",
    price: "From $5,500",
    timeline: "8–12 weeks",
    bestFor: "Scaling teams & revenue-critical apps",
    deliverables: [
      "Mobile app + web app + admin",
      "Unlimited screens & flows",
      "Subscriptions, refunds, reconciliation",
      "AWS / scalable infra setup",
      "CI/CD + automated testing",
      "Realtime features & background jobs",
      "Performance & security hardening",
      "60 days priority support + handover docs",
    ],
    featured: false,
  },
];

const kenyaTiers: Tier[] = [
  {
    name: "Starter",
    tagline: "Get online and selling — locally priced.",
    price: "From KES 50,000",
    timeline: "2–3 weeks",
    bestFor: "SMEs, hustles & solo founders",
    deliverables: [
      "1 mobile app OR business website",
      "Up to 5 screens / pages",
      "Auth (email + Google)",
      "Supabase or Firebase backend",
      "WhatsApp / contact integration",
      "Play Store or web deploy",
      "2 weeks post-launch support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    tagline: "M-Pesa, Paystack & a real product.",
    price: "From KES 150,000",
    timeline: "4–6 weeks",
    bestFor: "Growing Kenyan businesses going digital",
    deliverables: [
      "Mobile app + web dashboard",
      "Up to 12 screens / pages",
      "M-Pesa Daraja + Paystack payments",
      "Roles, permissions & RLS",
      "Push & SMS notifications",
      "Analytics & error tracking",
      "Play Store release",
      "30 days post-launch support",
    ],
    featured: true,
  },
  {
    name: "Pro",
    tagline: "Full platform for serious operators.",
    price: "From KES 350,000",
    timeline: "8–12 weeks",
    bestFor: "SACCOs, fintech & scaling startups",
    deliverables: [
      "Mobile app + web app + admin",
      "Unlimited screens & flows",
      "Subscriptions, refunds, reconciliation",
      "AWS / scalable infra setup",
      "CI/CD + automated testing",
      "Realtime features & background jobs",
      "Performance & security hardening",
      "60 days priority support + handover docs",
    ],
    featured: false,
  },
];

type Region = "intl" | "kenya";

export function Pricing() {
  const [region, setRegion] = useState<Region>("intl");
  const tiers = region === "intl" ? intlTiers : kenyaTiers;

  return (
    <section id="pricing" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Packages"
          title="Pick a package. Get to market."
          description="Fixed-scope engagements with clear deliverables, timelines, and a single point of contact — me."
        />

        {/* Region toggle */}
        <div className="flex justify-center mb-10">
          <div className="glass rounded-full p-1 inline-flex items-center gap-1">
            <button
              onClick={() => setRegion("intl")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                region === "intl"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Globe2 className="h-4 w-4" />
              International (USD)
            </button>
            <button
              onClick={() => setRegion("kenya")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                region === "kenya"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <MapPin className="h-4 w-4" />
              Kenya (KES)
            </button>
          </div>
        </div>

        {region === "kenya" && (
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto -mt-4 mb-8">
            <span className="text-primary font-medium">Adaptive pricing</span> — local rates
            tuned for the Kenyan market. Same craft, same stack, priced for SMEs and
            local founders.
          </p>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={region}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-3 gap-5"
          >
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  t.featured
                    ? "bg-primary/[0.04] border border-primary/40 glow"
                    : "card-elevated"
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-medium">
                    <Sparkles className="h-3 w-3" />
                    Most popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-display font-semibold mb-2">{t.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t.tagline}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-border">
                  <div className="text-4xl font-display font-semibold text-gradient">
                    {t.price}
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    <span>{t.timeline}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span>{t.bestFor}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {t.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 h-4 w-4 rounded-full grid place-items-center shrink-0 ${
                          t.featured ? "bg-primary/20" : "bg-secondary"
                        }`}
                      >
                        <Check className="h-2.5 w-2.5 text-primary" />
                      </span>
                      <span className="text-foreground/90 leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-2">
                  <a
                    href={`mailto:apollo.sankii@gmail.com?subject=${encodeURIComponent(
                      `[${t.name} ${region === "kenya" ? "KE" : "Intl"}] Project inquiry`,
                    )}&body=${encodeURIComponent(
                      `Hi Apollo,\n\nI'm interested in the ${t.name} package (${t.price}).\n\nProject idea:\n\nTimeline:\n\nBudget:\n\nThanks.`,
                    )}`}
                    className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-medium transition-all duration-300 ${
                      t.featured
                        ? "bg-primary text-primary-foreground hover:scale-[1.03]"
                        : "glass hover:bg-secondary"
                    }`}
                  >
                    Hire me — {t.name}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </a>
                  <a
                    href={`https://wa.me/254793649319?text=${encodeURIComponent(
                      `Hi Apollo, I'm interested in the ${t.name} package (${t.price}).`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp +254 793 649 319
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Need something custom?{" "}
          <a href="#contact" className="text-primary hover:underline">
            Let's scope it together →
          </a>
        </p>
      </div>
    </section>
  );
}
