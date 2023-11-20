import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { technologies } from '@/data/services';
export const Technologies = () => {
  return (
    <ContentWrapper>
      <div className={styles.technologies}>
        <div className={styles.technologies__title}>{technologies.title}</div>
        <div className={styles.technologies__desc}>{technologies.desc}</div>
        <div className={styles.technologies__list}>
          {technologies.list.map((item) => (
            <div className={styles.technologies__item}>
              <div className={styles.technologies__item_title}>{item.title}</div>
              <div className={styles.technologies__item_desc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
