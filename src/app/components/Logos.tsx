// No 'use client' needed if this component is rendered on the server,
// but if it uses client-side hooks or interactivity, add it.

import Image from 'next/image'; // Import the Image component

export default function Logos() {
 const logos = [
  { name: 'Google', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg' },
  { name: 'Facebook', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg' },
  { name: 'Wordpress', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wordpress.svg' },
  { name: 'Semrush', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/semrush.svg' },
  { name: 'Bitrix24', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bitrix24.svg' },
  { name: 'Frappe', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/frappe.svg' },
  { name: 'Github', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg' },
];
  const allLogos = [...logos, ...logos, ...logos]; // Duplicated multiple times for longer seamless loop

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-6 text-center text-1xl font-semibold text-blue-500">
          Trusted by Companies all over the world
        </h3>
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