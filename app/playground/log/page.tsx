// app/playground/logs/page.tsx
"use client";
import { useState } from "react";

const LINES: readonly string[] = [
  "GET /index.html 200 1234",
  "GET /about 200 980",
  "GET /images/hero.webp 200 80432",
  "GET /contact?name=admin'-- 200 42",
  "GET /../../etc/passwd 404 10",
];

// very small helper: mark common suspicious patterns
function looksSuspicious(line: string): boolean {
  // SQLi-ish quote/comment OR path traversal
  return /('|--|\.\.\/\.{0,2}\/|%2e%2e%2f)/i.test(line);
}

export default function LogSleuth() {
  const [choice, setChoice] = useState<number | null>(null);

  const verdict =
    choice === null
      ? null
      : looksSuspicious(LINES[choice])
      ? "✅ Correct: that request is suspicious."
      : "❌ Not quite. Look for SQL injection or path traversal patterns.";

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">HTTP Log Sleuth</h1>
      <p className="text-neutral-600">
        Pick the suspicious request (no trick questions).
      </p>

      <ol className="space-y-2">
        {LINES.map((line, i) => {
          const selected = choice === i;
          return (
            <li
              key={i}
              className={`p-2 rounded-xl border ${
                selected ? "border-neutral-900" : "border-neutral-200"
              }`}
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="log"
                  value={i}
                  checked={selected}
                  onChange={() => setChoice(i)}
                />
                <code className="text-sm break-all">{line}</code>
              </label>
            </li>
          );
        })}
      </ol>

      {verdict && <p className="text-sm">{verdict}</p>}

      <details className="mt-2 text-sm text-neutral-600">
        <summary className="cursor-pointer">Why are these suspicious?</summary>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <code>admin'--</code> includes a quote and comment marker typical in
            SQL injection probes.
          </li>
          <li>
            <code>../../etc/passwd</code> is a classic path traversal attempt.
          </li>
        </ul>
      </details>
    </div>
  );
}
