"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, CreditCard, Code } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient -z-10" />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-20"> {/* Adjusted padding */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="text-3xl sm:text-5xl font-bold"> {/* Adjusted font size */}
            Redefining Standards <span className="text-blue-600">In Digital Marketing</span> 
            
          </motion.h1>
          <p className="mt-4 text-base sm:text-lg text-black-600 dark:text-black-300"> {/* Adjusted font size */}
            Crafting Digital Impact with Authority, We Ensure Your Brand Isn’t Just Seen, but Respected, Trusted, and Remembered.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"> {/* Added flex-col for mobile */}
            <Link href="#demo" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white hover:bg-zinc-800">
              Book a Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#developers" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-black/10 text-blue hover:bg-blue-800  hover:text-white">
              Explore Docs
            </Link>
          </div>
          
          <div className="mt-10 grid grid-cols-3 gap-4 text-sm">
            <div className="card p-4 flex items-center gap-2"><Shield className="h-4 w-4 text-blue-800" /> Personalized Approach</div>
            <div className="card p-4 flex items-center gap-2"><CreditCard className="h-4 w-4 text-blue-800" />Customized Solutions</div>
            <div className="card p-4 flex items-center gap-2"><Code className="h-4 w-4 text-blue-800" /> Optimized Performance</div>
          </div>
        </div>
      </div>
    </section>
  );
}