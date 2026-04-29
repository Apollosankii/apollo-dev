import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

type Project = {
  name: string;
  tag: string;
  image: string;
  problem: string;
  solution: string;
  stack: string[];
  features: string[];
  demo: string;
  github: string;
};

const projects: Project[] = [
  {
    name: "PayRoute",
    tag: "Fintech / Payments",
    image: p1,
    problem:
      "Small businesses needed a faster way to collect, track, and reconcile customer payments without complex POS hardware.",
    solution:
      "A React Native app with Paystack integration, instant transaction notifications, and a Supabase-backed merchant dashboard.",
    stack: ["React Native", "Expo", "Supabase", "Paystack"],
    features: ["Paystack checkout", "Auth & roles", "Realtime ledger", "Push notifications"],
    demo: "#",
    github: "#",
  },
  {
    name: "Harvest",
    tag: "Marketplace",
    image: p2,
    problem:
      "Local vendors lacked a mobile-first marketplace to reach nearby customers and manage orders end-to-end.",
    solution:
      "Two-sided marketplace with vendor onboarding, order lifecycle, and Paystack-powered split payments.",
    stack: ["React Native", "Firebase", "Paystack", "AWS S3"],
    features: ["Vendor dashboard", "Split payments", "Order tracking", "Image CDN"],
    demo: "#",
    github: "#",
  },
  {
    name: "Pulse",
    tag: "Health / Tracking",
    image: p3,
    problem:
      "Users abandoned wellness apps that felt clinical and slow. The team needed a fast, focused tracking experience.",
    solution:
      "A minimal React Native app with offline-first sync, Supabase auth, and live progress charts.",
    stack: ["React Native", "Expo", "Supabase", "Reanimated"],
    features: ["Offline-first", "Biometric auth", "Live charts", "Streaks engine"],
    demo: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Selected work"
          title="Real apps. Real users. Real revenue."
          description="A snapshot of recent production builds across fintech, marketplaces, and consumer mobile."
        />

        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="card-elevated rounded-3xl overflow-hidden grid lg:grid-cols-5 group"
            >
              <div className="lg:col-span-2 relative overflow-hidden bg-surface-elevated min-h-[280px]">
                <img
                  src={p.image}
                  alt={`${p.name} app preview`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="lg:col-span-3 p-8 md:p-10 flex flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
                      {p.tag}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-semibold tracking-tight">
                      {p.name}
                    </h3>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                      Problem
                    </div>
                    <p className="text-foreground/90 leading-relaxed">{p.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                      Solution
                    </div>
                    <p className="text-foreground/90 leading-relaxed">{p.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {p.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2 mt-auto">
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:scale-[1.03] transition-all"
                  >
                    Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={p.github}
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full glass hover:bg-secondary transition-all"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
