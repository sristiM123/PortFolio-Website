"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Codebreaker() {
    const router = useRouter();
    const [answer, setAnswer] = useState("");
    const [msg, setMsg] = useState<string | null>(null);

    function check() {
        const ok = answer.trim().toLowerCase() === "protect"; // Caesar -3 of "surhfw"
        if (ok) {
            setMsg("✅ Correct! Unlocking Projects…");
            setTimeout(() => router.push("/projects"), 700);
        } else {
            setMsg("🧠 Hint: Caesar shift −3 on “surhfw”.");
        }
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4 sm:px-6 lg:px-8 py-12">
            <div className="mx-auto max-w-xl rounded-2xl border border-amber-100 bg-white/90 p-6 shadow-sm">
                <h1 className="text-3xl font-extrabold text-orange-900">Codebreaker</h1>
                <p className="mt-2 text-neutral-700">Decode this and you’re in:</p>
                <div className="mt-4 flex gap-2">
                    <input
                        placeholder='Decode: "surhfw"'
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className="flex-1 rounded-md border px-3 py-2 text-sm"
                    />
                    <button onClick={check} className="rounded-md bg-orange-900 px-4 py-2 text-white">
                        Submit
                    </button>
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
