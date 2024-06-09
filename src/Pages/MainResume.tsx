import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import { useNavigate } from 'react-router-dom';
import { BlogContainer, mockBlogPosts } from '../components/Blog';

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
        <Container expand={true}>Work Experience</Container>
      </section>
      <hr className={hrStyle} />
      <section>
        <Container expand={true}>Skills</Container>
      </section>
      <hr className={hrStyle} />
      <section>
        {/* <Container expand={true}>Blog</Container> */}
        <BlogContainer posts={mockBlogPosts} />
      </section>
    </div>
  );
}
