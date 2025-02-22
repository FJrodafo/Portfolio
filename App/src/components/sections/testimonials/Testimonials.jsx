import React from 'react';
import '@/styles/testimonial.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { customersData } from './Data.jsx';
import { useTheme } from '@/components/context/theme/Theme.jsx';
import { useTranslation } from '@/components/context/translation/Translation.jsx';

const Testimonials = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <section className='testimonial container section'>
      <h2 className='section__title'>{t('testimonials.section.title')}</h2>
      <span className='section__subtitle'>{t('testimonials.section.subtitle')}</span>
      <Swiper
        className='testimonial__container'
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        autoplay={{
          delay: 8_000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
      >
        {customersData.map(({ id, imageLight, imageDark }) => {
          return (
            <SwiperSlide className='testimonial__card' key={id}>
              <img className='testimonial__img' src={theme === 'light' ? imageLight : imageDark} alt='' />
              <h3 className='testimonial__name'>{t(`testimonials.${id}.name`)}</h3>
              <p className='testimonial__description'>{t(`testimonials.${id}.quote`)}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
