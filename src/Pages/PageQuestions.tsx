import React, { useContext } from 'react';
import { AppStateContext } from '../App';
import Container from '../components/Container';
import AnimatedText from '../components/AnimatedText';
import { useTrigger } from '../hooks/useTrigger';

function PageQuestions() {
  console.log('PageQuestions');

  const appContext = React.useContext(AppStateContext);
  const [startAnimationEvent, startAnimationHandle] = useTrigger();

  const renderQuestion = (questionState: number) => {
    return [
      <>
        <p>
          <AnimatedText state={'playing'}>
            Oh, Hello . . . . \n how do you find me?
          </AnimatedText>
        </p>
      </>,
      <>
        <p>
          <AnimatedText state={'playing'}>
            Right . . . . . \n And who are you?
          </AnimatedText>
        </p>
      </>,
    ][questionState];
  };

  return (
    <Container>
      <div className="w-[250px]">{renderQuestion(0)}</div>
    </Container>
  );
}

export default PageQuestions;
