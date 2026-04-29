import { motion } from "framer-motion";

const values = [
  {
    n: "01",
    title: "Execution over talk",
    desc: "Working code in your hands every week. Progress you can tap, not slides you can't.",
  },
  {
    n: "02",
    title: "Own the outcome",
    desc: "I'm responsible for shipping the result — architecture, infra, and the hard calls included.",
  },
  {
    n: "03",
    title: "Clean handover",
    desc: "Documented, tested, and yours. No black boxes. No vendor lock-in.",
  },
];

export function WorkEthic() {
  return (
    <section className="py-28 md:py-36 bg-surface/30 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-mono">
              How I work
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-gradient leading-[1.05]">
            Reliable. Direct.
            <br />
            <span className="italic font-light text-gradient-primary">Ships on time.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-border pt-6"
            >
              <div className="font-mono text-xs text-primary mb-4">{v.n}</div>
              <h3 className="text-xl font-display font-semibold mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
