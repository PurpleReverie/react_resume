import React, { useEffect, useState } from 'react';
import { UseTriggerWatch } from '../hooks/useTrigger';

export interface AnimatedTextProps {
  state?: 'off' | 'playing' | 'force_on';
  resetAnimation?: UseTriggerWatch;
  OnFinishAnimation?: () => void;
  children: string;
}

function AnimatedText(props: AnimatedTextProps) {
  const initialText = props.children;

  const [tick, setTick] = useState({});
  const [start, setStart] = useState(Date.now() / 1000);
  const [firedFinishedLambda, setFiredFinishedLambda] = useState(false);

  useEffect(() => {
    console.log('re setting start');
    console.log(Date.now() / 1000);
    setStart(Date.now() / 1000);
    setFiredFinishedLambda(false);
  }, [props?.resetAnimation?.watch()]);

  const rate = 0.05;
  const duration = initialText.length * rate;

  const currentTime = Date.now() / 1000;

  const currentPercentageComplete = Math.min(
    (currentTime - start) / duration,
    1
  );

  const renderTextWithLineBreaks = (text: string) => {
    const parts = text.split('\\n').map((p) => p.replace(/\\/g, ''));
    return (
      <>
        {parts.map((p, index) => (
          <React.Fragment key={index}>
            {p}
            {index !== parts.length - 1 && <br />}
          </React.Fragment>
        ))}
      </>
    );
  };

  const renderTextProgress = (text: string) => {
    const progressLength = Math.floor(
      initialText.length * currentPercentageComplete,
    );

    // Find the closest \n before and after the split point
    let splitIndex = progressLength;
    while (
      (initialText[splitIndex] === '\\' &&
        initialText[splitIndex + 1] === 'n') ||
      (initialText[splitIndex] === 'n' && initialText[splitIndex - 1] === '\\')
    ) {
      splitIndex -= 1;
    }

    const firstPart = initialText.slice(0, splitIndex);
    const secondPart = initialText.slice(splitIndex);

    return (
      <>
        <span>{renderTextWithLineBreaks(firstPart)}</span>
        <span className="invisible">
          {renderTextWithLineBreaks(secondPart)}
        </span>
      </>
    );
  };

  setTimeout(() => {
    setTick({});
  }, 1);

  const progressLength = Math.floor(
    initialText.length * currentPercentageComplete,
  );

  if (progressLength === initialText.length) {
    if (firedFinishedLambda === false) {
      setFiredFinishedLambda(true);

      setTimeout(() => {
        if (props.OnFinishAnimation !== undefined) {
          props.OnFinishAnimation();
        }
      }, 1);
    }
  }

  return <>{renderTextProgress(initialText)}</>;
}

export default AnimatedText;
