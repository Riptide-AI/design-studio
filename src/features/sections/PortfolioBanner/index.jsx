import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const PortfolioBanner = ({ currentItem }) => {
  const {t}=useTranslation();
  return (
    <div
      className={styles.hero}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 50% 0%, rgba(0, 0, 0, 0.50) 100%), url(${currentItem.background}) center / cover no-repeat`,
      }}
    >
      <ContentWrapper>
        <div className={styles.wrapper}>
          <div className={styles.hero__title}>{t(currentItem.title)}</div>
          <div className={styles.hero__desc}>{t(currentItem.desc)}</div>
        </div>
      </ContentWrapper>
    </div>
  );
};
