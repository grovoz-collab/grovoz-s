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
          FIX: The 'pt-16' class adds top padding equal to the navbar's 
          height (h-16 or 64px), preventing the content from hiding underneath 
          the fixed navigation bar.
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