"use client";

import React, { useState } from 'react';

const Home = () => {
  const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );

  const GiftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 12 12 12 20" />
      <path d="M20 12v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2" />
      <path d="M20 12h-8" />
      <path d="M12 20V12" />
      <rect width="20" height="8" x="2" y="4" rx="2" ry="2" />
      <path d="M12 4v8" />
      <line x1="12" y1="4" x2="12" y2="12" />
    </svg>
  );

  const CircleDashedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.1 2.1c.4-.6 1.4-.6 1.8 0l.9 1.5c.3.5.9.8 1.5.7l1.7-.3c.7-.1 1.4.3 1.6 1L18 7.3c.3.5.7.9 1.3 1l1.6.3c.7.1 1.4-.3 1.6-1l.9-1.5c.4-.6 1.4-.6 1.8 0l.9 1.5c.3.5.9.8 1.5.7l1.7-.3c.7-.1 1.4.3 1.6 1l.9 1.5c.3.5.7.9 1.3 1l1.6.3c.7.1 1.4-.3 1.6-1l.9-1.5c.4-.6 1.4-.6 1.8 0l.9 1.5c.3.5.9.8 1.5.7l1.7-.3c.7-.1 1.4.3 1.6 1l.9 1.5c.3.5.7.9 1.3 1" />
      <circle cx="12" cy="12" r="10" strokeDasharray="5 5" />
    </svg>
  );

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );

  const CollapsibleText = ({ text, charLimit = 70 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isTruncated = text.length > charLimit;

    if (!isTruncated) {
      return <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto text-center leading-relaxed">{text}</p>;
    }

    const displayText = isExpanded ? text : `${text.substring(0, charLimit)}...`;

    return (
      <p className="mt-4 text-xl text-gray-500 max-w-1xl mx-auto text-center leading-relaxed">
        {displayText}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:text-blue-600 font-medium ml-2 focus:outline-none"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </p>
    );
  };

  const textContent = "Global markets are fast, fierce, and full of opportunity. SMEs face tight budgets and tough competition but can win with the right digital partner. Grovoz delivers measurable results—more visibility, leads, and revenue—through the creation and deployment of Grovoz‘s own marketing technology tools for data-driven campaigns, personalized content, and integrated platforms. Digital marketing levels the playing field. A startup with a tight budget can reach the same user base as a multinational."mt-4 text-gray-400 leading-relaxed text-justify;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Build Your Presence Now: Don’t Let Competitors Outpace You
          </h1>
          <CollapsibleText text={textContent} />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: SEO and Generative Engine Optimization */}
          <div className="md:col-span-1 lg:col-span-2 bg-blue-700 text-white rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 h-40 w-40 bg-blue-900/50 rounded-full -mt-20 -mr-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold">Dominate Search with SEO and Generative Engine Optimization</h2>
              <p className="mt-4 text-blue-100 leading-relaxed">
                Search is evolving, and so is your competition. Traditional SEO is no longer enough. We combine advanced SEO with Generative Engine Optimization to make your brand discoverable across search engines and AI-driven platforms. The result: more visibility, more leads, and more conversions before your competitors even know what happened.
              </p>
            </div>
            <div className="flex items-center mt-8 space-x-4 relative z-10">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-medium text-blue-700 shadow-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-xl hover:scale-105">
                Get Started for free
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card 2: Social Media Marketing */}
          <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold">Seize Attention on Social Media Marketing</h2>
              <p className="mt-2 text-gray-500">
                Social media moves fast; if you’re not top of feed, you’re invisible. We craft high-impact campaigns that engage, convert, and grow loyal communities.
              </p>
            </div>
            <a href="#" className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-medium text-orange-500 shadow-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-xl hover:scale-105 mt-6">
                Capture them today
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Card 3: Pay Per Click Advertising */}
          <div className="bg-gray-100 rounded-3xl p-8 md:col-span-1">
            <h2 className="text-2xl font-bold">Turn Clicks into Customers Instantly with Pay Per Click Advertising</h2>
            <p className="mt-2 text-gray-500">
              Every wasted click is wasted money. Our targeted ad campaigns put your brand in front of ready-to-buy audiences, driving qualified traffic that converts fast.
            </p>
             <a href="#" className="group inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:scale-105 mt-6 hover:text-white-500">
              Launch your campaign now
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Card 4: Content Marketing */}
          <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between">
            
            <div>
              <h2 className="text-2xl font-bold">Content that Sells, Not Just Tells with Content Marketing</h2>
              <p className="mt-2 text-gray-500">
                Weak content makes your brand forgettable. We create persuasive blogs, videos, and campaigns that build authority and drive customers to act.
              </p>
            </div>
            <a href="#" className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-medium text-blue-800 shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl hover:scale-105 mt-6">
              Get your message out
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Card 5: Email Marketing */}
          <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold">Own the Inbox, Own the Customer with Email Marketing</h2>
              <p className="mt-2 text-white-800">
                Your competitors are already in your customers’ inboxes—are you? Our data-driven email campaigns build trust, nurture leads, and keep sales flowing.
              </p>
            </div>
            <a href="#" className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:bg-blue-500 hover:shadow-xl hover:scale-105 mt-6">
              Start turning subscribers into buyers
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
