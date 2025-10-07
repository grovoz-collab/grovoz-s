"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Wrench,
  Maximize,
  ChevronDown,
  TrendingUp,
} from "lucide-react";

// --- STATIC DATA ---
const methodologyPhases = [
  {
    phaseNumber: 1,
    title: "Research and Strategic Planning",
    icon: Search,
    subtitle:
      "Every successful project starts with thorough research. Our experts begin with comprehensive discovery:",
    topics: [
      {
        heading: "Market Research and Competitive Analysis",
        points: [
          "Target audience profiling, persona development, and market segmentation",
          "Keyword research identifying search opportunities",
          "Competitor backlink and content gap analysis",
          "Market positioning and differentiation strategies",
          "Customer journey mapping and touchpoint identification",
          "Audience segmentation based on customer data",
          "ROI projections and investment planning",
        ],
      },
      {
        heading: "Technical Audit and Opportunity Assessment",
        points: [
          "Website performance and traffic analysis",
          "SEO audit identifying duplicate content and CMS issues",
          "Backlink profile evaluation and toxic link identification",
          "Social media presence and engagement audit",
          "Conversion funnel analysis using heat maps",
          "Mobile responsiveness and user experience review",
        ],
      },
    ],
  },
  {
    phaseNumber: 2,
    title: "Implementation with Precision",
    icon: Wrench,
    subtitle:
      "Armed with insights from our research, we develop customized, individual strategies:",
    topics: [
      {
        heading: "Integrated Omnichannel Campaign Development",
        points: [
          "SEO optimization for improved SERPs rankings",
          "Pay-Per-Click campaigns driving immediate traffic",
          "Social media marketing building community engagement",
          "Content marketing establishing thought leadership",
          "Email marketing nurturing leads to sales",
          "Local SEO improving map and local visibility",
        ],
      },
      {
        heading: "Project Management and Execution",
        points: [
          "Detailed project timelines and milestones",
          "Cross-functional team collaboration",
          "Regular communication and status updates",
          "Quality assurance and testing protocols",
          "Risk management and contingency planning",
          "Performance tracking and optimization",
        ],
      },
    ],
  },
  {
    phaseNumber: 3,
    title: "Optimization for Maximum Sales Impact",
    icon: Maximize,
    subtitle:
      "Digital marketing requires continuous refinement based on data and research:",
    topics: [
      {
        heading: "Performance and Data Analysis",
        points: [
          "Heat map analysis revealing user behavior patterns",
          "Conversion path analysis identifying friction points",
          "Traffic source evaluation and attribution modeling",
          "Keyword ranking monitoring and SERP tracking",
          "Social media engagement and reach metrics",
          "Sales funnel performance and ROI calculation",
        ],
      },
      {
        heading: "Continuous Improvement Through Testing",
        points: [
          "A/B testing of landing pages and ad copy",
          "Multivariate testing for complex optimizations",
          "Bid strategy adjustments based on performance",
          "Content refreshing maintaining relevance",
          "Link building campaigns for sustained growth",
          "Technical improvements enhancing user experience",
        ],
      },
    ],
  },
];

// --- HELPER COMPONENT (Fixes the Hook Errors) ---
interface PhaseItemProps {
  phase: typeof methodologyPhases[0];
  index: number;
  isOpen: boolean;
  togglePhase: (phaseNumber: number) => void;
  getCardClasses: (phaseNumber: number) => string;
}

const MethodologyPhaseItem: React.FC<PhaseItemProps> = ({
  phase,
  index,
  isOpen,
  togglePhase,
  getCardClasses,
}) => {
  // HOOKS MUST BE CALLED HERE, INSIDE THE COMPONENT
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  // When the item scrolls out of view AND it's open, it will auto-collapse
  // We use a passed function for setOpenPhase to avoid passing it directly
  const { phaseNumber } = phase;

  useEffect(() => {
    // This hook is now correctly called inside the functional component.
    if (!inView && isOpen) {
      // We call the passed toggle function to close it (if currently open)
      togglePhase(phaseNumber);
    }
  }, [inView, isOpen, phaseNumber, togglePhase]);

  const cardClasses = getCardClasses(phaseNumber);

  return (
    <div
      key={index}
      ref={ref}
      className={`relative rounded-2xl shadow-lg overflow-visible transition-all duration-300 ${cardClasses}`}
    >
      {/* Header */}
      <button
        className="w-full flex items-center justify-between p-6 lg:p-8 cursor-pointer transition-colors"
        onClick={() => togglePhase(phaseNumber)}
      >
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
            {phase.phaseNumber}
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-slate-900">{phase.title}</h3>
            <p className="text-lg text-slate-600">{phase.subtitle}</p>
          </div>
        </div>
        <ChevronDown
          className={`w-8 h-8 text-slate-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded Panel */}
      <motion.div
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={
          isOpen
            ? { maxHeight: "1000px", opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
        transition={{ duration: 0.4 }}
        className="overflow-hidden bg-white rounded-b-2xl border-t border-gray-200"
      >
        <div className="p-6 lg:p-8">
          <div className="space-y-8">
            {phase.topics.map((topic, topicIndex) => (
              <div key={topicIndex}>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  {topic.heading}
                </h4>
                <ul className="space-y-3 text-slate-600">
                  {topic.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3"></span>
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function Methodology() {
  const [openPhase, setOpenPhase] = useState<number | null>(1);

  // Memoize togglePhase to ensure stability for the useEffect dependency array
  const togglePhase = useCallback((phaseNumber: number) => {
    setOpenPhase((currentOpenPhase) =>
      currentOpenPhase === phaseNumber ? null : phaseNumber
    );
  }, []); // Empty dependency array means it's created once

  const getCardClasses = (phaseNumber: number) => {
    switch (phaseNumber) {
      case 1:
        return "bg-gradient-to-br from-blue-50 to-blue-200";
      case 2:
        return "bg-gradient-to-br from-purple-50 to-purple-200";
      case 3:
        return "bg-gradient-to-br from-green-50 to-green-200";
      default:
        return "bg-white";
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <style>
        {`
        @keyframes light-pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0.2;
          }
          50% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0.2;
          }
        }
        
        .light-effect::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 250%;
          height: 250%;
          background: radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(147, 197, 253, 0) 70%);
          transform: translate(-50%, -50%) scale(0.5);
          opacity: 0.2;
          animation: light-pulse 6s infinite ease-in-out;
          pointer-events: none;
          z-index: -1;
        }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Our Proven Process
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            The Grovoz Expert Methodology
          </h2>
          <p className="text-xl text-slate-600 font-semibold max-w-2xl mx-auto">
            How Our Digital Marketing Services Drive Sales
          </p>
        </motion.div>

        {/* Phases (Now using the dedicated component) */}
        <div className="space-y-6 relative">
          {methodologyPhases.map((phase, index) => (
            <MethodologyPhaseItem
              key={phase.phaseNumber}
              phase={phase}
              index={index}
              isOpen={openPhase === phase.phaseNumber}
              togglePhase={togglePhase}
              getCardClasses={getCardClasses}
            />
          ))}
        </div>
      </div>

      {/* New Future-Ready Marketing Section */}
      <section className="mt-24 py-24 bg-gradient-to-br from-blue-900 to-slate-950 relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <motion.svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 100 100"
          >
            {/* Cross lines */}
            <motion.path
              stroke="#fff"
              strokeWidth="0.5"
              d="M0 50h100M50 0v100"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
            />

            {/* Circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="#f70bd0ff"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />

            {/* Square */}
            <motion.rect
              x="10"
              y="10"
              width="80"
              height="80"
              rx="10"
              stroke="#fff"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 1.5,
                delay: 1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />

            {/* Infinity Symbol */}
            <motion.path
              d="M20 50C20 35 40 35 50 50C60 65 80 65 80 50C80 35 60 35 50 50C40 65 20 65 20 50Z"
              stroke="#ffffffff" // brighter cyan
              strokeWidth="4" // thicker line
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 2,
                delay: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="p-8 md:p-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg relative overflow-hidden transform-gpu transition-all duration-300 group"
          >
            <div className="flex flex-col items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-pink-500 text-white text-lg font-mono transition-transform duration-300 group-hover:rotate-12 [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] flex items-center justify-center pt-2">
                  {"</>"}
                </div>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                  Future-Ready Marketing: Web3 and the Metaverse
                </h3>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                  Stay ahead of the curve with our forward-thinking strategies.
                  Grovoz is exploring the new frontier of digital interaction, helping clients
                  prepare for opportunities in the Metaverse and Web3. We develop strategies for
                  brand presence on virtual platforms, ensuring you&apos;re ready for the next
                  evolution of the Internet.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                Learn More About Web3
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}