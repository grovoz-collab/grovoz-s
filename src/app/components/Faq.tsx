"use client";
import React, { useState } from "react";
// Removed unused imports: Mail, Phone, MapPin, Send as the contact section is removed.

type AccordionItemProps = {
  question: string;
  answer: React.ReactNode;
};

// AccordionItem Component
const AccordionItem = ({
  question,
  answer,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div
      className={`rounded-2xl shadow-xl border border-gray-100 bg-white/90 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
        isOpen ? "ring-4 ring-blue-500/50 scale-[1.005]" : "hover:shadow-2xl"
      }`}
    >
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-6 text-left font-extrabold text-lg text-gray-800 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{question}</span>
          <span
            className={`flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white transform transition-transform duration-300 ${
              isOpen ? "rotate-180 shadow-md" : "rotate-0"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </h2>

      <div
        style={{ transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out' }}
        className={`overflow-hidden text-gray-700 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-0 leading-relaxed text-base space-y-3">{answer}</div>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  const faqs = [
    {
      question: "What Will My Marketing Budget Be and How Do I Find It?",
      answer: (
        <>
          <p>
            Your marketing budget is not guesswork. It is a reflection of your
            business size, goals, and the competitive landscape you&rsquo;re up
            against. That is  why we start with a free discovery call where we
            analyze your revenue, target audience, and current market position
            to define the smartest path forward.
          </p>
          <p>
            Industry benchmarks suggest investing 7 to 12% of annual revenue
            into marketing. For SMEs, that can feel steep, but that&apos; exactly
            why we design ROI-driven strategies that make even limited funds
            deliver measurable growth.
          </p>
           <p>
            Through our Digital Marketing Audit, powered by proprietary tools and competitive analysis, 
            we&apos;ll pinpoint where you stand today, uncover untapped opportunities, 
            and recommend a budget that aligns with your growth potential.
          </p>
        </>
      ),
    },
    {
      question: "How long before I see results with digital marketing?",
      answer: (
        <>
          <p>
            Your marketing budget is not guesswork. It&apos;s a reflection of your
            business size, goals, and the competitive landscape you&apos;re up
            against. That&apos;s why we start with a free discovery call where we
            analyze your revenue, target audience, and current market position
            to define the smartest path forward.
          </p>    </> ) },
    {
      question: "Do you work with businesses anywhere in the world?",
      answer:
        "Yes. Although headquartered in India, our campaigns reach clients across the GCC, Europe, and North America. Our digital tools eliminate geographic barriers, making remote collaboration seamless and productive.",
    },
    {
      question: "What platforms do you specialize in for advertising?",
      answer:
        "Our expertise is concentrated on high-ROI platforms including Google Ads (Search, Display, Shopping), Meta Ads (Facebook/Instagram), and professional B2B lead generation via LinkedIn.",
    },
    {
      question: "Can I select just one service, like SEO or Social Media?",
      answer:
        "Absolutely. Each service, including SEO, social media management, paid ads, email marketing, and content development, operates independently. Many businesses choose to begin with a single focus area, such as organic search or Instagram engagement, and expand later as they scale. Custom strategies align with your goals and budget without unnecessary bundles.",
    },
    {
      question: "What platforms do you specialize in?",
      answer:
 (
        <>
         
  <ul className="list-none space-y-3">
  
  <li className="flex items-start">
    <span className="text-blue-500 mr-2 text-xl">✓</span> {/* Custom Checkmark */}
      Google - Search ads, Display Network, and Google My Business optimization  </li>
      <li className="flex items-start">
    <span className="text-blue-500 mr-2 text-xl">✓</span> {/* Custom Checkmark */}
      Data Analytics & subsidiary tools: Google cloud console, aws, big query , fast API, N8N, Power BI, Python </li>
      <li className="flex items-start">
    <span className="text-blue-500 mr-2 text-xl">✓</span> {/* Custom Checkmark */}
      Meta (Facebook & Instagram) - Organic and paid campaigns including Reels and Carousel Ads  </li>
      <li className="flex items-start">
    <span className="text-blue-500 mr-2 text-xl">✓</span> {/* Custom Checkmark */}
      LinkedIn - Lead generation strategies for B2B sectors </li>
      <li className="flex items-start">
    <span className="text-blue-500 mr-2 text-xl">✓</span> {/* Custom Checkmark */}
     TikTok - Performance marketing for consumer-first brands targeting younger audiences  </li>
      <li className="flex items-start">
    <span className="text-blue-500 mr-2 text-xl">✓</span> {/* Custom Checkmark */}
      Shopify and WordPress - For SEO, content marketing, and e-commerce integrations Platform selection always ties back to where your target audience spends their time and how they consume content.  </li>
</ul>

             </> ) },   
          {
      question: "Is there a minimum contract?",
      answer:
 (
        <>
          <p>
            Yes. Our contracts start at a minimum duration of 3 months. This timeframe allows for research, implementation, 
            and iterative optimization of your campaign. One-off services, such as website audits or single ad campaign setups, 
            are also available without ongoing commitments. For longer-term growth programs, 6- and 12-month packages offer both consistency and strategic depth.
          </p>    </> ) },    
  ];

  // Split FAQs into two halves for the 2-column layout
  const halfwayPoint = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, halfwayPoint);
  const rightColumnFaqs = faqs.slice(halfwayPoint);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4 sm:px-8 lg:px-12 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 pt-8">
          <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full uppercase tracking-widest shadow-inner">
            Support Center
          </span>
          <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
            Common Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Find quick, comprehensive answers to the most frequently asked questions about our digital marketing strategies and pricing models.
          </p>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-6">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnFaqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnFaqs.map((faq, index) => (
              <AccordionItem key={index + halfwayPoint} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default App;
