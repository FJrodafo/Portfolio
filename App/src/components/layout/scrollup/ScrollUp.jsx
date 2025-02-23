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
    <a href='#top' className='scrollup'>
      <i className='uil uil-arrow-up scrollup__icon' />
    </a>
  );
};

export default ScrollUp;
