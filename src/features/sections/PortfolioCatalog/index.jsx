import { ContentWrapper } from '@/components/ContentWrapper';
import Image from 'next/image';
import styles from './style.module.scss';

export const PortfolioCatalog = ({ currentItem }) => {
  return (
    <div className={styles.wrapper}>
      <ContentWrapper>
        <div className={styles.catalog}>
          <div className={styles.catalog__content}>
            <div className={styles.catalog__section_name}>{currentItem.catalog.sectionName}</div>
            <div className={styles.catalog__title}> {currentItem.catalog.title}</div>
            <div className={styles.catalog__desc}> {currentItem.catalog.desc}</div>
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
