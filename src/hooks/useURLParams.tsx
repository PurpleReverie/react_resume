import { useEffect, useState } from 'react';

export default function useURLParams() {
  const [paramsObject, setParamsObject] = useState<
    { [key: string]: unknown } | undefined
  >();

  useEffect(() => {
    console.log('window.location.search changed');
    console.log('window.location.search');
    const urlParams = new URLSearchParams(window.location.search);
    const returnObject: { [key: string]: unknown } = {};
    for (const [key, value] of urlParams.entries()) {
      returnObject[key] = value;
    }
    setParamsObject(returnObject);
  }, [window.location.search]);

  return { ...paramsObject };
}
