// app/projects/page.tsx
import Link from "next/link";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  primaryHref: string;      // main button
  secondaryHref?: string;   // optional second button (e.g., Webstore / Live Demo)
  primaryLabel?: string;    // button text
  secondaryLabel?: string;  // button text
  icon: string;
  highlight?: string;
};

const GITHUB_PROFILE = "https://github.com/sristiM123";

// ✅ Keep your links + palette, but fix PhishGuard (you had duplicate `href`)
const featured: Project[] = [
  {
    title: "NoRansom",
    subtitle: "Ransomware readiness + response (practical, defensive).",
    description:
      "A defense-first project focused on surfacing high-risk events, improving preparedness, and making ransomware-style incident handling more structured and explainable.",
    tags: ["Incident Readiness", "Detection Logic", "Security Monitoring"],
    primaryHref: "https://github.com/sristiM123/NoRansom_System",
    primaryLabel: "GitHub",
    icon: "🛡️",
    highlight: "Defense-first • practical security",
  },
  {
    title: "PhishGuard",
    subtitle: "Phishing URL detection + safe browsing UX.",
    description:
      "A phishing-focused project that highlights suspicious URL patterns using engineered signals and a clean decision flow — designed to be human-readable and portfolio-ready.",
    tags: ["Phishing", "Web Security", "Feature Modeling"],
    primaryHref: "https://chromewebstore.google.com/detail/phishguard-%E2%80%94-friendly-lin/gcojanglhmkpmlflmafehhdljmmafkha",
    primaryLabel: "Chrome Web Store",
    secondaryHref: "https://sristim123.github.io/PhishGuard-Web/",
    secondaryLabel: "Project Site",
    icon: "🪝",
    highlight: "Fast checks • human-friendly signals",
  },
  {
    title: "Battleship Homomorphic Game",
    subtitle: "A playful cryptography demo with privacy-preserving logic.",
    description:
      "A game-style demo that brings security concepts to life through interaction — blending classic gameplay with crypto ideas to show privacy and verification in action.",
    tags: ["Applied Crypto", "Privacy", "Game Security"],
    primaryHref: "https://github.com/sristiM123/Battleship-Game_Homomorphic-encyrption",
    primaryLabel: "GitHub",
    icon: "🚢",
    highlight: "Crypto, but make it fun",
  },
  {
    title: "Sign-Language-Recognition-using-YOLO-V5",
    subtitle: "Computer vision + deep learning (YOLOv5).",
    description:
      "An ML/CV project leveraging YOLOv5 for sign-language recognition — focused on practical detection performance and a clean pipeline that can be extended into real applications.",
    tags: ["YOLOv5", "Computer Vision", "Deep Learning"],
    primaryHref: "https://github.com/sristiM123/SIgn-Language-Recognition-using-YOLO-V5",
    primaryLabel: "GitHub",
    icon: "🤖",
    highlight: "ML • CV • YOLOv5",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-900 tracking-tight">
              Projects
            </h1>
            <p className="mt-3 max-w-2xl text-neutral-700">
              A curated set of builds — practical, explainable, and designed to show real security thinking.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={GITHUB_PROFILE}
              target="_blank"
              className="rounded-xl border border-neutral-300 bg-white/80 px-4 py-2 text-sm text-neutral-900 hover:bg-white transition"
            >
              View all repos ↗
            </Link>
            <Link
              href="/contact"
              className="rounded-xl bg-orange-900 px-4 py-2 text-sm text-white hover:opacity-95 transition"
            >
              Collaborate / Hire me
            </Link>
          </div>
        </div>

        {/* Featured grid (2 per row on large screens to reduce clutter) */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-amber-100 bg-white/90 p-6 shadow-sm transition hover:shadow-md"
            >
              {/* subtle corner glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-amber-200/30 blur-2xl opacity-0 transition group-hover:opacity-100"
              />

              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{p.icon}</span>
                  <div>
                    <h2 className="text-xl font-semibold text-orange-900">
                      {p.title}
                    </h2>
                    <p className="text-sm text-neutral-700">{p.subtitle}</p>
                  </div>
                </div>

                {p.highlight ? (
                  <span className="hidden sm:inline-flex shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-900">
                    {p.highlight}
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                {p.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Micro-divider */}
              <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
                <span className="block h-full w-1/3 rounded-full bg-amber-500 transition-all duration-500 group-hover:w-2/3" />
              </div>

              {/* Actions (no demo placeholder) */}
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={p.primaryHref}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-900 px-4 py-2 text-sm text-white hover:opacity-95 transition"
                >
                  {p.primaryLabel ?? "Open"} ↗
                </Link>

                {p.secondaryHref ? (
                  <Link
                    href={p.secondaryHref}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white/80 px-4 py-2 text-sm text-neutral-900 hover:bg-white transition"
                  >
                    {p.secondaryLabel ?? "More"} ↗
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </section>

        {/* Future projects (separate, general, not “security/ML”) */}
        <section className="mt-12 rounded-2xl border border-amber-100 bg-white/80 p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-orange-900">
                More projects are on the way
              </h3>
              <p className="mt-1 text-sm text-neutral-700">
                I regularly add new builds and refinements. If you want to see something specific,
                feel free to message me.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-3 sm:mt-0 inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:brightness-95 transition"
            >
              Suggest an idea ↗
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <MiniTile title="New builds" desc="Fresh projects as I explore new problems." />
            <MiniTile title="Upgrades" desc="Refactors, improvements, and stronger evaluation." />
            <MiniTile title="Case studies" desc="Write-ups + structured documentation for clarity." />
          </div>
        </section>

        <p className="mt-10 text-center text-xs text-orange-700">© 2025 Sristi Mitra</p>
      </div>
    </main>
  );
}

function MiniTile({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white/70 p-4">
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      <div className="mt-1 text-xs text-neutral-700">{desc}</div>
    </div>
  );
}
