import React from 'react';
import { BlogContainer, BlogPost } from '../components/resume/Blog';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import { userBlogManifest } from '../generated/blog.generated';

export function BlogPage() {
  const { id } = useParams();

  const renderBlogCollectionPage = () => {
    return <BlogContainer posts={userBlogManifest} />;
  };

  const renderBlogPost = () => {
    const targetPost = userBlogManifest.find((p) => p.slug == id);
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
