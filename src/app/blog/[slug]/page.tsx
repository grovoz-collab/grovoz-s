// src/app/blog/[slug]/page.tsx
import React from 'react';

export default async function generateStaticParams() {
  const res = await fetch('https://joseviews.com/wp-json/wp/v2/posts');
  // Explicitly cast the result to the Post array type
  const posts: Post[] = await res.json();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
// src/app/blog/[slug]/page.tsx
async function getPost(slug) {
  const res = await fetch(`https://joseviews.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  if (!res.ok) {
    throw new Error('Failed to fetch post data.');
  }
  const posts = await res.json();
  return posts[0];
}

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);
  const imageUrl = post._embedded['wp:featuredmedia']?.[0].source_url;
  const imageAlt = post.title.rendered; // You can use a dedicated alt text from the API if available

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={1200} // Set appropriate dimensions
          height={600}
          className="mb-8"
        />
      )}
      <div className="prose lg:prose-xl mx-auto">
        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </div>
  );
}import Image from 'next/image';