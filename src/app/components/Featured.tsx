"use client";
import React, { useState } from "react";
// Import necessary icons for the rest of the component (ActionPanel and main section)
import { ArrowRight, Zap, Smartphone, BarChart3, Clock, TrendingUp, CheckCircle } from "lucide-react"; 

// Importing the separate ContactForm component
import ContactForm from "./ContactForm"; 


// --- Action Panel Component (Helper for Sticky Sections) ---
const ActionPanel = ({ stageId }) => {
  let title = "";
  let description = "";
  let toggles = [];

  switch (stageId) {
    case 1: 
      title = "Discovery Action Panel";
      description = "Activate controls to initiate deep-dive analysis and define the strategic perimeter.";
      toggles = [
        { label: "Conduct Market Research", status: true, icon: BarChart3 },
        { label: "Define Target Profile", status: true, icon: Smartphone },
        { label: "Review Stakeholder Interviews", status: true, icon: Clock },
        { label: "Finalize Budget Scope", status: false, icon: CheckCircle }, 
      ];
      break;
    case 2: 
      title = "Audit Control Panel";
      description = "Run specialized scans and analyses to identify technical debt and performance bottlenecks.";
      toggles = [
        { label: "Technical SEO Scan", status: true, icon: CheckCircle }, 
        { label: "Competitor Benchmarking", status: true, icon: TrendingUp },
        { label: "Content Gap Analysis", status: false, icon: BarChart3 },
        { label: "Performance Report Generation", status: true, icon: BarChart3 },
      ];
      break;
    case 3: 
      title = "Strategy Activation";
      description = "Confirm all campaign plans and creative assets before moving to active development.";
      toggles = [
        { label: "SEO Strategy Finalized", status: true, icon: CheckCircle }, 
        { label: "PPC Budget Allocated", status: true, icon: TrendingUp },
        { label: "Creative Brief Approved", status: false, icon: Smartphone },
        { label: "Automation Logic Check", status: false, icon: Clock },
      ];
      break;
    case 4: 
      title = "Deployment Control";
      description = "Monitor the live launch sequence and QA checks across all advertising platforms.";
      toggles = [
        { label: "Campaign Launch QA", status: true, icon: CheckCircle }, 
        { label: "Monitoring Setup", status: true, icon: BarChart3 },
        { label: "A/B Testing Enabled", status: true, icon: Smartphone },
        { label: "Scaling Strategy Review", status: false, icon: TrendingUp },
      ];
      break;
    case 5: 
      title = "Growth Management";
      description = "Utilize AI tools to fine-tune performance, analyze trends, and project future growth.";
      toggles = [
        { label: "Real-time Analytics Feed", status: true, icon: BarChart3 },
        { label: "A/B Test Rotation Schedule", status: true, icon: CheckCircle }, 
        { label: "Monthly Report Automation", status: true, icon: Clock },
        { label: "Innovation Integration Review", status: false, icon: Smartphone },
      ];
      break;
    default:
      return null;
  }

  const ToggleSwitch = ({ status }) => (
    <div className={`relative w-10 h-6 rounded-full transition-all duration-300 ${status ? 'bg-green-500' : 'bg-gray-300'}`}>
      <div className={`absolute left-0 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-300 ${status ? 'translate-x-4' : 'translate-x-0.5'}`}></div>
    </div>
  );

  return (
    <div className="p-6 h-full bg-indigo-50/60 rounded-2xl shadow-inner border border-indigo-100">
      <div className="flex items-center text-indigo-700">
        <Zap className="h-6 w-6 mr-3" />
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-indigo-600 border-b border-indigo-200 pb-4">
        {description}
      </p>

      <div className="mt-4 space-y-3">
        {toggles.map((toggle, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center text-sm text-indigo-800">
              <toggle.icon className="h-4 w-4 mr-2 text-indigo-500" />
              <span>{toggle.label}</span>
            </div>
            <ToggleSwitch status={toggle.status} />
          </div>
        ))}
      </div>
    </div>
  );
};


// --- Main Partner Advantage Component ---
export default function PartnerAdvantageSection() { 
  const [isFormOpen, setIsFormOpen] = useState(false);

  const cardData = [
    {
      id: 1,
      title: '1. Discovery & Requirements Analysis',
      description: 'Comprehensive consultation to understand your business goals, target audience, budget realities, and growth expectations. Our professional team conducts in-depth market research and competitive analysis.',
      top: 'top-0',
      points: [
        'Business objective identification and goal setting',
        'Target audience profiling and psychology analysis',
        'Competitive landscape assessment and positioning strategy',
        'Budget planning and investment recommendations',
      ],
    },
    {
      id: 2,
      title: '2. Comprehensive Digital Audit & Analysis',
      description: 'State of the art analysis of your complete digital footprint using professional tools including SEMrush, Google Analytics, Ahrefs, and proprietary software',
      top: 'top-16',
      points: [
        'Website performance and user experience evaluation',
        'SEO strength and search engine visibility assessment',
        'Social media presence and engagement analysis',
        'Paid advertising campaign performance review',
        'Technical infrastructure and security assessment'
      ],
    },
    {
      id: 3,
      title: '3. Strategic Planning & Creative Development',
      description: 'Custom roadmap development based on data insights and market intelligence. Our creative team designs campaigns that resonate with your audience while driving measurable results.',
      top: 'top-32',
      points: [
        'SEO strategy for long-term organic growth',
        'PPC campaigns for immediate traffic and conversions',
        'Content calendar and creative asset development',
        'Social media tactics and community management',
        'Mobile app development and optimization'
      ],
    },
    {
      id: 4,
      title: '4. Implementation & Execution',
      description: 'Our team of certified specialists activate each campaign component with coordination and consistency across all platforms. Real-time monitoring ensures optimal performance.',
      top: 'top-48',
        points: [
        'Project management with clear timelines and deliverables',
        'Quality assurance and testing protocols',
        'Brand consistency across all channels',
        'Performance monitoring and real-time optimization',
        'Regular communication and progress reporting'
      ],
    },
    {
      id: 5,
      title: '5. Monitoring, Scaling & Optimization',
      description: 'Continuous performance analysis with monthly reporting and strategic adjustments. Our datadriven approach ensures sustainable growth and maximum ROI.',
      top: 'top-64',
      points: [
        'Real-time analytics and performance tracking',
        'A/B testing for continuous improvement',
        'Campaign scaling for successful initiatives',
        'Strategy refinement based on market feedback',
        'Innovation integration for competitive advantage'
      ],
    },
  ];

  return (
    // Apply font-sans to the main container for global font consistency
    <div className="bg-white min-h-[400vh] "> 
      
      {/* Main Title Section */}
<div id="process" className="flex flex-col items-center justify-center px-4 pt-10 pb-8">        
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 text-center mt-3">
            Our Digital Marketing Process,<br />from Insight to Impact
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-500 mx-auto max-w-2xl text-center leading-relaxed">
            Small businesses don&apos;t thrive on cookie-cutter solutions—and neither should you. What you need is not a generic plan, but a tailored strategy that aligns with your budget, your size, and your growth potential.
        </p>
      </div>
      
      {/* Sticky Sections Container */}
      <div className="relative">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={`sticky ${card.top} pt-6 lg:pt-10 px-4 z-[${20 - index * 2}]`} 
            style={{ minHeight: '80vh' }}
          >
            <div className="max-w-6xl mx-auto w-full">
              <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
                
                {/* Left Column - Content and "Request a Consultation" Button */}
                <div className="lg:pr-12 mb-8 lg:mb-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {card.title}
                  </h2>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                  
                  <ul className="mt-6 space-y-3 text-gray-700">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex items-start text-base">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* BUTTON: This button now opens the contact form modal */}
                  <div className="mt-6">
                    <button 
                      onClick={() => setIsFormOpen(true)}
                      className="group inline-flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Request a Consultation
                      <ArrowRight className="h-5 w-5 transform transition-transform group-hover:rotate-45" />
                    </button>
                  </div>
                </div>

                {/* Right Column - Action Panel */}
                <div className="relative h-full pt-1">
                    <ActionPanel stageId={card.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Final CTA Section --- */}
      <section id="demo" className="pt-20 pb-40 bg-gradient-to-br from-blue-50 via-white to-blue-100"> 
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Main Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl font-extrabold leading-snug">
                Let’s Accelerate Your Business Growth—Starting Today
              </h3>
              <p className="mt-4 text-white/90 text-lg sm:text-xl">
                You’re not just looking for another digital marketing company—you’re looking for a partner that delivers results. Let’s create something measurable, scalable, and unstoppable together.
              </p>
            </div>

            {/* Button: Opens the contact form modal */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center gap-4 text-center">
              <p className="text-sm font-medium text-white/80">Ready to get started?</p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-600 font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal component usage */}
      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </div>
  );
}
