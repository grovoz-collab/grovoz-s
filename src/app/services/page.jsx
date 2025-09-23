// app/services/page.jsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ResultsShowcase from '../components/ResultsShowcase';
import Testimonialssection from "../components/Testimonialssection";


// Define a reusable component for a single service card
const ServiceCard = ({ title, description, features }) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-start h-full"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 flex-grow">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {features.map((feature, index) => (
          <span
            key={index}
            className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

// Main Services page component
export default function ServicesPage() {
  const services = [
    {
      title: "Search Engine Optimization",
      description: "Boost your organic visibility and drive qualified traffic with our advanced SEO strategies and technical optimization.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy", "Link Building"]
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "Maximize your ROI with targeted PPC campaigns across Google Ads, Microsoft Ads, and social media platforms.",
      features: ["Google Ads", "Microsoft Ads", "Shopping Campaigns", "Remarketing"]
    },
    {
      title: "Web Design & Development",
      description: "Create stunning, conversion-optimized websites that engage your audience and drive business results.",
      features: ["Custom Design", "Mobile Responsive", "E-commerce", "CMS Integration"]
    },
    {
      title: "Social Media Marketing",
      description: "Build your brand presence and engage your audience across all major social media platforms.",
      features: ["Content Creation", "Community Management", "Paid Social", "Influencer Marketing"]
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns that convert.",
      features: ["Automation", "Segmentation", "A/B Testing", "Performance Tracking"]
    },
    {
      title: "Marketing Strategy",
      description: "Develop comprehensive marketing strategies aligned with your business goals and target audience.",
      features: ["Market Research", "Competitor Analysis", "Brand Positioning", "Growth Planning"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Our Services
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Providing comprehensive digital solutions to help your business grow.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
        
      </div>
              <ResultsShowcase />
              <Testimonialssection />

    </div>
  );
}