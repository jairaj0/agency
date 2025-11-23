"use client";

import Image from "next/image";
import { motion, useTransform } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";

const cards = [
  {
    name: "Navbar",
    id: "navbar",
    image:
      "https://images.unsplash.com/photo-1737301214226-3f959016436f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJpY2UlMjBjaGFydHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Hero",
    id: "hero",
    image:
      "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Features",
    id: "features",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    name: "Pricing",
    id: "pricing",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
  },
  {
    name: "FAQ",
    id: "faq",
    image:
      "https://images.unsplash.com/photo-1531265726475-52ad60219627?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Contact",
    id: "contact",
    image:
      "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ComponentsGallery() {
  const { ref, y } = useParallax(0.2);
  const gridY = useTransform(y, (value) => value * 0.6);
  const gridX = useTransform(y, (value) => value * -0.3);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      id="components"
      className="w-full bg-neutral-950 px-6 py-20 text-white sm:py-24 lg:px-10"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Components Gallery
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Preview each surface before you drop it in.
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            Hover to explore, click to jump directly to the section.
          </p>
        </div>

        <motion.div
          style={{ y: gridY, x: gridX }}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card) => (
            <motion.button
              type="button"
              key={card.id}
              variants={item}
              onClick={() => handleScroll(card.id)}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/60 text-left shadow-xl ring-1 ring-white/10 transition focus:outline-none focus:ring-2 focus:ring-cyan-400/80"
            >
              <div className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={card.image}
                    alt={`${card.name} preview`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                    {card.name}
                  </p>
                  <p className="text-lg font-semibold text-white">{card.name} Surface</p>
                </div>
                <span className="text-sm text-cyan-300">View</span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

