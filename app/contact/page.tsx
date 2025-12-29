// app/contact/page.tsx – Warm, inviting contact page with links to Resume & LinkedIn
// Professional, collaborative tone with secure form and subtle animations.

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // ✅ TS-safe easing
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

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
      className={`rounded-2xl border border-amber-100 bg-gradient-to-br from-white via-amber-50 to-orange-50 shadow-md ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot
    if ((data.get("company") as string)?.length) {
      setStatus("success");
      return;
    }

    const payload = {
      email: String(data.get("email") || "").trim(),
      message: String(data.get("message") || "").trim(),
      consent: data.get("consent") === "on",
    };

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
    if (!emailOk) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }
    if (payload.message.length < 10) {
      setStatus("error");
      setError("A short message (10+ chars) helps me route your note.");
      return;
    }
    if (!payload.consent) {
      setStatus("error");
      setError("Please confirm consent to be contacted back.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        "Could not send right now. Please email me directly: ratrimitra16@gmail.com"
      );
    }
  }

  const serviceHighlights = [
    "Cyber Security & Research Collaboration",
    "Website & Portfolio Development",
    "Academic Writing & Research Paper Support",
    "SOP / Resume Enhancement",
    "Content Creation: Blogs & Technical Writing",
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
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
            Contact
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-3xl text-base sm:text-lg text-neutral-800 leading-relaxed"
          >
            I’d love to hear from you — whether it’s a project idea, a
            collaboration, or a new opportunity. Your message and contact
            details are kept completely confidential and used only to get back
            to you.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-4 flex flex-wrap gap-2">
            {serviceHighlights.map((t, i) => (
              <Chip key={i}>{t}</Chip>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-12 grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <Card className="p-6">
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="text"
                name="company"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <label className="block">
                <span className="block text-sm font-semibold text-orange-900">
                  Your email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-xl border border-amber-200 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
                />
              </label>

              <label className="block">
                <span className="block text-sm font-semibold text-orange-900">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={7}
                  placeholder="Tell me about your idea, role, or how we can work together…"
                  className="mt-1 w-full rounded-xl border border-amber-200 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
                />
              </label>

              <label className="flex items-start gap-2 text-sm text-neutral-700">
                <input
                  name="consent"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-amber-300 text-orange-600"
                />
                <span>
                  I consent to be contacted back about this message. My
                  information will remain private and never shared.
                </span>
              </label>

              <div className="flex items-center gap-3 pt-1">
                <button
                  disabled={status === "sending"}
                  className="inline-flex items-center rounded-xl bg-orange-600 text-white px-5 py-2 text-sm font-semibold shadow-md hover:bg-orange-700 transition disabled:opacity-70"
                >
                  {status === "sending" ? "Sending…" : "Send"}
                </button>

                {status === "success" && (
                  <span className="text-sm text-green-700">
                    Thanks! I’ll reply soon.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-sm text-red-700">{error}</span>
                )}
              </div>

              <p className="text-xs text-neutral-600">
                * You can also email me directly at{" "}
                <a
                  href="mailto:ratrimitra16@example.com"
                  className="underline decoration-amber-400/70 underline-offset-4 text-orange-800"
                >
                  ratrimitra16@example.com
                </a>
                .
              </p>
            </form>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-orange-900">
              Let’s Collaborate
            </h3>
            <p className="mt-2 text-sm text-neutral-800 leading-relaxed">
              Alongside my work in cyber security and research, I enjoy helping
              others build and communicate their ideas — from crafting strong
              research papers and resumes to developing clean, modern websites
              or security-aware content. If that sounds like something we could
              work on together, feel free to drop a message!
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-white text-orange-800 border border-amber-300 px-3 py-1.5 font-medium shadow-sm hover:shadow-md"
              >
                View Resume
              </a>
              <a
                href="https://www.linkedin.com/in/sristi-mitra-3260b11b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-white text-orange-800 border border-amber-300 px-3 py-1.5 font-medium shadow-sm hover:shadow-md"
              >
                LinkedIn
              </a>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-12">
        <p className="text-center text-xs text-orange-700">© 2025 Sristi Mitra</p>
      </section>
    </main>
  );
}
