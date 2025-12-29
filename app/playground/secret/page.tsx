"use client";

import Link from "next/link";

export default function SecretDoor() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4 sm:px-6 lg:px-8 py-16">
            <div className="mx-auto max-w-2xl rounded-2xl border border-amber-100 bg-white/90 p-8 text-center shadow-sm">
                <div className="text-5xl">🔒</div>
                <h1 className="mt-3 text-3xl font-extrabold text-orange-900">Secret Corner</h1>
                <p className="mt-2 text-neutral-700">
                    You found the hidden door. Curiosity is a great security skill. 🌟
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Link href="/projects" className="rounded-xl border px-4 py-3 hover:bg-amber-50 transition">
                        View Projects
                    </Link>
                    <Link href="/research" className="rounded-xl border px-4 py-3 hover:bg-amber-50 transition">
                        Research
                    </Link>
                    <Link href="/contact" className="rounded-xl border px-4 py-3 hover:bg-amber-50 transition">
                        Say Hello
                    </Link>
                </div>

                <p className="mt-6 text-xs text-neutral-500">
                    © 2025 Sristi Mitra — “Security, but make it chic.”
                </p>
            </div>
        </main>
    );
}
