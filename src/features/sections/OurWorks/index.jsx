import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { CustomButton } from '@/components/CustomButton';
import { ourWorks } from '@/data/homepage';
import { portfolioPrev } from '@/data/portfolio';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const OurWorks = () => {
  const { t } = useTranslation();

 /*  const lastProjects = useMemo(() => {
    return portfolioPagination.lists.web_development.filter((el) => {
      el.id ==  19
    });
  }, []); */
  const [windowWidth, setwindowWidth] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setwindowWidth(window.innerWidth);
      const updateWidth = () => setwindowWidth(window.innerWidth);
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);
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
                <div className={styles.ourworks__item__title}>{windowWidth>1440?t(item.title_to_prev):t(item.title_to_prev_mob)}</div>
                <div className={styles.ourworks__item__desc}>{t(item.theme)}</div>
              </div>
            </Link>
          ))}
        </div>
        <Link href={ourWorks.btnLink} className={styles.link_btn}>
          <CustomButton title={t(ourWorks.btn)} stylesClassName={styles.ourworks__btn} />
        </Link>
      </div>
    </ContentWrapper>
  );
};
