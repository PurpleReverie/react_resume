import React from 'react';
import Container from './Container';

// TODO: create entries for skills, describing each of your skills and how you used it in the past

const testSkills = [
  'c++',
  'c#',
  'javascript',
  'typescript',
  'c++',
  'c#',
  'javascript',
  'typescript',
  'c++',
  'c#',
  'javascript',
  'typescript',
  'c++',
  'c#',
  'javascript',
  'typescript',
  'c++',
  'c#',
  'javascript',
  'typescript',
];

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
              {s}{' '}
            </span>
          ))}
        </div>
      </Container>
    </>
  );
}
