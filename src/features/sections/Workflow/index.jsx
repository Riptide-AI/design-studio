import { ContentWrapper } from '@/components/ContentWrapper';
import { workflow } from '@/data/frontend';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const Workflow = () => {
  const {t}=useTranslation();
  return (
    <ContentWrapper>
      <div className={styles.workflow}>
        <div className={styles.workflow__title}>{t(workflow.title)}</div>
        <div className={styles.workflow__desc}>{t(workflow.desc)}</div>
        <div className={styles.workflow__list}>
          {workflow.list.map((item, i) => (
            <div className={styles.workflow__item} key={`item-${i}`}>
              <div className={styles.workflow__item__order}>0{i + 1}</div>
              <div className={styles.workflow__item__title}>{t(item.title)}</div>
              <div className={styles.workflow__item__desc}>{t(item.desc)}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
