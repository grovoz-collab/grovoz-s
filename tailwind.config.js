// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { colors: {
        brand: {
          50: "#eef9ff",
          100: "#d6f0ff",
          200: "#b0e1ff",
          300: "#7cccff",
          400: "#2e4dfe",
          500: "#2e4dfe",
          600: "#2e4dfe",
          700: "#2e4dfe",
          800: "#2e4dfe",
          900: "#2e4dfe"
        }
      },
  },
  plugins: [
    require('@tailwindcss/typography'), // Add this line
  ],
};