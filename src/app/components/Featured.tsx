"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const cardData = [
    {
      id: 1,
      title: '1. Discovery & Requirements Analysis',
      description: 'Comprehensive consultation to understand your business goals, target audience, budget realities, and growth expectations. Our professional team conducts in-depth market research and competitive analysis.',
      top: 'top-0',
      points: [
        'Traffic shifts by source, location, and user behavior',
        'Keyword movements across organic and paid search',
        'Conversion metrics tied to specific campaigns',
        'Budget utilization and ROI breakdowns',
      ],
    },
    {
      id: 2,
      title: '2. Comprehensive Digital Audit & Analysis',
      description: 'State of the art analysis of your complete digital footprint using professional tools including SEMrush,Google Analytics, Ahrefs, and proprietary software',
      top: 'top-16',
      points: [
        'Website performance and user experience evaluation',
        'SEO strength and search engine visibility assessment',
        'Social media presence and engagement analysis',
        'Paid advertising campaign performance review',
        'Content quality and brand consistency evaluation',
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
        'Email marketing automation and customer journey mapping','Mobile app development and optimization'
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
        'Strategy refinement based on market feedback','Innovation integration for competitive advantage'
      ],
    },
  ];

  return (
   
<div className="bg-white min-h-screen">
  {/* Main Title Section - Occupies the initial viewport */}
  <div id="process" className="flex flex-col items-center justify-center px-4 pt-20 pb-6">
    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 text-center">
        Our Digital Marketing Process,<br />from Insight to Impact
    </h2>
    <p className="mt-4 text-sm md:text-base text-gray-500 mx-auto max-w-2xl text-center leading-relaxed">
        Small businesses dontt thrive on cookie-cutter solutions—and neither should you. What you need isnot a generic plan, but a tailored strategy that aligns with your budget, your size, and your growth potential. That&apos;s why our packages aren&apos;t pre-defined. 
    </p>
  </div>
      {/* Scrolling section with sticky cards */}
      <div className="relative">
        {cardData.map((card, index) => (
         <div
    key={card.id}
    className={`sticky ${card.top} pt-6 lg:pt-10 px-4 ${index === cardData.length - 1 ? 'pb-12' : ''}`}
    style={{ minHeight: '80vh' }}
>
            {/* Main Content Card */}
            <div className="max-w-6xl mx-auto w-full">
              <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                {/* Left Column - Text and Link */}
                <div className="lg:pr-12 mb-8 lg:mb-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {card.title}
                  </h2>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                  {card.points && (
                    <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
                      {card.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-6">
                    <a href="#" className="group inline-flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                      Learn more
                      <ArrowRight className="h-5 w-5 transform transition-transform group-hover:rotate-45" />
                    </a>
                  </div>
                </div>

                {/* Right Column - Phone Mockup */}
                <div className="relative aspect-[3/4] max-w-[280px] w-full mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-gray-200 p-2">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-12 bg-gray-300 rounded-b-md"></div>
                    {/* Back button and time */}
                    <div className="flex items-center justify-between px-2 mt-4 text-sm font-semibold text-gray-500">
                      <span>&lt; Back</span>
                      <span>1:47</span>
                    </div>
                    {/* Card Image */}
                    <div className="mt-6 p-4 bg-gray-200 rounded-xl relative overflow-hidden">
                      <div className="absolute -inset-20 bg-gradient-to-br from-gray-300 to-gray-100 transform -rotate-12"></div>
                      <div className="relative z-10 p-6 rounded-lg bg-white/70 backdrop-blur-md">
                        <div className="flex items-center justify-end">
                          <Image
                            src="https://placehold.co/40x25/ffffff/000000?text=Visa"
                            alt="Visa logo"
                            width={40}
                            height={25}
                            className="h-6"
                          />
                        </div>
                        <div className="mt-4">
                          <p className="font-mono text-xs text-gray-600">•••• •••• •••• 9112</p>
                        </div>
                      </div>
                    </div>
                    {/* Apple Pay Section */}
                    <div className="mt-8 flex flex-col items-center justify-center">
                      <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-2.3 0-4.5 1.1-5.8 2.8C5 4.3 4.2 6.5 4.2 8.9c0 2.2.8 4.3 2.1 6.1C7.6 16.9 8.9 18.2 10.5 19.3c.9.6 1.7 1.1 2.3 1.5.7.4 1.3.7 1.8.9.5.2 1.1.3 1.7.3h.1c.9 0 1.7-.2 2.4-.6s1.2-.9 1.5-1.4c.3-.5.5-1.1.5-1.7v-.1c0-.7-.2-1.3-.5-1.8s-.9-1-1.5-1.4c-1.3-.8-2.5-1.6-3.7-2.4-.6-.4-1.1-.7-1.5-.9-.4-.2-.8-.4-1.2-.5-.4-.1-.8-.2-1.2-.2h-.1c-1.5 0-2.8-.8-3.7-2.1C5.6 12.3 5.1 10.6 5.1 8.9c0-1.7.5-3.3 1.4-4.6.9-1.3 2-2.1 3.5-2.6 1.4-.5 2.8-.7 4.2-.6h.1c1.5 0 2.8.4 4 1.2 1.2.8 2.1 1.9 2.6 3.2.5 1.3.7 2.7.6 4.2v.1c0 1.5-.4 2.8-1.2 4-1.2 1.6-2.6 2.8-4.1 3.8-1.5 1-2.9 1.8-4.3 2.5-1.4.7-2.6 1.3-3.7 1.9-1.1.6-2.1 1.2-3 1.9-1 1-1.8 2-2.3 3.1-.5 1.1-.7 2.3-.7 3.5v.1h.1c.6 0 1.2-.1 1.8-.2s1.2-.3 1.8-.5c.6-.2 1.1-.5 1.6-.7.5-.2 1-.4 1.5-.5.5-.1 1-.2 1.5-.2h.1c2.2 0 4.1.7 5.7 2.1 1.6 1.4 2.5 3.3 2.5 5.5v.1h-23.7v-.1c0-2.2.9-4.1 2.5-5.5 1.6-1.4 3.5-2.1 5.7-2.1h.1c.5 0 1 .1 1.5.2.5.1 1 .2 1.5.5.5.3 1 .5 1.6.7.6.2 1.2.4 1.8.5s1.2.2 1.8.2h.1c2.2 0 4.1-.7 5.7-2.1 1.6-1.4 2.5-3.3 2.5-5.5v-.1c0-2.2-.9-4.1-2.5-5.5-1.6-1.4-3.5-2.1-5.7-2.1h-.1c-.9 0-1.7.2-2.4.6s-1.2.9-1.5 1.4c-.3.5-.5 1.1-.5 1.7v.1z"/>
                        </svg>
                      </div>
                      <p className="mt-2 text-sm text-center text-gray-500">Add credit, debit or store cards to Apple Pay to make secure payments in apps, on the web and in shops using NFC.</p>
                    </div>
                  </div>
                  {/* The right side settings panel */}
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">Card Program</h3>
                    <div className="mt-2 text-xs font-medium text-gray-600">Multi-Currency</div>
                    <div className="mt-4 border-t border-gray-200 pt-4">
                      <h3 className="text-sm font-semibold text-gray-900">Card Type</h3>
                      <div className="mt-2 text-xs font-medium text-gray-600">Virtual Card</div>
                    </div>
                    <div className="mt-4 border-t border-gray-200 pt-4">
                      <h3 className="text-sm font-semibold text-gray-900">Authorization Settings</h3>
                      <ul className="mt-2 space-y-2 list-disc list-inside">
                        <li className="flex items-center justify-between text-xs text-gray-500">POS Transactions<div className="w-8 h-4 bg-green-500 rounded-full"></div></li>
                        <li className="flex items-center justify-between text-xs text-gray-500">Contactless<div className="w-8 h-4 bg-green-500 rounded-full"></div></li>
                        <li className="flex items-center justify-between text-xs text-gray-500">Email<div className="w-8 h-4 bg-gray-300 rounded-full"></div></li>
                        <li className="flex items-center justify-between text-xs text-gray-500">ATM Transactions<div className="w-8 h-4 bg-green-500 rounded-full"></div></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}