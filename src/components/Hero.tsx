"use client";

import { motion, useTransform } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";

const headlineVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const subheadVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.15 },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.3 },
  },
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.35 },
  },
};

export default function Hero() {
  const { ref, y } = useParallax(0.4);
  const panelParallax = useTransform(y, (value) => value * 0.75);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      id="hero"
      className="w-full bg-neutral-950 px-6 py-20 text-white sm:py-24 lg:px-10"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center rounded-full border border-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400"
          >
            new drop • components
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={headlineVariants}
            className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Craft calm, dark product launches in hours—not weeks.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={subheadVariants}
            className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Thoughtful components, motion-first interactions, and balanced spacing to help
            your team ship modern experiences that feel intentional everywhere.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={ctaVariants}
            className="flex flex-col gap-3 text-sm font-medium sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-neutral-900 transition hover:bg-zinc-200"
            >
              Get Started
            </a>
            <a
              href="#components"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-white/60 hover:bg-white/5"
            >
              Download Components
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ y: panelParallax }}
          initial="hidden"
          animate="visible"
          variants={panelVariants}
          className="flex-1 rounded-3xl border border-white/10 bg-linear-to-b from-neutral-900/80 to-neutral-950/40 p-8 shadow-2xl ring-1 ring-white/5"
        >
          <div className="flex h-72 w-full items-center justify-center rounded-2xl border border-dashed border-white/15 bg-neutral-900/60 text-sm text-zinc-500">
            <img
              src="hero.jpg"
              alt="Product preview"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}