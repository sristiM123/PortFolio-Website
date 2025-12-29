// app/certifications/page.tsx
import Link from "next/link";

export default function CertificationsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4 sm:px-6 lg:px-8 py-12">
            <div className="mx-auto max-w-5xl">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-900">Certifications</h1>
                <p className="mt-3 text-neutral-700 max-w-2xl">
                    Credible skills with industry-recognized credentials.
                </p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* ISO 27001 */}
                    <div className="rounded-2xl border border-amber-100 bg-white/90 p-6 shadow-sm hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-orange-900">ISO/IEC 27001</h2>
                        <p className="mt-2 text-sm text-neutral-700">
                            Information Security Management Systems (ISMS). Risk-based controls, governance,
                            and continuous improvement.
                        </p>

                        {/* Optional: link to certificate PDF (put file in /public/certs/iso27001.pdf) */}
                        <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                                href="/certs/iso27001.png"
                                className="rounded-xl bg-orange-900 px-4 py-2 text-white"
                                target="_blank"
                            >
                                View Certificate ↗
                            </Link>
                            {/* If you have a verification URL from the issuer, add it here */}
                            {/* <Link href="https://issuer.example/verify/XXXX" target="_blank" className="rounded-xl border px-4 py-2">
                Verify Online ↗
              </Link> */}
                        </div>
                    </div>

                    {/* CCNA */}
                    <div className="rounded-2xl border border-amber-100 bg-white/90 p-6 shadow-sm hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-orange-900">CCNA (Cisco Certified Network Associate)</h2>
                        <p className="mt-2 text-sm text-neutral-700">
                            Networking fundamentals, routing & switching, IP services, security basics, and automation.
                        </p>

                        {/* Optional: link to certificate PDF (put file in /public/certs/ccna.pdf) */}
                        <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                                href="/certs/ccna.jpg"
                                className="rounded-xl bg-orange-900 px-4 py-2 text-white"
                                target="_blank"
                            >
                                View Certificate ↗
                            </Link>
                            {/* <Link href="https://www.credly.com/badges/XXXXX" target="_blank" className="rounded-xl border px-4 py-2">
                Verify on Credly ↗
              </Link> */}
                        </div>
                    </div>
                </div>

                <p className="mt-10 text-center text-xs text-orange-700">© 2025 Sristi Mitra</p>
            </div>
        </main>
    );
}
