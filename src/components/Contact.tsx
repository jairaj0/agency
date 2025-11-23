"use client";

import { motion } from "framer-motion";
import { Github, Mail, Twitter } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

export default function Contact() {
  const { ref, y } = useParallax(0.08);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      id="contact"
      className="w-full bg-neutral-950 px-6 py-20 text-white sm:py-24 lg:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10 text-center"
      >
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Contact
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            Tell us about your team, timeline, and what you are building. We usually
            respond within one business day.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="w-full space-y-4 rounded-3xl border border-white/5 bg-neutral-900/70 p-8 shadow-2xl ring-1 ring-white/10"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-white">
              Name
              <input
                type="text"
                placeholder="Ava Lee"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition focus:border-cyan-400 focus:outline-none"
              />
            </label>
            <label className="text-sm font-medium text-white">
              Email
              <input
                type="email"
                placeholder="ava@studio.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition focus:border-cyan-400 focus:outline-none"
              />
            </label>
          </div>
          <label className="text-sm font-medium text-white">
            Message
            <textarea
              rows={5}
              placeholder="Share details about your product, stakeholders, and goals…"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition focus:border-cyan-400 focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-zinc-100"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:border-white/40"
            >
              <social.icon className="h-4 w-4" />
              {social.label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}


