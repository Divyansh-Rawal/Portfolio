"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <div className="mb-2 font-mono text-[13px] text-muted">{kicker}</div>
      <h2 className="mb-8 font-display text-[1.7rem] font-semibold">{title}</h2>
    </Reveal>
  );
}
