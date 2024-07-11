import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { CustomButton } from '@/components/CustomButton';
import { ourWorks } from '@/data/homepage';
import { portfolioPagination, portfolioPrev } from '@/data/portfolio';
import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const OurWorks = () => {
  const { t } = useTranslation();

  const lastProjects = useMemo(() => {
    return portfolioPagination.lists.web_development.filter((el) => {
      el.id ==  19
    });
  }, []);
  console.log(lastProjects);
  return (
    <ContentWrapper>
      <div className={styles.ourworks}>
        <div className={styles.ourworks__title}>{t(ourWorks.title)}</div>
        <div className={styles.ourworks__list}>
          {portfolioPrev.list.map((item, index) => (
            <Link
              style={{ backgroundImage: `url(${item.image_vert})` }}
              className={styles.ourworks__item}
              href={'/portfolio/' + item.id}
              key={index}
            >
              <div>
                <div className={styles.ourworks__item__title}>{t(item.title)}</div>
                <div className={styles.ourworks__item__desc}>{t(item.theme)}</div>
              </div>
            </Link>
          ))}
        </div>
        <Link href={ourWorks.btnLink}>
          <CustomButton title={t(ourWorks.btn)} stylesClassName={styles.ourworks__btn} />
        </Link>
      </div>
    </ContentWrapper>
  );
};
