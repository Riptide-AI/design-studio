import { useRef } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import arrow from 'public/img/icons/arrow-circle.svg';

export const InfoCards = ({ data }) => {
  const cardList = useRef();

 async function scrollToNext() {
    if (cardList.current) {
      requestAnimationFrame(() => {
        cardList.current.scrollLeft += 390;
      });
    }
  }
 async function scrollToPrev() {
    if (cardList.current) {
      requestAnimationFrame(() => {
        cardList.current.scrollLeft -= 390;
      });
    }
  }


  return (
    <div className={styles.success}>
      <div className={styles.success__title}>{data.title}</div>
      {data.desc && <div className={styles.success__desc}>{data.desc}</div>}
      <div ref={cardList} className={styles.success__list}>
        {data.list.map((item, i) => (
          <div className={styles.success__card} key={`card-${i}`}>
            <div className={styles.success__card__title}>{item.title}</div>
            <div className={styles.success__card__desc}>{item.desc}</div>
            <div className={styles.success__card__note}>{item.note}</div>
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
