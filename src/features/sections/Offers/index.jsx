import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { offers } from '@/data/services';
export const Offers = () => {
  return (
    <ContentWrapper>
      <div className={styles.offers}>
        {offers.map((item,i) => (
          <div className={styles.offers__item} key={`offer-${i}`}>
            <div className={styles.offers__item_offer_name}>{item.offerName}</div>
            <div className={styles.offers__item_title}>{item.title}</div>
            <div className={styles.offers__item_desc}>{item.desc}</div>
            <div className={styles.arrow}></div>
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
};
