import React, { useEffect, useState } from 'react';
import Container from './Container';

const firstSectionColumnStyle = 'flex-1';

function MainResumeFooter() {
  return (
    <>
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
                problems and building solutions. Currently active as a fullstack
                developer after many years of game development with Unity 3D,
                building immersive software applications through production and
                to release. Interested in getting in involved with unorthodox
                software projects, involving in interdisciplinary collaboration.
              </h3>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default MainResumeFooter;
