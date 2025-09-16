// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Import your Header and Footer components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fintech Launchpad",
  description: "Modern Fintech card & payments platform landing page starter (Next.js + Tailwind)."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Render the Header component at the top */}
        <Navbar />

        {/* The {children} prop renders the current page content */}
        {children}

        {/* Render the Footer component at the bottom */}
        <Footer />
      </body>
    </html>
  );
}