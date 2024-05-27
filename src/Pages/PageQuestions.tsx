import React, { useContext } from 'react';
import { AppStateContext } from '../App';
import Container from '../components/Container';
import AnimatedText from '../components/AnimatedText';

function PageQuestions() {
  const appContext = React.useContext(AppStateContext);

  return (
    <Container>
      <div className="w-[250px]">
        <p>
          <AnimatedText>Hello World</AnimatedText>
        </p>
      </div>
    </Container>
  );
}

export default PageQuestions;
