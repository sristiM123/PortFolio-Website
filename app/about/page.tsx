// app/about/page.tsx – Warm (orange/amber/cream) theme + bachelor entry + linked universities + scholarship-focused honors
// Requires: Tailwind CSS, Framer Motion (`npm i framer-motion`)

"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// ---------- Animation presets ----------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1], // valid cubic-bezier array
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

// ---------- UI helpers ----------
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="text-3xl sm:text-4xl font-bold tracking-tight text-orange-900 mb-8 border-l-4 border-amber-400 pl-3"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 border border-amber-200 px-3 py-0.5 text-xs font-medium shadow-sm">
      {children}
    </span>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

// ---------- Page ----------
export default function AboutPage() {
  const education = [
    {
      school: "Ss. Cyril and Methodius University in Skopje (FINKI,UKIM)",
      schoolUrl: "https://www.ukim.edu.mk/",
      degree: "MSc in Applied Cyber Security",
      tag: "Masters",
      period: "2025 — Present",
      points: [
        "Research: Thesis topic (in progress), optimization of large prime numbers using ML",
        "Coursework: Web & Mobile Application Security, Multimedia & Scalable Web, Cryptography, Digital Trust & Privacy",
      ],
      cgpa: "—",
    },
    {
      school: "Kadir Has University",
      schoolUrl: "https://www.khas.edu.tr/",
      degree: "MSc in Cyber Security",
      tag: "Masters",
      period: "2024 — 2025",
      points: [
        "Research: Reputation & Energy-Aware Dynamic Hybrid Consensus (READ-HC) Model for IIoT",
        "Coursework: Penetration Testing, Computer Networks, Cryptography, Safety-Critical Computer Systems",
      ],
      cgpa: "3.83/4.00",
    },
    {
      school: "Delhi Technological University",
      schoolUrl: "https://dtu.ac.in/",
      degree: "BSc in Computer Science & Engineering",
      tag: "Bachelors",
      period: "2019 — 2023",
      points: [
        "Senior project: Multifactor Asymmetric Key Encryption (MAKE) for mutual authentication in IoMT",
        "Key areas: Networks, Operating Systems, Algorithms, Cryptography",
      ],
      cgpa: "8.6/10.0",
    },
  ];

  const research = [
    "Lightweight ML pipelines for factorization problems",
    "Privacy-preserving machine learning & secure data workflows",
    "Network defense engineering & threat hunting",
    "Phishing URL detection using NLP & transformers",
  ];

  const scholarships: Array<{
    title: string;
    url?: string;
    org: string;
    year: string;
    blurb: string;
  }> = [
    {
      title: "Erasmus Mundus Joint Masters Program (CYBERMACS)",
      url: "https://cybermacs.eu/",
      org: "UKIM and KHAS",
      year: "2024–2026",
      blurb:
        "CyberMACS is a prestigious Erasmus Mundus program that unites top European universities to train future leaders in advanced cyber security through global collaboration, research, and innovation.",
    },
    {
      title: "Indian Council of Cultural Relations (ICCR)",
      org: "Delhi Technological University",
      year: "2019–2023",
      blurb:
        "The ICCR Scholarship is a highly prestigious program that supports outstanding international students and promotes academic excellence and cross-cultural exchange across leading universities in India.",
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
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold text-orange-900 mb-4">
            About Me
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-3xl text-base sm:text-lg text-neutral-800 leading-relaxed">
            Hi, I’m <span className="font-semibold text-orange-800">Sristi Mitra</span>. I’m a Master’s student in Cyber
            Security with hands-on SOC experience, <span className="font-medium text-amber-800">CCNA certification</span>,
            and active research in IoT security. I aim to contribute as a Security Engineer building resilient,
            privacy-focused systems — and I love work that connects AI, privacy, and security (from phishing detection to
            cryptography research).
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
            <Chip>Cyber Security MSc</Chip>
            <Chip>CCNA Certified</Chip>
            <Chip>SOC Analyst Experience</Chip>
            <Chip>Security Engineer (in progress)</Chip>
            <Chip>Research-Driven</Chip>
          </motion.div>
        </motion.div>
      </section>

      {/* Education */}
      <Section title="Education">
        <div className="relative pl-6 sm:pl-10">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-amber-200" />

          <div className="space-y-6">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative"
              >
                {/* timeline dot */}
                <div className="absolute -left-[3px] top-8 h-4 w-4 rounded-full bg-amber-500 ring-4 ring-white" />

                <Card>
                  <div className="flex items-start justify-between gap-4 p-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <a
                          href={item.schoolUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg sm:text-xl font-semibold text-orange-800 hover:text-orange-700 underline decoration-amber-400/70 underline-offset-4"
                        >
                          {item.school}
                        </a>
                        <Chip>{item.tag}</Chip>
                      </div>

                      <p className="text-amber-800 text-sm sm:text-base">{item.degree}</p>

                      <div className="mt-3 text-sm sm:text-[15px] text-neutral-700 space-y-2">
                        <p>
                          <span className="font-medium text-orange-800">CGPA:</span> {item.cgpa}
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          {item.points.map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="text-sm sm:text-base text-orange-700 whitespace-nowrap">{item.period}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Research & Interests */}
      <Section title="Research & Technical Interests">
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {research.map((r, i) => (
            <motion.li key={i} variants={fadeUp}>
              <Card className="p-5 hover:scale-[1.02] transition-transform">
                <div className="text-orange-900 text-sm sm:text-base font-medium">{r}</div>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* Scholarships */}
      <Section title="Scholarships – Honors & Achievements">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {scholarships.map((s, i) => (
            <Card key={i} className="p-5">
              <motion.div variants={fadeUp}>
                <div className="flex items-center justify-between gap-3">
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-900 font-semibold text-base sm:text-lg hover:text-orange-800 underline decoration-amber-400/70 underline-offset-4"
                    >
                      {s.title}
                    </a>
                  ) : (
                    <h3 className="text-orange-900 font-semibold text-base sm:text-lg">{s.title}</h3>
                  )}
                  <span className="text-xs sm:text-sm text-orange-700 whitespace-nowrap">{s.year}</span>
                </div>

                <p className="text-amber-800 text-sm mt-0.5">{s.org}</p>
                <p className="text-neutral-700 text-sm sm:text-[15px] mt-2 leading-relaxed">{s.blurb}</p>
              </motion.div>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* CTA + Copyright */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-14">
        <Card className="p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-amber-200 via-white to-orange-100 border-amber-300">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-orange-900">
              Open for collaborations & security engineering challenges
            </h3>
            <p className="text-orange-800 mt-1 text-sm sm:text-base">
              Let’s build innovative, secure, and privacy-driven systems together.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center rounded-xl bg-orange-600 text-white px-5 py-2 text-sm font-semibold shadow-md hover:bg-orange-700 transition"
          >
            Contact Me
          </a>
        </Card>

        <p className="mt-6 text-center text-xs text-orange-700">© 2025 Sristi Mitra</p>
      </section>
    </main>
  );
}
