// app/security-learning/page.tsx
import Image from "next/image";
import Link from "next/link";

/**
 * ZERO-MAINTENANCE SETUP:
 *  - Edit the three constants below with your handles/IDs.
 *  - THM + HTB use official image badges that auto-update.
 *  - CyberDefenders: links to your profile until a live badge is provided.
 */
const THM_USERNAME = "0xsriM";
const HTB_USER_ID = "2357387"; // e.g., "123456"
const CYBERDEFENDERS_USERNAME = "0xsriM";

export default function SecurityLearning() {
    const thmBadge = `https://tryhackme-badges.s3.amazonaws.com/${THM_USERNAME}.png`;
    const htbBadge = `https://www.hackthebox.com/badge/image/${HTB_USER_ID}`;
    const cdProfile = `https://cyberdefenders.org/profile/${CYBERDEFENDERS_USERNAME}/`;

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4 sm:px-6 lg:px-8 py-12">
            <div className="mx-auto max-w-5xl">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-900">Security Learning</h1>
                <p className="mt-3 text-neutral-700 max-w-2xl">
                    Live streaks and achievements from my hands-on practice. These badges update automatically.
                </p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* TryHackMe */}
                    <div className="rounded-2xl border border-amber-100 bg-white/90 p-6 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-orange-900">TryHackMe</h2>
                            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-900">Auto-updates</span>
                        </div>
                        <div className="mt-3 rounded-xl border border-amber-100 bg-white/80 p-3 text-center">
                            {/* Use plain img to allow external sizing; you can switch to next/Image if you whitelist the domain */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={thmBadge}
                                alt="TryHackMe badge"
                                className="mx-auto h-auto w-full max-w-xs"
                                loading="lazy"
                            />
                        </div>
                        <div className="mt-4">
                            <Link
                                href={`https://tryhackme.com/p/${THM_USERNAME}`}
                                target="_blank"
                                className="rounded-xl bg-orange-900 px-4 py-2 text-white inline-block"
                            >
                                View Profile ↗
                            </Link>
                        </div>
                    </div>

                    {/* Hack The Box */}
                    <div className="rounded-2xl border border-amber-100 bg-white/90 p-6 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-orange-900">Hack The Box</h2>
                            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-900">Auto-updates</span>
                        </div>
                        <div className="mt-3 rounded-xl border border-amber-100 bg-white/80 p-3 text-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={htbBadge}
                                alt="Hack The Box badge"
                                className="mx-auto h-auto w-full max-w-xs"
                                loading="lazy"
                            />
                        </div>
                        <div className="mt-4">
                            <Link
                                href="https://app.hackthebox.com/profile"
                                target="_blank"
                                className="rounded-xl bg-orange-900 px-4 py-2 text-white inline-block"
                            >
                                View Profile ↗
                            </Link>
                        </div>
                    </div>

                    {/* CyberDefenders */}
                    <div className="rounded-2xl border border-amber-100 bg-white/90 p-6 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-orange-900">CyberDefenders</h2>
                            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-900">Profile link</span>
                        </div>
                        <p className="mt-2 text-sm text-neutral-700">
                            If CyberDefenders releases a live badge, we’ll embed it here. For now, this links to my public stats.
                        </p>
                        <div className="mt-4">
                            <Link
                                href={cdProfile}
                                target="_blank"
                                className="rounded-xl bg-orange-900 px-4 py-2 text-white inline-block"
                            >
                                View Profile ↗
                            </Link>
                        </div>
                    </div>
                </div>

                <p className="mt-10 text-center text-xs text-orange-700">© 2025 Sristi Mitra</p>
            </div>
        </main>
    );
}
