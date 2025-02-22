import React, { useState } from 'react';
import '@/styles/qualification.css';
import { useTranslation } from '@/components/context/translation/Translation.jsx';

const Qualification = () => {
  const { t } = useTranslation();

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => setToggleState(index);

  return (
    <section className='qualification section'>
      <h2 className='section__title'>{t('qualification.section.title')}</h2>
      <span className='section__subtitle'>{t('qualification.section.subtitle')}</span>
      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(1)}>
            <i className='uil uil-graduation-cap qualification__icon' />{t('qualification.education')}
          </div>
          <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(2)}>
            <i className='uil uil-briefcase-alt qualification__icon' />{t('qualification.experience')}
          </div>
        </div>
        <div className='qualification__sections'>
          <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>{t('qualification.title.iespc')}</h3>
                <span className='qualification__subtitle'>IES Puerto de la Cruz - Telesforo Bravo</span>
                <div className='qualification__calender'><i className='uil uil-calendar-alt' /> 2022 - 2026</div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>{t('qualification.title.csmc')}</h3>
                <span className='qualification__subtitle'>CSMC - Conservatorio Superior de Música de Canarias</span>
                <div className='qualification__calender'><i className='uil uil-calendar-alt' /> 2020 - 2025</div>
              </div>
            </div>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>{t('qualification.title.cpmt')}</h3>
                <span className='qualification__subtitle'>CPMT - Conservatorio Profesional de Música de Tenerife</span>
                <div className='qualification__calender'><i className='uil uil-calendar-alt' /> 2018 - 2021</div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
              </div>
            </div>
          </div>
          <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                {/*<span className='qualification__line'></span>*/}
              </div>
              <div>
                <h3 className='qualification__title'>...</h3>
                <span className='qualification__subtitle'>...</span>
                <div className='qualification__calender'><i className='uil uil-calendar-alt' /> ... - {t('qualification.present')}</div>
              </div>
            </div>
            {/*
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Backend Developer</h3>
                <span className='qualification__subtitle'>...</span>
                <div className='qualification__calender'><i className='uil uil-calendar-alt' /> 2024 - Present</div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Database Developer</h3>
                <span className='qualification__subtitle'>...</span>
                <div className='qualification__calender'><i className='uil uil-calendar-alt' /> 2022 - 2024</div>
              </div>
            </div>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Web Application Developer</h3>
                <span className='qualification__subtitle'>...</span>
                <div className='qualification__calender'><i className='uil uil-calendar-alt' /> 2020 - 2022</div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
