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
        <i className='uil uil-linkedin-alt' />
        <span className='tooltiptext'>LinkedIn</span>
      </a>
      <a href='https://github.com/FJrodafo' className='home__utilities-icon tooltip' target='_blank' rel='noreferrer'>
        <i className='uil uil-github-alt' />
        <span className='tooltiptext'>GitHub</span>
      </a>
      <button className='home__theme-icon tooltip' onClick={handleToggleTheme}>
        {theme === 'light' ? (<i className='uil uil-moon home__utilities-icon' />) : (<i className='uil uil-sun home__utilities-icon' />)}
        <span className='tooltiptext'>{theme === 'light' ? t('home.dark') : t('home.light')}</span>
      </button>
      <button className='home__language-icon tooltip' onClick={handleToggleLanguage}>
        <i className='uil uil-language' />
        <span className='tooltiptext'>{t('home.translate')}</span>
      </button>
    </div>
  );
};

export default Utilities;
