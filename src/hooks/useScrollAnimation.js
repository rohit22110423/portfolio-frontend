import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Capture the current ref value in a variable
    const currentElement = elementRef.current; 

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Use the variable in the observer
          if (currentElement) {
            observer.unobserve(currentElement);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    // Use the variable in the cleanup function
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []); // Dependencies array is empty, which is correct here

  return [elementRef, isVisible];
};