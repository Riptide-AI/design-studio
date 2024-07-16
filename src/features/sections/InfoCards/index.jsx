import { useRef } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import arrow from 'public/img/icons/arrow-circle.svg';
import { useTranslation } from 'react-i18next';

export const InfoCards = ({ data }) => {
  const {t}=useTranslation();
  const cardList = useRef();

 async function scrollToNext() {
    if (cardList.current) {
      requestAnimationFrame(() => {
        cardList.current.scrollLeft += 395;
      });
    }
  }
 async function scrollToPrev() {
    if (cardList.current) {
      requestAnimationFrame(() => {
        cardList.current.scrollLeft -= 395;
      });
    }
  }


  return (
    <div className={styles.success}>
      <div className={styles.success__title}>{t(data.title)}</div>
      {t(data.desc) && <div className={styles.success__desc}>{t(data.desc)}</div>}
      <div ref={cardList} className={styles.success__list}>
        {data.list.map((item, i) => (
          <div className={styles.success__card} key={`card-${i}`}>
            <div className={styles.success__card__title}>{t(item.title)}</div>
            <div className={styles.success__card__desc}>{t(item.desc)}</div>
            <div className={styles.success__card__note}>{t(item.note)}</div>
            <div className={styles.success__card__order}>{i + 1}</div>
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
  );
};
