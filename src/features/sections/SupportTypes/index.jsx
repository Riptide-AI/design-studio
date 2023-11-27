import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';

export const SupportTypes = ({ data }) => {
  return (
    <ContentWrapper>
      <div className={styles.support_types}>
        <div className={styles.support_types__title}>{data.title}</div>
        <div className={styles.support_types__list}>
          {data.list.map((item, i) => (
            <div className={styles.support_types__item} key={`item-${i}`}>
              <div className={styles.support_types__item__order}>00{i + 1}</div>
              <div className={styles.support_types__item__title}>{item.title}</div>
              <div className={styles.support_types__item__desc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
