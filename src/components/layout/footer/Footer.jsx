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
          <li><a href='#home' className='footer__link'>{t('footer.home')}</a></li>
          <li><a href='#about' className='footer__link'>{t('footer.about')}</a></li>
          <li><a href='#contact' className='footer__link'>{t('footer.contact')}</a></li>
        </ul>
        <div className='footer__social'>
          <a href='https://www.linkedin.com/in/fjrodafo' className='footer__social-link' target='_blank' rel='noreferrer' aria-label='LinkedIn'><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188"/><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"/></svg></a>
          <a href='https://github.com/FJrodafo' className='footer__social-link' target='_blank' rel='noreferrer' aria-label='GitHub'><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 24 24"><path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2"/></svg></a>
          <a href='https://gitlab.com/FJrodafo' className='footer__social-link' target='_blank' rel='noreferrer' aria-label='GitLab'><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 24 24"><path d="M20.892 9.889a1 1 0 0 0-.025-.087l-2.104-6.479a.84.84 0 0 0-.8-.57.82.82 0 0 0-.789.575l-2.006 6.175H8.834L6.826 3.327a.82.82 0 0 0-.786-.575h-.006a.84.84 0 0 0-.795.575L3.133 9.815c0 .005-.005.01-.007.016l-1.067 3.281a1.195 1.195 0 0 0 .435 1.34l9.227 6.706c.167.121.393.12.558-.003l9.229-6.703a1.2 1.2 0 0 0 .435-1.34zM17.97 3.936l1.809 5.566H16.16zm-11.94 0 1.812 5.566H4.228zm-2.982 9.752a.25.25 0 0 1-.093-.284l.793-2.437 5.817 7.456zm1.499-3.239h3.601l2.573 7.916zm7.452 8.794-2.856-8.798h5.718l-1.792 5.515zm1.282-.877 2.467-7.588.106-.329h3.604l-5.586 7.156zm7.671-4.678-6.519 4.733.022-.029 5.794-7.425.792 2.436a.25.25 0 0 1-.089.285"/></svg></a>
          <a href='https://hub.docker.com/u/fjrodafo' className='footer__social-link' target='_blank' rel='noreferrer' aria-label='Docker Hub'><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 24 24"><rect width="2.07" height="1.88" x="11.04" y="4.82" rx=".15"/><path d="M6.28 7.09H8a.16.16 0 0 1 .16.16v1.56A.16.16 0 0 1 8 9H6.28a.15.15 0 0 1-.15-.15V7.24a.15.15 0 0 1 .15-.15m2.47 0h1.77a.15.15 0 0 1 .15.15v1.57a.16.16 0 0 1-.16.16H8.75a.15.15 0 0 1-.15-.15V7.24a.15.15 0 0 1 .15-.15m2.44 0H13a.15.15 0 0 1 .15.15v1.57A.15.15 0 0 1 13 9h-1.81a.16.16 0 0 1-.19-.19V7.24a.15.15 0 0 1 .19-.15M5.61 9.35H3.85a.16.16 0 0 0-.16.15v1.58a.16.16 0 0 0 .16.15h1.76a.16.16 0 0 0 .16-.15V9.5a.16.16 0 0 0-.16-.15m2.44 0H6.28a.16.16 0 0 0-.16.15v1.58a.16.16 0 0 0 .16.15h1.77a.15.15 0 0 0 .15-.15V9.5a.15.15 0 0 0-.15-.15m2.47 0H8.75a.15.15 0 0 0-.15.15v1.58a.15.15 0 0 0 .15.15h1.77a.15.15 0 0 0 .15-.15V9.5a.15.15 0 0 0-.15-.15m.67 0a.15.15 0 0 0-.19.15v1.58a.15.15 0 0 0 .15.15H13a.15.15 0 0 0 .15-.15V9.5a.15.15 0 0 0-.15-.15zm2.46 0a.15.15 0 0 0-.15.15v1.58a.15.15 0 0 0 .15.15h1.77a.15.15 0 0 0 .15-.15V9.5a.15.15 0 0 0-.15-.15z"/><path d="M20.17 9.82a5 5 0 0 0-.84.07 3.12 3.12 0 0 0-1.43-2.14l-.28-.16-.19.27a3.7 3.7 0 0 0-.51 1.19 2.84 2.84 0 0 0 .33 2.22 4.1 4.1 0 0 1-1.45.35H2.63a.63.63 0 0 0-.63.62 9.6 9.6 0 0 0 .58 3.39 5 5 0 0 0 2 2.6 8.86 8.86 0 0 0 4.42.95 13.3 13.3 0 0 0 2.42-.18 10.1 10.1 0 0 0 3.19-1.15A8.9 8.9 0 0 0 16.78 16a12 12 0 0 0 2.13-3.67h.19a3.08 3.08 0 0 0 2.23-.84 2.36 2.36 0 0 0 .59-.87l.08-.22-.2-.16a2.7 2.7 0 0 0-1.63-.42"/></svg></a>
        </div>
        <span className='footer__copy'>
          Creative Commons Zero v1.0 Universal
          <br />
          Francisco José Rodríguez Afonso
          <br />
          <br />
          Powered by <a href='https://vercel.com/' className='footer__link' target='_blank' rel='noreferrer'>&#x25B2;Vercel</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
