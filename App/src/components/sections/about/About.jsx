import React from 'react';
import '@/styles/about.css';
import Info from '@/components/sections/about/Info.jsx';
import { useTranslation } from '@/components/context/translation/Translation.jsx';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>{t('about.section.title')}</h2>
      <span className='section__subtitle'>{t('about.section.subtitle')}</span>
      <div className='about__container container grid'>
        <img src='/images/about.jpg' alt='' className='about__img' />
        <div className='about__data'>
          <Info />
          <p className='about__description'>{t('about.description')}</p>
          <a href='https://fjrodafo-cv.vercel.app/' className='button button--flex' target='_blank' rel='noreferrer'>{t('about.button')}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="button__icon" viewBox="0 0 24 24"><path fill="var(--container-color)" d="M15.25 22.75h-6c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5C4.64 2.75 3 4.39 3 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75"/><path fill="var(--container-color)" d="M22.25 10.75h-4c-3.42 0-4.75-1.33-4.75-4.75V2c0-.3.18-.58.46-.69.28-.12.6-.05.82.16l8 8a.751.751 0 0 1-.53 1.28M15 3.81V6c0 2.58.67 3.25 3.25 3.25h2.19zm-1.75 9.94h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75m-2 4h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
