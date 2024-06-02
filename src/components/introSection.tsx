/*
Great to meet you! I'm Taura J Greig, a versatile Full Stack Developer and 
game development enthusiast with a knack for turning ideas into interactive experiences.

My journey began in the world of game development, where I honed my skills in creating 
immersive AR and VR applications. Over the years, I've evolved into a full-stack developer, 
blending creativity with technical expertise to build dynamic web and mobile applications.

Whether it's developing an edutainment mobile game or diving into backend projects, 
I thrive on solving problems and bringing  solutions to life. 
With a passion for interdisciplinary collaboration, 
I'm always eager to explore new ground and tackle exciting challenges.
*/
import React, { useContext } from 'react';
import Container from './Container';
import AnimatedText from './AnimatedText';
import { AppStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

export default function IntroSection() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl">
      <Container>
        <p>
          <AnimatedText state={'playing'}>
            Great to meet you! I&apos;m Taura J Greig, a versatile Full Stack
            Developer and game development enthusiast with a knack for turning
            ideas into interactive experiences. \n\n My journey began in the
            world of game development, where I honed my skills in creating
            immersive AR and VR applications. Over the years, I&apos;ve evolved
            into a full-stack developer, blending creativity with technical
            expertise to build dynamic web and mobile applications. \n\n Whether
            it&apos;s developing an edutainment mobile game or diving into
            backend projects, I thrive on solving problems and bringing
            solutions to life. With a passion for interdisciplinary
            collaboration, I&apos;m always eager to explore new ground and
            tackle exciting challenges.
          </AnimatedText>
          <br />
          <br />
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            Continue
          </button>
        </p>
      </Container>
    </div>
  );
}
