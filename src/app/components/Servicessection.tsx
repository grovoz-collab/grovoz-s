"use client";

import React from 'react';
import Link from "next/link";

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true" // Makes the icon decorative for screen readers
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const textContent = "Global markets are fast, fierce, and full of opportunity. SMEs face tight budgets and tough competition but can win with the right digital partner. Grovoz delivers measurable results—more visibility, leads, and revenue—through the creation and deployment of Grovoz‘s own marketing technology tools for data-driven campaigns, personalized content, and integrated platforms. Digital marketing levels the playing field. A startup with a tight budget can reach the same user base as a multinational.";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Build Your Presence Now: Don’t Let Competitors Outpace You
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto text-center leading-relaxed">
            {textContent}
          </p>
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
              <Link href="#" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-medium text-blue-700 shadow-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-xl hover:scale-105">
                Get Started for free
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
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
            <Link href="#" className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-medium text-orange-500 shadow-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-xl hover:scale-105 mt-6">
              Capture them today
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Card 3: Pay Per Click Advertising */}
          <div className="bg-gray-100 rounded-3xl p-8 md:col-span-1">
            <h2 className="text-2xl font-bold">Turn Clicks into Customers Instantly with Pay Per Click Advertising</h2>
            <p className="mt-2 text-gray-500">
              Every wasted click is wasted money. Our targeted ad campaigns put your brand in front of ready-to-buy audiences, driving qualified traffic that converts fast.
            </p>
            <Link href="#" className="group inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:scale-105 mt-6">
              Launch your campaign now
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Card 4: Content Marketing */}
          <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold">Content that Sells, Not Just Tells with Content Marketing</h2>
              <p className="mt-2 text-gray-500">
                Weak content makes your brand forgettable. We create persuasive blogs, videos, and campaigns that build authority and drive customers to act.
              </p>
            </div>
            <Link href="#" className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-medium text-blue-800 shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl hover:scale-105 mt-6">
              Get your message out
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Card 5: Email Marketing */}
          <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold">Own the Inbox, Own the Customer with Email Marketing</h2>
              <p className="mt-2 text-gray-500">
                Your competitors are already in your customers’ inboxes—are you? Our data-driven email campaigns build trust, nurture leads, and keep sales flowing.
              </p>
            </div>
            <Link href="#" className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:bg-blue-500 hover:shadow-xl hover:scale-105 mt-6">
              Start turning subscribers into buyers
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}