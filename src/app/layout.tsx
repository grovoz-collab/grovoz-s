import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import './globals.css';
import ScrollToTopButton from './components/ScrollToTopButton'; // ➡️ Import your button component
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
        {children}

                <SpeedInsights /> {/* Add this line */}
        <ScrollToTopButton /> {/* ➡️ Render the button component here */}
              <Footer />

      </body>
    </html>
  );
}