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
import useIsMobile from '../hooks/useMobile';
import MainResumeFooter from '../components/MainResumeHeader';

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
  const isMobile = useIsMobile();
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

  return (
    <>
      <ContactPopup />
      <div className={PageContainerStyle}>
        <MainResumeFooter />
        {showSkill === true && (
          <ResumeSkillPopupContainer
            skill={userSkills.find((s: SkillEntry) => s.slug === skill)}
          />
        )}
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
