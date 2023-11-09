import { ContentWrapper } from '@/components/ContentWrapper';
import { businessCards } from '@/data/homepage';
import styles from './style.module.scss';
import { BusinessCard } from '@/components/BusinessCard';
export const BusinessShowCase = () => {
  return (
    <ContentWrapper>
      <section className={styles.business}>
        <h3 className={styles.business__title}>Створюємо веб - сайти для різних типів бізнесу</h3>

        <div className={styles.business__cards}>
          {businessCards.map((item, index) => (
            <BusinessCard card={item} key={index} />
          ))}
        </div>
      </section>
    </ContentWrapper>
  );
};
