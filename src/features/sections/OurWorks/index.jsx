import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { CustomButton } from '@/components/CustomButton';
import { ourWorks } from '@/data/homepage';
import { portfolioPagination } from '@/data/portfolio';
import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
export const OurWorks = () => {
  const { t } = useTranslation();

  const lastProjects = useMemo(() => {
    return portfolioPagination.lists.web_development.slice(-3);
  }, []);

  return (
    <ContentWrapper>
      <div className={styles.ourworks}>
        <div className={styles.ourworks__title}>{t(ourWorks.title)}</div>
        <div className={styles.ourworks__list}>
          {lastProjects.map((item, index) => (
            <div className={styles.ourworks__item} key={index}>
              <div className={styles.ourworks__item__title}>{t(item.title)}</div>
              <div className={styles.ourworks__item__desc}>{t(item.theme)}</div>
            </div>
          ))}
        </div>
        <Link href={ourWorks.btnLink}>
          <CustomButton title={t(ourWorks.btn)} stylesClassName={styles.ourworks__btn} />
        </Link>
      </div>
    </ContentWrapper>
  );
};
