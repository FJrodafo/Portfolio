import React from 'react';
import { useTranslation } from '@/components/context/translation/Translation.jsx';

const Backend = () => {
  const { t } = useTranslation();

  return (
    <div className='skills__content'>
      <h3 className='skills__title'>{t('skills.backend')}</h3>
      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className='skills__name'>Java</h3>
              <span className='skills__level'>{t('skills.advanced')}</span>
            </div>
          </div>
          <div className='skills__data'>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className='skills__name'>PHP</h3>
              <span className='skills__level'>{t('skills.basic')}</span>
            </div>
          </div>
          <div className='skills__data'>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className='skills__name'>Bash</h3>
              <span className='skills__level'>{t('skills.intermediate')}</span>
            </div>
          </div>
        </div>
        <div className='skills__group'>
          <div className='skills__data'>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className='skills__name'>SQL</h3>
              <span className='skills__level'>{t('skills.intermediate')}</span>
            </div>
          </div>
          <div className='skills__data'>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className='skills__name'>Docker</h3>
              <span className='skills__level'>{t('skills.intermediate')}</span>
            </div>
          </div>
          <div className='skills__data'>
            <i className='bx bx-badge-check' />
            <div>
              <h3 className='skills__name'>Node.js</h3>
              <span className='skills__level'>{t('skills.basic')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
