"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Define animation variants for the mobile menu
const menuVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // scroll-based rotation
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
<header className="sticky top-0 z-[100] bg-white/70 backdrop-blur border-b border-black/5">
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

       <nav className="hidden md:flex items-center gap-8 text-sm">
  <Link href="/#services" className="hover:text-brand-600" onClick={() => setOpen(false)}>
    Services
  </Link>
  <Link href="/#process" className="hover:text-brand-600" onClick={() => setOpen(false)}>
    Process
  </Link>
  <Link href="/#whyus" className="hover:text-brand-600" onClick={() => setOpen(false)}>
    Why Choose Us
  </Link>
  <Link href="/#contact" className="hover:text-brand-600" onClick={() => setOpen(false)}>
    Contact Us
  </Link>
</nav>

{/* Desktop buttons should also have this behavior */}
<div className="hidden md:flex items-center gap-3">
  <Link
    href="/#contact"
    className="px-4 py-2 text-sm rounded-xl hover:bg-zinc-100"
    onClick={() => setOpen(false)}
  >
    Contact
  </Link>
  <Link
    href="/#demo"
    className="px-4 py-2 text-sm rounded-xl bg-blue-600 text-white hover:bg-brand-700"
    onClick={() => setOpen(false)}
  >
    Book a demo
  </Link>
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

      {/* Mobile dropdown with animation */}
      <motion.div
        className="md:hidden border-t border-black/5 px-4 py-3 space-y-2 overflow-hidden flex flex-col items-center"
        variants={menuVariants}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
      >
        <a href="#Services" className="block">
          Services
        </a>
        <a href="#process" className="block">
          Process
        </a>
        <a href="#whyus" className="block">
              Why Choose Us

        </a>
        <a href="#Contact" className="block">
          Contact
        </a>
        {/* Mobile Contact and Demo buttons */}
        <Link href="#contact" className="block px-4 py-2 text-sm rounded-xl bg-grey-600 hover:bg-zinc-100">
          Contact
        </Link>
        <Link href="#demo" className="block px-4 py-2 text-sm rounded-xl bg-blue-600 text-white hover:bg-brand-700">
          Book a demo
        </Link>
      </motion.div>
    </header>
  );
}