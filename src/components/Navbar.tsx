"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Components", href: "#components" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeInOut" as const },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
};

const listVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: -8 },
  open: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      id="navbar"
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/70 px-4 py-3 text-sm text-white backdrop-blur-xl supports-backdrop-filter:bg-neutral-950/60"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="#home"
          scroll
          className="text-lg font-semibold tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          Market.
        </Link>

        <div className="hidden gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              {item.label}
              <span className="pointer-events-none absolute inset-x-4 bottom-1 h-0.5 origin-center scale-x-0 rounded-full bg-cyan-400/80 transition group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/40 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="relative block h-4 w-4">
            <motion.span
              className="absolute inset-x-0 top-0 h-0.5 w-full bg-white"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute inset-x-0 top-1.5 h-0.5 w-full bg-white"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute inset-x-0 bottom-0 h-0.5 w-full bg-white"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="mt-3 overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/85 md:hidden"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={listVariants}
              className="flex flex-col divide-y divide-white/5"
            >
              {navItems.map((item) => (
                <motion.li key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    scroll
                    className="block px-5 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/5 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

