"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LineGraph from "./LineGraph";
import ContactForm from "./ContactForm"; // ✅ modal form

export default function Hero() {
  const [isSectionHovered, setIsSectionHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl text-black-600 font-bold tracking-tight"
            >
              <span className="text-blue-600">Break Boundaries of Budgets</span>
              <br />
              <span className="text-xl sm:text-2xl">
                Redefine Your Business Success
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-zinc-600 text-justify leading-relaxed"
            >
              The world has gone digital your business must too. In the competitive market,
              this is not optional its survival. Grovoz levels the playing field, helping SMEs
              compete with corporations through smart digital strategies, AI, and proprietary marketing technology.
              <br />
              Our professional team understands global market dynamics, delivering measurable
              results and more visibility, leads, and revenue through data-driven campaigns.
            </motion.p>

            <p className="mt-4 text-lg text-zinc-600 text-justify leading-relaxed">
              <span className="font-bold">The Innovation Advantage:</span> Every strategy leverages
              machine learning, predictive analytics, and AI optimization to maximize ROI and deliver superior customer experience.
            </p>
          </div>

          {/* Right Column (Stats + Hover Button) */}
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

            {/* Hover Button */}
            {isSectionHovered && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-md transition-opacity duration-300 rounded-3xl z-20">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white hover:bg-zinc-800"
                >
                  Get Your Report
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
