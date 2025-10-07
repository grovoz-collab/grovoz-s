"use client"; // Ensure this is at the top if this is a Next.js App Router component

import React, { useState, useCallback } from 'react';
import { Zap, BookOpen, ArrowRight, Phone } from 'lucide-react'; // Added Phone icon for the new button

// Assuming your ContactForm component is in the same directory
// If not, adjust the import path:
import ContactForm from '../components/ContactForm'; 


// --- Custom Button Component ---
// This component simulates the 'Button' used in the original JSX snippet,
// adding custom styling based on the 'variant' prop, specifically for the CTA.
const Button = ({ children, onClick, className, variant = 'default' }) => {
    let baseStyles = "transition duration-300 ease-in-out font-bold tracking-wide rounded-xl focus:outline-none focus:ring-4 transform active:scale-95 flex items-center justify-center space-x-2";
    let variantStyles;

    // Defining the 'cta-alt' variant to contrast sharply with the darker CTA gradient color
    if (variant === 'cta-alt') {
        // Bright white background with text matching the darker CTA gradient color
        variantStyles = "bg-white text-purple-700 hover:bg-gray-100 ring-white/50 shadow-xl hover:shadow-2xl";
    } 
    // New 'cta-primary' variant for the main contact form button
    else if (variant === 'cta-primary') {
        // High-contrast, vibrant main button
        variantStyles = "bg-red-600 text-white hover:bg-red-700 ring-red-300 shadow-2xl hover:shadow-3xl";
    }
    else {
        // Default style (if needed elsewhere)
        variantStyles = "bg-indigo-600 text-white hover:bg-indigo-700 ring-indigo-300";
    }

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles} ${className}`}
        >
            {children}
        </button>
    );
};

// --- Blog Card Component (New) ---
// (Keeping BlogCard unchanged for brevity, as requested)
const BlogCard = ({ title, excerpt, date, category, imageUrl }) => {
    return (
        <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition duration-300 hover:shadow-2xl hover:scale-[1.01] transform cursor-pointer"
        >
            {/* Image Placeholder */}
            <div className="h-48 w-full bg-gray-200 overflow-hidden">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                {/* Meta data */}
                <div className="flex justify-between items-center mb-3 text-sm font-semibold">
                    <span className="text-blue-600 uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
                        {category}
                    </span>
                    <span className="text-gray-500">{date}</span>
                </div>

                {/* Title and Excerpt */}
                <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {title}
                </h4>
                <p className="text-gray-600 text-base mb-4 flex-grow line-clamp-3">
                    {excerpt}
                </p>

                {/* Read More Link */}
                <a 
                    href="#" 
                    className="text-blue-600 font-medium hover:text-blue-800 flex items-center mt-auto"
                    onClick={(e) => e.preventDefault()} // Prevent actual navigation
                >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                </a>
            </div>
        </div>
    );
};


// --- Main Application Component ---
const App = () => {
    const [message, setMessage] = useState('');
    // New state for controlling the ContactForm popup
    const [isFormOpen, setIsFormOpen] = useState(false); 

    // Handlers for the ContactForm popup
    const openContactForm = useCallback(() => setIsFormOpen(true), []);
    const closeContactForm = useCallback(() => setIsFormOpen(false), []);

    // Dummy blog post data updated with new subjects and relevant image placeholders
    const blogPosts = [
        {
            id: 1,
            title: "Authority Content: Strategies to Improve SEO and Boost Conversions by 40%",
            excerpt: "Explore the advanced content frameworks that drive organic search visibility and translate page views into tangible sales outcomes.",
            date: "Oct 5, 2025",
            category: "SEO & Content",
            imageUrl: "/Firefly_Authority content on strategies to improve SEO and boost conversions 327526.webp"
        },
        {
            id: 2,
            title: "Regional Trend Analysis: Unlocking Exponential Growth with Dubai Market Insights",
            excerpt: "A comprehensive look at the unique economic and consumer trends across the MENA region, detailing actionable insights for successful business growth, particularly in the Dubai hub.",
            date: "Sep 28, 2025",
            category: "Regional Markets",
            imageUrl: "/Firefly__Regional trend analysis for business growth including Dubai market insights 812328.webp"
        },
        {
            id: 3,
            title: "Case Studies: Demonstrating Measurable Results and Detailed Customer Success",
            excerpt: "Review our in-depth case studies that showcase quantifiable ROI and positive customer service experiences, providing transparent evidence of our commitment to client success.",
            date: "Sep 20, 2025",
            category: "Case Studies",
            imageUrl: "/Firefly__Case studies showing measurable results with detailed customer service experience 472082.webp"
        },
    ];

  
    return (
        // Main container now only handles background and vertical padding
        <div className="bg-gray-50 py-16">
            {/* Injecting a style tag for the 'Inter' font to ensure good typography */}
          

            {/* 1. CTA GRID Section (Constrained to max-w-6xl) */}
            <div className="w-full max-w-6xl font-inter px-4 sm:px-8 mx-auto mb-16">
                
                <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
                    Ready to Scale Your Business?
                </h2>
                
                {/* The CTA Grid is now 3 columns on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">                    
                    {/* NEW: Primary Contact CTA - Opens the Popup */}
                 
                    {/* ROI Calculator CTA - Existing Section */}
                    <div
                        className="bg-gradient-to-r from-blue-700 to-purple-700 px-8 py-6 md:px-10 md:py-8 rounded-2xl text-white shadow-2xl 
                                transition duration-500 hover:shadow-3xl hover:scale-[1.01] transform h-full flex flex-col justify-between"
                    >
                        <div className="flex flex-col gap-4">
                            <h3 className="text-3xl font-extrabold leading-tight">
                                <Zap className="inline w-6 h-6 mr-3 -mt-1 text-yellow-300" />
                                ROI Calculator
                            </h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Access our web page calculator that provides realistic projections to boost your business growth. 
                            </p>
                        </div>
                        <Button
                                onClick={openContactForm} // **This opens your ContactForm popup**
                            className="text-lg w-full mt-6 px-10 py-4" 
                            variant="cta-primary"
                        >
                            Access Calculator
                        </Button>
                    </div>

                    {/* Case Studies CTA - Existing Section */}
                    <div
                        className="bg-gradient-to-r from-teal-600 to-green-500 px-8 py-6 md:px-10 md:py-8 rounded-2xl text-white shadow-2xl
                                transition duration-500 hover:shadow-3xl hover:scale-[1.01] transform h-full flex flex-col justify-between"
                    >
                        <div className="flex flex-col gap-4">
                            <h3 className="text-3xl font-extrabold leading-tight">
                                <BookOpen className="inline w-6 h-6 mr-3 -mt-1 text-yellow-300" />
                                Success Stories
                            </h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Explore detailed case studies showing our experience with businesses in various markets, including Dubai.
                            </p>
                        </div>
                        <Button
                                onClick={openContactForm} // **This opens your ContactForm popup**
                            className="text-lg w-full mt-6 px-10 py-4"
                            variant="cta-alt"
                        >
                            View Full Cases
                        </Button>
                    </div>
                </div>
            </div>

            {/* 2. NEW BLOG SECTION (Wider, using max-w-7xl) */}
            <div className="w-full max-w-7xl font-inter px-4 sm:px-8 mx-auto pb-16">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
                    Latest Insights & Strategy Guides
                </h2>

                {/* Blog Card Grid (3 Columns on Desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <BlogCard 
                            key={post.id}
                            title={post.title}
                            excerpt={post.excerpt}
                            date={post.date}
                            category={post.category}
                            imageUrl={post.imageUrl}
                        />
                    ))}
                </div>
            </div>

            {/* 3. Status Message Display (Constrained back to max-w-6xl for alignment) */}
            <div className="w-full max-w-6xl font-inter px-4 sm:px-8 mx-auto text-center">
                {message && (
                    <p className="text-gray-700 text-xl font-medium p-4 border border-gray-200 rounded-xl bg-white shadow-md inline-block max-w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
                        {message}
                    </p>
                )}
            </div>

            {/* 4. RENDER THE CONTACT FORM POPUP */}
            {/* The ContactForm handles its own presentation (popup, background, animation) */}
            <ContactForm 
                isOpen={isFormOpen} 
                onClose={closeContactForm} 
            />

        </div>
    );
};

export default App;