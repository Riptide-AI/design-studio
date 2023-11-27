import { ContentWrapper } from '@/components/ContentWrapper';
import { workflow } from '@/data/frontend';
import styles from "./style.module.scss";

export const Workflow = () => {
  return (
    <ContentWrapper>
      <div className={styles.workflow}>
        <div className={styles.workflow__title}>{workflow.title}</div>
        <div className={styles.workflow__desc}>{workflow.desc}</div>
        <div className={styles.workflow__list}>
          {workflow.list.map((item, i) => (
            <div className={styles.workflow__item}>
              <div className={styles.workflow__item__order}>0{i+1}</div>
              <div className={styles.workflow__item__title}>{item.title}</div>
              <div className={styles.workflow__item__desc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
