import React, { useState } from "react";
// FIX: Import the Transition type from framer-motion
import { motion, type Transition } from "framer-motion"; 
import {
  Award,
  Shield,
  Zap,
  Users,
  BarChart3,
  Star,
  TrendingUp,
  LucideIcon, // Import LucideIcon type
} from "lucide-react";
import ContactForm from "../components/ContactForm"; 

// --- TYPE DEFINITIONS FOR HELPER COMPONENTS ---

interface ComponentProps {
  children: React.ReactNode;
  className?: string;
}

// --- HELPER COMPONENTS (FIXED WITH TYPING) ---

// FIX: Apply ComponentProps interface
const Card: React.FC<ComponentProps> = ({ children, className = "" }) => (
  <div
    className={`rounded-xl border border-gray-200 bg-white text-gray-900 shadow ${className}`}
  >
    {children}
  </div>
);

// FIX: Apply ComponentProps interface
const CardHeader: React.FC<ComponentProps> = ({ children, className = "" }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
);

// FIX: Apply ComponentProps interface
const CardTitle: React.FC<ComponentProps> = ({ children, className = "" }) => (
  <h3 className={`font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);

// FIX: Apply ComponentProps interface
const CardContent: React.FC<ComponentProps> = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

// FIX: Apply ComponentProps interface
const Badge: React.FC<ComponentProps> = ({ children, className = "" }) => (
  <div
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
  >
    {children}
  </div>
);

// --- ADVANTAGE DATA ---

// Define a type for the advantage objects for clarity
interface Advantage {
    icon: LucideIcon;
    title: string;
    description: string;
    stats: string;
    color: string;
}

const advantages: Advantage[] = [
  {
    icon: Award,
    title: "Certified Specialists",
    description:
      "Google-certified PPC specialists and SEO experts with proven track records managing millions in ad spend.",
    stats: "$1M+ Ad Spend Managed",
    color: "bg-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description:
      "Data-driven strategies delivering 50-200% traffic increases and measurable ROI improvements.",
    stats: "50-200% Traffic Growth",
    color: "bg-green-500",
  },
  {
    icon: Shield,
    title: "Complete Security",
    description:
      "GDPR and CCPA compliant with advanced security infrastructure and encrypted data handling.",
    stats: "100% Compliance Rate",
    color: "bg-purple-500",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description:
      "AI-powered optimization, real-time dashboards, and advanced analytics for maximum efficiency.",
    stats: "Latest AI Integration",
    color: "bg-orange-500",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Direct access to account managers and specialist teams with transparent communication channels.",
    stats: "24/7 Expert Support",
    color: "bg-indigo-500",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Real-time project tracking, detailed performance metrics, and actionable insights delivered monthly.",
    stats: "Real-Time Analytics",
    color: "bg-pink-500",
  },
];

// --- MAIN COMPONENT ---

function WhyChooseSection() {
  // New state to manage the contact form's visibility
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Functions to open and close the contact form
  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  return (
    <section className="py-24 font-sans relative bg-gray-50">
      {/* Background SVG for infinite animation */}
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 100 100"
        >
          {/* FIX: Use the imported Transition type to satisfy the linter */}
          <motion.path
            stroke="#1d4ed8"
            strokeWidth="0.5"
            d="M 10 50 C 30 10, 70 10, 90 50 C 70 90, 30 90, 10 50"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity } as Transition} // Linter Fix applied here
          />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 border-indigo-200 px-4 py-2 mb-6">
              <Star className="w-4 h-4" />
              The Expert Advantage
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Grovoz Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with industry-leading experts who deliver proven results
              through transparent processes, cutting-edge technology, and
              unwavering commitment to your success.
            </p>
          </motion.div>
        </div>

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg group">
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl ${advantage.color} bg-opacity-10 group-hover:bg-opacity-20 flex items-center justify-center mb-4 transition-all duration-300`}
                  >
                    <advantage.icon
                      className={`w-8 h-8 ${advantage.color.replace(
                        "bg-",
                        "text-"
                      )} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {advantage.title}
                  </CardTitle>
                  <Badge
                    className={`${advantage.color} text-white w-fit text-xs px-3 py-1`}
                  >
                    {advantage.stats}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Join hundreds of successful businesses that trust Grovoz to
              deliver exceptional results. Your competitors are already
              investing in professional digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* This is the button that opens the contact form */}
              <button 
                onClick={handleOpenForm} // <-- Add the onClick handler here
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Render the ContactForm component based on the state */}
      <ContactForm 
        isOpen={isFormOpen} 
        onClose={handleCloseForm} 
      />
    </section>
  );
}

// The parent component that renders WhyChooseSection
function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <WhyChooseSection />
    </div>
  );
}

export default App;