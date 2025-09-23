"use client";

import React from "react";
import { motion } from "framer-motion";

// Importing icons from lucide-react
// Make sure you have this library installed in your project
import { Search, Megaphone, PenTool, BarChart, Mail, Users } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boost your organic visibility and drive qualified traffic with our advanced SEO strategies and technical optimization.",
    features: ["Keyword Research", "Technical SEO", "Content Strategy", "Link Building"],
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Megaphone,
    title: "Pay-Per-Click Advertising",
    description: "Maximize your ROI with targeted PPC campaigns across Google Ads, Microsoft Ads, and social media platforms.",
    features: ["Google Ads", "Microsoft Ads", "Shopping Campaigns", "Remarketing"],
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    icon: PenTool,
    title: "Web Design & Development",
    description: "Create stunning, conversion-optimized websites that engage your audience and drive business results.",
    features: ["Custom Design", "Mobile Responsive", "E-commerce", "CMS Integration"],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: BarChart,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage your audience across all major social media platforms.",
    features: ["Content Creation", "Community Management", "Paid Social", "Influencer Marketing"],
    gradient: "from-orange-500 to-red-600"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and retain customers with personalized email campaigns that convert.",
    features: ["Automation", "Segmentation", "A/B Testing", "Performance Tracking"],
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    icon: Users,
    title: "Marketing Strategy",
    description: "Develop comprehensive marketing strategies aligned with your business goals and target audience.",
    features: ["Market Research", "Competitor Analysis", "Brand Positioning", "Growth Planning"],
    gradient: "from-teal-500 to-green-600"
  }
];

export default function App() {
  const scrollToContact = () => {
    // This function will scroll to an element with the ID 'contact'.
    // Make sure you have an element with this ID somewhere in your page.
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 font-sans min-h-screen">
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Build Your Presence Now: Dont Let Competitors Outpace You 
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-justify">
              Our performance-driven digital marketing services deliver measurable growth through innovation and professional expertise. Every strategy is laser-focused on driving revenue, boosting visibility, and maximizing ROI across all digital channels. 
            </p>
          </motion.div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
  
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* The custom <Button> component has been replaced with a standard <button> tag */}
            <button
              onClick={scrollToContact}
              className="py-4 px-8 bg-indigo-600 text-white rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
