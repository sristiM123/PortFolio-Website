// components/lib/content.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Doc = {
  slug: string;
  title: string;
  date?: string;
  tags?: string[];
  excerpt?: string;
  body: string;
};

/**
 * Load all Markdown files from a given subfolder inside /content.
 * Supports front-matter metadata (title, date, tags, excerpt).
 */
function loadAll(dir: string): Doc[] {
  const folder = path.join(process.cwd(), "content", dir);

  if (!fs.existsSync(folder)) return [];

  return fs
    .readdirSync(folder)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(folder, file), "utf8");
      const { data, content } = matter(raw);

      return {
        slug: file.replace(/\\.mdx?$/, ""),
        title: data.title ?? file,
        date: data.date ?? null,
        tags: data.tags ?? [],
        excerpt: data.excerpt ?? content.slice(0, 140) + "…",
        body: content,
      } as Doc;
    })
    .sort((a, b) => (b.date?.localeCompare(a.date ?? "") ?? 0));
}

export const getProjects = () => loadAll("projects");
export const getPublications = () => loadAll("publications");

// ✅ default export for compatibility
const contentUtils = { getProjects, getPublications };
export default contentUtils;
