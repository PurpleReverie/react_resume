import React, { useContext } from 'react';
import { AppStateContext } from '../App';
import Container from '../components/Container';
import AnimatedText from '../components/AnimatedText';
import { useTrigger } from '../hooks/useTrigger';

function PageQuestions() {
  console.log("PageQuestions");

  const appContext = React.useContext(AppStateContext);
  const [startAnimationEvent, startAnimationHandle] = useTrigger();

  return (
    <Container>
      <div className="w-[250px]">
        <p>
          <AnimatedText state={"playing"} resetAnimation={startAnimationHandle}>Hello World</AnimatedText>
          <AnimatedText state={"playing"} resetAnimation={startAnimationHandle}>Hello World</AnimatedText>
          <br/>
          <button onClick={() => startAnimationEvent.invoke()}>Trigger Animation!</button>
        </p>
      </div>
    </Container>
  );
}

export default PageQuestions;
