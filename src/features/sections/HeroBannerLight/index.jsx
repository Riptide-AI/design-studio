import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';


export const HeroBannerLight = () => {
  return (
    <section className={styles.wrapper} style={{background: `linear-gradient(0deg, rgba(18, 39, 60, 0.80) 0%, rgba(18, 39, 60, 0.80) 100%), url(/img/hero-banner-1.jpg), lightgray 50% / cover no-repeat`,
    backgroundPosition: "center", backgroundSize: "100% auto"}}
    >
      <ContentWrapper>
        <div className={styles.hero}>
            <h2 className={styles.hero__title}>Послуги</h2>
            <h3 className={styles.hero__desc}>
            Ми не просто створюємо сайти, ми надаємо повний комплекс маркетингових послуг
            </h3>
        </div>
      </ContentWrapper>
    </section>
  );
};
