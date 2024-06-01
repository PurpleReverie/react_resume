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
import React from 'react';
import Container from './Container';
import AnimatedText from './AnimatedText';

export default function IntroSection() {
  return (
    <div className="max-w-7xl">
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
        </p>
      </Container>
    </div>
  );
}
