/* eslint-disable react/prop-types */
import React from "react";
import { 
  Search, 
  Target, 
  TrendingUp, 
  CheckCircle,
  Lightbulb,
  BarChart3,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

// Simple Card & Badge building blocks
const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}>
    {children}
  </div>
);
const CardHeader = ({ children, className = "" }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
);
const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold leading-none tracking-tight ${className}`}>{children}</h3>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);
const Badge = ({ children, className = "" }) => (
  <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
    {children}
  </div>
);

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  viewport: { once: true, amount: 0.2 },
};

const PHASES = [
  {
    phase: "Phase 1",
    title: "Research & Strategic Planning",
    icon: Search,
    color: "bg-blue-500",
    description: "Every successful project starts with thorough research and comprehensive discovery.",
    image: "https://placehold.co/500x300/60a5fa/ffffff?text=Research",
    activities: [
      "Target audience profiling and market segmentation",
      "Comprehensive keyword research and competitor analysis", 
      "Market positioning and differentiation strategies",
      "Customer journey mapping and touchpoint identification",
      "ROI projections and investment planning"
    ]
  },
  {
    phase: "Phase 2", 
    title: "Technical Audit & Opportunity Assessment",
    icon: BarChart3,
    color: "bg-red-500",
    description: "Uncover hidden issues and opportunities through a complete technical and performance audit.",
    image: "https://placehold.co/500x300/f87171/ffffff?text=Audit",
    activities: [
      "Website performance and traffic analysis",
      "SEO audit identifying duplicate content & CMS issues",
      "Backlink profile evaluation and toxic link detection",
      "Conversion funnel analysis using heat maps",
      "Mobile responsiveness and user experience review"
    ]
  },
  {
    phase: "Phase 3",
    title: "Implementation with Precision",
    icon: Target,
    color: "bg-green-500",
    description: "Armed with insights, we develop customized strategies and execute with precision.",
    image: "https://placehold.co/500x300/4ade80/ffffff?text=Implementation",
    activities: [
      "Integrated omnichannel campaign development",
      "SEO optimization & pay-per-click campaigns",
      "Social media marketing & content creation",
      "Project management with detailed timelines",
      "Quality assurance and testing protocols"
    ]
  },
  {
    phase: "Phase 4",
    title: "Optimization for Maximum Sales Impact",
    icon: TrendingUp,
    color: "bg-purple-500", 
    description: "Continuous refinement based on data analysis to maximize your sales impact.",
    image: "https://placehold.co/500x300/a855f7/ffffff?text=Optimization",
    activities: [
      "Heatmap & conversion path analysis",
      "A/B and multivariate testing",
      "Bid strategy adjustments & performance tracking",
      "Content refreshing & link building campaigns",
      "Technical improvements for enhanced UX"
    ]
  },
  {
    phase: "Phase 5",
    title: "Automated Reporting & AI Optimization",
    icon: Zap,
    color: "bg-orange-500", 
    description: "We leverage automation and AI to provide real-time insights and continuous improvement for your campaigns.",
    image: "https://placehold.co/500x300/f59e0b/ffffff?text=Automation",
    activities: [
      "Automated daily, weekly, and monthly performance reports",
      "Seamless integration with Google Analytics, Search Console, and CRM platforms",
      "Custom dashboards providing real-time campaign insights",
      "Predictive analytics for forecasting future trends and performance",
      "AI-powered content and keyword recommendations",
    ]
  }
];

function MethodologySection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Central connecting line */}
        <div className="hidden lg:block absolute inset-y-0 left-1/2 w-px bg-gray-300 z-0 transform -translate-x-1/2"></div>
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div {...fadeInUp}>
            <Badge className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 border-purple-200 px-4 py-2 mb-6">
              <Lightbulb className="w-4 h-4" />
              Proven Methodology
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Grovoz Expert Methodology:{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                How We Drive Sales
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures every campaign delivers measurable results 
              and transforms your business into a revenue-generating machine.
            </p>
          </motion.div>
        </div>

        {/* Phases */}
        <div className="space-y-20">
          {PHASES.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1 relative z-10">
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm transition-transform duration-300 hover:scale-105">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.8 }}
                        className={`w-16 h-16 rounded-2xl ${phase.color} bg-opacity-10 flex items-center justify-center`}
                      >
                        <phase.icon className={`w-8 h-8 ${phase.color.replace('bg-', 'text-')}`} />
                      </motion.div>
                      <div>
                        <Badge className={`${phase.color} text-white mb-2`}>{phase.phase}</Badge>
                        <CardTitle className="text-2xl font-bold text-gray-900">{phase.title}</CardTitle>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">{phase.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {phase.activities.map((activity, i) => (
                        <motion.div key={i} {...fadeInUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 mt-0.5 ${phase.color.replace('bg-', 'text-')} flex-shrink-0`} />
                          <span className="text-gray-700 leading-relaxed">{activity}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                {/* Horizontal connector line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '50%' }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`hidden lg:block absolute h-px ${phase.color} top-1/2 transform -translate-y-1/2 ${index % 2 === 1 ? 'left-full origin-left' : 'right-full origin-right'}`}
                ></motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className={`hidden lg:block absolute w-4 h-4 rounded-full ${phase.color} bg-opacity-80 top-1/2 transform -translate-y-1/2 ${index % 2 === 1 ? 'left-[calc(100%+0.25rem)]' : 'right-[calc(100%+0.25rem)]'}`}
                ></motion.div>
              </div>

              {/* Image */}
              <div className="flex-1 flex justify-center z-10">
                <motion.div {...fadeInUp} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-md h-auto rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                  <img src={phase.image} alt={phase.title} className="w-full h-auto object-cover" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <MethodologySection />
    </>
  );
}

export default App;
