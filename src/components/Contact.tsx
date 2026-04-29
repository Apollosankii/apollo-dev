import { motion } from "framer-motion";
import { Mail, MessageCircle, Code2 as Github, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-[120px] -z-10" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="card-elevated rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-mono">
              Open for work
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-gradient leading-[1.05] max-w-3xl mx-auto">
            Have an app to build?
            <br />
            <span className="italic font-light text-gradient-primary">Let's make it real.</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Tell me about the problem you're solving. I'll respond within 24 hours
            with next steps.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:apollo@example.com"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3.5 font-medium hover:scale-[1.03] transition-all glow"
            >
              <Mail className="h-4 w-4" />
              apollo@example.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="https://wa.me/0000000000"
              className="inline-flex items-center gap-2 glass rounded-full px-6 py-3.5 font-medium hover:bg-secondary transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 glass rounded-full px-6 py-3.5 font-medium hover:bg-secondary transition-all"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>Apollo (Felix) — Full-Stack Mobile Developer</span>
          </div>
          <div>© {new Date().getFullYear()} — Built and shipped.</div>
        </footer>
      </div>
    </section>
  );
}
