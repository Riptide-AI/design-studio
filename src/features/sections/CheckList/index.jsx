import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const CheckList = ({ data }) => {
  const { t } = useTranslation();
  return (
    <ContentWrapper>
      <div className={styles.check}>
        <div className={styles.check__title}>{t(data.title)}</div>
        <div className={styles.check__list}>
          {data.list.map((item) => (
            <div className={styles.check__item} key={item.title} data-check={data.checkIcon}>
              <div className={styles.check__item__title}>{t(item.title)}</div>
              <div className={styles.check__item__desc}>{t(item.desc)}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
