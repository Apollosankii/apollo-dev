import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const stats = [
  { value: "20+", label: "Apps shipped" },
  { value: "4+", label: "Years building" },
  { value: "100%", label: "Client retention" },
];

export function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="About" title="Engineered to ship." />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I build mobile applications that real users depend on — from
              onboarding flows to payment rails. My focus is full-stack:
              polished React Native interfaces, scalable Supabase and Firebase
              backends, and production payment integrations with Paystack.
            </p>
            <p>
              I work with founders and teams who need a developer that owns the
              outcome — not just the ticket. Architecture, deployment, and the
              hard infrastructure decisions are part of the job.
            </p>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-3 lg:grid-cols-1 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-elevated rounded-2xl p-6"
              >
                <div className="text-4xl md:text-5xl font-display font-semibold text-gradient-primary">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
