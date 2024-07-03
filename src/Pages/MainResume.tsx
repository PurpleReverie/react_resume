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
import { PageContainerStyle } from '../utility/styles';
import { ContactPopup, ContactSection } from '../components/resume/Contact';

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

  // TODO: going to turn on prompt later
  // useEffect(() => {
  //   const questionState = localStorage.getItem('questions_state');
  //   console.log(questionState);
  //   if (questionState === null || questionState === 'false') {
  //     console.log('questions');
  //     navigate('/questions');
  //   } else {
  //     setIsChecked(true);
  //   }
  // }, [navigate]);

  // if (!isChecked) {
  //   return null; // or a loading spinner if you prefer
  // }

  console.log(showSkill);

  return (
    <>
      <ContactPopup />
      <div className={PageContainerStyle}>
        {showSkill === true && (
          <ResumeSkillPopupContainer
            skill={userSkills.find((s: SkillEntry) => s.slug === skill)}
          />
        )}
        <Container expand={true}>
          <h1>Taura J Greig</h1>
          <h2>Full Stack Software Engineer</h2>
          <h3>
            <a href="mailto:tauraj.pro@gmail.com">tauraj.pro@gmail.com</a>
          </h3>
          <h3>
            <a href="tel:+64211049888">+64211049888</a>
          </h3>
          <h3>Auckland, New Zealand</h3>
        </Container>
        {/* <Container>
          <p>
            This Resume Portfolio site is a <b>WORK IN PROGRESS</b>. I AM a full
            stack software engineer, and if you want to grab a copy of my
            resume, please email me using the email address above.
          </p>
        </Container> */}
        <div className="flex md:flex-row justify-center flex-col">
          <div className={firstSectionColumnStyle}>
            <Container expand={true}>
              <img src={'/profilePic.webp'} />
            </Container>
          </div>
          <div className={firstSectionColumnStyle}>
            <Container expand={true} className="flex flex-col justify-center">
              <div className="px-6">
                <h3>
                  A self-directed software engineer, interested in solving
                  problems and building solutions. Currently active as a
                  fullstack developer after many years of game development with
                  Unity 3D, building immersive software applications through
                  production and to release. Interested in getting in involved
                  with unorthodox software projects, involving in
                  interdisciplinary collaboration.
                </h3>
              </div>
            </Container>
          </div>
        </div>
        <hr className={hrStyle} />
        <WorkExperienceResumeContainer entrys={userWorkExperience} />
        <hr className={hrStyle} />
        <ResumeSkillsContainer />
        <hr className={hrStyle} />
        <BlogResumeContainer posts={userBlogManifest} />
        <hr className={hrStyle} />
        <ProjectMainResumeContainer entrys={userProjectManifest()} />
        <ContactSection />
      </div>
    </>
  );
}
