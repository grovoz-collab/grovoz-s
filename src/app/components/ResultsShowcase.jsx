import React from 'react';

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
    <section className="py-20 md:py-32 bg-white text-gray-800">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Results That Speak Volumes
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Our data-driven approach consistently delivers exceptional outcomes for businesses of all sizes.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100
                         transform transition-all duration-300 ease-in-out
                         hover:scale-105 hover:shadow-xl hover:bg-blue-50 hover:border-blue-500
                         group" // Added 'group' for child styling on hover
            >
              <p className="text-blue-700 text-5xl font-extrabold mb-4
                            transition-colors duration-300 ease-in-out
                            group-hover:text-purple-700"> {/* Changed text color on hover */}
                {result.figure}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2
                            transition-colors duration-300 ease-in-out
                            group-hover:text-blue-900"> {/* Changed text color on hover */}
                {result.title}
              </h3>
              <p className="text-gray-500 text-base
                            transition-colors duration-300 ease-in-out
                            group-hover:text-blue-600"> {/* Changed text color on hover */}
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}