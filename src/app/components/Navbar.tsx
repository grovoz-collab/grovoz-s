"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const menuVariants = {
  hidden: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm font-medium">
            {[
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact Us" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                // setOpen(false) is redundant here because navigation will trigger a new component render anyway,
                // but keeping it doesn't hurt, especially for hash links on the same page.
                onClick={() => setOpen(false)} 
                className="relative group"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-600">
                  {item.label}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0px rgba(37, 99, 235, 0.0)",
                "0 0 20px rgba(37, 99, 235, 0.4)",
                "0 0 0px rgba(37, 99, 235, 0.0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Link
              href="/#demo"
              className="relative px-5 py-2 text-sm rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md 
                        transition-all duration-300 transform hover:scale-110 hover:shadow-blue-500/50"
            >
              <span className="relative z-10">Book a demo</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-zinc-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Dropdown - ADDED onClick TO ALL LINKS */}
      <motion.div
        className="md:hidden border-t border-gray-200 px-4 py-3 space-y-2 overflow-hidden flex flex-col items-center bg-white"
        variants={menuVariants}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
      >
        <Link 
          href="/services" 
          className="block hover:text-blue-600"
          onClick={() => setOpen(false)} // Fix 1: Collapse on click
        >
          Services
        </Link>
        <Link 
          href="/contact" 
          className="block hover:text-blue-600"
          onClick={() => setOpen(false)} // Fix 2: Collapse on click
        >
          Contact
        </Link>

        {/* Mobile CTA */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0px rgba(37, 99, 235, 0.0)",
              "0 0 20px rgba(37, 99, 235, 0.4)",
              "0 0 0px rgba(37, 99, 235, 0.0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full max-w-xs"
        >
          <Link
            href="#demo"
            className="relative block w-full px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md 
                      hover:scale-110 hover:shadow-blue-500/50 transition-all duration-300 text-center"
            onClick={() => setOpen(false)} // Fix 3: Collapse on click
          >
            <span className="relative z-10">Book a demo</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
          </Link>
        </motion.div>
      </motion.div>
    </header>
  );
}