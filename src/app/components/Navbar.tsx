"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react"; // Added useEffect for mobile cleanup
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";

const menuVariants = {
  hidden: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll(); // Use scrollY instead of scrollYProgress
  const [hidden, setHidden] = useState(false); // State to control visibility

  // Custom hook logic to hide/show the navbar based on scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Hide navbar if scrolling down and past the initial top (e.g., 200px)
    
    if (previous !== undefined) { 
        
        // Hide navbar if scrolling down and past the initial top (e.g., 200px)
        if (latest > previous && latest > 200) {
            setHidden(true);
        } 
        // Show navbar if scrolling up or if close to the top
        else if (latest < previous || latest < 100) {
            setHidden(false);
        }
    }
  });

  // Keep the logo rotation logic if you want it
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]); // Adjusted range for smoother rotation

  // Ensure mobile menu closes if the device is resized (optional but good practice)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) { // 768px is the 'md' breakpoint
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);


  return (
    // 1. Removed 'fixed top-0 w-full'
    // 2. Added motion.header and style={ ... } to animate vertical position
    <motion.header 
      // Animate y (vertical position) from 0 to -100% of its height
      // The z-index is crucial to keep it above content.
      className="sticky top-0 left-0 w-full z-[100] bg-white border-b border-gray-200 shadow-sm transition-shadow duration-300"
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0.5 },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
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

        {/* Desktop Nav (Unchanged) */}
        <div className="hidden md:flex items-center gap-8">
          {/* ... Desktop Nav Links ... */}
          <nav className="flex items-center gap-8 text-sm font-medium">
            {[
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact Us" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
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
          {/* ... CTA Button ... */}
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

      {/* Mobile Dropdown (Unchanged) */}
      <motion.div
        className="md:hidden border-t border-gray-200 px-4 py-3 space-y-2 overflow-hidden flex flex-col items-center bg-white"
        variants={menuVariants}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
      >
        <Link 
          href="/services" 
          className="block hover:text-blue-600"
          onClick={() => setOpen(false)}
        >
          Services
        </Link>
        <Link 
          href="/contact" 
          className="block hover:text-blue-600"
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>

        {/* Mobile CTA (Unchanged) */}
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
            onClick={() => setOpen(false)}
          >
            <span className="relative z-10">Book a demo</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}