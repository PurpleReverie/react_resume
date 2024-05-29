import React, { useEffect, useState } from 'react';
import { UseTriggerWatch } from '../hooks/useTrigger';

export interface AnimatedTextProps {
  state?: 'off' | 'playing' | 'force_on';
  
  resetAnimation: UseTriggerWatch;
  
  children: string;
}

function AnimatedText(props: AnimatedTextProps) {
  const initialText = props.children;

  const [tick, setTick] = useState({});
  const [start, setStart] = useState(Date.now() / 1000);

  useEffect(() => {
    console.log("re setting start");
    console.log(Date.now() / 1000);
    setStart(Date.now() / 1000);
  }, [props.resetAnimation.watch]);

  console.log(start)

  const rate = 0.1;
  const duration = initialText.length * rate;

  const currentTime = Date.now() / 1000;

  const currentPercentageComplete = Math.min(
    (currentTime - start) / duration,
    1,
  );

  console.log(currentPercentageComplete)

  const writtenText = (()=>{
    if (!props.state) {
      return initialText
    }
    switch (props.state) {
      case 'off':
        return ""
      break;
      case 'playing':
        return initialText.slice(
          0,
          initialText.length * currentPercentageComplete,
        );
      break;
      case 'force_on':
        return initialText
      break;
    }
  })()

  setTimeout(() => {
    setTick({});
  }, 100);

  return <>{writtenText}</>;
}

export default AnimatedText;
