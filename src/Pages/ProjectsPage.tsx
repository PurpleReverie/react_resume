import React from 'react';
import { BlogContainer, BlogPost } from '../components/resume/Blog';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import { ProjectContainer, ProjectPost } from '../components/resume/Projects';
import { userProjectManifest } from '../generated/project.generated';
import { ProjectEntryData } from '../types/projectTypes';

export function ProjectsPage() {
  const { id } = useParams();

  const renderProjectCollectionPage = () => {
    console.log(userProjectManifest);
    return (
      <>
        <ProjectContainer entrys={userProjectManifest} />
      </>
    );
  };

  const renderProjectPost = () => {
    const targetPost = userProjectManifest.find(
      (p) => p.slug == id,
    ) as ProjectEntryData;
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
