import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
export const Offers = ({ data, arrow = true }) => {
  return (
    <ContentWrapper>
      <div className={styles.offers_block}>
        {data?.title && <div className={styles.offers_title}>{data.title}</div>}
        <div className={styles.offers}>
          {data.list.map((item, i) => (
            <div className={styles.offers__item} key={`offer-${i}`}>
              <div className={styles.offers__item_offer_name}>{item.offerName}</div>
              <div className={styles.offers__item_title}>{item.title}</div>
              <div className={styles.offers__item_desc}>{item.desc}</div>
              {arrow && <div className={styles.arrow}></div>}
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
