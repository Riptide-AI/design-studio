import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';

export const PortfolioBanner = ({ currentItem }) => {
  return (
    <section
      className={styles.hero}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 50% 0%, rgba(0, 0, 0, 0.50) 100%), url(${currentItem.background}) center / cover no-repeat`,
      }}
    >
      <ContentWrapper>
        <div className={styles.wrapper}>
          <div className={styles.hero__title}>{currentItem.title}</div>
          <div className={styles.hero__desc}>{currentItem.desc}</div>
        </div>
      </ContentWrapper>
    </section>
  );
};
