// app/playground/csp/page.tsx
"use client";
import { useMemo, useState } from "react";

type Toggle = {
  label: string;
  checked: boolean;
  set: (v: boolean) => void;
  describe: string;
};

export default function CSPSandbox() {
  // Toggles
  const [allowExternalImages, setAllowExternalImages] = useState<boolean>(true);
  const [allowInlineScripts, setAllowInlineScripts] = useState<boolean>(false);

  // Build directives safely (no String.split involved)
  const policy = useMemo(() => {
    const directives: string[] = [
      `default-src 'self'`,
      `img-src 'self'${allowExternalImages ? " https://images.unsplash.com" : ""}`,
      `script-src 'self'${allowInlineScripts ? " 'unsafe-inline'" : ""}`,
    ];
    return directives.join("; ");
  }, [allowExternalImages, allowInlineScripts]);

  // Toggle list (for a small, typed map over)
  const toggles: Toggle[] = [
    {
      label: "Allow external images (unsplash)",
      checked: allowExternalImages,
      set: setAllowExternalImages,
      describe:
        "When enabled, images from images.unsplash.com are allowed to load.",
    },
    {
      label: "Allow inline scripts",
      checked: allowInlineScripts,
      set: setAllowInlineScripts,
      describe:
        "When enabled, inline script blocks would be allowed (simulated here).",
    },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">CSP Sandbox</h1>
        <p className="text-neutral-600">
          Toggle directives and see what would be allowed or blocked. This is a{" "}
          <em>simulation</em> for learning—no real headers are being set.
        </p>
      </header>

      {/* Toggles */}
      <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm space-y-3">
        <h2 className="text-lg font-medium">Directives</h2>
        <ul className="space-y-2">
          {toggles.map((t, i) => (
            <li key={i} className="flex items-start gap-3">
              <input
                id={`t-${i}`}
                type="checkbox"
                className="mt-1"
                checked={t.checked}
                onChange={(e) => t.set(e.target.checked)}
              />
              <div>
                <label htmlFor={`t-${i}`} className="font-medium">
                  {t.label}
                </label>
                <p className="text-sm text-neutral-600">{t.describe}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Policy preview */}
      <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-medium mb-2">Simulated policy</h2>
        <code className="block text-xs p-3 rounded-xl border bg-neutral-50 break-words">
          {policy}
        </code>
        <p className="text-xs text-neutral-500 mt-2">
          Tip: In production you would send this via the <code>Content-Security-Policy</code>{" "}
          HTTP header or a <code>&lt;meta httpEquiv=&quot;Content-Security-Policy&quot; /&gt;</code>{" "}
          tag (header is preferred).
        </p>
      </section>

      {/* Demo area */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* Image demo */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h3 className="font-medium mb-2">Image loading demo</h3>
          <p className="text-sm text-neutral-600 mb-3">
            External image from Unsplash if allowed; falls back to local image otherwise.
          </p>
          <img
            src={
              allowExternalImages
                ? "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
                : "/images/hero.webp"
            }
            alt="demo"
            className="rounded-xl border"
          />
          <p className="text-xs text-neutral-500 mt-2">
            {allowExternalImages
              ? "External image permitted by img-src."
              : "External image blocked → local image used."}
          </p>
        </div>

        {/* Inline script demo (simulated) */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h3 className="font-medium mb-2">Inline script demo</h3>
          <p className="text-sm text-neutral-600 mb-3">
            We simulate the effect of inline scripts being allowed/blocked.
          </p>
          <div className="rounded-xl border p-3 text-sm min-h-[56px] flex items-center">
            {allowInlineScripts ? (
              // Simulated "inline" outcome — we still render safely
              <span>
                <b>Inline script ran.</b> (simulation)
              </span>
            ) : (
              <span>Inline script blocked by <code>script-src</code>.</span>
            )}
          </div>
          <p className="text-xs text-neutral-500 mt-2">
            Real inline script execution is not used here for safety—this is a
            teaching aid showing the outcome.
          </p>
        </div>
      </section>
    </div>
  );
}
