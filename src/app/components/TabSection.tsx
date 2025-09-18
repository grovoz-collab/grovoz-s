"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Cpu,
  Trophy,
  ShieldCheck,
  Webhook,
  Building2,
  Layers,
  Globe2,
} from "lucide-react";

// Tabs data with card-style items
const tabs = [
  {
    label: "Strategic Advantages",
    icon: Lightbulb,
    items: [
      {
        icon: Globe2,
        title: "Global + Local Expertise",
        desc: "Deep understanding of Dubai market dynamics and Middle East consumer behavior.",
      },
      {
        icon: ShieldCheck,
        title: "Tailored SME Strategies",
        desc: "Custom solutions for your growth stage, industry, and target audience.",
      },
      {
        icon: Webhook,
        title: "Real-Time Reporting",
        desc: "Advanced tracking system with measurement tools and analytics dashboard.",
      },
      {
        icon: Building2,
        title: "End-to-End Services",
        desc: "Complete digital transformation under one roof.",
      },
    ],
  },
  {
    label: "Technical Excellence",
    icon: Cpu,
    items: [
      {
        icon: Layers,
        title: "Certified Professionals",
        desc: "Skill-focused training at Grovoz Academy.",
      },
      {
        icon: Globe2,
        title: "Proprietary Technology",
        desc: "Artificial intelligence tools and marketing automation platforms.",
      },
      {
        icon: ShieldCheck,
        title: "Built-In Security",
        desc: "Protection for your digital assets and customer data.",
      },
      {
        icon: Cpu,
        title: "Innovation Focus",
        desc: "Cutting-edge software and web3 integration capabilities.",
      },
    ],
  },
  {
    label: "Market Leadership",
    icon: Trophy,
    items: [
      {
        icon: ShieldCheck,
        title: "Reputation Management",
        desc: "Building trust and brand authority in competitive markets.",
      },
      {
        icon: Globe2,
        title: "Competitive Intelligence",
        desc: "Case study analysis and market segmentation strategies.",
      },
      {
        icon: Trophy,
        title: "Award Recognition",
        desc: "Industry-leading performance and client satisfaction.",
      },
      {
        icon: Layers,
        title: "Community Building",
        desc: "Empowerment through knowledge sharing and learning.",
      },
    ],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function TabSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
<section id="services" className="relative max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What You Get When You Partner With Us
      </h2>

      {/* Stepper Tabs */}
      <div className="flex justify-center gap-12 mb-12 flex-wrap">
        {tabs.map((tab, i) => {
          const Icon = tab.icon;
          return (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="flex flex-col items-center focus:outline-none group"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full border-2 transition-all ${
                  activeTab === i
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                    : "bg-white text-gray-500 border-gray-300 group-hover:border-blue-400"
                }`}
              >
                <Icon size={28} />
              </div>
              <span
                className={`mt-3 font-medium text-sm md:text-base transition ${
                  activeTab === i ? "text-blue-600" : "text-gray-600 group-hover:text-blue-500"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Content as Cards */}
      <div className="relative bg-white shadow-xl rounded-2xl p-8 pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {tabs[activeTab].items.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                className="p-6 border border-blue-200 rounded-xl bg-white shadow-sm hover:shadow-lg hover:hover:border-purple-500  hover:bg-gray-50  transition-all duration-300"
                variants={itemVariants}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon className="h-6 w-6 mb-3 text-blue-600" />
                </motion.div>
                <h3 className="font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-zinc-600 mt-1">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Sticky CTA Button */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" // Update to your link
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Book Your Free Strategy Session
          </motion.a>
        </div>
      </div>
    </section>
  );
}
