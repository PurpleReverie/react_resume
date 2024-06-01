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
  const [questionTwoTextIsFinished, setQuestionTwoTextIsFinished] =
    useState(false);
  const [questionaireState, setQuestionaireState] = useState(0);
  const questionOneSelectOption = (option: number) => {
    // TODO: do something with the option

    console.log('triggering text animation again');
    startAnimationEvent.invoke();
    setQuestionaireState(1);
  };
  const questionTwoSelectOption = (option: number) => {
    // TODO: do something with the option

    console.log('triggering text animation again');
    startAnimationEvent.invoke();
    setQuestionaireState(2);
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
            {['Random Chance', 'Linked In', 'Word Of Mouth'].map(
              (label, index) => (
                <button
                  key={index}
                  className={questionButtonStyle}
                  onClick={() => questionOneSelectOption(index)}
                >
                  {label}
                </button>
              )
            )}
          </div>
        )}
      </>,
      <>
        <p>
          <AnimatedText
            resetAnimation={startAnimationHandle}
            state={'playing'}
            OnFinishAnimation={() => {
              setQuestionTwoTextIsFinished(true);
            }}
          >
            Right . . . . . \n And who are you?
          </AnimatedText>
        </p>
        <br />
        {questionTwoTextIsFinished && (
          <div>
            {[
              'Recruiter / Talent Acquisition',
              'Hiring Manager',
              'Developer',
            ].map((label, index) => (
              <button
                key={index}
                className={questionButtonStyle}
                onClick={() => questionTwoSelectOption(index)}
              >
                {label}
              </button>
            ))}
          </div>
        )}
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
