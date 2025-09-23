"use client";

import React, { useState, useEffect, useRef } from 'react';

// New component for the counter effect
const CounterFigure = ({ figure, title, description }) => {
  const [count, setCount] = useState(0);
  const figureRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract the number and the unit (e.g., "x", "%")
  const numericValue = parseFloat(figure);
  const unit = figure.replace(numericValue, '').trim();

  useEffect(() => {
    if (!figureRef.current || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Reset count to 0 and start the animation
          setCount(0);
          const duration = 2000;
          const startTime = Date.now();

          const animate = () => {
            const elapsedTime = Date.now() - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentCount = progress * numericValue;
            setCount(parseFloat(currentCount.toFixed(1)));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    observer.observe(figureRef.current);

    // Cleanup function to disconnect the observer
    return () => observer.disconnect();
  }, [hasAnimated, numericValue]);

  return (
    <div
      ref={figureRef}
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-100
                 transform transition-all duration-300 ease-in-out
                 hover:scale-105 hover:shadow-xl hover:bg-blue-50 hover:border-blue-500
                 group"
    >
      <p className="text-blue-700 text-5xl font-extrabold mb-4
                    transition-colors duration-300 ease-in-out
                    group-hover:text-purple-700">
        {count}
        {unit}
      </p>
      <h3 className="text-xl font-semibold text-gray-900 mb-2
                    transition-colors duration-300 ease-in-out
                    group-hover:text-blue-900">
        {title}
      </h3>
      <p className="text-gray-500 text-base
                    transition-colors duration-300 ease-in-out
                    group-hover:text-blue-600">
        {description}
      </p>
    </div>
  );
};

export default function ResultsShowcase() {
  const results = [
    {
      figure: "2.5x",
      title: "Average Revenue Growth",
      description: "Clients see significant revenue increases within 6 months"
    },
    {
      figure: "85%",
      title: "Organic Traffic Boost",
      description: "Average increase in qualified organic website traffic"
    },
    {
      figure: "4.2x",
      title: "ROAS Achievement",
      description: "Return on ad spend across all managed campaigns"
    },
    {
      figure: "92%",
      title: "Client Satisfaction",
      description: "Clients rate our service as excellent or outstanding"
    },
  ];

  return (
<section className="py-20 md:py-32 bg-gradient-to-r from-blue-30 to-blue-100 text-gray-800">
        <div className="container mx-auto px-6 text-center max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Results That Speak Volumes
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Our data-driven approach consistently delivers exceptional outcomes for businesses of all sizes.
        </p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <CounterFigure key={index} {...result} />
          ))}
        </div>
      </div>
    </section>
  );
}
