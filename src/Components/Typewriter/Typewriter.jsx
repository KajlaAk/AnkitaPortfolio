import React, { useEffect, useState } from 'react';

const Typewriter = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayText((prevDisplayText) => prevDisplayText + text[currentIndex]);

      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, delay]);

  return <span>{displayText}</span>;
};

export default Typewriter;
