"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden py-28 text-center sm:py-32">
      <svg
        viewBox="0 0 900 500"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
      >
        <defs>
          <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>
        <g stroke="url(#lg1)" strokeWidth="1" opacity="0.5">
          <line x1="640" y1="60" x2="760" y2="140" />
          <line x1="760" y1="140" x2="700" y2="250" />
          <line x1="700" y1="250" x2="830" y2="300" />
          <line x1="640" y1="60" x2="560" y2="160" />
          <line x1="560" y1="160" x2="700" y2="250" />
          <line x1="560" y1="160" x2="480" y2="280" />
          <line x1="480" y1="280" x2="600" y2="380" />
          <line x1="700" y1="250" x2="600" y2="380" />
          <line x1="830" y1="300" x2="780" y2="420" />
        </g>
        <g fill="#5eead4">
          <circle cx="640" cy="60" r="4" />
          <circle cx="480" cy="280" r="3.5" />
        </g>
        <g fill="#818cf8">
          <circle cx="760" cy="140" r="4.5" />
          <circle cx="700" cy="250" r="3.5" />
          <circle cx="600" cy="380" r="4" />
        </g>
        <g fill="#f0a95c">
          <circle cx="560" cy="160" r="3.5" />
          <circle cx="830" cy="300" r="4.5" />
          <circle cx="780" cy="420" r="3.5" />
        </g>
      </svg>

      <div className="mx-auto max-w-3xl px-7">
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="mb-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[13.5px] text-muted"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-accent-teal" /> {contact.location}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Phone size={14} className="text-accent-teal" /> {contact.phone}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Mail size={14} className="text-accent-teal" /> {contact.email}
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.12}
          variants={fadeUp}
          className="mx-auto max-w-[16ch] font-display text-5xl font-bold leading-tight sm:text-6xl"
        >
          <span className="grad-text">{contact.name}</span>
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.2}
          variants={fadeUp}
          className="mt-3 font-mono text-[15px] font-medium text-accent-teal"
        >
          {contact.role}
        </motion.div>

        <motion.p
          initial="hidden"
          animate="show"
          custom={0.28}
          variants={fadeUp}
          className="mx-auto mt-8 max-w-[56ch] text-[17px] leading-relaxed text-muted"
        >
          I design and validate ML pipelines, SQL-driven systems, and data models —
          from a multilingual OCR-to-JSON pipeline processing scanned documents to
          benchmarked deep learning models for medical diagnosis.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.36}
          variants={fadeUp}
          className="mt-9 flex flex-wrap justify-center gap-3.5"
        >
          <Button variant="primary" onClick={() => (window.location.href = "#work")}>
            See the work
          </Button>
          <Button variant="ghost" onClick={() => window.open(contact.github, "_blank")}>
            <Github size={16} /> GitHub
          </Button>
          <Button variant="ghost" onClick={() => window.open(contact.linkedin, "_blank")}>
            <Linkedin size={16} /> LinkedIn
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
