import { MetadataRoute } from 'next';

// IMPORTANT: Replace 'https://www.grovoz.com' with your actual domain when deployed.
const SITE_URL = 'https://grovoz.com'; 

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*', // Apply to all search engine bots
        allow: '/',    // Allow crawling of the entire site
        // If you had an admin area or test pages, you would use:
        // disallow: ['/admin/', '/test-page/'], 
      },
    ],
    // Points search engines to the location of your sitemap
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
