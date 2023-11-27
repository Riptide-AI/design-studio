import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { CustomButton } from '@/components/CustomButton';
import { ourWorks } from '@/data/homepage';
export const OurWorks = () => {
  return (
    <ContentWrapper>
      <div className={styles.ourworks}>
        <div className={styles.ourworks__title}>{ourWorks.title}</div>
        <div className={styles.ourworks__list}>
          {ourWorks.list.map((item, index) => (
            <div className={styles.ourworks__item} key={index}>
              <div className={styles.ourworks__item__title}>{item.title}</div>
              <div className={styles.ourworks__item__desc}>{item.desc}</div>
            </div>
          ))}
        </div>
        <CustomButton title={ourWorks.btn} stylesClassName={styles.ourworks__btn} />
      </div>
    </ContentWrapper>
  );
};
