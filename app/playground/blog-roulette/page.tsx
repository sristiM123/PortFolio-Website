"use client";

import Link from "next/link";

/** Home Arcade — cards open dedicated game pages (no inline games). */
export default function Arcade() {
    return (
        <section className="mt-10 space-y-6">
            {/* NOTE: No teaser here anymore. */}

            <h2 className="text-2xl md:text-3xl font-semibold text-orange-900">
                Hack Arcade — <span className="text-neutral-800">pick a card</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <ArcadeCard
                    icon="🧩"
                    title="Codebreaker"
                    subtitle="Crack a tiny cipher → unlock Projects."
                    href="/playground/codebreaker"
                />
                <ArcadeCard
                    icon="🪝"
                    title="Phish or Legit?"
                    subtitle="Spot the fishy URL — warm-up round."
                    href="/playground/quick"
                />
                <ArcadeCard
                    icon="🔍"
                    title="Research Hunt"
                    subtitle="Find the right venue → unlock Research."
                    href="/playground/research-hunt"
                />
                <ArcadeCard
                    icon="📚"
                    title="About Me Quest"
                    subtitle="Pick the right path → unlock About."
                    href="/playground/about-quest"
                />
                <ArcadeCard
                    icon="🎰"
                    title="Blog Roulette"
                    subtitle="Choose where I write → Blog or Medium."
                    href="/playground/blog-roulette"
                />
                <ArcadeCard
                    icon="🚪"
                    title="Secret Door"
                    subtitle="A tiny puzzle → hidden corner."
                    href="/playground/secret"
                />
            </div>
        </section>
    );
}

function ArcadeCard({
                        icon,
                        title,
                        subtitle,
                        href,
                    }: {
    icon: string;
    title: string;
    subtitle: string;
    href: string;
}) {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-amber-100 bg-white/90 p-5 text-left shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-lg font-semibold text-orange-900">{title}</h3>
            </div>
            <p className="mt-1 text-sm text-neutral-700">{subtitle}</p>

            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
                <span className="block h-full w-1/3 animate-sweep rounded-full bg-amber-500" />
            </div>

            {/* IMPORTANT: only this button is clickable (prevents overlay issues) */}
            <div className="mt-4">
                <Link
                    href={href}
                    prefetch={false}
                    className="inline-block rounded-xl bg-orange-900 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                    Open ↗
                </Link>
            </div>
        </div>
    );
}
