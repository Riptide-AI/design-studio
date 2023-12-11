import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import Image from 'next/image';
import { CustomButton } from '@/components/CustomButton';
import { solutions } from '@/data/seo';

export const SeoSolution = () => {
  return (
    <ContentWrapper>
      <div className={styles.seo_solution}>
        <div className={styles.seo_solution__title}>{solutions.title}</div>
        <div className={styles.seo_solution__content}>
          <div className={styles.seo_solution_methods}>
            <div className={styles.seo_solution__list}>
              {solutions.list.map((item) => (
                <div className={styles.seo_solution__item} key={item.title}>
                  <div className={styles.seo_solution__item__icon}>
                    <Image src={item.icon} alt="" height={32} width={32} />
                  </div>
                  <div className={styles.seo_solution__item__title}>{item.title}</div>
                </div>
              ))}
            </div>
            <CustomButton title={solutions.btn} stylesClassName={styles.seo_solution__btn} />
          </div>
          <div className={styles.seo_solution__image}>
            <Image src={solutions.image} alt="" fill={true} />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
