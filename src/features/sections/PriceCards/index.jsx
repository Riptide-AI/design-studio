import { ContentWrapper } from '@/components/ContentWrapper';
import { CustomButton } from '@/components/CustomButton';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';
import { DetailsModal } from '@/components/DetailsModal';
import arrow from 'public/img/icons/arrow-circle.svg';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const PriceCards = ({ data }) => {
  const { t } = useTranslation();
  const [windowWidth, setwindowWidth] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setwindowWidth(window.innerWidth);
      const updateWidth = () => setwindowWidth(window.innerWidth);
      window.addEventListener('resize', updateWidth);

      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);
  const cardsRef = useRef('');
  function scrollToNext() {
    if (cardsRef.current) {
      requestAnimationFrame(() => {
        cardsRef.current.scrollLeft += window.innerWidth < 422 ? window.innerWidth + 10 : 422;
      });
    }
  }
  function scrollToPrev() {
    if (cardsRef.current) {
      requestAnimationFrame(() => {
        cardsRef.current.scrollLeft -= window.innerWidth < 422 ? window.innerWidth + 10 : 422;
      });
    }
  }
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState();
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    windowWidth < 1440
      ? setInterval(() => {
        setAnimate(!animate);
      }, 6000)
      : ''
  }, [windowWidth, animate]);

  return (
    <ContentWrapper>
      {modalContent && (
        <DetailsModal
          isOpen={isModalOpen}
          handleClose={handleCloseModal}
          modalContent={modalContent}
        />
      )}
      <div className={styles.price_cards}>
        <div className={styles.price_cards__title}>{t(data.title)}</div>
        <div className={styles.price_cards__desc}>{t(data.desc)}</div>
        <div ref={cardsRef} className={styles.price_cards__list}>
          {data.list.map((item, i) => (
            <div
              className={
                animate ? styles.price_cards__item + ' ' + styles.animate : styles.price_cards__item
              }
              key={`item-${i}`}
              style={{ backgroundColor: item.color }}
            >
              <div className={styles.price_cards__item__size_type}>{t(item.sizeType)}</div>
              <div className={styles.price_cards__item__title}>{t(item.title)}</div>
              <div className={styles.price_cards__item__desc}>{t(item.desc)}</div>
              <div className={styles.price_cards__item__price}>{t(item.price)}</div>
              <Link href={{ pathname: '/contacts', query: { message: t(item.message) } }}>
                <CustomButton
                  stylesClassName={styles.price_cards__item__btn}
                  title={t(item.order)}
                />
              </Link>
              <CustomButton
                stylesClassName={styles.price_cards__item__btn_alt}
                title={t(item.details)}
                action={() => handleOpenModal(item.modal)}
              />
              <ul className={styles.price_cards__item__checks_list}>
                {item.checks.map((check, i) => (
                  <li key={`check-${i}`} className={styles.price_cards__item__check_item}>
                    <Image src={data.checkIcon} width={30} height={30} alt="" />
                    <span className={styles.price_cards__item__check_item__text}>
                      {t(check.content)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.paginationBtn}>
          <div className={styles.prevBtn} onClick={scrollToPrev}>
            <Image src={arrow} width={100} height={100} className={styles.link__icon} alt="" />
          </div>
          <div className={styles.nextBtn} onClick={scrollToNext}>
            <Image src={arrow} width={100} height={100} className={styles.link__icon} alt="" />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
