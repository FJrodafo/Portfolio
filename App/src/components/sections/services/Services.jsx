import React, { useState } from 'react';
import '@/styles/services.css';
import { useTranslation } from '@/components/context/translation/Translation.jsx';

const Services = () => {
  const { t } = useTranslation();

  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => setToggleState(index);

  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>{t('services.section.title')}</h2>
      <span className='section__subtitle'>{t('services.section.subtitle')}</span>
      <div className='services__container container grid'>
        {/* Frontend */}
        <div className='services__content'>
          <div>
            <i className='uil uil-web-grid services__icon' />
            <h3 className='services__title'>{t('services.frontend.title1')}<br />{t('services.frontend.title2')}</h3>
          </div>
          <span className='services__button' onClick={() => toggleTab(1)}>{t('services.viewmore')}<i className='uil uil-arrow-right services__button-icon' /></span>
          <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
            <div className='services__modal-content'>
              <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close' />
              <h3 className='services__modal-title'>{t('services.frontend.title')}</h3>
              <p className='services__modal-description'>{t('services.frontend.description')}</p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon' />
                  <p className='services__modal-info'>{t('services.frontend.task1')}</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon' />
                  <p className='services__modal-info'>{t('services.frontend.task2')}</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon' />
                  <p className='services__modal-info'>{t('services.frontend.task3')}</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon' />
                  <p className='services__modal-info'>{t('services.frontend.task4')}</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon' />
                  <p className='services__modal-info'>{t('services.frontend.task5')}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Backend */}
        <div className='services__content'>
          <div>
            <i className='uil uil-arrow services__icon' />
            <h3 className='services__title'>{t('services.backend.title1')}<br />{t('services.backend.title2')}</h3>
          </div>
          <span onClick={() => toggleTab(2)} className='services__button'>{t('services.viewmore')}<i className='uil uil-arrow-right services__button-icon' /></span>
          <div className={toggleState === 2 ? 'services__modal active-modal' : 'services__modal'}>
            <div className='services__modal-content'>
              <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close' />
              <h3 className='services__modal-title'>{t('services.backend.title')}</h3>
              <p className='services__modal-description'>{t('services.backend.description')}</p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon' />
                  <p className='services__modal-info'>{t('services.backend.task1')}</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon' />
                  <p className='services__modal-info'>{t('services.backend.task2')}</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon' />
                  <p className='services__modal-info'>{t('services.backend.task3')}</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon' />
                  <p className='services__modal-info'>{t('services.backend.task4')}</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon' />
                  <p className='services__modal-info'>{t('services.backend.task5')}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Database */}
        <div className='services__content'>
          <div>
            <i className='uil uil-edit services__icon' />
            <h3 className='services__title'>{t('services.database.title1')}<br />{t('services.database.title2')}</h3>
          </div>
          <span onClick={() => toggleTab(3)} className='services__button'>{t('services.viewmore')}<i className='uil uil-arrow-right services__button-icon' /></span>
          <div className={toggleState === 3 ? 'services__modal active-modal' : 'services__modal'}>
            <div className='services__modal-content'>
              <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close' />
              <h3 className='services__modal-title'>{t('services.database.title')}</h3>
              <p className='services__modal-description'>{t('services.database.description')}</p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon' />
                  <p className='services__modal-info'>{t('services.database.task1')}</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon' />
                  <p className='services__modal-info'>{t('services.database.task2')}</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon' />
                  <p className='services__modal-info'>{t('services.database.task3')}</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon' />
                  <p className='services__modal-info'>{t('services.database.task4')}</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon' />
                  <p className='services__modal-info'>{t('services.database.task5')}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
