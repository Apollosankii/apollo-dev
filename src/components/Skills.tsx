import { motion } from "framer-motion";
import { Smartphone, Server, Cloud, CreditCard, Wrench } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    icon: Smartphone,
    title: "Frontend",
    items: ["React Native", "Expo", "TypeScript", "Reanimated", "Tailwind"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Supabase", "Firebase", "PostgreSQL", "Edge Functions", "Auth"],
  },
  { icon: Cloud, title: "Cloud", items: ["AWS S3", "EC2 basics", "CloudFront", "Lambda"] },
  {
    icon: CreditCard,
    title: "Payments",
    items: ["Paystack", "Webhooks", "Split payments", "Reconciliation"],
  },
  { icon: Wrench, title: "Tools", items: ["Git", "Android Studio", "Xcode", "Cursor", "Figma"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 bg-surface/30 border-y border-border relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Stack"
          title="A focused, modern toolkit."
          description="No buzzwords — just the tools I use every day to ship fast and maintain well."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-elevated rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center text-primary">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-lg">{g.title}</h3>
              </div>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
