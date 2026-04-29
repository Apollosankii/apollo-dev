import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  Globe2,
  MapPin,
  Smartphone,
  Globe,
  Layers,
} from "lucide-react";
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

type Region = "intl" | "kenya";
type Product = "mobile" | "websites" | "webapps";

const PRICING: Record<Region, Record<Product, Tier[]>> = {
  intl: {
    mobile: [
      {
        name: "Starter",
        tagline: "Ship a focused mobile MVP — fast.",
        price: "From $1,200",
        timeline: "2–3 weeks",
        bestFor: "Solo founders & early-stage ideas",
        deliverables: [
          "Cross-platform React Native app (both stores)",
          "Up to 5 core screens",
          "Auth (email + Google)",
          "Supabase or Firebase backend",
          "Analytics hookup",
          "Play Store or TestFlight-ready build",
          "2 weeks post-launch support",
        ],
        featured: false,
      },
      {
        name: "Growth",
        tagline: "Payments, dashboards, production.",
        price: "From $2,800",
        timeline: "4–6 weeks",
        bestFor: "SMBs shipping revenue features",
        deliverables: [
          "Production React Native client",
          "Companion merchant / admin dashboard (web)",
          "Up to 12 surfaces total",
          "Paystack + webhooks where needed",
          "Roles, notifications, error tracking",
          "Store release + stabilization handover",
          "30 days post-launch support",
        ],
        featured: true,
      },
      {
        name: "Pro",
        tagline: "Full mobile platform stack.",
        price: "From $5,500",
        timeline: "8–12 weeks",
        bestFor: "Scaling teams & revenue-critical apps",
        deliverables: [
          "Apps + dashboards + ops tooling",
          "Unlimited planned screens / flows",
          "Subscriptions & reconciliation patterns",
          "AWS / infra hardening guidance",
          "CI/CD + staging environments",
          "Realtime + background jobs where needed",
          "60 days priority support + docs",
        ],
        featured: false,
      },
    ],
    websites: [
      {
        name: "Landing",
        tagline: "One scroll-stopping landing page.",
        price: "From $119",
        timeline: "1–2 weeks",
        bestFor: "Launches & lead capture",
        deliverables: [
          "Responsive marketing landing (Tailwind/React)",
          "Hero + services + testimonials blocks",
          "Contact / lead form wired to inbox",
          "Basic on-page SEO + metadata",
          "Fast Lighthouse-oriented build",
          "Deploy to Vercel/Netlify (your domain)",
        ],
        featured: false,
      },
      {
        name: "Business site",
        tagline: "Multi-page brochure that converts.",
        price: "From $179",
        timeline: "2–3 weeks",
        bestFor: "SMBs & growing brands",
        deliverables: [
          "Up to 5–6 brochure pages",
          "Brand-aligned layout + typography",
          "Services, team, FAQs, structured contact",
          "WhatsApp/email CTAs integrated",
          "Analytics + OG tags",
          "Lightweight CMS-ready structure if needed",
        ],
        featured: true,
      },
      {
        name: "Studio",
        tagline: "Rich marketing site — blog-ready.",
        price: "From $229",
        timeline: "3–4 weeks",
        bestFor: "Content-heavy & SEO-led teams",
        deliverables: [
          "Premium multi-section marketing build",
          "Blog / news layout foundation",
          "Advanced sections (cases, calculators optional)",
          "Performance + accessibility pass",
          "Schema-ready structure",
          "Handover playbook for edits",
        ],
        featured: false,
      },
    ],
    webapps: [
      {
        name: "Lite",
        tagline: "Authenticated tool or mini dashboard.",
        price: "From $279",
        timeline: "2–4 weeks",
        bestFor: "Internal teams & prototypes",
        deliverables: [
          "React dashboard shell + routing",
          "Email/Google auth baseline",
          "Up to ~6 authenticated views",
          "Supabase/Firebase data layer",
          "Role-lite (owner vs member)",
          "Deploy + env handoff",
        ],
        featured: false,
      },
      {
        name: "SaaS core",
        tagline: "Multi-role product with integrations.",
        price: "From $449",
        timeline: "4–7 weeks",
        bestFor: "Startups onboarding paying users",
        deliverables: [
          "Granular RBAC-ready patterns",
          "Billing hooks (Stripe/Paystack scaffold)",
          "Workflow pages + dashboards",
          "Webhooks handling surface",
          "Audit-friendly logging cues",
          "QA + rollout checklist",
          "35 days stabilization support",
        ],
        featured: true,
      },
      {
        name: "Scale",
        tagline: "Serious dashboards & ops-heavy flows.",
        price: "From $799",
        timeline: "7–11 weeks",
        bestFor: "Ops teams needing reliability",
        deliverables: [
          "Advanced data-heavy UI",
          "Background jobs orchestration cues",
          "Multi-env CI/CD pairing",
          "Performance & security checklist",
          "Admin + customer portals",
          "Observability recommendations",
          "60 days prioritized support",
        ],
        featured: false,
      },
    ],
  },
  kenya: {
    mobile: [
      {
        name: "Starter",
        tagline: "Production mobile MVP — local rate.",
        price: "From KES 50,000",
        timeline: "2–3 weeks",
        bestFor: "SMEs, hustles & solo founders",
        deliverables: [
          "Cross-platform React Native app",
          "Up to 5 screens",
          "Auth (email + Google)",
          "Supabase or Firebase backend",
          "WhatsApp handoff snippets",
          "Play Store/TestFlight-aligned build",
          "2 weeks post-launch support",
        ],
        featured: false,
      },
      {
        name: "Growth",
        tagline: "M-Pesa, Paystack & a real ship.",
        price: "From KES 150,000",
        timeline: "4–6 weeks",
        bestFor: "Growing Kenyan businesses",
        deliverables: [
          "Production app + dashboards",
          "Up to 12 surfaces",
          "M-Pesa Daraja / Paystack where needed",
          "Roles & RLS scaffolding",
          "Push + SMS touchpoints",
          "Analytics instrumentation",
          "30 days post-launch support",
        ],
        featured: true,
      },
      {
        name: "Pro",
        tagline: "Full platform engagements.",
        price: "From KES 350,000",
        timeline: "8–12 weeks",
        bestFor: "SACCOs, fintech & scaled teams",
        deliverables: [
          "Mission-critical workflows",
          "Unlimited negotiated screens",
          "Full payment + reconciliation rails",
          "AWS / infra scaffolding",
          "CI/CD parity",
          "Realtime + audits",
          "60-day partner support",
        ],
        featured: false,
      },
    ],
    websites: [
      {
        name: "Landing",
        tagline: "Fast landing presence — SMEs & creators.",
        price: "From KES 15,000",
        timeline: "1–2 weeks",
        bestFor: "Launches needing proof fast",
        deliverables: [
          "Single-page marketing build",
          "Hero + credibility sections",
          "WhatsApp/email capture",
          "Basic SEO wording",
          "Deploy to your subdomain/domain",
          "Handover cheatsheet",
        ],
        featured: false,
      },
      {
        name: "Business site",
        tagline: "Multi-page site in the national sweet spot.",
        price: "From KES 20,000",
        timeline: "2–3 weeks",
        bestFor: "Stores, agencies, coaches",
        deliverables: [
          "Up to 5 brochure pages",
          "Custom layout tuned to positioning",
          "Services, contact, FAQs",
          "Integrated WhatsApp prompts",
          "Performance tuned for LTE users",
          "Small content polish pass",
        ],
        featured: true,
      },
      {
        name: "Studio",
        tagline: "Premium brochure + richer storytelling.",
        price: "Up to ~KES 25,000",
        timeline: "3–4 weeks",
        bestFor: "Owners wanting editorial polish",
        deliverables: [
          "Elevated typography + visuals",
          "Case study / highlight modules",
          "Blog scaffold for future uploads",
          "Analytics + tagging ready",
          "Accessibility sweep",
          "Training call for edits",
        ],
        featured: false,
      },
    ],
    webapps: [
      {
        name: "Lite",
        tagline: "Dashboards starting at entry viability.",
        price: "From KES 25,000",
        timeline: "2–4 weeks",
        bestFor: "Collectors & field teams",
        deliverables: [
          "Protected React dashboard shell",
          "Email auth baseline",
          "Up to 6 routed views",
          "Supabase/Firebase data wiring",
          "Owner vs collaborator split",
          "Deploy + onboarding doc",
        ],
        featured: false,
      },
      {
        name: "SaaS core",
        tagline: "Customers + payments surfaces.",
        price: "From KES 65,000",
        timeline: "4–7 weeks",
        bestFor: "Kenyan SMEs digitizing intake",
        deliverables: [
          "Structured RBAC scaffolding",
          "M-Pesa / Paystack ready flows",
          "Auditable dashboards",
          "Automation hooks via functions",
          "Monitoring recommendations",
          "35 days stabilization",
        ],
        featured: true,
      },
      {
        name: "Scale",
        tagline: "Mission dashboards & integrations.",
        price: "From KES 140,000",
        timeline: "7–11 weeks",
        bestFor: "Regulated or data-heavy outfits",
        deliverables: [
          "Heavy data visualization stack",
          "Ops-grade reliability patterns",
          "Multi-stakeholder portals",
          "Security review checklist",
          "Background jobs playbook",
          "60-day prioritized support",
        ],
        featured: false,
      },
    ],
  },
};

const PRODUCT_LABEL: Record<Product, string> = {
  mobile: "Mobile",
  websites: "Websites",
  webapps: "Web apps",
};

function sectionCopy(product: Product) {
  switch (product) {
    case "mobile":
      return {
        description:
          "End-to-end mobile engagements — Expo/React Native pairing with backends you can own.",
      };
    case "websites":
      return {
        description:
          "Marketing and brochure builds only — landing pages through premium multi-page sites.",
      };
    case "webapps":
      return {
        description:
          "Authenticated tools, dashboards, and SaaS-style surfaces distinct from brochure sites.",
      };
  }
}

export function Pricing() {
  const [region, setRegion] = useState<Region>("intl");
  const [product, setProduct] = useState<Product>("mobile");

  const tiers = useMemo(() => PRICING[region][product], [region, product]);
  const { description: productDescription } = sectionCopy(product);
  const gridCols = tiers.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  const leadPrefix = `${region === "kenya" ? "KE" : "Intl"} ${PRODUCT_LABEL[product]}`;

  return (
    <section id="pricing" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Packages"
          title="Pick a lane. Get to market."
          description={`Mobile, websites, or web apps — then choose International (USD) or Kenya (KES). ${productDescription}`}
        />

        <div className="flex justify-center mb-6">
          <div className="glass rounded-full p-1 inline-flex flex-wrap justify-center gap-1">
            <button
              type="button"
              onClick={() => setRegion("intl")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 sm:px-5 text-sm font-medium transition-all ${
                region === "intl"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Globe2 className="h-4 w-4" />
              International (USD)
            </button>
            <button
              type="button"
              onClick={() => setRegion("kenya")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 sm:px-5 text-sm font-medium transition-all ${
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

        <div className="flex justify-center mb-10">
          <div className="glass rounded-full p-1 inline-flex flex-wrap justify-center gap-1">
            <button
              type="button"
              onClick={() => setProduct("mobile")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 sm:px-5 text-sm font-medium transition-all ${
                product === "mobile"
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Smartphone className="h-4 w-4 shrink-0" />
              Mobile / full-stack
            </button>
            <button
              type="button"
              onClick={() => setProduct("websites")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 sm:px-5 text-sm font-medium transition-all ${
                product === "websites"
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Globe className="h-4 w-4 shrink-0" />
              Websites
            </button>
            <button
              type="button"
              onClick={() => setProduct("webapps")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 sm:px-5 text-sm font-medium transition-all ${
                product === "webapps"
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Layers className="h-4 w-4 shrink-0" />
              Web apps
            </button>
          </div>
        </div>

        {region === "kenya" && (
          <div className="text-center text-sm text-muted-foreground max-w-2xl mx-auto -mt-6 mb-8 space-y-2">
            <p>
              <span className="text-primary font-medium">Adaptive pricing</span> — local rates tuned
              for the Kenyan market.
            </p>
            {(product === "websites" || product === "webapps") && (
              <p>
                Website packages focus on brochure/marketing pages.{" "}
                <span className="font-medium text-foreground">Web apps</span> cover dashboards,
                portals, and authenticated tooling — scoped separately above.
              </p>
            )}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={`${region}-${product}`}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className={`grid grid-cols-1 gap-5 mx-auto ${gridCols} ${
              tiers.length === 2 ? "max-w-4xl md:justify-center" : ""
            }`}
          >
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  t.featured ? "bg-primary/[0.04] border border-primary/40 glow" : "card-elevated"
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
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.tagline}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-border">
                  <div className="text-4xl font-display font-semibold text-gradient">{t.price}</div>
                  <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    <span>{t.timeline}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50 hidden sm:inline" />
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
                      `[${leadPrefix}] ${t.name} inquiry`,
                    )}&body=${encodeURIComponent(
                      `Hi Apollo,\n\nI'm interested in ${PRODUCT_LABEL[product]} — ${t.name} (${t.price}, ${region === "kenya" ? "Kenya KES" : "International USD"}).\n\nProject idea:\n\nTimeline:\n\nBudget:\n\nThanks.`,
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
                      `Hi Apollo, I'm interested in ${PRODUCT_LABEL[product]} (${t.name}) — ${t.price}.`,
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
            Let&apos;s scope it together →
          </a>
        </p>
      </div>
    </section>
  );
}
