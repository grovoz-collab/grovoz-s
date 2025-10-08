import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import './globals.css';
import ScrollToTopButton from './components/ScrollToTopButton';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grovoz - Marketing Agency",
  description: "Make your brand loud and clear"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/*
          CRITICAL FIX: Wrap {children} in a main tag (or div)
          and apply 'pt-16' (padding-top: 4rem) to push the content
          down, clearing the fixed 4rem (h-16) high Navbar.
        */}
        <main className="pt-16">
          {children}
        </main>
        
        <SpeedInsights />
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}