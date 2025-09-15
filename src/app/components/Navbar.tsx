"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // scroll-based rotation
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Rotating logo */}
          <motion.div style={{ rotate }}>
            <Image
              src="/GVZ-LOGO_header.png"
              alt="Logo"
              width={64}
              height={64}
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#products" className="hover:text-brand-600">Products</a>
          <a href="#features" className="hover:text-brand-600">Features</a>
          <a href="#developers" className="hover:text-brand-600">Developers</a>
          <a href="#about" className="hover:text-brand-600">About</a>
        </nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="#contact" className="px-4 py-2 text-sm rounded-xl hover:bg-zinc-100">Contact</Link>
          <Link href="#demo" className="px-4 py-2 text-sm rounded-xl bg-brand-600 text-white hover:bg-brand-700">Book a demo</Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-zinc-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-black/5 px-4 py-3 space-y-2">
          <a href="#products" className="block">Products</a>
          <a href="#features" className="block">Features</a>
          <a href="#developers" className="block">Developers</a>
          <a href="#about" className="block">About</a>
          <a href="#demo" className="block font-medium">Book a demo</a>
        </div>
      )}
    </header>
  );
}
