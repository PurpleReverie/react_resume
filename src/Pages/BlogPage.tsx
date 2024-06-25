import React from 'react';
import {
  BlogContainer,
  BlogPost,
  mockBlogPosts,
} from '../components/resume/Blog';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';

export function BlogPage() {
  const { id } = useParams();

  const renderBlogCollectionPage = () => {
    return <BlogContainer posts={mockBlogPosts} />;
  };

  const renderBlogPost = () => {
    const targetPost = mockBlogPosts.find((p) => p.id_url == id);
    console.log(targetPost);

    return (
      <>
        <BlogPost post={targetPost} />
      </>
    );
  };

  return (
    <>
      <div className="w-full max-w-7xl p-6">
        {id === undefined && renderBlogCollectionPage()}
        {id && renderBlogPost()}
      </div>
    </>
  );
}
