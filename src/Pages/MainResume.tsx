import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import { useNavigate } from 'react-router-dom';
import { BlogResumeContainer } from '../components/resume/Blog';
import {
  ResumeSkillPopupContainer,
  ResumeSkillsContainer,
  SkillEntry,
} from '../components/resume/Skills';
import { WorkExperienceResumeContainer } from '../components/resume/WorkExperince';
import { ProjectMainResumeContainer } from '../components/resume/Projects';
import useURLParams from '../hooks/useURLParams';
import { userWorkExperience } from '../generated/work.generated';
import { userSkills } from '../generated/skills.generated';
import { userBlogManifest } from '../generated/blog.generated';
import { userProjectManifest } from '../generated/project.generated';

/*
  first section
    profile photo
    bio
  second section - work experience
    places I have worked, contributions 
  skills
  blog
*/

const firstSectionColumnStyle = 'flex-1';
const hrStyle = 'w-48 mx-auto';

export default function ResumeSection() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const { skill } = useURLParams();
  const showSkill = skill !== undefined;

  useEffect(() => {
    const questionState = localStorage.getItem('questions_state');
    console.log(questionState);
    if (questionState === null || questionState === 'false') {
      console.log('questions');
      navigate('/questions');
    } else {
      setIsChecked(true);
    }
  }, [navigate]);

  if (!isChecked) {
    return null; // or a loading spinner if you prefer
  }

  return (
    <div className="w-full max-w-7xl p-6">
      {showSkill === true && (
        <ResumeSkillPopupContainer
          skill={userSkills.find((s: SkillEntry) => s.slug === skill)}
        />
      )}
      <section>
        <Container expand={true}>
          <h1>Taura J Greig</h1>
          <p>Full Stack Software Engineer</p>
          <p>+64211049888</p>
          <p className="text-blue-500">
            <a href="mailto:taurajgreig@outlook.com">taurajgreig@outlook.com</a>
          </p>
          <p>Auckland, New Zealand</p>
        </Container>
        <Container>
          <p>
            This Resume Portfolio site is a <b>WORK IN PROGRESS</b>, and the
            content on this site is fictitious while it is being built. That
            said, I AM a full stack software engineer, and if you want to grab a
            copy of my resume, please email me using the email address above
          </p>
        </Container>
      </section>
      <section>
        <div className="flex flex-row justify-center">
          <div className={firstSectionColumnStyle}>
            <Container expand={true}>
              <img src={'/profilePic.webp'} />
            </Container>
          </div>
          <div className={firstSectionColumnStyle}>
            <Container expand={true}>
              <p>
                A self-directed software engineer, interested in solving
                problems and building solutions. Currently active as a fullstack
                developer after many years of game development with Unity 3D,
                building immersive software applications through production and
                to release. Interested in getting in involved with unorthodox
                software projects, involving in interdisciplinary collaboration.
              </p>
            </Container>
          </div>
        </div>
      </section>
      <hr className={hrStyle} />
      <section>
        <WorkExperienceResumeContainer entrys={userWorkExperience} />
      </section>
      <hr className={hrStyle} />
      <section>
        <ResumeSkillsContainer />
      </section>
      <hr className={hrStyle} />
      <section>
        <BlogResumeContainer posts={userBlogManifest} />
      </section>
      <hr className={hrStyle} />
      <section>
        <ProjectMainResumeContainer entrys={userProjectManifest} />
      </section>
    </div>
  );
}
