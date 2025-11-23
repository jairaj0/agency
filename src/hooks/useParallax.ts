"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export function useParallax(strength = 0.25) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, strength * -200]);

  return { ref, y };
}

