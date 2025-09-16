// src/app/blog/[slug]/page.tsx
// All necessary imports should be at the top of the file
import React from 'react';
import Image from 'next/image';

// ... (Your interface definition for Post should be here) ...

export async function generateStaticParams() {
  const res = await fetch('https://joseviews.com/wp-json/wp/v2/posts');
  const posts: Post[] = await res.json();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// ... (Your getPost function should be here) ...

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);
  const imageUrl = post._embedded['wp:featuredmedia']?.[0].source_url;
  const imageAlt = post.title.rendered;

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* The Image component is used here, so the import is necessary */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={1200}
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
}