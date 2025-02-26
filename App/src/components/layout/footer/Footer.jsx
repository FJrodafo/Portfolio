import React from 'react';
import '@/styles/footer.css';
import { useTranslation } from '@/components/context/translation/Translation.jsx';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Fran Afonso</h1>
        <ul className='footer__list'>
          <li><a href='#about' className='footer__link'>{t('footer.about')}</a></li>
          <li><a href='#services' className='footer__link'>{t('footer.services')}</a></li>
          <li><a href='#projects' className='footer__link'>{t('footer.projects')}</a></li>
        </ul>
        <div className='footer__social'>
          <a href='https://www.linkedin.com/in/fjrodafo' className='footer__social-link' target='_blank' rel='noreferrer'><i className='bx bxl-linkedin' /></a>
          <a href='https://github.com/FJrodafo' className='footer__social-link' target='_blank' rel='noreferrer'><i className='bx bxl-github' /></a>
          <a href='https://hub.docker.com/u/fjrodafo' className='footer__social-link' target='_blank' rel='noreferrer'><i className='bx bxl-docker' /></a>
        </div>
        <br />
        <div className='footer__social'>
          <a href='https://t.me/FJrodafo' className='footer__social-link' target='_blank' rel='noreferrer'><i className='bx bxl-telegram' /></a>
          <a href='https://discord.com/users/1259949570964590705' className='footer__social-link' target='_blank' rel='noreferrer'><i className='bx bxl-discord-alt' /></a>
          <a href='https://paypal.me/FJrodafo' className='footer__social-link' target='_blank' rel='noreferrer'><i className='bx bxl-paypal' /></a>
        </div>
        <span className='footer__copy'>
          Copyright &#169; 2025 Francisco José
          <br />
          Rodríguez Afonso - All Rights Reserved.
          <br />
          <br />
          Powered by <a href='https://vercel.com/' className='footer__link' target='_blank' rel='noreferrer'>&#x25B2;Vercel</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
