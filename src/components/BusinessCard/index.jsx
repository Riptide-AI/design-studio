import styles from './style.module.scss';
import Image from 'next/image';
export const BusinessCard = ({ card }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image fill="true" src={card.image} alt="" />
        <div className={styles.card__icon}>
          <Image src={card.icon} height={32} width={32} alt="" placeholder="empty" />
        </div>
      </div>
      <div className={styles.card__title}>{card.title}</div>
      <div className={styles.card__desc}>{card.desc}</div>
    </div>
  );
};
