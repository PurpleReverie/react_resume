import React from 'react';
import Container from '../components/Container';

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

export default function ResumeSection() {
  return (
    <div className="w-full max-w-7xl">
      <section>
        <div className="flex flex-row justify-center">
          <div className={firstSectionColumnStyle}>
            <Container expand={true}>
              <p>Profile Photo</p>
            </Container>
          </div>
          <div className={firstSectionColumnStyle}>
            <Container expand={true}>
              <p>Bio</p>
            </Container>
          </div>
        </div>
      </section>
      <section>
        <Container expand={true}>Work Experience</Container>
      </section>
      <section>
        <Container expand={true}>Skills</Container>
      </section>
      <section>
        <Container expand={true}>Blog</Container>
      </section>
    </div>
  );
}
