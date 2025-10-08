import { MetadataRoute } from 'next';

// IMPORTANT: Replace 'https://www.grovoz.com' with your actual domain when deployed.
const SITE_URL = 'https://www.grovoz.com'; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();
  
  // --- Static Pages ---
  // Only including the Home, Services, and Contact pages as requested.
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0, // Highest priority for the homepage
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];

  // The dynamic pages section was removed as you only indicated 
  // having /services and /contact pages at this time.
  
  // Return the list of current pages
  return staticPages;
}
