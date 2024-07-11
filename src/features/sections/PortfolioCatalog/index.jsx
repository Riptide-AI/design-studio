import { ContentWrapper } from '@/components/ContentWrapper';
import Image from 'next/image';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const PortfolioCatalog = ({ currentItem }) => {
  const {t}=useTranslation();
  
  return (
    <div className={styles.wrapper}>
      <ContentWrapper>
        <div className={styles.catalog}>
          <div className={styles.catalog__content}>
            <div className={styles.catalog__section_name}>{t(currentItem.catalog.sectionName)}</div>
            <div className={styles.catalog__title}> {t(currentItem.catalog.title)}</div>
            <div className={styles.catalog__desc}> {t(currentItem.catalog.desc)}</div>
          </div>
          <div className={styles.catalog__images}>
            <div className={styles.catalog__image}>
              <Image src={currentItem.catalog.imageOne} alt="" fill={true} />
            </div>
            <div className={styles.catalog__image}>
              <Image src={currentItem.catalog.imageTwo} alt="" fill={true} />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
