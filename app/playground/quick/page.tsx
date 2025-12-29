"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function QuickPhishGame() {
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
        setFeedback(
            isPhish
                ? "✅ Correct! That one’s shady (odd TLD or scary subdomain)."
                : "🟠 Close! That one looks legit-style in this demo."
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4 sm:px-6 lg:px-8 py-12">
            <div className="mx-auto max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-extrabold text-orange-900">Phish or Legit?</h1>
                <p className="mt-2 text-neutral-700">
                    Pick the suspicious URL. Focus on the <b>host</b>, not the path.
                </p>

                <ul className="mt-6 space-y-3">
                    {options.map((o) => (
                        <li key={o.url}>
                            <button
                                onClick={() => choose(o.url)}
                                className={`w-full text-left rounded-lg border px-3 py-2 transition hover:bg-amber-50 ${
                                    picked === o.url ? "border-amber-300 bg-amber-50/70" : "border-neutral-200 bg-white"
                                }`}
                            >
                                <span className="font-mono text-sm text-neutral-800">{o.url}</span>
                            </button>
                        </li>
                    ))}
                </ul>

                {feedback && (
                    <div className="mt-4 rounded-md border bg-white/80 px-3 py-2 text-sm text-neutral-800">
                        {feedback}
                    </div>
                )}

                <div className="mt-8 flex gap-3">
                    <Link href="/" className="rounded-md border px-4 py-2">Back Home</Link>
                    <Link href="/playground" className="rounded-md bg-orange-900 px-4 py-2 text-white">
                        More Games
                    </Link>
                </div>

                <p className="mt-8 text-xs text-neutral-600">
                    Tip: look for odd TLDs, missing HTTPS, or impostor subdomains like <code>security-reset.support</code>.
                </p>
            </div>
        </main>
    );
}
