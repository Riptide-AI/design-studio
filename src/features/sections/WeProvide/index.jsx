import { ContentWrapper } from '@/components/ContentWrapper';
import { weProvide } from '@/data/design';
import styles from './style.module.scss';
import Image from 'next/image';

export const WeProvide = () => {
  return (
    <ContentWrapper>
      <div className={styles.we_provide}>
        <div className={styles.we_provide__title}>{weProvide.title}</div>
        <div className={styles.we_provide__list}>
          {weProvide.list.map((item, i) => (
            <div className={styles.we_provide__item} key={`item-${i}`}>
              <div className={styles.we_provide__item__icon}>
                <Image src={item.icon} width={50} height={50} alt="" />
              </div>
              <div className={styles.we_provide__item__title}>{item.title}</div>
              <div className={styles.we_provide__item__desc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
