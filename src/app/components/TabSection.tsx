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

// Animation variants for card grid content
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};
// Animation variants for individual cards
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function TabSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="whyus" className="relative   max-w-6xl mx-auto px-6 py-16">
      {/* Centered Span Container */}
     
     

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What You Get When You Partner With Us
      </h2>

      {/* Stepper Tabs */}
      <div className="flex justify-center gap-6 sm:gap-12 mb-12 flex-wrap">
        {tabs.map((tab, i) => {
          const Icon = tab.icon;
          return (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              // Enhanced button transition and scale on hover
              className="flex flex-col items-center focus:outline-none group transition-transform duration-300 transform hover:scale-[1.02]"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  activeTab === i
                    ? "bg-blue-600 text-white border-blue-600 shadow-xl ring-4 ring-blue-300/50" // Active state with ring and stronger shadow
                    : "bg-white text-gray-500 border-gray-300 group-hover:border-blue-400 group-hover:shadow-md"
                }`}
              >
                <Icon size={28} />
              </div>
              <span
                className={`mt-3 text-center font-medium text-xs sm:text-base transition ${
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
      <div className="relative bg-white shadow-xl rounded-2xl p-6 sm:p-8">
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
                // Card hover effects: translate-y for lift, shadow, and border color change
                className="p-6 border border-blue-200 rounded-xl bg-white shadow-sm transition-all duration-300 
                           hover:shadow-xl hover:shadow-blue-200/50 
                           hover:border-blue-500 
                           hover:-translate-y-1 relative group"
                variants={itemVariants}
              >
                {/* Icon container with hover animation for rotation */}
                <motion.div
                  initial={{ opacity: 1 }}
                  whileHover={{ rotate: 4, scale: 1.05 }} // Spin and slight scale on hover
                  transition={{ duration: 0.3 }}
                  className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-50/70 mb-3"
                >
                  <Icon className="h-6 w-6 text-blue-600" />
                </motion.div>
                <h3 className="font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-zinc-600 mt-1">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
