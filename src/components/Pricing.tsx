"use client";

import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";

const plans = [
  {
    name: "Starter",
    price: "$18",
    description: "For solo makers shipping their next concept.",
    features: [
      "100 components",
      "Community support",
      "Design tokens",
      "Email templates",
    ],
    cta: "Choose Starter",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$48",
    description: "Perfect for teams that iterate fast and collaborate.",
    features: [
      "Unlimited components",
      "Motion presets",
      "Design review credits",
      "Slack + email support",
      "Custom token exports",
    ],
    cta: "Choose Pro",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "White-glove partnership with roadmap input.",
    features: [
      "Private component drops",
      "Compliance support",
      "Dedicated channel",
      "Onsite workshops",
      "Quarterly audits",
    ],
    cta: "Talk to us",
    highlighted: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

export default function Pricing() {
  const { ref, y } = useParallax(0.125);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      id="pricing"
      className="w-full bg-neutral-950 px-6 py-20 text-white sm:py-24 lg:px-10"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Pricing
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Predictable plans for every launch.
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            Scale your component library with transparent, usage-friendly tiers.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              className={`relative flex h-full flex-col rounded-3xl border px-7 py-8 shadow-2xl ring-1 ${
                plan.highlighted
                  ? "border-cyan-400/60 bg-neutral-900/80 ring-cyan-400/30 scale-[1.02]"
                  : "border-white/5 bg-neutral-900/60 ring-white/10"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                  {plan.badge}
                </span>
              )}
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {!plan.highlighted && (
                    <span className="text-sm text-zinc-400">/month</span>
                  )}
                </div>
                <p className="text-sm text-zinc-400">{plan.description}</p>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-zinc-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-white text-neutral-900 hover:bg-zinc-100"
                    : "border border-white/20 text-white hover:border-white/60"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}


