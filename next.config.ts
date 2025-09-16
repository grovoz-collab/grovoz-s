// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'joseviews.com',
      },
    ],
  },
};

module.exports = nextConfig;