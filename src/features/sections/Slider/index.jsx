import styles from './style.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {t}=useTranslation();

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slider__slide}>
        <div className={styles.slider__slide__title}>{t(slides[currentSlide].title)}</div>
        <div className={styles.slider__slide__content}>{t(slides[currentSlide].content)}</div>
        <div className={styles.slider__slide__author}>{t(slides[currentSlide].author)}</div>
        <div className={styles.slider__slide__position}>{t(slides[currentSlide].position)}</div>
      </div>
      <div role="button" onClick={goToPrevSlide} className={styles.slider__btn_prev}>
        <Image src={'/img/icons/arrow-left.svg'} width={40} height={40} alt="" />
      </div>
      <div role="button" onClick={goToNextSlide} className={styles.slider__btn_next}>
        <Image src={'/img/icons/arrow-right.svg'} width={40} height={40} alt="" />
      </div>
    </div>
  );
};
