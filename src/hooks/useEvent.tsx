import { useEffect, useRef } from 'react';

export function useEvent(
  eventName: string,
  handler: (event: Event) => void,
  element: Window = window,
) {
  // Create a ref that stores the handler
  const savedHandler = useRef<(event: Event) => void>();

  // Update ref.current value if handler changes
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Make sure element supports addEventListener
    if (!element || !element.addEventListener) return;

    // Create event listener that calls handler function stored in ref
    const eventListener = (event: Event) => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    };

    // Add event listener
    element.addEventListener(eventName, eventListener);

    // Remove event listener on cleanup
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]); // Re-run if eventName or element changes
}
