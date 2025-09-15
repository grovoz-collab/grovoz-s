// No 'use client' needed if this component is rendered on the server,
// but if it uses client-side hooks or interactivity, add it.

import Image from 'next/image'; // Import the Image component

export default function Logos() {
  const logos = [
    { name: 'Acme', src: '../meydan.svg' },
    { name: 'Globex', src: '/globex-logo.svg' },
    { name: 'Umbrella', src: '/umbrella-logo.svg' },
    { name: 'Soylent', src: '/soylent-logo.svg' },
    { name: 'Initech', src: '/initech-logo.svg' },
    { name: 'Hooli', src: '/hooli-logo.svg' },
  ];
  const allLogos = [...logos, ...logos, ...logos]; // Duplicated multiple times for longer seamless loop

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-sm text-zinc-500">
          Trusted by Companies all over the world
        </p>
        <div className="relative overflow-x-hidden">
          <div className="inline-flex animate-slide-right whitespace-nowrap">
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="mx-4 flex h-16 w-32 shrink-0 items-center justify-center rounded-lg bg-zinc-100 p-2 sm:w-40 lg:w-48" // Adjusted size for images
              >
                <Image
                  src={logo.src}
                  alt={logo.name + ' Logo'}
                  width={100} // Set appropriate width for your logos
                  height={40} // Set appropriate height for your logos
                  className="h-full w-auto object-contain" // Ensures image fits within the div
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}