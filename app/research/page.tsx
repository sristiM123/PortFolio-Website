import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";

type Pub = {
    title: string;
    journal: string;
    date: string;
    url: string;
    featured?: boolean;
    status: "published" | "in-progress";
    abstract?: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "publications");

// --- Simple front-matter parser ---
function parseFrontMatter(src: string): { data: Record<string, any>; body: string } {
    const start = src.indexOf("---");
    if (start !== 0) return { data: {}, body: src.trim() };
    const end = src.indexOf("\n---", 3);
    if (end === -1) return { data: {}, body: src.trim() };
    const fmRaw = src.slice(3, end + 1).trim();
    const body = src.slice(end + 4).trim();
    const data: Record<string, any> = {};
    for (const line of fmRaw.split("\n")) {
        const i = line.indexOf(":");
        if (i === -1) continue;
        const key = line.slice(0, i).trim();
        const raw = line.slice(i + 1).trim().replace(/^"|"$/g, "");
        data[key] = raw === "true" ? true : raw === "false" ? false : raw === "null" ? "" : raw;
    }
    return { data, body };
}

async function loadPublications(): Promise<Pub[]> {
    let files: string[];
    try {
        files = await fs.readdir(CONTENT_DIR);
    } catch {
        return [];
    }
    const mdFiles = files.filter((f) => f.endsWith(".md"));
    const items: Pub[] = [];
    for (const f of mdFiles) {
        const raw = await fs.readFile(path.join(CONTENT_DIR, f), "utf-8");
        const { data, body } = parseFrontMatter(raw);
        items.push({
            title: String(data.title || "Untitled"),
            journal: String(data.journal || ""),
            date: String(data.date || ""),
            url: String(data.url || ""),
            featured: Boolean(data.featured || false),
            status: (String(data.status || "published") as Pub["status"]) || "published",
            abstract: String(data.abstract || body || ""),
        });
    }
    items.sort((a, b) => {
        const feat = (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        if (feat !== 0) return feat;
        return (b.date || "").localeCompare(a.date || "");
    });
    return items;
}

function PubCard({ p }: { p: Pub }) {
    const isPublished = p.status === "published";
    return (
        <div
            className={`rounded-2xl border ${
                p.featured ? "border-amber-400" : "border-amber-100"
            } bg-gradient-to-br from-white via-amber-50 to-orange-50 p-6 shadow-sm hover:shadow-md transition`}
        >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-orange-900">{p.title}</h3>
                    <p className="mt-0.5 text-sm text-amber-800">{isPublished ? p.journal : "Research in Progress"}</p>
                    {p.date && <p className="text-xs text-neutral-600">{p.date}</p>}
                </div>
                {p.url && (
                    <Link
                        href={p.url}
                        target="_blank"
                        className="inline-block rounded-lg border border-amber-300 bg-white text-orange-800 px-3 py-1 text-xs font-medium shadow-sm hover:bg-amber-50 transition"
                    >
                        {isPublished ? "View Paper ↗" : "Preview / Notes ↗"}
                    </Link>
                )}
            </div>
            {p.abstract && <p className="mt-3 text-sm text-neutral-700 leading-relaxed">{p.abstract}</p>}
            {p.featured && isPublished && (
                <span className="mt-3 inline-block rounded-full bg-amber-200/70 text-amber-900 px-3 py-0.5 text-xs font-medium">
          Featured Research
        </span>
            )}
        </div>
    );
}

export default async function ResearchPage() {
    const pubs = await loadPublications();
    const published = pubs.filter((p) => p.status === "published");
    const ongoing = pubs.filter((p) => p.status === "in-progress");

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4 sm:px-6 lg:px-8 py-12">
            <div className="mx-auto max-w-6xl">
                {/* HEADER */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-900 mb-6">Research & Publications</h1>

                <p className="max-w-3xl text-neutral-700 mb-10 text-base sm:text-lg leading-relaxed">
                    My research spans <b>cybersecurity engineering</b>, <b>applied cryptography</b>, and <b>intelligent trust systems</b>.
                    Below are my published works, active research projects, and upcoming thesis plans.
                </p>

                {/* PUBLISHED */}
                {published.length > 0 && (
                    <>
                        <h2 className="text-2xl sm:text-3xl font-bold text-orange-900 mb-5">Published Papers</h2>
                        <div className="grid grid-cols-1 gap-6">
                            {published.map((p, i) => (
                                <PubCard key={i} p={p} />
                            ))}
                        </div>
                    </>
                )}

                {/* ONGOING */}
                {ongoing.length > 0 && (
                    <>
                        <h2 className="text-2xl sm:text-3xl font-bold text-orange-900 mt-12 mb-5">Ongoing Research</h2>
                        <div className="grid grid-cols-1 gap-6">
                            {ongoing.map((p, i) => (
                                <PubCard key={i} p={p} />
                            ))}
                        </div>
                    </>
                )}

                {/* THESIS */}
                <div className="mt-12 rounded-2xl border border-amber-200 bg-gradient-to-br from-white via-amber-50 to-orange-50 p-8 shadow-sm">
                    <h2 className="text-2xl sm:text-3xl font-bold text-orange-900 mb-3">Upcoming Thesis</h2>
                    <p className="text-sm text-neutral-700 max-w-3xl leading-relaxed">
                        My thesis topic will be finalized soon. It will likely explore <b>federated learning for secure infrastructure</b>,
                        <b> cryptographic optimization</b>, or <b>AI-driven cyber defense</b>.
                    </p>
                </div>

                {/* COLLABORATION SECTION */}
                <div className="mt-12 rounded-2xl border border-amber-300 bg-gradient-to-br from-amber-50 via-white to-yellow-50 p-8 shadow-md hover:shadow-lg transition">
                    <h2 className="text-2xl sm:text-3xl font-bold text-orange-900 mb-3">Collaborate or Connect</h2>
                    <p className="text-sm text-neutral-700 max-w-3xl leading-relaxed mb-4">
                        I’m always open to <b>research collaborations</b> and <b>assistant roles</b> in cybersecurity, cryptography, or AI.
                        If you'd like to collaborate, discuss a paper idea, or offer a research opportunity — feel free to reach out.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/contact"
                            className="px-5 py-2 rounded-xl bg-orange-900 text-white shadow hover:bg-orange-800 transition"
                        >
                            Contact Me
                        </Link>
                        <Link
                            href="mailto:ratrimitra16@gmail.com"
                            className="px-5 py-2 rounded-xl border border-amber-400 bg-white/80 hover:bg-amber-50 text-orange-900 shadow-sm transition"
                        >
                            Send an Email ↗
                        </Link>
                    </div>
                </div>

                {/* FOOTER */}
                <p className="mt-10 text-center text-xs text-orange-700">© 2025 Sristi Mitra</p>
            </div>
        </main>
    );
}
