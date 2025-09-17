"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import LineGraph from './LineGraph';
import LeadForm from './LeadForm'; // Import the LeadForm component

const paragraphOne = "The world has gone digital your business must too. In the competitive market, this is not optional its not  survival. Grovoz levels the playing field, helping SMEs compete with corporations through smart digital strategies, artificial intelligence, and proprietary marketing technology.";
const paragraphThree = "Our professional team understands the World market dynamics, delivering measurable results and more visibility, leads, and revenue through data-driven campaigns, personalized content creation, and integrated platforms. We combine state of the art technology with proven marketing techniques to ensure your online presence management dominates the competition.";

const paragraphTwo = [
  <span key="innovation-advantage" className="font-bold">The Innovation Advantage:</span>,
  " Every strategy leverages machine learning, predictive analytics, and artificial intelligence optimization to maximize your investment and deliver superior customer experience."
];

export default function Hero() {
  const [isSectionHovered, setIsSectionHovered] = useState(false);
  const [showForm, setShowForm] = useState(false); // New state to control form visibility

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl text-black-600 font-bold tracking-tight"
            >
              <span className="text-blue-600">Break Boundaries of Budgets</span>
              <br />
              <span className="text-xl sm:text-2xl">Redefine Your Business Success</span>
            </motion.h2>
            {/* First Paragraphs */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-zinc-600 text-justify leading-relaxed"
            >
              {paragraphOne}
              <br />
              {paragraphThree}
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
                {/* Use the new state and toggle function on a standard button */}
                <button 
                  onClick={toggleForm} 
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white hover:bg-zinc-800"
                >
                  <span className="group-hover:hidden">Get Started</span>
                  <span className="hidden group-hover:inline">Get Your Report</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
            onMouseEnter={() => setIsSectionHovered(true)}
            onMouseLeave={() => setIsSectionHovered(false)}
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-200/40 to-transparent blur-4xl rounded-3xl -z-10" />
            <div className="card p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-brand-50 border border-purple-600 p-6">
                  <div className="text-sm font-medium">SEO</div>
                  <div className="mt-2 text-3xl font-bold">60%</div>
                  <div className="mt-1 text-xs text-zinc-500">MoM growth</div>
                </div>
                
                <div className="rounded-xl bg-blue-50 border border-purple-600 p-6">
                  <div className="text-sm font-medium">Cost</div>
                  <div className="mt-2 text-3xl font-bold">40%</div>
                  <div className="mt-1 text-xs text-zinc-500">Reduced</div>
                </div>
                <div className="rounded-xl bg-blue-50 border border-purple-600 p-6">
                  <div className="text-sm font-medium">Followers</div>
                  <div className="mt-2 text-3xl font-bold">18%</div>
                  <div className="mt-1 text-xs text-zinc-500">MoM growth</div>
                </div>
                
                <div className="rounded-xl bg-white border border-purple-600 p-6">
                  <div className="text-sm font-medium">Conversions</div>
                  <div className="mt-2 text-3xl font-bold">82%</div>
                  <div className="mt-1 text-xs text-zinc-500">Last 30 Days</div>
                </div>
                
                <div className="rounded-xl bg-white border border-black/5 p-6 col-span-2">
                  <div className="text-sm font-medium">Growth</div>
                  <div className="mt-2 h-24 w-full">
                    <LineGraph />
                  </div>
                  <div className="mt-1 text-xs text-zinc-500">Global edge network</div>
                </div>
              </div>
            </div>
            {isSectionHovered && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm transition-opacity duration-300 rounded-3xl">
                <Link href="#demo" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white hover:bg-zinc-800">
                  Get Your Report
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
          <div className="relative">
            <button 
              onClick={toggleForm} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            <LeadForm />
          </div>
        </div>
      )}
    </section>
  );
}