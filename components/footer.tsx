// components/footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-neutral-500">
          © {new Date().getFullYear()} Sristi Mitra
        </p>
        <div className="flex gap-4">
          <Link href="/playground" className="hover:underline">🔒 Security Playground</Link>
          <Link href="/.well-known/security.txt" className="hover:underline">security.txt</Link>
          <Link href="/sitemap.xml" className="hover:underline">sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer; // ✅ add this line if not already
