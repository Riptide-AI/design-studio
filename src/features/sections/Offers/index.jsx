import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
export const Offers = ({ data, arrow = true }) => {
  const {t}=useTranslation();
  const router = useRouter();
  const navigateTo = (link) => {
    if (link) {
      router.push(link);
    }
  };
  return (
    <ContentWrapper>
      <div className={styles.offers_block}>
        {data?.title && <div className={styles.offers_title}>{t(data.title)}</div>}
        <div className={styles.offers}>
          {data.list.map((item, i) => (
            <div
              className={styles.offers__item}
              key={`offer-${i}`}
              onClick={() => navigateTo(item.link)}
            >
              <div className={styles.offers__item_offer_name}>{item.offerName}</div>
              <div className={styles.offers__item_title}>{t(item.title)}</div>
              <div className={styles.offers__item_desc}>{t(item.desc)}</div>
              {arrow && <div className={styles.arrow}></div>}
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
