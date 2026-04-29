import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mb-16"
    >
      <div className="flex items-center gap-2 mb-5">
        <span className="h-px w-8 bg-primary" />
        <span className="text-xs uppercase tracking-[0.2em] text-primary font-mono">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-gradient leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
