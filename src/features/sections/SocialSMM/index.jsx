import { ContentWrapper } from '@/components/ContentWrapper';
import { socialSMM } from '@/data/smm';
import styles from './style.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const SocialSMM = () => {
  const {t}=useTranslation();
  return (
    <ContentWrapper>
      <div className={styles.social_smm}>
        <div className={styles.social_smm__title}>{t(socialSMM.title)}</div>
        <div className={styles.social_smm__list}>
          {socialSMM.list.map((item, i) => (
            <div className={styles.social_smm__item} key={`item-${i}`}>
              <div className={styles.social_smm__item__title}>{t(item.title)}</div>
              <div className={styles.social_smm__item__count}>0{i + 1}</div>
              <div className={styles.social_smm__item__desc}>{t(item.desc)}</div>
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
