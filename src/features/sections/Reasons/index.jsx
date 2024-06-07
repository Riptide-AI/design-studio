import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import Image from 'next/image';
import { reasons } from '@/data/aboutUs';
import { useTranslation } from 'react-i18next';

export const Reasons = () => {
  const { t } = useTranslation();
  return (
    <ContentWrapper>
      <div className={styles.reasons}>
        <div className={styles.reasons__title}>{t(reasons.title)}</div>
        <div className={styles.reasons__content}>
          {reasons.items.map((item, i) => (
            <div className={styles.card} key={`reason-${i}`}>
              <div className={styles.card_image}>
                {item.icons.map((img, i) => (
                  <Image
                    key={`image-${img}`}
                    src={img}
                    data-name={item.styles[i]}
                    alt="Why_choose_us_block_image"
                    width={40}
                    height={40}
                  />
                ))}
              </div>
              <div className={styles.card_label}>{t(item.title)}</div>
              <div className={styles.card_text}>{t(item.desc)}</div>
            </div>
          ))}
        </div>
        <div className={styles.reasons__image}>
          <Image src={reasons.image} fill="true" alt="" placeholder="empty" />
        </div>
      </div>
    </ContentWrapper>
  );
};
