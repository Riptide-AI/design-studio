import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const PortfolioGoal = ({ currentItem }) => {
  const {t}=useTranslation();

  return (
    <ContentWrapper>
      <div className={styles.goal}>
        <div className={styles.goal__idea}>
          <div className={styles.goal__title}>{t(currentItem.idea.sectionName)}</div>
          <div className={styles.goal__idea__desc}>{t(currentItem.idea.desc)}</div>
        </div>
        <div className={styles.goal__task}>
          <div className={styles.goal__title}>{t(currentItem.task.sectionName)}</div>
          <ul className={styles.goal___task__list}>
            {currentItem.task.list.map((item, i) => (
              <li className={styles.goal__task__list__item} key={`item-${i}`}>
                {t(item.title)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentWrapper>
  );
};
