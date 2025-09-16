import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css' // ✅ Correct location for global styles


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grovoz - Marketing Agency",
  description: "Modern Fintech card & payments platform landing page starter (Next.js + Tailwind)."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
