"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Minimal, resilient navbar for the app router.
 * - Active highlight (also for nested routes, e.g. /research/foo)
 * - Same palette as your site (#f5efe6 background)
 * - Horizontal scroll on very small screens (no layout breaks)
 */
export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Research", href: "/research" },
        { label: "Certifications", href: "/certifications" },      // NEW
        { label: "Security Learning", href: "/security-learning" },// NEW
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
        { label: "Playground", href: "/playground", lock: true },
    ];

    const isActive = (href: string) =>
        pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-[#f5efe6]/90 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4">
                <nav
                    aria-label="Primary"
                    className="flex items-center justify-center gap-2 py-3 overflow-x-auto no-scrollbar text-sm font-medium text-neutral-700"
                >
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            prefetch={false}
                            className={[
                                "px-3 py-1.5 rounded-full transition shadow-sm/0 hover:bg-white/70",
                                isActive(l.href) ? "bg-white text-neutral-900 shadow-sm" : "",
                            ].join(" ")}
                        >
                            {l.lock ? "🔒 " : ""}
                            {l.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
