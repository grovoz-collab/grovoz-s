"use client";
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import LineGraph from './LineGraph';

const paragraphOne = "The world has gone digital your business must too. In the competitive market, this isn't optional it's survival. Grovoz levels the playing field, helping SMEs compete with corporations through smart digital strategies, artificial intelligence, and proprietary marketing technology. Our professional team understands the Middle East market dynamics, delivering measurable results and more visibility, leads, and revenue through data-driven campaigns, personalized content creation, and integrated platforms. We combine state of the art technology with proven marketing techniques to ensure your online presence management dominates the competition.";
const paragraphTwo = [
  <span key="innovation-advantage" className="font-bold">The Innovation Advantage:</span>,
  " Every strategy leverages machine learning, predictive analytics, and artificial intelligence optimization to maximize your investment and deliver superior customer experience."
];

export default function Hero() {
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
              className="text-2xl sm:text-3xl text-black-600 font-bold tracking-tight"
            >
              Break Boundaries of Budgets Redefine Your Business Success
            </motion.h1>
            {/* First Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-zinc-600 text-justify leading-relaxed"
            >
              {paragraphOne}
            </motion.p>

            {/* Second Paragraph */}
            <p className="mt-4 text-lg text-zinc-600 text-justify leading-relaxed">
              {paragraphTwo}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="#demo" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white hover:bg-zinc-800">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-200/40 to-transparent blur-4xl rounded-3xl -z-10" />
            <div className="card p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-brand-50 border border-blue-600 p-6">
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
                  </div>
                  <div className="mt-1 text-xs text-zinc-500">Global edge network</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}