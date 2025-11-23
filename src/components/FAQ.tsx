"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const faqs = [
  {
    question: "How often do you release new components?",
    answer:
      "Expect a curated drop every month, complete with dark/light variants, motion presets, and markdown docs.",
  },
  {
    question: "Can I use the components for client projects?",
    answer:
      "Yes. Your license covers unlimited client work as long as you keep assets within your team or organization.",
  },
  {
    question: "Do you support custom brand palettes?",
    answer:
      "Growth and Enterprise tiers ship with custom token exports so your palette, typography, and radii stay synced.",
  },
  {
    question: "Is there support available if I get stuck?",
    answer:
      "Starter plans include community support. Pro and Enterprise unlock priority channels plus async design reviews.",
  },
  {
    question: "What tools are these components optimized for?",
    answer:
      "Everything is built with Next.js + Tailwind in mind, but tokens make it easy to port into other frameworks.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, y } = useParallax(0.075);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      id="faq"
      className="w-full bg-neutral-950 px-6 py-20 text-white sm:py-24 lg:px-10"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">FAQ</p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Answers for the most common questions.
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            Still unsure? Reach out and we will get back within one business day.
          </p>
        </div>

        <div className="divide-y divide-white/10 rounded-3xl border border-white/5 bg-neutral-900/60">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-white">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-zinc-400"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="px-6"
                    >
                      <motion.p
                        initial={{ y: -8 }}
                        animate={{ y: 0 }}
                        exit={{ y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="pb-5 text-sm text-zinc-400"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}


