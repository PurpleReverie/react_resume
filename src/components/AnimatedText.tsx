import React, { useState } from 'react';

export interface AnimatedTextProps {
  state: 'off' | 'playing' | 'force_on';

  children: string;
}

function AnimatedText(props: AnimatedTextProps) {
  const initialText = props.children;

  const [tick, setTick] = useState({});
  const [start, setStart] = useState(Date.now() / 1000);
  const rate = 0.1;
  const duration = initialText.length * rate;

  const currentTime = Date.now() / 1000;

  const currentPercentageComplete = Math.min(
    (currentTime - start) / duration,
    1,
  );

  const writtenText = initialText.slice(
    0,
    initialText.length * currentPercentageComplete,
  );

  setTimeout(() => {
    setTick({});
  }, 100);

  return <>{writtenText}</>;
}

export default AnimatedText;
