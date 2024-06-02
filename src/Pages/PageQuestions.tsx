import React, { useContext, useState } from 'react';
import { AppStateContext } from '../App';
import Container from '../components/Container';
import AnimatedText from '../components/AnimatedText';
import { useTrigger } from '../hooks/useTrigger';
import { questionButtonStyle } from '../utility/styles';
import { useNavigate } from 'react-router-dom';

// oh, hello there! Fancy meeting you here...

// How did you stumble upon my little corner of the web?

// Pure serendipity
// Via LinkedIn's vast network
// Through the grapevine

// Interesting... And you are?

// A savvy Recruiter/Talent Acquisition pro
// A discerning Hiring Manager
// A fellow Developer/Tech Enthusiast

function PageQuestions() {
  const navigate = useNavigate();
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

    navigate('/intro');
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
            Oh, hello there! Fancy meeting you here... \n\n\n How did you
            stumble upon my little corner of the web?
          </AnimatedText>
        </p>
        <br />
        {questionOneTextIsFinished && (
          <div>
            {[
              'Pure serendipity',
              'Via LinkedIn\'s vast network',
              'Through the grapevine',
            ].map((label, index) => (
              <button
                key={index}
                className={questionButtonStyle}
                onClick={() => questionOneSelectOption(index)}
              >
                {label}
              </button>
            ))}
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
            Interesting... And you are?
          </AnimatedText>
        </p>
        <br />
        {questionTwoTextIsFinished && (
          <div>
            {[
              'A savvy Recruiter/Talent Acquisition pro',
              'A discerning Hiring Manager',
              'A fellow Developer/Tech Enthusiast',
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
