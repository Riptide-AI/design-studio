import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';

import { useTranslation } from 'react-i18next';

export const HeroBannerLight = ({ data }) => {
  const { t } = useTranslation();
  return (
    <section
      className={styles.wrapper}
      style={{
        background: `linear-gradient(0deg, rgba(10, 22, 34, 0.80) 0%, rgba(10, 22, 34, 0.80) 100%), url(${data.bg}) , lightgray 50% / cover`,
        backgroundPosition: 'center',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
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
