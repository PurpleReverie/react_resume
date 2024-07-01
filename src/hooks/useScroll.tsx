import { useEffect, useState } from 'react';

export function useScroll() {
  const [scrollAmount, setScrollAmont] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const pageHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / pageHeight) * 100;

    setScrollAmont(scrollPercentage);
    // console.log(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollAmount;
}
