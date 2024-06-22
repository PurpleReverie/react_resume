import React from 'react';
import Container from '../Container';

// TODO: create entries for skills, describing each of your skills and how you used it in the past

export interface SkillEntry {
  skill: string;
  body: string;
}

const skillBlockStyle =
  'outline outline-gray-200 m-1 p-1 px-4 rounded-lg cursor-pointer hover:bg-gray-200 active:bg-gray-300';

export function ResumeSkillsContainer() {
  return (
    <>
      <Container expand={true}>
        <h1>Skills</h1>
        <div className="h-4" />
        <div className="flex justify-center flex-wrap">
          {testSkills.map((s, i) => (
            <span
              key={i}
              className={skillBlockStyle}
              onClick={() => {
                console.log('Clicked skill');
              }}
            >
              {' '}
              {s.skill}{' '}
            </span>
          ))}
        </div>
      </Container>
    </>
  );
}

/*
    <div className="fixed inset-0 z-[-1]">
      <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500"></div>
    </div>
*/

export interface ResumeSkillPopupContainerProps {
  skill?: SkillEntry;
  userLeave?: () => void;
}

export function ResumeSkillPopupContainer(
  props: ResumeSkillPopupContainerProps,
) {
  const closeSkillPopup = () => {
    console.log('Delete skill');
    const params = new URLSearchParams(window.location.search);
    params.delete('skill');
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
  };

  return (
    <div className="fixed inset-0 z-[1]">
      <div className="fixed w-full h-full bg-gray-800 opacity-70"></div>
      <div
        className="fixed w-full h-full flex justify-center items-center cursor-pointer"
        onClick={() => {
          // if (props.userLeave !== undefined) {
          //   props.userLeave();
          // }
          closeSkillPopup();
        }}
      >
        <Container
          className="min-w-[300px] min-h-[200px] cursor-default"
          onClick={(e: unknown) => (e as Event).stopPropagation()}
        ></Container>
      </div>
    </div>
  );
}

export const testSkills: SkillEntry[] = [
  {
    skill: 'JavaScript',
    body: 'Proficient in JavaScript, including ES6+ features. Experience with frameworks such as React, Angular, and Vue.js.',
  },
  {
    skill: 'Python',
    body: 'Skilled in Python for data analysis, web development, and scripting. Familiar with libraries like NumPy, pandas, and Django.',
  },
  {
    skill: 'HTML & CSS',
    body: 'Experienced in creating responsive and accessible web pages using HTML5 and CSS3. Knowledge of CSS preprocessors like SASS and LESS.',
  },
  {
    skill: 'Java',
    body: 'Proficient in Java programming for building scalable backend systems. Experience with Spring and Hibernate frameworks.',
  },
  {
    skill: 'SQL',
    body: 'Adept at writing complex SQL queries for data retrieval and manipulation. Experience with databases like MySQL, PostgreSQL, and Oracle.',
  },
  {
    skill: 'DevOps',
    body: 'Knowledgeable in DevOps practices including CI/CD, containerization (Docker), and orchestration (Kubernetes). Experience with tools like Jenkins, Git, and Ansible.',
  },
  {
    skill: 'Machine Learning',
    body: 'Familiar with machine learning concepts and algorithms. Experience using TensorFlow, Keras, and scikit-learn for building and deploying models.',
  },
  {
    skill: 'Git',
    body: 'Proficient in using Git for version control. Experience with branching, merging, and resolving conflicts in collaborative environments.',
  },
  {
    skill: 'C++',
    body: 'Experienced in C++ for system programming and game development. Knowledge of standard libraries and design patterns.',
  },
  {
    skill: 'Project Management',
    body: 'Skilled in project management methodologies like Agile and Scrum. Experience in leading teams and managing project timelines and deliverables.',
  },
];
