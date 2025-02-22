import React from 'react';
import { useTranslation } from '@/components/context/translation/Translation.jsx';

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i className='bx bx-award about__icon' />
        <h3 className='about__title'>{t('about.info.experience.title')}</h3>
        <span className='about__subtitle'>{t('about.info.experience.subtitle')}</span>
      </div>
      <div className='about__box'>
        <i className='bx bx-briefcase-alt about__icon' />
        <h3 className='about__title'>{t('about.info.completed.title')}</h3>
        <span className='about__subtitle'>{t('about.info.completed.subtitle')}</span>
      </div>
      <div className='about__box'>
        <i className='bx bx-support about__icon' />
        <h3 className='about__title'>{t('about.info.support.title')}</h3>
        <span className='about__subtitle'>{t('about.info.support.subtitle')}</span>
      </div>
    </div>
  );
};

export default Info;
