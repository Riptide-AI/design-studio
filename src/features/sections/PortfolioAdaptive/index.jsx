import { ContentWrapper } from '@/components/ContentWrapper';
import Image from 'next/image';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const PortfolioAdaptive = ({ currentItem }) => {
  const { t } = useTranslation();
  return (
    currentItem.adaptive && (
      <ContentWrapper>
        <div className={styles.adaptive}>
          <div className={styles.adaptive__content}>
            <div className={styles.adaptive__section_name}>
              {t(currentItem.adaptive.sectionName)}
            </div>
            <div className={styles.adaptive__title}> {t(currentItem.adaptive.title)}</div>
            <div className={styles.adaptive__desc}> {t(currentItem.adaptive.desc)}</div>
          </div>
          <div className={styles.adaptive__image}>
            <Image src={currentItem.adaptive.image} alt="" width={1600} height={1000} />
          </div>
        </div>
      </ContentWrapper>
    )
  );
};
