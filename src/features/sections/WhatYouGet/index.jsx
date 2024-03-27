import { ContentWrapper } from '@/components/ContentWrapper';
import { whatYouGet } from '@/data/partnership';
import styles from './style.module.scss';
import Image from 'next/image';

export const WhatYouGet = () => {
  return (
    <ContentWrapper>
      <div className={styles.what_you_get}>
        <div className={styles.what_you_get__title}>{whatYouGet.title}</div>
        <div className={styles.what_you_get__list}>
          {whatYouGet.list.map((item, i) => (
            <div className={styles.what_you_get__item} key={`item-${i}`}>
              <div className={styles.what_you_get__item__icon}>
                <Image src={item.icon} width={40} height={40} alt="" />
              </div>
              <div className={styles.what_you_get__item__title}>{item.title}</div>
              <div className={styles.what_you_get__item__desc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
