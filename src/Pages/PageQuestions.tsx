import React, { useContext } from 'react';
import { AppStateContext } from '../App';
import Container from '../components/Container';
import AnimatedText from '../components/AnimatedText';
import { ReactFlag } from '../utility/Flag';

function PageQuestions() {
  console.log("PageQuestions");

  const appContext = React.useContext(AppStateContext);
  const resetAnimationFlag = new ReactFlag();

  return (
    <Container>
      <div className="w-[250px]">
        <p>
          <AnimatedText state={"playing"} resetAnimation={resetAnimationFlag}>Hello World</AnimatedText>
          <button onClick={() => resetAnimationFlag.Raise()}>Trigger Animation!</button>
        </p>
      </div>
    </Container>
  );
}

export default PageQuestions;
