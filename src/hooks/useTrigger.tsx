import { useState, useRef, useEffect } from 'react';

export type UseTriggerHandle = {
  invoke: () => void;
};

export type UseTriggerWatch = {
  watch: () => number;
};

export function useTrigger(): [UseTriggerHandle, UseTriggerWatch] {
  const [handle, setHandle] = useState(0);
  const handleRef = useRef(handle);

  useEffect(() => {
    handleRef.current = handle;
  }, [handle]);

  return [
    {
      invoke: () => {
        setHandle((prevHandle) => prevHandle + 1);
      },
    },
    { watch: () => handleRef.current },
  ];
}
