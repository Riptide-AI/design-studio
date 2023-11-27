import styles from './style.module.scss';
import { successBanner } from '@/data/frontend';

export const SuccessBanner = () => {
  return (
    <div className={styles.success}>
      <div className={styles.success__title}>{successBanner.title}</div>
      <div className={styles.success__list}>
        {successBanner.list.map((item, i) => (
          <div className={styles.success__card} key={`card-${i}`}>
            <div className={styles.success__card__title}>{item.title}</div>
            <div className={styles.success__card__desc}>{item.desc}</div>
            <div className={styles.success__card__note}>{item.note}</div>
            <div className={styles.success__card__order}>{i + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
