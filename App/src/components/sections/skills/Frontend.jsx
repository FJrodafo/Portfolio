import React from 'react';
import { useTranslation } from '@/components/context/translation/Translation.jsx';

const Frontend = () => {
  const { t } = useTranslation();

  return (
    <div className='skills__content'>
      <h3 className='skills__title'>{t('skills.frontend')}</h3>
      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className='skills__name'>HTML</h3>
              <span className='skills__level'>{t('skills.advanced')}</span>
            </div>
          </div>
          <div className='skills__data'>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className='skills__name'>CSS</h3>
              <span className='skills__level'>{t('skills.basic')}</span>
            </div>
          </div>
          <div className='skills__data'>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className='skills__name'>JavaScript</h3>
              <span className='skills__level'>{t('skills.intermediate')}</span>
            </div>
          </div>
        </div>
        <div className='skills__group'>
          <div className='skills__data'>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className='skills__name'>Next.js</h3>
              <span className='skills__level'>{t('skills.intermediate')}</span>
            </div>
          </div>
          <div className='skills__data'>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className='skills__name'>React</h3>
              <span className='skills__level'>{t('skills.intermediate')}</span>
            </div>
          </div>
          <div className='skills__data'>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className='skills__name'>EWW</h3>
              <span className='skills__level'>{t('skills.basic')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
