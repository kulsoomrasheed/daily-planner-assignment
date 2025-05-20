import React, { useState, useEffect } from 'react';
import throttle from '../utils/throttle';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setVisible(window.scrollY > 200);
    }, 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;
  return (
    <button className="back-to-top" onClick={scrollToTop} aria-label="Back to Top">
      ↑ Top
    </button>
  );
}

export default BackToTop; 