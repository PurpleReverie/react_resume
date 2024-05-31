import React, { useContext, useState } from 'react';
import { AppStateContext } from '../App';
import Container from '../components/Container';
import AnimatedText from '../components/AnimatedText';
import { useTrigger } from '../hooks/useTrigger';
import { questionButtonStyle } from '../utility/styles';

function PageQuestions() {
  const appContext = React.useContext(AppStateContext);
  const [startAnimationEvent, startAnimationHandle] = useTrigger();
  const [questionOneTextIsFinished, setQuestionOneTextIsFinished] =
    useState(false);
  const [questionaireState, setQuestionaireState] = useState(0);
  const questionOneSelectionOption = (option: number) => {
    // TODO: do something with the option

    console.log('triggering text animation again');
    startAnimationEvent.invoke();
    setQuestionaireState(1);
  };

  const renderQuestion = (questionState: number) => {
    return [
      <>
        <p>
          <AnimatedText
            resetAnimation={startAnimationHandle}
            state={'playing'}
            OnFinishAnimation={() => {
              setQuestionOneTextIsFinished(true);
            }}
          >
            Oh, Hello . . . . \n how do you find me?
          </AnimatedText>
        </p>
        <br />
        {questionOneTextIsFinished && (
          <div>
            <button
              className={`${questionButtonStyle}`}
              onClick={() => {
                questionOneSelectionOption(0);
              }}
            >
              Random Chance
            </button>
            <button
              className={`${questionButtonStyle}`}
              onClick={() => {
                questionOneSelectionOption(1);
              }}
            >
              Linked In
            </button>
            <button
              className={`${questionButtonStyle}`}
              onClick={() => {
                questionOneSelectionOption(2);
              }}
            >
              Word Of Mouth
            </button>
          </div>
        )}
      </>,
      <>
        <p>
          <AnimatedText resetAnimation={startAnimationHandle} state={'playing'}>
            Right . . . . . \n And who are you?
          </AnimatedText>
        </p>
      </>,
    ][questionState];
  };

  return (
    <Container>
      <div className="w-[250px]">{renderQuestion(questionaireState)}</div>
    </Container>
  );
}

export default PageQuestions;
