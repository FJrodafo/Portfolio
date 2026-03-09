import React, { useEffect } from 'react';
import '@/styles/scrollup.css';

const ScrollUp = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', function () {
        const scrollUp = document.querySelector('.scrollup');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
        if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll');
      });

      return () => {
        window.removeEventListener('scroll', function () {
          const scrollUp = document.querySelector('.scrollup');
          if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
          else scrollUp.classList.remove('show-scroll');
        });
      };
    }
  }, []);

  return (
    <a href='#top' className='scrollup' aria-label='Scroll Up'>
      <svg className="scrollup__icon" xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 24 24"><path fill="currentColor" d="m17.71 11.29-5-5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-5 5a1 1 0 0 0 1.42 1.42L11 9.41V17a1 1 0 0 0 2 0V9.41l3.29 3.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42"/></svg>
    </a>
  );
};

export default ScrollUp;
