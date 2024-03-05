import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';

export const SupportTypes = ({ data, alt }) => {
  return (
    <ContentWrapper>
      <div className={styles.support_types}>
        <div className={styles.support_types__title}>{data.title}</div>
        <div className={`${styles.support_types__list} ${alt ? styles.alt : ''}`}>
          {data.list.map((item, i) => (
            <div
              className={`${styles.support_types__item}  ${alt ? styles.alt : ''}`}
              key={`item-${i}`}
            >
              <div className={`${styles.support_types__item__order} ${alt ? styles.alt : ''} `}>
                00{i + 1}
              </div>
              <div className={`${styles.support_types__item__title} ${alt ? styles.alt : ''}`}>
                {item.title}
              </div>
              <div className={`${styles.support_types__item__desc} ${alt ? styles.alt : ''}`}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
        {data?.image && (
          <div
            className={styles.support_types__image}
            style={{ backgroundImage: `url(${data.image})` }}
          ></div>
        )}
      </div>
    </ContentWrapper>
  );
};
