// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Sristi Mitra — Security Engineer",
    description: "Chic, playful, cybersecurity-focused portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-[#f5efe6] text-neutral-900">
        <Navbar />
        <main className="container mx-auto px-4 py-10">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
