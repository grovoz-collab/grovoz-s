import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import './globals.css';
import ScrollToTopButton from './components/ScrollToTopButton'; // ➡️ Import your button component

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
        <ScrollToTopButton /> {/* ➡️ Render the button component here */}
      </body>
    </html>
  );
}