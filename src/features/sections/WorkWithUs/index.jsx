import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import Image from 'next/image';

export const WorkWithUs = ({ data }) => {
  return (
    <ContentWrapper>
      <div className={styles.work_with_us}>
        <div className={styles.work_with_us__title}>{data.title}</div>
        <div className={styles.work_with_us__list}>
          {data.list.map((item, i) => (
            <div className={styles.work_with_us__item} key={`item-${i}`}>
              <div className={styles.work_with_us__item__icon}>
                <Image src={item.icon} width={56} height={56} />
              </div>
              <div className={styles.work_with_us__item__desc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
