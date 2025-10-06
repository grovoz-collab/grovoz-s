import React, { useState, useCallback } from 'react';
import { Zap, BookOpen, ArrowRight } from 'lucide-react'; // Added BookOpen and ArrowRight icons

// --- Custom Button Component ---
// This component simulates the 'Button' used in the original JSX snippet,
// adding custom styling based on the 'variant' prop, specifically for the CTA.
const Button = ({ children, onClick, className, variant = 'default' }) => {
    let baseStyles = "transition duration-300 ease-in-out font-bold tracking-wide rounded-xl focus:outline-none focus:ring-4 transform active:scale-95 flex items-center justify-center space-x-2";
    let variantStyles;

    // Defining the 'cta-alt' variant to contrast sharply with the CTA background
    if (variant === 'cta-alt') {
        // Bright white background with text matching the darker CTA gradient color
        variantStyles = "bg-white text-purple-700 hover:bg-gray-100 ring-white/50 shadow-xl hover:shadow-2xl";
    } else {
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
                    // Fallback removed as placehold.co URLs provide descriptive text
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

    // Dummy blog post data updated with new subjects and relevant image placeholders
    const blogPosts = [
        {
            id: 1,
            title: "Authority Content: Strategies to Improve SEO and Boost Conversions by 40%",
            excerpt: "Explore the advanced content frameworks that drive organic search visibility and translate page views into tangible sales outcomes.",
            date: "Oct 5, 2025",
            category: "SEO & Content",
            imageUrl: "/Firefly_Authority content on strategies to improve SEO and boost conversions 327526.webp" // Green/White Placeholder
        },
        {
            id: 2,
            title: "Regional Trend Analysis: Unlocking Exponential Growth with Dubai Market Insights",
            excerpt: "A comprehensive look at the unique economic and consumer trends across the MENA region, detailing actionable insights for successful business growth, particularly in the Dubai hub.",
            date: "Sep 28, 2025",
            category: "Regional Markets",
            imageUrl: "/Firefly__Regional trend analysis for business growth including Dubai market insights 812328.webp" // Red/White Placeholder
        },
        {
            id: 3,
            title: "Case Studies: Demonstrating Measurable Results and Detailed Customer Success",
            excerpt: "Review our in-depth case studies that showcase quantifiable ROI and positive customer service experiences, providing transparent evidence of our commitment to client success.",
            date: "Sep 20, 2025",
            category: "Case Studies",
            imageUrl: "/Firefly__Case studies showing measurable results with detailed customer service experience 472082.webp" // Blue/White Placeholder
        },
    ];

    // Handler for the ROI Calculator CTA click event
    const handleAccessCalculator = useCallback(() => {
        const timestamp = new Date().toLocaleTimeString();
        // Simulate navigation and provide user feedback
        setMessage(`[${timestamp}] Navigating to the ROI Calculator page. Your projections are loading...`);
    }, []);

    // Handler for the Case Studies CTA click event
    const handleAccessCaseStudies = useCallback(() => {
        const timestamp = new Date().toLocaleTimeString();
        // Simulate navigation and provide user feedback
        setMessage(`[${timestamp}] Redirecting to Case Studies portfolio and demo booking...`);
    }, []);

    return (
        // Main container now only handles background and vertical padding
        <div className="bg-gray-50 py-16">
            {/* Injecting a style tag for the 'Inter' font to ensure good typography */}
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
                    .font-inter {
                        font-family: 'Inter', sans-serif;
                    }
                    /* Custom shadow for extra pop on hover */
                    .hover\\:shadow-3xl:hover {
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
                    }
                `}
            </style>

            {/* 1. CTA GRID Section (Constrained to max-w-6xl) */}
            <div className="w-full max-w-6xl font-inter px-4 sm:px-8 mx-auto mb-24">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* ROI Calculator CTA - First Section */}
                    <div
                        // Padding adjusted to decrease height: py-6 on small, py-8 on medium screens
                        className="bg-gradient-to-r from-blue-700 to-purple-700 px-8 py-6 md:px-10 md:py-8 rounded-2xl text-white shadow-2xl 
                                    transition duration-500 hover:shadow-3xl hover:scale-[1.01] transform h-full flex flex-col justify-between"
                    >
                        {/* Content inside the CTA is now forced to stack vertically (flex-col) for better fit in the grid column */}
                        <div className="flex flex-col gap-4">
                            
                            <h3 className="text-3xl font-extrabold leading-tight">
                                <Zap className="inline w-6 h-6 mr-3 -mt-1 text-yellow-300" />
                                Interactive ROI Calculator
                            </h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Click to access our web page calculator that provides realistic projections to boost your business growth. Our tool offers an experience tailored to your industry, current performance, and budget allocation across all regional markets.
                            </p>
                        </div>
                        
                        <Button
                            onClick={handleAccessCalculator}
                            // Button spans full width of the card for better prominence
                            className="text-lg w-full mt-6 px-10 py-4" 
                            variant="cta-alt"
                        >
                            Access Calculator
                        </Button>
                    </div>

                    {/* Case Studies CTA - New Section */}
                    <div
                        // Padding adjusted to decrease height: py-6 on small, py-8 on medium screens
                        className="bg-gradient-to-r from-teal-600 to-green-500 px-8 py-6 md:px-10 md:py-8 rounded-2xl text-white shadow-2xl
                                    transition duration-500 hover:shadow-3xl hover:scale-[1.01] transform h-full flex flex-col justify-between"
                    >
                         {/* Content inside the CTA is now forced to stack vertically (flex-col) for better fit in the grid column */}
                        <div className="flex flex-col gap-4">
                            
                            <h3 className="text-3xl font-extrabold leading-tight">
                                <BookOpen className="inline w-6 h-6 mr-3 -mt-1 text-yellow-300" />
                                Explore Success Stories
                            </h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Click to explore detailed case studies showing our experience with businesses in various markets, including Dubai, showcasing measurable growth and success stories.
                            </p>
                        </div>
                        
                        <Button
                            onClick={handleAccessCaseStudies}
                            className="text-lg w-full mt-6 px-10 py-4"
                            variant="cta-alt"
                        >
                            <ArrowRight className="w-5 h-5 mr-2" />
                            Schedule a Demo & View Full Cases
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
        </div>
    );
};

export default App;
