import Image from "next/image";
import Link from "next/link";
// ✅ Arcade removed

export default function Home() {
  return (
    <div className="relative">
      {/* soft vignette over beige */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80rem 50rem at 80% 10%, rgba(0,0,0,0.04), transparent 60%)",
        }}
      />

      {/* --- Hero --- */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* Left copy */}
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300/50 bg-white/70 px-3 py-1 text-xs text-neutral-700 shadow-sm backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-500 animate-pulseGlow" />
            Open to Research & Collabs
          </span>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            <span className="bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
              Building secure systems with elegance.
            </span>
          </h1>

          <p className="text-lg text-neutral-700">
            I’m <b>Sristi Mitra</b> — part cyber defender, part digital detective!
            Currently chasing my Master’s in Cyber Security, I’ve already cracked
            codes in a Security Operations Center (SOC), mastered the network
            universe with CCNA, and dived into some seriously cool cyber security
            research. Whether it’s outsmarting hackers, decoding threats, or
            experimenting with new defense tech, I live for that “gotcha!” moment
            in cyber space. Next stop: becoming a Security Engineer who turns
            cyber chaos into calm.
            <br />
            <span className="mt-1 inline-block text-neutral-700">
              <span className="mr-1">🔒</span>
              <Link
                href="/playground"
                className="fancy-underline underline-offset-8 decoration-amber-500 hover:decoration-amber-600 transition-[text-decoration-color]"
                title="Try bite-sized mini-CTFs"
              >
                Security playground
              </Link>{" "}
              where you can try mini challenges—tasteful, quick, and fun.
            </span>
          </p>

          {/* --- Social Links (replaces old buttons) --- */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/sristi-mitra-3260b11b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl border border-amber-300 bg-white text-orange-800 shadow-sm hover:shadow transition"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl border border-amber-300 bg-white text-orange-800 shadow-sm hover:shadow transition"
            >
              Resume
            </a>

            <a
              href="https://github.com/sristiM123"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl border border-amber-300 bg-white text-orange-800 shadow-sm hover:shadow transition"
            >
              GitHub
            </a>

            <a
              href="https://scholar.google.com/citations?hl=en&user=Ec4jnQsAAAAJ/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl border border-amber-300 bg-white text-orange-800 shadow-sm hover:shadow transition"
            >
              Google Scholar
            </a>
          </div>

          {/* skill chips */}
          <div className="flex flex-wrap gap-2 pt-1 text-sm text-neutral-700">
            <span className="rounded-full border border-neutral-300 bg-white/80 px-3 py-1">
              Web Security
            </span>
            <span className="rounded-full border border-neutral-300 bg-white/80 px-3 py-1">
              Digital Forensics
            </span>
            <span className="rounded-full border border-neutral-300 bg-white/80 px-3 py-1">
              Privacy-Preserving ML
            </span>
          </div>

          {/* ✅ Removed: 10-sec puzzle card */}
        </div>

        {/* Right image — CONSTRAINED */}
        <div className="relative">
          <div className="rounded-3xl border border-neutral-300/60 bg-white/70 p-2 shadow-sm backdrop-blur">
            <img
              src="https://drive.google.com/file/d/1opC2MDHj6-pTOdLPJ8pcGXQpZ8GN73Eh/view?usp=sharing"
              alt="Sristi Mitra portrait"
              className="h-auto w-full max-h-[520px] rounded-2xl object-cover"
              loading="eager"
            />
          </div>
        </div>
          <p className="mt-2 text-center text-xs text-neutral-600">
            Security, but make it chic.
          </p>
        </div>
      </section>

      {/* ✅ Removed: <Arcade /> */}
    </div>
  );
}
