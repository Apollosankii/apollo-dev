import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Zap, CreditCard } from "lucide-react";

const items = [
  { icon: Rocket, label: "Production-ready apps" },
  { icon: CreditCard, label: "Live payment systems" },
  { icon: Zap, label: "Fast, predictable delivery" },
  { icon: ShieldCheck, label: "Secure auth & backends" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center text-primary">
                <it.icon className="h-4 w-4" />
              </div>
              <span className="text-sm text-muted-foreground">{it.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
