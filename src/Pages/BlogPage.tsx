import React from 'react';
import { BlogContainer, BlogPost } from '../components/resume/Blog';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import { userBlogManifest } from '../generated/blog.generated';
import { PageContainerStyle } from '../utility/styles';
import { BlogPostEntryData } from '../types/blogTypes';

export function BlogPage() {
  const { id } = useParams();

  const renderBlogCollectionPage = () => {
    return <BlogContainer posts={userBlogManifest} />;
  };

  const renderBlogPost = () => {
    const targetPost = userBlogManifest.find(
      (p) => p.slug == id,
    ) as BlogPostEntryData;

    return (
      <>
        <BlogPost post={targetPost} />
      </>
    );
  };

  return (
    <>
      <div className={PageContainerStyle}>
        {id === undefined && renderBlogCollectionPage()}
        {id && renderBlogPost()}
      </div>
    </>
  );
}
