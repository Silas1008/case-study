import { useEffect } from 'react';
import "./ScrollToTop.css"

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTop;
