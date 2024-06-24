import React from 'react';
import {
  BlogContainer,
  BlogPost,
  mockBlogPosts,
} from '../components/resume/Blog';
import { useParams } from 'react-router-dom';

export function BlogPage() {
  const { id } = useParams();
  return (
    <>
      <div className="w-full max-w-7xl p-6">
        {id !== undefined && <BlogContainer posts={mockBlogPosts} />}
        {id && <BlogPost post={mockBlogPosts.find((p) => p.id_url == id)} />}
      </div>
    </>
  );
}
