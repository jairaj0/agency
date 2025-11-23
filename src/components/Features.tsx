"use client";

import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";
import {
  Globe,
  Layers,
  Shield,
  Sparkles,
  Zap,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Polished Themes",
    description:
      "Pre-styled surfaces tuned for glassy dark UIs so you can drop them in instantly.",
  },
  {
    icon: Shield,
    title: "Accessible Contrast",
    description:
      "Every palette ships with WCAG-safe contrast and a11y-first motion defaults.",
  },
  {
    icon: Zap,
    title: "Motion Ready",
    description:
      "Framer Motion variants are included so your interactions feel intentional.",
  },
  {
    icon: Layers,
    title: "Composable Stack",
    description:
      "Mix and match components without reworking spacing, typography, or rhythm.",
  },
  {
    icon: Globe,
    title: "Global Tokens",
    description:
      "Unified token system keeps light/dark palettes, typography, and radii in sync.",
  },
  {
    icon: Headphones,
    title: "Human Support",
    description:
      "Chat directly with the team for integration tips, audits, or custom drops.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export default function Features() {
  const { ref, y } = useParallax(0.125);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      id="features"
      className="w-full bg-neutral-950 px-6 py-20 text-white sm:py-24 lg:px-10"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Features
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Everything you need for calm launches.
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            Built for dark-first products, tuned for modern shipping velocity.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariant}
              whileHover={{ scale: 1.02 }}
              className="group h-full rounded-3xl border border-white/5 bg-neutral-900/60 p-6 shadow-xl ring-1 ring-white/10 transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition group-hover:bg-white/20">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </motion.section>
  );
}


