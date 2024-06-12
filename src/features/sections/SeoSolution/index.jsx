import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import Image from 'next/image';
import { solutions } from '@/data/seo';
import { useTranslation } from 'react-i18next';

export const SeoSolution = () => {
  const { t } = useTranslation();

  return (
    <ContentWrapper>
      <div className={styles.seo_solution}>
        <div className={styles.seo_solution__title}>{t(solutions.title)}</div>
        <div className={styles.seo_solution__content}>
          <div className={styles.seo_solution_methods}>
            <div className={styles.seo_solution__list}>
              {solutions.list.map((item) => (
                <div className={styles.seo_solution__item} key={t(item.title)}>
                  <div className={styles.seo_solution__item__content}>
                    <Image src={item.icon} alt="" height={32} width={32} />
                    <div className={styles.seo_solution__item__title}>{t(item.title)}</div>
                  </div>
                  <div></div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.seo_solution__images}>
            <div className={styles.seo_solution__image}>
              <Image src={solutions.imageOne} alt="" fill={true} />
            </div>
            <div className={styles.seo_solution__image}>
              <Image src={solutions.imageTwo} alt="" fill={true} />
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
