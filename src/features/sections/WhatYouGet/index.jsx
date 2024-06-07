import { ContentWrapper } from '@/components/ContentWrapper';
import { whatYouGet } from '@/data/partnership';
import styles from './style.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const WhatYouGet = () => {
  const {t}=useTranslation()

  return (
    <ContentWrapper>
      <div className={styles.what_you_get}>
        <div className={styles.what_you_get__title}>{t(whatYouGet.title)}</div>
        <div className={styles.what_you_get__list}>
          {whatYouGet.list.map((item, i) => (
            <div className={styles.card} key={`item-${i}`}>
              <div className={styles.card_row}>
                <div className={styles.card_image}>
                  {item.icons.map((img, i) => (
                    <Image
                      key={`item-${img}`}
                      data-name={item.styles[i]}
                      src={img}
                      alt="Picture"
                      width={40}
                      height={40}
                    />
                  ))}
                </div>
                <div className={styles.card_info}>
                  <div className={styles.card_label}>{t(item.title)}</div>
                  <div className={styles.card_text}>{t(item.desc)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
