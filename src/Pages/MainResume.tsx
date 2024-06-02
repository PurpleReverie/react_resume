import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

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
