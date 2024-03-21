import { ContentWrapper } from '@/components/ContentWrapper';
import Image from 'next/image';
import styles from './style.module.scss';

export const PortfolioAdaptive = ({ currentItem }) => {
  return (
    <ContentWrapper>
      <div className={styles.adaptive}>
        <div className={styles.adaptive__content}>
          <div className={styles.adaptive__section_name}>{currentItem.adaptive.sectionName}</div>
          <div className={styles.adaptive__title}> {currentItem.adaptive.title}</div>
          <div className={styles.adaptive__desc}> {currentItem.adaptive.desc}</div>
        </div>
        <div className={styles.adaptive__image}>
          <Image src={currentItem.adaptive.image} alt="" fill={true} />
        </div>
      </div>
    </ContentWrapper>
  );
};
