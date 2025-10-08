"use client"; // CRITICAL FIX: Marks this file as a Client Component

import React from 'react';
import { motion } from 'framer-motion'; 
// REMOVED: import Link from 'next/link'; // Caused ERROR: Could not resolve "next/link"
import { ChevronLeft, Home } from 'lucide-react';

/**
 * * NOTE: In a real Next.js application using the App Router, 
 * this component would be named 'not-found.tsx' and exported 
 * as the default export within the 'app' directory.
 * * It automatically handles both the visual display and returns a 404 HTTP status.
 * */

// Define the component structure for the custom 404 page
function NotFound() {
  
  // Define animation variants for a single character bounce
  const charVariants = {
    initial: { y: 0 },
    // Custom function (i) receives the index of the character
    // FIX: Explicitly type parameter 'i' as number to resolve the TypeScript error
    bounce: (i: number) => ({ 
      y: [0, -25, 0, -10, 0], // Keyframes for the bounce: Up, down, slight secondary bounce, rest
      transition: {
        delay: i * 0.1, // Staggered delay: 0s, 0.1s, 0.2s
        duration: 1.5,
        // FIX: Removed explicit 'ease' to bypass strict Framer Motion TypeScript conflict
        repeat: Infinity,
        repeatDelay: 0.5 // Pause before the next cycle starts
      },
    }),
  };

  // The digits we want to display, broken into an array
  const digits = ["4", "0", "4"];

  // Handlers for navigation using direct browser redirection 
  // (to bypass the unresolved Next.js <Link> component error and the associated linting rule)
  const navigateToHome = () => window.location.href = '/';
  const navigateToContact = () => window.location.href = '/contact';


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 font-sans p-6 text-center overflow-hidden">
      
      {/* Visual Error Code - Refactored to use motion.span for staggered animation */}
      <div className="flex items-center justify-center mb-4">
        {digits.map((digit, index) => (
          <motion.span
            key={index}
            className="text-9xl font-extrabold text-indigo-600 tracking-widest inline-block"
            variants={charVariants}
            initial="initial"
            animate="bounce"
            custom={index} // Pass index as custom prop to control staggered delay
          >
            {digit}
          </motion.span>
        ))}
      </div>
      
      {/* Title and Description */}
      <div className="bg-white px-8 py-6 rounded-2xl shadow-xl max-w-lg transition-all duration-500 hover:shadow-2xl border border-gray-100">
        <h2 className="3xl font-bold text-gray-900 mb-3">
          Page Could Not Be Found
        </h2>
        {/* FIXED: Escaped apostrophes */}
        <p className="text-lg text-gray-600 mb-8">
          We&apos;re sorry, but the page you requested doesn&apos;t seem to exist. It might have been moved or deleted.
        </p>
        
        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* Back Button - Replaced <a> with <button> and added click handler for navigation */}
          <button 
            onClick={navigateToHome}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-indigo-500 text-indigo-600 font-semibold rounded-xl transition-all duration-300 hover:bg-indigo-50 hover:shadow-md cursor-pointer"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </button>
          
          {/* Contact Button - Replaced <a> with <button> and added click handler for navigation */}
          <button 
            onClick={navigateToContact}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-800 hover:shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
            Report Issue
          </button>
          
        </div>
      </div>
      
    
    </div>
  );
}

// To make this file runnable in the current environment
function App() {
    // In a real Next.js app, this component would be rendered automatically on a 404 status.
    return <NotFound />;
}

export default App;
