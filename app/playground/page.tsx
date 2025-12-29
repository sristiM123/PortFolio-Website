"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

/** -------------------------------------------------------------
 *  Minimal, elegant, and playful Security Playground
 *  - Big hero
 *  - 3 feature tiles -> open as drawers (keeps page tidy)
 *  - Compact Labs & Tools row
 *  - Subtle animations (no external libs)
 * ------------------------------------------------------------- */

type DrawerKind = "phishing" | "url" | "hash" | null;

/* ---------- tiny helpers ---------- */
const quotes = [
    "Catch the fishy link. Save the day. 🐟",
    "Think twice, click once. ✅",
    "Curiosity + caution = great security. 🔐",
    "Details matter — domains more. 🌐",
    "Practice makes prevention. 🧠",
];
const rand = (n: number) => Math.floor(Math.random() * n);

/* ---------- Page ---------- */
export default function PlaygroundPage() {
    const [open, setOpen] = useState<DrawerKind>(null);
    const [wins, setWins] = useState({ url: 0, hash: 0, phish: 0 });
    const quote = useMemo(() => quotes[rand(quotes.length)], []);

    function bump(kind: keyof typeof wins) {
        setWins((w) => ({ ...w, [kind]: w[kind] + 1 }));
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
            {/* HERO */}
            <section className="px-4 sm:px-6 lg:px-8 py-12 border-b border-amber-100/70">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-orange-900">
                                Security Playground
                            </h1>
                            <p className="mt-3 max-w-xl text-neutral-700 text-base md:text-lg">
                                Short, friendly exercises that train your eye for security.
                                Click a tile to play — everything opens in a tidy drawer so the
                                page stays clean.
                            </p>
                        </div>
                        <div className="self-start md:self-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-amber-900 text-sm shadow-sm animate-pulse">
                ✨ {quote}
              </span>
                        </div>
                    </div>

                    {/* Achievements (subtle) */}
                    <div className="mt-6 flex flex-wrap gap-3 text-xs text-neutral-700">
                        <Badge label="URL Eyes" value={wins.url} />
                        <Badge label="Hash Hunches" value={wins.hash} />
                        <Badge label="Phish Busters" value={wins.phish} />
                    </div>
                </div>
            </section>

            {/* FEATURED TILES */}
            <section className="px-4 sm:px-6 lg:px-8 py-10">
                <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
                    <FeatureCard
                        title="Phishing Arcade"
                        blurb="Tap suspicious-looking links and learn why they’re sketchy."
                        cta="Play"
                        onClick={() => setOpen("phishing")}
                    />
                    <FeatureCard
                        title="10-sec URL Spotter"
                        blurb="Can you pick the odd URL in one glance?"
                        cta="Start"
                        onClick={() => setOpen("url")}
                    />
                    <FeatureCard
                        title="Mini Hash Guesser"
                        blurb="Guess the hash type from the string style."
                        cta="Try"
                        onClick={() => setOpen("hash")}
                    />
                </div>
            </section>

            {/* LABS & TOOLS */}
            <section className="px-4 sm:px-6 lg:px-8 pb-16">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-xl font-semibold text-orange-900">Labs & Tools</h2>
                    <p className="text-sm text-neutral-700 mt-1">
                        Deeper, more hands-on sandboxes.
                    </p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <ToolLink title="HTTP Log Sleuth" href="/playground/log" />
                        <ToolLink title="CSP Sandbox" href="/playground/csp" />
                        <ToolLink title="Hash Lab (full)" href="/playground/hash" />
                        <ToolLink title="Quick URL Puzzle" href="/playground/quick" />
                    </div>
                </div>
            </section>

            {/* FOOTER NOTE */}
            <footer className="px-4 sm:px-6 lg:px-8 pb-10">
                <div className="mx-auto max-w-6xl rounded-xl border border-amber-100 bg-amber-50 p-4 text-sm text-neutral-700">
                    <strong>Note:</strong> Simplified, safe exercises meant for learning.
                    They mock real patterns without making network requests.
                </div>
                <p className="mt-6 text-center text-xs text-orange-700">© 2025 Sristi Mitra</p>
            </footer>

            {/* DRAWERS */}
            <Drawer open={open === "phishing"} onClose={() => setOpen(null)}>
                <PhishingArcade onWin={() => bump("phish")} />
            </Drawer>

            <Drawer open={open === "url"} onClose={() => setOpen(null)}>
                <UrlSpotter onWin={() => bump("url")} />
            </Drawer>

            <Drawer open={open === "hash"} onClose={() => setOpen(null)}>
                <HashMini onWin={() => bump("hash")} />
            </Drawer>
        </main>
    );
}

/* ---------- UI bits ---------- */

function Badge({ label, value }: { label: string; value: number }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-3 py-1 shadow-sm">
      <span className="text-amber-900">{label}</span>
      <span className="rounded-full bg-orange-900 px-2 py-0.5 text-white">{value}</span>
    </span>
    );
}

function FeatureCard({
                         title,
                         blurb,
                         cta,
                         onClick,
                     }: {
    title: string;
    blurb: string;
    cta: string;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className="group relative overflow-hidden rounded-2xl border border-amber-100 bg-white/90 p-6 text-left shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-300"
        >
            {/* soft corner glows */}
            <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-200/50 blur-2xl transition group-hover:scale-125"
            />
            <h3 className="text-lg font-semibold text-orange-900">{title}</h3>
            <p className="mt-2 text-sm text-neutral-700">{blurb}</p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-xl bg-orange-900 px-4 py-2 text-white">
        {cta} <span className="transition group-hover:translate-x-0.5">↗</span>
      </span>
        </button>
    );
}

function ToolLink({ title, href }: { title: string; href: string }) {
    return (
        <Link
            href={href}
            className="block rounded-xl border border-amber-100 bg-white/90 p-4 shadow-sm transition hover:shadow-md"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="font-medium text-orange-900">{title}</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">Open</p>
                </div>
                <span className="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-900">Lab</span>
            </div>
        </Link>
    );
}

/* ---------- Drawer (bottom sheet on mobile, modal on desktop) ---------- */
function Drawer({
                    open,
                    onClose,
                    children,
                }: {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-40">
            {/* backdrop */}
            <button
                aria-label="Close overlay"
                onClick={onClose}
                className="absolute inset-0 bg-black/30"
            />
            {/* panel */}
            <div className="absolute left-1/2 top-[6vh] w-full max-w-2xl -translate-x-1/2 rounded-2xl border border-amber-200 bg-white p-5 shadow-xl md:top-1/2 md:-translate-y-1/2">
                <div className="flex items-start justify-between">
                    <h3 className="text-base font-semibold text-orange-900">Playground</h3>
                    <button onClick={onClose} className="text-sm text-neutral-500">
                        Close ✕
                    </button>
                </div>
                <div className="mt-3">{children}</div>
            </div>
        </div>
    );
}

/* ---------- Games (compact, elegant) ---------- */

/* Phishing Arcade */
function PhishingArcade({ onWin }: { onWin: () => void }) {
    const samples = [
        {
            show: "https://secure-paypa1.com/invoice/1234",
            tip: "‘paypal’ swapped with ‘paypa1’ — classic homograph trick.",
        },
        {
            show: "http://bank-update-login.io",
            tip: "No HTTPS + generic TLD for a bank — 🚩.",
        },
        {
            show: "https://university-login.verify-fast.edu.portal.tk",
            tip: "Real domain is ‘portal.tk’. The rest is costume.",
        },
        {
            show: "https://share.dropbox-support[dot]com/confirm",
            tip: "Obfuscation like [dot] reeks of spoofing.",
        },
    ];
    const [picked, setPicked] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    function clickLink(url: string) {
        setPicked(url);
        setMessage(
            "🎭 Gotcha! We don’t open real links here — instead, here’s why it’s sketchy ↓"
        );
        onWin();
    }

    return (
        <div>
            <p className="text-sm text-neutral-700">
                Tap any suspicious-looking link. We’ll prank you with a safe reveal and a
                quick lesson.
            </p>
            <div className="mt-3 grid gap-2">
                {samples.map((s) => (
                    <button
                        key={s.show}
                        onClick={() => clickLink(s.show)}
                        className="w-full text-left rounded-lg border px-3 py-2 hover:bg-amber-50 transition"
                    >
                        <span className="font-mono text-xs text-neutral-800">{s.show}</span>
                        <span className="ml-2 text-[10px] text-neutral-500">(click)</span>
                    </button>
                ))}
            </div>

            {message && picked && (
                <div className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
                    {message}
                    <div className="mt-2 text-neutral-800">
                        <strong>Why:</strong>{" "}
                        {samples.find((x) => x.show === picked)?.tip}
                    </div>
                    <div className="mt-2 text-xs text-neutral-600">
                        Tip: hover to preview destination; verify domain spelling carefully.
                    </div>
                </div>
            )}
        </div>
    );
}

/* URL Spotter (10-sec) */
function UrlSpotter({ onWin }: { onWin: () => void }) {
    const options = useMemo(
        () => [
            { url: "https://www.bankofexample.com/login", phish: false },
            { url: "http://secure-bank-login.info", phish: true },
            { url: "https://billing.stripe.com/pay/EXAMPLE", phish: false },
            { url: "https://microsoft-account.security-reset.support", phish: true },
        ],
        []
    );
    const [picked, setPicked] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<string | null>(null);

    function choose(url: string) {
        setPicked(url);
        const isPhish = options.find((o) => o.url === url)?.phish;
        if (isPhish) {
            setFeedback("✅ Correct! That one’s shady.");
            onWin();
        } else {
            setFeedback("🟠 Close! That one looks legit-style in this demo.");
        }
    }

    return (
        <div>
            <p className="text-sm text-neutral-700">
                Pick the suspicious URL. (We keep it simple — focus on the host.)
            </p>
            <ul className="mt-3 space-y-2">
                {options.map((o) => (
                    <li key={o.url}>
                        <button
                            onClick={() => choose(o.url)}
                            className={`w-full text-left rounded-md border px-3 py-2 hover:bg-amber-50 transition ${
                                picked === o.url ? "border-amber-300 bg-amber-50/70" : ""
                            }`}
                        >
                            <span className="font-mono text-xs text-neutral-800">{o.url}</span>
                        </button>
                    </li>
                ))}
            </ul>
            {feedback && (
                <div className="mt-3 rounded-md bg-white/80 px-3 py-2 text-sm text-neutral-800 border">
                    {feedback}
                </div>
            )}
            <p className="mt-2 text-xs text-neutral-600">
                Hint: look for odd TLDs, missing HTTPS, or impostor subdomains.
            </p>
        </div>
    );
}

/* Hash Mini */
function HashMini({ onWin }: { onWin: () => void }) {
    const bank = [
        { s: "d41d8cd98f00b204e9800998ecf8427e", a: "md5" },
        { s: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4", a: "sha1" },
        { s: "9c1185a5c5e9fc54612808977ee8f548b2258d31", a: "sha256" },
    ];
    const [i, setI] = useState(0);
    const [guess, setGuess] = useState("");
    const [msg, setMsg] = useState<string | null>(null);

    function check() {
        const ok = bank[i].a === guess.trim().toLowerCase();
        if (ok) {
            setMsg("✅ Nice! Pattern recognition unlocked.");
            onWin();
        } else {
            setMsg(`ℹ️ Example answer: ${bank[i].a.toUpperCase()}`);
        }
    }
    function next() {
        setMsg(null);
        setGuess("");
        setI((x) => (x + 1) % bank.length);
    }

    return (
        <div>
            <p className="text-sm text-neutral-700">
                Guess the hash family (md5 / sha1 / sha256). This is a light pattern exercise.
            </p>
            <div className="mt-3 font-mono bg-neutral-50 border rounded p-3 text-sm text-neutral-800">
                {bank[i].s}
            </div>
            <div className="mt-3 flex gap-2">
                <input
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder="Type md5 / sha1 / sha256"
                    className="flex-1 rounded-md border px-3 py-2 text-sm"
                />
                <button onClick={check} className="px-3 py-2 rounded-md bg-orange-900 text-white">
                    Check
                </button>
                <button onClick={next} className="px-3 py-2 rounded-md border">
                    Next
                </button>
            </div>
            {msg && <div className="mt-3 text-sm text-neutral-800">{msg}</div>}
            <p className="mt-2 text-xs text-neutral-600">
                Real identification needs length + context; this is intentionally lightweight.
            </p>
        </div>
    );
}
