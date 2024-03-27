import { ContentWrapper } from '@/components/ContentWrapper';
import { whyWorkWithUs } from '@/data/partnership';
import styles from './style.module.scss';
import Image from 'next/image';

export const WhyWorkWithUs = () => {
  return (
    <ContentWrapper>
      <div className={styles.why_work_with_us}>
        <div className={styles.why_work_with_us__title}>{whyWorkWithUs.title}</div>
        <div className={styles.why_work_with_us__list}>
          {whyWorkWithUs.list.map((item, i) => (
            <div className={styles.why_work_with_us__item} key={`item-${i}`}>
              <div className={styles.why_work_with_us__item__icon}>
                <Image src={item.icon} width={40} height={40} alt="" />
              </div>
              <div className={styles.why_work_with_us__item__title}>{item.title}</div>
              <div className={styles.why_work_with_us__item__desc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
