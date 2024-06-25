import React from 'react';
import {
  BlogContainer,
  BlogPost,
  mockBlogPosts,
} from '../components/resume/Blog';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import {
  ProjectContainer,
  ProjectPost,
  mockProjectEntries,
} from '../components/resume/Projects';

export function ProjectsPage() {
  const { id } = useParams();

  const renderProjectCollectionPage = () => {
    return (
      <>
        <ProjectContainer entrys={mockProjectEntries} />
      </>
    );
  };

  const renderProjectPost = () => {
    const targetPost = mockProjectEntries.find((p) => p.project_id == id);
    console.log(targetPost);

    return <ProjectPost projectEntry={targetPost} />;
  };

  return (
    <>
      <div className="w-full max-w-7xl p-6">
        {id === undefined && renderProjectCollectionPage()}
        {id && renderProjectPost()}
      </div>
    </>
  );
}
