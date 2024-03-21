import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';

export const PortfolioGoal = ({ currentItem }) => {
  return (
    <ContentWrapper>
      <div className={styles.goal}>
        <div className={styles.goal__idea}>
          <div className={styles.goal__title}>{currentItem.idea.sectionName}</div>
          <div className={styles.goal__idea__desc}>{currentItem.idea.desc}</div>
        </div>
        <div className={styles.goal__task}>
          <div className={styles.goal__title}>{currentItem.task.sectionName}</div>
          <ul className={styles.goal___task__list}>
            {currentItem.task.list.map((item, i) => (
              <li className={styles.goal__task__list__item} key={`item-${i}`}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentWrapper>
  );
};
