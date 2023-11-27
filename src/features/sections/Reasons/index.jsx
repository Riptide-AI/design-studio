import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import Image from 'next/image';
import { reasons } from '@/data/aboutUs';

export const Reasons = () => {
  return (
    <ContentWrapper>
      <div className={styles.reasons}>
        <div className={styles.reasons__content}>
          <div className={styles.reasons__title}>{reasons.title}</div>
          {reasons.items.map((item,i) => (
            <div className={styles.reasons__item}  key={`reason-${i}`}>
              <Image src={item.icon} height={40} width={40} alt="icon" />
              <div className={styles.reasons__item_title}>{item.title}</div>
              <div className={styles.reasons__item_desc}>{item.desc}</div>
            </div>
          ))}
        </div>
        <div className={styles.reasons__image}>
          <Image src={reasons.image} fill="true" objectFit="cover" alt="" placeholder="empty" />
        </div>
      </div>
    </ContentWrapper>
  );
};
