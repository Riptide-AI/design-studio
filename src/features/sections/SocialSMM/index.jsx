import { ContentWrapper } from '@/components/ContentWrapper';
import { socialSMM } from '@/data/smm';
import styles from './style.module.scss';
import Image from 'next/image';

export const SocialSMM = () => {
  return (
    <ContentWrapper>
      <div className={styles.social_smm}>
        <div className={styles.social_smm__title}>{socialSMM.title}</div>
        <div className={styles.social_smm__list}>
          {socialSMM.list.map((item, i) => (
            <div className={styles.social_smm__item} key={`item-${i}`}>
              <div className={styles.social_smm__item__title}>{item.title}</div>
              <div className={styles.social_smm__item__count}>0{i + 1}</div>
              <div className={styles.social_smm__item__desc}>{item.desc}</div>
            </div>
          ))}
        </div>
        <div className={styles.social_smm__images}>
          <div className={styles.social_smm__image}>
            <Image src={socialSMM.imageOne} fill={true} alt={''} />
          </div>
          <div className={styles.social_smm__image}>
            <Image src={socialSMM.imageTwo} fill={true} alt={''} />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
