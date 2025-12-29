// app/blog/page.tsx – Creative blog landing page (fixed Framer Motion typings)
// Theme: orange/amber/cream; animated, upbeat; same UI as your version.
// Requirements: Tailwind CSS + Framer Motion (`npm i framer-motion`)

"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// ---- animation presets (✅ typed + correct ease) ----
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // ✅ correct type for TS (cubic-bezier)
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// ---- helpers ----
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 border border-amber-200 px-3 py-0.5 text-xs font-medium shadow-sm">
      {children}
    </span>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={`rounded-2xl border border-amber-100 bg-gradient-to-br from-white via-amber-50 to-orange-50 shadow-md hover:shadow-xl transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function BlogPage() {
  const teaserPosts = [
    {
      title: "Designing a Lightweight Phishing URL Detector (NLP + Heuristics)",
      tag: "Research Note",
      eta: "Drafting",
      blurb:
        "A practical recipe for fast, privacy-preserving classification without external lookups.",
    },
    {
      title: "SOC to Security Engineering: What I Wish I Knew",
      tag: "Career",
      eta: "Outlining",
      blurb:
        "Bridging alert fatigue to architecture decisions — playbooks, metrics, and mindset.",
    },
    {
      title: "Prime Factorization Experiments: Building a Reproducible ML Pipeline",
      tag: "Lab Log",
      eta: "Editing",
      blurb:
        "From datasets to benchmarks — transparent methods and authentic results.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="rounded-3xl bg-gradient-to-br from-amber-100 via-white to-orange-50 border border-amber-200 p-8 sm:p-12 shadow-lg"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold text-orange-900 mb-3"
          >
            Notes &amp; Blog
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-3xl text-base sm:text-lg text-neutral-800 leading-relaxed"
          >
            I love writing — and I’m kicking off a fresh series on security
            engineering, research logs, and hands-on guides. First posts are
            brewing ☕. In the meantime, you can follow my writing on{" "}
            <a
              href="https://medium.com/@ratrimitra16"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-800 underline decoration-amber-400/70 underline-offset-4 hover:text-orange-700"
            >
              Medium
            </a>
            .
          </motion.p>

          <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-3">
            <Chip>Security Engineering</Chip>
            <Chip>Research Logs</Chip>
            <Chip>Threat Hunting</Chip>
            <Chip>Privacy &amp; ML</Chip>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="https://medium.com/@ratrimitra16"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-orange-600 text-white px-5 py-2 text-sm font-semibold shadow-md hover:bg-orange-700 transition"
            >
              Read on Medium
            </a>

            {/* ✅ Give it text so it doesn’t look broken */}
            <a
              href="/rss.xml"
              className="inline-flex items-center justify-center rounded-xl bg-white text-orange-800 border border-amber-300 px-5 py-2 text-sm font-semibold shadow-sm hover:shadow-md transition"
            >
              RSS (coming soon)
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Upcoming teasers */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-orange-900 mb-6"
        >
          Coming Up Next
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teaserPosts.map((p, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center justify-between mb-1.5 gap-3">
                <h3 className="text-lg font-semibold text-orange-900">
                  {p.title}
                </h3>
                <Chip>{p.tag}</Chip>
              </div>
              <p className="text-amber-800 text-sm">{p.blurb}</p>
              <div className="mt-4 text-xs text-orange-700">
                Status: {p.eta}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* MDX section hint */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-12">
        <Card className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-orange-900">
                MDX-powered posts
              </h3>
              <p className="text-neutral-700 text-sm sm:text-[15px] mt-1">
                Drafts and research notes will publish here soon — clean
                typography, citations, and reproducible code snippets.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white text-orange-800 border border-amber-300 px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-md transition"
            >
              Suggest a topic
            </a>
          </div>
        </Card>

        <p className="mt-6 text-center text-xs text-orange-700">
          © 2025 Sristi Mitra
        </p>
      </section>
    </main>
  );
}
