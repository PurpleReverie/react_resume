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

  const rate = 0.1;
  const duration = initialText.length * rate;

  const currentTime = Date.now() / 1000;

  const currentPercentageComplete = Math.min(
    (currentTime - start) / duration,
    1,
  );

  const writtenText = (() => {
    if (!props.state) {
      return initialText;
    }
    switch (props.state) {
      case 'off':
        return '';
      case 'playing':
        return initialText.slice(
          0,
          initialText.length * currentPercentageComplete,
      );
      case 'force_on':
        return initialText;
      default:
        return initialText;
    }
  })();

  setTimeout(() => {
    setTick({});
  }, 1);

  if (writtenText.length === initialText.length) {
    if (firedFinishedLambda === false) {
      setFiredFinishedLambda(true);

      setTimeout(() => {
        if (props.OnFinishAnimation !== undefined) {
          props.OnFinishAnimation();
        }
      }, 1);
    }
  }

  const renderTextWithLineBreaks = (text: string, rawText: string) => {
    const result = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i] === '\\' && rawText[i + 1] === 'n') {
        result.push(<br key={i} />);
        i++; // Skip the 'n' character
      } else {
        result.push(text[i]);
      }
    }

    return result;
  };

  return <>{renderTextWithLineBreaks(writtenText, initialText)}</>;
}

export default AnimatedText;
