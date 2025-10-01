// hooks/useScrollAnimation.js
import { useState, useEffect, useRef } from "react";

export const useScrollAnimation = (animation = "fade") => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  // Return custom motion props based on chosen animation
  const motionProps = {
    initial: animation === "slide" ? { opacity: 0, x: -50 } : { opacity: 0, y: 50 },
    animate: isVisible
      ? { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } }
      : { opacity: 0 },
  };

  return [ref, motionProps];
};
