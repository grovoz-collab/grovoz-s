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

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold  text-gray-900">
Build Your Presence Now: Dont Let Competitors Outpace You          </h2>
          <p className="mt-4 text-1xl text-gray-500  mx-auto text-center leading-relaxed">
Our performance-driven digital marketing services deliver measurable growth through innovation and professional expertise.<br/> Every strategy is laser-focused on driving revenue, boosting visibility, and maximizing ROI across all digital channels.          </p>
        </div>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {/* Card 1: SEO and Generative Engine Optimization */}
    <div className="md:col-span-1 lg:col-span-2 bg-blue-700 text-white rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group transition-colors duration-300 hover:bg-gray-100">
        <div className="absolute top-0 right-0 h-40 w-40 bg-blue-900/50 rounded-full -mt-20 -mr-20 group-hover:bg-blue-600"></div>
        <div className="relative z-10">
            <h2 className="text-4xl font-bold transition-colors duration-300 group-hover:text-gray-900">
                SEO & Generative Engine Optimization
            </h2>
            <p className="mt-4 text-blue-200 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                Dominate search results through advanced search engine marketing and local search engine optimisation. Our web design and technical support team implements conversion rate optimization strategies that improve your ranking while building lasting reputation.
            </p>
        </div>
        <div className="mt-8 relative z-10">
            <Link href="#" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-medium text-blue-700 shadow-lg transition-all duration-300 hover:bg-gray-200 hover:text-orange-500 hover:shadow-xl hover:scale-105">
                Get Started for free
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </div>
    </div>

    {/* Card 2: Social Media Marketing */}
    <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-blue-700 group hover:text-orange-500">
        <div className="relative z-10">
            <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-white">Seize Attention on Social Media Marketing</h2>
            <p className="mt-2 text-gray-500 transition-colors duration-300 group-hover:text-white">
                Create engaging digital media campaigns that build community management and drive usergenerated content. Our social media measurement tools track performance while our viral marketing strategies amplify your reach.
            </p>
        </div>
        <Link href="#" className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-medium text-orange-500 shadow-lg transition-all duration-300 hover:bg-gray-200 hover:text-orange-500 hover:shadow-xl hover:scale-105 mt-6">
            Capture them today
            <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
    </div>

    {/* Card 3: Pay Per Click Advertising */}
    <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between md:col-span-1 transition-colors duration-300 hover:bg-blue-600 group">
        <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-white">Turn Clicks into Customers Instantly with Pay Per Click Advertising</h2>
        <p className="mt-2 text-gray-500 transition-colors duration-300 group-hover:text-white">
            Every wasted click is wasted money. Our targeted ad campaigns put your brand in front of ready-to-buy audiences, driving qualified traffic that converts fast.
        </p>
        <Link href="#" className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-medium text-orange-500 shadow-lg transition-all duration-300 hover:bg-white-200 hover:text-blue-500 hover:shadow-xl hover:scale-105 mt-6">
            Launch your campaign now
            <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
    </div>

    {/* Card 4: Content Marketing */}
    <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-blue-600 group">
        <div>
            <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-white">Content that Sells, Not Just Tells with Content Marketing</h2>
            <p className="mt-2 text-gray-500 transition-colors duration-300 group-hover:text-white">
                Weak content makes your brand forgettable. We create persuasive blogs, videos, and campaigns that build authority and drive customers to act.
            </p>
        </div>
        <Link href="#" className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-medium text-orange-500 shadow-lg transition-all duration-300 hover:bg-white-200 hover:text-blue-500 hover:shadow-xl hover:scale-105 mt-6">
            Get your message out
            <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
    </div>

    {/* Card 5: Email Marketing */}
    <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-blue-600 group">
        <div>
            <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-white">Own the Inbox, Own the Customer with Email Marketing</h2>
            <p className="mt-2 text-gray-500 transition-colors duration-300 group-hover:text-white">
                Your competitors are already in your customers’ inboxes—are you? Our data-driven email campaigns build trust, nurture leads, and keep sales flowing.
            </p>
        </div>
        <Link href="#" className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-medium text-orange-500 shadow-lg transition-all duration-300 hover:bg-white-200 hover:text-blue-500 hover:shadow-xl hover:scale-105 mt-6">
            Convert Subscribers
            <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
    </div>
</div>
   </div>
    </div>
  );
}