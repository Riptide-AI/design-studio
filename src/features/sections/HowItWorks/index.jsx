import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { CustomButton } from '@/components/CustomButton';
import { howitworks } from '@/data/homepage';
import Image from 'next/image';

export const HowItWorks = () => {
  return (
    <ContentWrapper>
      <div className={styles.howitworks}>
        <h3 className={styles.howitworks__title}>Як ми працюємо</h3>
        <div className={styles.howitworks__cards}>
          {howitworks.map((item) => (
            <div className={styles.howitworks__card}>
              <div className={styles.howitworks__card__icon}>
                <Image src={item.icon} height={100} width={100} />
              </div>
              <CustomButton title={item.title} stylesClassName={styles.howitworks__card__btn} />
            </div>
          ))}
        </div>
        <CustomButton title="Замовити веб-сайт" stylesClassName={styles.howitworks__btn} />
      </div>
    </ContentWrapper>
  );
};
