import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { t } from 'i18next';

export const HeroBannerLight = ({ data }) => {
  return (
    <section
      className={styles.wrapper}
      style={{
        background: `linear-gradient(0deg, rgba(18, 39, 60, 0.80) 0%, rgba(18, 39, 60, 0.80) 100%), url(${data.bg}) , lightgray 50% / cover no-repeat`,
        backgroundPosition: 'center',
        backgroundSize: '100% auto',
      }}
    >
      <ContentWrapper>
        <div className={styles.hero}>
          <h2 className={styles.hero__title}>{t(data.title)}</h2>
          {/* <h3 className={styles.hero__desc}>{data.desc}</h3> */}
        </div>
      </ContentWrapper>
    </section>
  );
};
