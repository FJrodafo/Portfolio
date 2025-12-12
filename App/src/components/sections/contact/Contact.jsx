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
              <svg className='button__icon' xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24' fill='none'>
                <path d='M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z' fill='var(--container-color)'></path>
                <path d='M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z' fill='var(--container-color)'></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
