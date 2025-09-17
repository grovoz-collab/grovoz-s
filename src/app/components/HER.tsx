"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Fingerprint, Puzzle, Code } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient -z-10" />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-20"> {/* Adjusted padding */}
       <div className="text-center max-w-3xl mx-auto">
    {/* Add the new subheading here */}
    <h1 className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
        Welcome to Grovoz Marketing Company
    </h1>
    <motion.h2 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="text-3xl sm:text-5xl font-bold mt-2">
        Redefining Standards <span className="text-blue-600">In Digital Marketing</span> 
    </motion.h2>
    <p className="mt-4 text-base sm:text-lg text-black-600 dark:text-black-300">
        Crafting Digital Impact with Authority, We Ensure Your Brand Isn’t Just Seen, but Respected, Trusted, and Remembered.
    </p>
 
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"> {/* Added flex-col for mobile */}
            <Link href="#demo" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white hover:bg-blue-600 hover:shadow-2xl hover:scale-105.">
              Claim Your Free Month<ArrowRight className="h-4 w-4" />
            </Link>
          <Link href="#developers"  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-black/10 text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300"
>
 Request a Demo
  <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" 
  />
</Link>
          </div>
          
<div className="mt-10 grid grid-cols-3 gap-3 text-sm">
<div className="card p-4 flex flex-col items-center gap-1 rounded-2xl border transition duration-300 
                  hover:-translate-y-1 hover:shadow-lg hover:border-blue-500">
    <Fingerprint className="h-4 w-4 text-blue-500" /> 
    Personalized Approach
  </div>

  <div className="card p-4 flex flex-col items-center gap-1 rounded-2xl border transition duration-300 
                  hover:-translate-y-1 hover:shadow-lg hover:border-blue-500">
    <Puzzle className="h-4 w-4 text-blue-500" /> 
    Customized Solutions
  </div>

  <div className="card p-4 flex flex-col items-center gap-1 rounded-2xl border transition duration-300 
                  hover:-translate-y-1 hover:shadow-lg hover:border-blue-500">
    <Code className="h-4 w-4 text-blue-500" /> 
    Optimized Performance
  </div>
</div>

        </div>
      </div>
    </section>
  );
}