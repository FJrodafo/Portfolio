import React from 'react';
import { useTranslation } from '@/components/context/translation/Translation.jsx';

const ScrollDown = () => {
  const { t } = useTranslation();

  return (
    <div className='home__scroll'>
      <a href='#about' className='home__scroll-button button--flex'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="home__scroll-mouse" style={{
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: '1.5'
          }} viewBox="0 0 247 390" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M123.359 79.775v72.843" className="wheel" style={{
              fill: 'none',
              stroke: 'var(--title-color)',
              strokeWidth: '20px',
            }}/><path id="mouse" d="M236.717 123.359C236.717 60.794 185.923 10 123.359 10S10 60.794 10 123.359v143.237c0 62.565 50.794 113.359 113.359 113.359s113.358-50.794 113.358-113.359z" style={{
              fill: 'none',
              stroke: 'var(--title-color)',
              strokeWidth: '20px'
            }}/></svg>
        <span className='home__scroll-name'>{t('home.scroll')}</span>
        <svg className='home__scroll-arrow' xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 24 24"><path fill="currentColor" d="M17.71 11.29a1 1 0 0 0-1.42 0L13 14.59V7a1 1 0 0 0-2 0v7.59l-3.29-3.3a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l5-5a1 1 0 0 0 0-1.42"/></svg>
      </a>
    </div>
  );
};

export default ScrollDown;
