import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { statsCards } from '@/data/homepage';
import { StatsCard } from '@/components/StatsCard';
import { InfiniteSlider } from '@/components/InfiniteSlider';
import { partners } from '@/data/homepage';

export const HeroBanner = () => {
  return (
    <section className={styles.hero}>
      <ContentWrapper>
        <div className={styles.wrapper}>
          <div className={styles.hero__header}>
            <h1 className={styles.hero__title}>Fullstack innovations</h1>
            <h2 className={styles.hero__desc}>
              Розробка сайтів та копмлексне просування вашого бізнесу в лідери
            </h2>
          </div>
          <div className={styles.hero__stats_list}>
            {statsCards.map((card, index) => (
              <StatsCard card={card} id={index} key={index} />
            ))}
          </div>
          <InfiniteSlider list={partners} />
        </div>
      </ContentWrapper>
    </section>
  );
};
