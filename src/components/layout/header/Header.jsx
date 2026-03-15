import React, { useState, useEffect } from 'react';
import '@/styles/header.css';
import { useTranslation } from '@/components/context/translation/Translation.jsx';

const Header = () => {
  const { t } = useTranslation();
  const [headerClass, setHeaderClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY >= 80) {
        setHeaderClass('scroll-header');
      } else {
        setHeaderClass('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <header className={`header ${headerClass}`}>
      <nav className='nav container'>
        <a href='/' className='nav__logo'>FJrodafo</a>
        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="nav__icon" viewBox="0 0 24 24"><path d="m20 8-6-5.26a3 3 0 0 0-4 0L4 8a3 3 0 0 0-1 2.26V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.75A3 3 0 0 0 20 8m-6 12h-4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm5-1a1 1 0 0 1-1 1h-2v-5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v5H6a1 1 0 0 1-1-1v-8.75a1 1 0 0 1 .34-.75l6-5.25a1 1 0 0 1 1.32 0l6 5.25a1 1 0 0 1 .34.75Z"/></svg> {t('header.home')}
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="nav__icon" viewBox="0 0 24 24"><path d="M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1 1 0 0 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4"/></svg> {t('header.about')}
              </a>
            </li>
            <li className='nav__item'>
              <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="nav__icon" viewBox="0 0 24 24"><path d="m20.34 9.32-14-7a3 3 0 0 0-4.08 3.9l2.4 5.37a1.06 1.06 0 0 1 0 .82l-2.4 5.37A3 3 0 0 0 5 22a3.14 3.14 0 0 0 1.35-.32l14-7a3 3 0 0 0 0-5.36Zm-.89 3.57-14 7a1 1 0 0 1-1.35-1.3l2.39-5.37a2 2 0 0 0 .08-.22h6.89a1 1 0 0 0 0-2H6.57a2 2 0 0 0-.08-.22L4.1 5.41a1 1 0 0 1 1.35-1.3l14 7a1 1 0 0 1 0 1.78"/></svg> {t('header.contact')}
              </a>
            </li>
          </ul>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="nav__close" onClick={() => showMenu(!Toggle)} viewBox="0 0 24 24"><path d="m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"/></svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="nav__toggle" onClick={() => showMenu(!Toggle)} viewBox="0 0 24 24"><path d="M10 13H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1m-1 7H4v-5h5ZM21 2h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1 7h-5V4h5Zm1 4h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1m-1 7h-5v-5h5ZM10 2H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M9 9H4V4h5Z"/></svg>
      </nav>
    </header>
  );
};

export default Header;
