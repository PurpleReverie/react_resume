import { useState } from 'react';

export type UseTriggerHandle = {
  invoke: () => void;
};

export type UseTriggerWatch = {
  watch: () => number;
};

export function useTrigger(): [UseTriggerHandle, UseTriggerWatch] {
  const [handle, setHandle] = useState(0);

  return [
    { invoke: () => { setHandle(handle + 1); } }, 
    { watch: () => handle }
  ];
}
