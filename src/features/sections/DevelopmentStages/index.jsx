import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';

export const DevelopmentStages = ({ data, length = 7 }) => {
  return (
    <ContentWrapper>
      <div className={styles.stages}>
        <div className={styles.stages__title}>{data.title}</div>
        <div className={styles.stages__desc}>{data.desc}</div>
        <div
          className={styles.stages__timeline}
          style={{ gridTemplateColumns: `repeat(${length},1fr)` }}
        >
          {data.list.map((item, i) => (
            <div  className={styles.stages__timeline__item} key={`item-${i}`}>
              <div data-count ={i + 1} className={styles.stages__timeline__item__order}>0</div>
              <div className={styles.stages__timeline__item__title}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
