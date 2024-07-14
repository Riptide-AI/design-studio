import { ContentWrapper } from '@/components/ContentWrapper';
import Image from 'next/image';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const SupportTypesImage = ({ data, alt, cols = 3 }) => {
  const {t}=useTranslation();
  return (
    <ContentWrapper>
      <div className={styles.support_types}>
        <div className={styles.support_types__title}>{t(data.title)}</div>
        <div
          className={styles.support_types__list}
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {data.list.map((item, i) => (
            <div
              className={`${styles.support_types__item}  ${alt ? styles.alt : ''}`}
              key={`item-${i}`}
            >
              <div className={`${styles.support_types__item__title} ${alt ? styles.alt : ''}`}>
                {t(item.title)}
              </div>
              <div className={`${styles.support_types__item__desc} ${alt ? styles.alt : ''}`}>
                {t(item.desc)}
              </div>
              <div className={styles.support_types__item__image}>
                <Image src={item.image} alt=""  width={1000} height={1000} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
