import { motion } from "framer-motion";
import { Smartphone, Database, CreditCard, Rocket, Globe, LayoutDashboard, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform Android & iOS apps built with React Native — designed to launch, not just demo.",
    points: ["Production-ready architecture", "Native performance", "App Store ready"],
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Fast, SEO-ready marketing and business sites built with modern React stacks — designed to convert.",
    points: ["Responsive & accessible", "SEO optimized", "Lightning-fast loads"],
  },
  {
    icon: LayoutDashboard,
    title: "Web App Development",
    desc: "Custom dashboards, SaaS products, and internal tools with auth, roles, and real data flows.",
    points: ["Auth & user roles", "Realtime data", "Admin dashboards"],
  },
  {
    icon: Database,
    title: "Backend Development",
    desc: "Scalable Supabase & Firebase backends with auth, realtime, and battle-tested data models.",
    points: ["Schema design", "Auth & RLS", "Realtime sync"],
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    desc: "End-to-end Paystack flows — checkout, webhooks, and reconciliation. Money in, audit-clean.",
    points: ["Checkout & subscriptions", "Webhook handling", "Refunds & disputes"],
  },
  {
    icon: Rocket,
    title: "App Deployment",
    desc: "From local build to Play Store and TestFlight — managed releases without the headache.",
    points: ["Play Store submission", "TestFlight builds", "OTA updates"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Services"
          title="Build it once. Build it right."
          description="Engagements scoped around your business outcome — not hours billed."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card-elevated rounded-2xl p-8 group relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/15 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
