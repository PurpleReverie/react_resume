import React, { useState } from 'react';

export interface AnimatedTextProps {
  children: string;
}

function AnimatedText(props: AnimatedTextProps) {
  const [tick, setTick] = useState({});
  const [start, setStart] = useState(Date.now() / 1000);
  const duration = 5;

  const currentTime = Date.now() / 1000;

  const currentPercentageComplete = Math.min(
    (currentTime - start) / duration,
    1,
  );

  const initialText = props.children;
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
