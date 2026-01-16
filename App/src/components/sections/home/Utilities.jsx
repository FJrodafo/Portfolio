import React from 'react';
import { useTheme } from '@/components/context/theme/Theme.jsx';
import { useTranslation } from '@/components/context/translation/Translation.jsx';

const Utilities = () => {
  const { theme, toggleTheme } = useTheme();
  const handleToggleTheme = () => { toggleTheme() };

  const { t, toggleLanguage } = useTranslation();
  const handleToggleLanguage = () => { toggleLanguage() };

  return (
    <div className='home__utilities'>
      <a href='https://www.linkedin.com/in/fjrodafo' className='home__utilities-icon tooltip' target='_blank' rel='noreferrer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 8.999a5.4 5.4 0 0 0-2.565.645A1 1 0 0 0 14 8.999h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5.5a1 1 0 1 1 2 0v5.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7.5a5.507 5.507 0 0 0-5.5-5.5m3.5 12h-2v-4.5a3 3 0 1 0-6 0v4.5h-2v-10h2v.703a1 1 0 0 0 1.781.625A3.483 3.483 0 0 1 21 14.5Zm-14-12H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1m-1 12H4v-10h2ZM5.015 1.542a3.233 3.233 0 1 0-.057 6.457h.028a3.233 3.233 0 1 0 .029-6.457m-.029 4.457h-.028a1.222 1.222 0 0 1-1.37-1.228c0-.747.56-1.229 1.427-1.229A1.234 1.234 0 0 1 6.41 4.771c0 .746-.56 1.228-1.425 1.228"/></svg>
        <span className='tooltiptext'>LinkedIn</span>
      </a>
      <a href='https://github.com/FJrodafo' className='home__utilities-icon tooltip' target='_blank' rel='noreferrer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 24 24"><path fill="currentColor" d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.7 5.7 0 0 0-1.837-2.415 1 1 0 0 1-.167-.11 1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.4 4.4 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182M20.737 5.377q.049-.187.09-.42a6.3 6.3 0 0 0-.408-3.293 1 1 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.9 13.9 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a1 1 0 0 0-.631.584 6.3 6.3 0 0 0-.404 3.357q.037.191.079.354a6.27 6.27 0 0 0-1.256 3.83 8 8 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a5 5 0 0 0-.118.4 1 1 0 0 0 1.942.479 1.7 1.7 0 0 1 .468-.878 1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a7 7 0 0 1-.033-.738 4.26 4.26 0 0 1 .92-2.713 3 3 0 0 1 .195-.231 1 1 0 0 0 .188-1.025 3.4 3.4 0 0 1-.155-.555 4.1 4.1 0 0 1 .079-1.616 7.5 7.5 0 0 1 2.415 1.18 1 1 0 0 0 .827.133 11.8 11.8 0 0 1 6.173.001 1 1 0 0 0 .83-.138 7.6 7.6 0 0 1 2.406-1.19 4 4 0 0 1 .087 1.578 3.2 3.2 0 0 1-.169.607 1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.12 4.12 0 0 1 20 9.203a7 7 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746 1.63 1.63 0 0 1 .466.908 3 3 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a5 5 0 0 0-.155-1.311 4 4 0 0 0-.116-.416 6.51 6.51 0 0 0 5.445-6.424A9 9 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826"/></svg>
        <span className='tooltiptext'>GitHub</span>
      </a>
      <button className='home__theme-icon tooltip' onClick={handleToggleTheme}>
        {theme === 'light' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" className="home__utilities-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.6 8.6 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05m-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14 9.8 9.8 0 0 0 2.1-.22 8.11 8.11 0 0 1-7.18 4.32Z"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" className="home__utilities-icon" viewBox="0 0 24 24"><path fill="currentColor" d="m5.64 17-.71.71a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17M5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1m7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1M5.64 7.05a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1m6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5m0 9a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5"/></svg>
        )}
        <span className='tooltiptext'>{theme === 'light' ? t('home.dark') : t('home.light')}</span>
      </button>
      <button className='home__language-icon tooltip' onClick={handleToggleLanguage}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 24 24"><path fill="currentColor" d="M21.056 12h-2a1 1 0 0 0 0 2v2H17.87a3 3 0 0 0 .185-1 3 3 0 0 0-5.598-1.5 1 1 0 1 0 1.732 1 1 1 0 0 1 .866-.5 1 1 0 0 1 0 2 1 1 0 0 0 0 2 1 1 0 1 1 0 2 1 1 0 0 1-.866-.5 1 1 0 1 0-1.732 1 3 3 0 0 0 5.598-1.5 3 3 0 0 0-.185-1h1.185v3a1 1 0 0 0 2 0v-7a1 1 0 1 0 0-2m-11.97-.757a1 1 0 1 0 1.94-.486l-1.757-7.03a2.28 2.28 0 0 0-4.425 0l-1.758 7.03a1 1 0 1 0 1.94.486L5.585 9h2.94ZM6.086 7l.697-2.787a.292.292 0 0 1 .546 0L8.026 7Zm7.97 0h1a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0V8a3.003 3.003 0 0 0-3-3h-1a1 1 0 0 0 0 2m-4 9h-1a1 1 0 0 1-1-1v-1a1 1 0 0 0-2 0v1a3.003 3.003 0 0 0 3 3h1a1 1 0 0 0 0-2"/></svg>
        <span className='tooltiptext'>{t('home.translate')}</span>
      </button>
    </div>
  );
};

export default Utilities;
