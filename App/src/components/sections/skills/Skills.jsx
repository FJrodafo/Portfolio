import React from 'react';
import '@/styles/skills.css';
import Frontend from './Frontend.jsx';
import Backend from './Backend.jsx';
import { useTranslation } from '@/components/context/translation/Translation.jsx';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>{t('skills.section.title')}</h2>
      <span className='section__subtitle'>{t('skills.section.subtitle')}</span>
      <div className='skills__container container grid'>
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
