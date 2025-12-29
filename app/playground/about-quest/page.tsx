"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AboutQuest() {
    const router = useRouter();
    const [picked, setPicked] = useState<string | null>(null);
    const [msg, setMsg] = useState<string | null>(null);

    function choose(opt: string) {
        setPicked(opt);
        if (opt === "Cyber Security") {
            setMsg("✅ Correct — jumping to About.");
            setTimeout(() => router.push("/about"), 700);
        } else {
            setMsg("🧭 Try again. Hint: it’s security-flavoured.");
        }
    }

    const opts = ["Cyber Security", "Astrophysics", "Culinary Arts"];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4 sm:px-6 lg:px-8 py-12">
            <div className="mx-auto max-w-xl rounded-2xl border border-amber-100 bg-white/90 p-6 shadow-sm">
                <h1 className="text-3xl font-extrabold text-orange-900">About Me Quest</h1>
                <p className="mt-2 text-neutral-700">What is my current Master’s degree?</p>

                <div className="mt-4 grid gap-2">
                    {opts.map((o) => (
                        <button
                            key={o}
                            onClick={() => choose(o)}
                            className={`text-left rounded-md border px-3 py-2 text-sm hover:bg-amber-50 transition ${
                                picked === o ? "border-amber-300 bg-amber-50/70" : ""
                            }`}
                        >
                            {o}
                        </button>
                    ))}
                </div>

                {msg && <p className="mt-3 text-sm text-neutral-800">{msg}</p>}

                <div className="mt-6 flex gap-3 text-sm">
                    <Link href="/" className="rounded-md border px-4 py-2">Back Home</Link>
                    <Link href="/playground" className="rounded-md bg-amber-100 px-4 py-2 text-amber-900">More Games</Link>
                </div>
            </div>
        </main>
    );
}
