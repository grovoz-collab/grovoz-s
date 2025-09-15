"use client";

import { Building2, Globe2, ShieldCheck, Wallet, Webhook, Layers } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Wallet,
    title: "Global + Local Expertise",
    desc: "Campaigns shaped by real consumer behavior, down to neighborhood-level targeting."
  },
  {
    icon: ShieldCheck,
    title: "Tailored SME Strategies",
    desc: "No cookie-cutter templates; every plan is tailored to your growth stage and audience."
  },
  {
    icon: Webhook,
    title: "Real-Time Reporting",
    desc: "Real-time dashboards and monthly insights designed for decision-makers, not for data scientists."
  },
  {
    icon: Building2,
    title: "End-to-End Services",
    desc: "BIN sponsorship and network connectivity with regional banks & schemes."
  },
  {
    icon: Layers,
    title: "Certified Experts",
    desc: "Trained at Grovoz Academy, delivering precision execution."
  },
  {
    icon: Globe2,
    title: "Proprietary Tools & Automation",
    desc: "In-house developed tools, directly connected with search engines, social platforms, and CRMs."
  },
  {
    icon: Globe2,
    title: "Built-In Security",
    desc: "Protecting your assets like websites, campaigns, data, and digital assets against evolving threats, 24/7."
  }
];

// Define animation variants for the parent container
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Staggers the animation of each child
    }
  }
};

// Define animation variants for each card
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Features() {
  // Use .slice(0, 6) to only get the first 6 items
  const displayFeatures = features.slice(0, 6);

  return (
    <section id="features" className="py-20 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">What You Get When You Work With Us</h2>
          <p className="mt-2 text-zinc-600">Use the building blocks you need today and add more as you grow.</p>
        </div>
        {/* Use motion.div as the parent container with its variants */}
        <motion.div
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {displayFeatures.map(({ icon: Icon, title, desc }) => (
            // Use motion.div for each card with its own variants
            <motion.div
              key={title}
              className="card p-6"
              variants={itemVariants}
            >
              <Icon className="h-5 w-5 mb-3 text-brand-600" />
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-zinc-600 mt-1">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}