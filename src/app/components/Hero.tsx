"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CreditCard, Code } from "lucide-react";
import Link from "next/link";
import LineGraph from './LineGraph'; // Adjust the import path as needed


export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);

  // The full text from your original component
  const fullText = "The world has gone digital—your business must too. Consumers browse, search, and engage online before making decisions. For SMEs, this isn’t optional—it’s the new battlefield. Compete with bigger brands, no matter your budget, with smart digital strategies. The world has gone digital—your business must too. Consumers browse, search, and engage online before making decisions. For SMEs, this isn’t optional—it’s the new battlefield. Compete with bigger brands, no matter your budget, with smart digital strategies. The catch? It has to be done with tactical intent, expert insights, AI automations, and measurable results—in other words, it has to be done well. Don’t wait to level the playing field. Act today to stay ahead.";

  // Truncate the text
  const truncatedText = fullText.substring(0, 150) + "...";

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold tracking-tight"
            >
              Break Boundaries of Budgets Redefine Your Business Success
            </motion.h1>
            <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1, duration: 0.6 }}
  className="mt-4 text-lg text-zinc-600 text-justify"
>
  {isExpanded ? fullText : truncatedText}
  {!isExpanded && (
    <button
      onClick={() => setIsExpanded(true)}
      className="text-black font-semibold ml-1 hover:underline"
    >
      Read more
    </button>
  )}
</motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="#demo" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white hover:bg-zinc-800">
                Book a demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#developers" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-black/10 hover:bg-zinc-50">
                Read the docs
              </Link>
            </motion.div>
            <div className="mt-10 grid grid-cols-3 gap-4 text-sm">
              <div className="card p-4 flex items-center gap-2">
                <Shield className="h-4 w-4" /> Personalized Approach
              </div>
              <div className="card p-4 flex items-center gap-2">
                <CreditCard className="h-4 w-4" /> Customized Solutions
              </div>
              <div className="card p-4 flex items-center gap-2">
                <Code className="h-4 w-4" /> Optimized Performance
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-200/40 to-transparent blur-3xl rounded-3xl -z-10" />
            <div className="card p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-brand-50 border border-brand-100 p-6">
                  <div className="text-sm font-medium">SEO</div>
                  <div className="mt-2 text-3xl font-bold">60%</div>
                  <div className="mt-1 text-xs text-zinc-500">MoM growth</div>
                </div>
                  <div className="rounded-xl bg-brand-50 border border-brand-100 p-6">
                  <div className="text-sm font-medium">SEO</div>
                  <div className="mt-2 text-3xl font-bold">60%</div>
                  <div className="mt-1 text-xs text-zinc-500">MoM growth</div>
                </div>
                  <div className="rounded-xl bg-brand-50 border border-brand-100 p-6">
                  <div className="text-sm font-medium">SEO</div>
                  <div className="mt-2 text-3xl font-bold">60%</div>
                  <div className="mt-1 text-xs text-zinc-500">MoM growth</div>
                </div>
                <div className="rounded-xl bg-white border border-black/5 p-6">
                  <div className="text-sm font-medium">Paid Campaigns</div>
                  <div className="mt-2 text-3xl font-bold">96%</div>
                  <div className="mt-1 text-xs text-zinc-500">last 30 days</div>
                </div>
                
                <div className="rounded-xl bg-white border border-black/5 p-6 col-span-2">
                  <div className="text-sm font-medium">Growth (p95)</div>
<div className="mt-2 h-24 w-full">
        <LineGraph />
      </div>                  <div className="mt-1 text-xs text-zinc-500">Global edge network</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
