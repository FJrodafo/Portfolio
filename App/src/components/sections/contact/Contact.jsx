import React, { useRef } from 'react';
import '@/styles/contact.css';
import { useTranslation } from '@/components/context/translation/Translation.jsx';

const Contact = () => {
  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      project: form.current.project.value,
    };

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        alert(t('contact.form.success'));
        e.target.reset();
      } else {
        alert(t('contact.form.error'));
      }
    } catch (error) {
      console.error('Error enviando el formulario:', error);
      alert(t('contact.form.error'));
    }
  };

  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>{t('contact.section.title')}</h2>
      <span className='section__subtitle'>{t('contact.section.subtitle')}</span>
      <div className='contact__container container grid'>
        <div className='contact__content'>
          <h3 className='contact__title'>{t('contact.container.title')}</h3>
          <div className='contact__info'>
            <div className='contact__card'>
              <i className='bx bx-mail-send contact__card-icon' />
              <h3 className='contact__card-title'>{t('contact.container.card.email')}</h3>
              <span className='contact__card-data'>fjrodafo@gmail.com</span>
              <a href='mailto:fjrodafo@gmail.com' className='contact__button'>
                {t('contact.container.card.button')}
                <i className='bx bx-right-arrow-alt contact__button-icon' />
              </a>
            </div>
            <div className='contact__card'>
              <i className='bx bx-message-detail contact__card-icon' />
              <h3 className='contact__card-title'>{t('contact.container.card.telephone')}</h3>
              <span className='contact__card-data'>+34 635 43 10 24</span>
              <a href='tel:+34635431024' className='contact__button' target='_blank' rel='noreferrer'>
                {t('contact.container.card.button')}
                <i className='bx bx-right-arrow-alt contact__button-icon' />
              </a>
            </div>
            <div className='contact__card'>
              <i className='bx bx-message-dots contact__card-icon' />
              <h3 className='contact__card-title'>Discord</h3>
              <span className='contact__card-data'>@fjrodafo</span>
              <a href='https://discord.com/users/1259949570964590705' className='contact__button' target='_blank' rel='noreferrer'>
                {t('contact.container.card.button')}
                <i className='bx bx-right-arrow-alt contact__button-icon' />
              </a>
            </div>
          </div>
        </div>
        <div className='contact__content'>
          <h3 className='contact__title'>{t('contact.form.title')}</h3>
          <form ref={form} onSubmit={sendEmail} className='contact__form'>
            <div className='contact__form-div'>
              <label className='contact__form-tag'>{t('contact.form.name.tag')}</label>
              <input type='text' name='name' className='contact__form-input' placeholder={t('contact.form.name.placeholder')} required />
            </div>
            <div className='contact__form-div'>
              <label className='contact__form-tag'>{t('contact.form.mail.tag')}</label>
              <input type='email' name='email' className='contact__form-input' placeholder={t('contact.form.mail.placeholder')} required />
            </div>
            <div className='contact__form-div contact__form-area'>
              <label className='contact__form-tag'>{t('contact.form.project.tag')}</label>
              <textarea name='project' cols='30' rows='10' className='contact__form-input' placeholder={t('contact.form.project.placeholder')} required></textarea>
            </div>
            <button className='button button--flex'>
              {t('contact.form.button')}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="button__icon" viewBox="0 0 24 24"><path fill="var(--container-color)" d="M14.22 21.935c-1.18 0-2.85-.83-4.17-4.8l-.72-2.16-2.16-.72c-3.96-1.32-4.79-2.99-4.79-4.17 0-1.17.83-2.85 4.79-4.18l8.49-2.83c2.12-.71 3.89-.5 4.98.58s1.3 2.86.59 4.98l-2.83 8.49c-1.33 3.98-3 4.81-4.18 4.81m-6.58-14.6c-2.78.93-3.77 2.03-3.77 2.75s.99 1.82 3.77 2.74l2.52.84c.22.07.4.25.47.47l.84 2.52c.92 2.78 2.03 3.77 2.75 3.77s1.82-.99 2.75-3.77l2.83-8.49c.51-1.54.42-2.8-.23-3.45s-1.91-.73-3.44-.22z"/><path fill="var(--container-color)" d="M10.11 14.705c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.58-3.59c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-3.58 3.59c-.14.15-.34.22-.53.22"/></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
