// src/app/blog/[slug]/page.tsx
import React from 'react';
import Image from 'next/image';

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
  const posts: Post[] = await res.json();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPost(slug: string): Promise<Post> {
  const res = await fetch(`https://joseviews.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  if (!res.ok) {
    throw new Error('Failed to fetch post data.');
  }
  const posts: Post[] = await res.json();
  return posts[0];
}

// Remove the unused interface here
// interface PostPageProps { ... }

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  const imageUrl = post._embedded['wp:featuredmedia']?.[0].source_url;
  const imageAlt = post.title.rendered;

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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