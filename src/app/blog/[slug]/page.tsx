// src/app/blog/[slug]/page.tsx
import React from 'react';
import Image from 'next/image';

// Define the interface for the expected post data from the API.
// Include all properties you plan to use.
interface Post {
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

export async function generateStaticParams() {
  const res = await fetch('https://joseviews.com/wp-json/wp/v2/posts');
  // Cast the result to the defined Post array type
  const posts: Post[] = await res.json();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
//...