import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full bg-primary/10 blur-[120px] -z-10" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8"
        >
          <Sparkles className="h-3 w-3 text-primary" />
          Available for select projects — Q3 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold leading-[0.95] tracking-tight max-w-5xl"
        >
          <span className="text-gradient">Mobile apps that</span>
          <br />
          <span className="text-gradient-primary italic font-light">ship</span>
          <span className="text-gradient">, scale, and</span>
          <br />
          <span className="text-gradient">get paid.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          I'm Apollo — a full-stack developer building production-grade mobile
          apps, websites, and web apps with bulletproof backends and live
          payment systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3.5 font-medium hover:scale-[1.03] transition-all duration-300 glow"
          >
            View projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 glass rounded-full px-6 py-3.5 font-medium hover:bg-secondary transition-all"
          >
            Hire me
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
