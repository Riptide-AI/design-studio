import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';

export const CheckList = ({ data }) => {
  return (
    <ContentWrapper>
      <div className={styles.check}>
        <div  className={styles.check__title}>{data.title}</div>
        <div className={styles.check__list}>
          {data.list.map((item) => (
            <div className={styles.check__item} key={item.title} data-check={data.checkIcon}>
              <div className={styles.check__item__title}>{item.title}</div>
              <div className={styles.check__item__desc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
