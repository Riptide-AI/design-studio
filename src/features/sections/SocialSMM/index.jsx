import { ContentWrapper } from '@/components/ContentWrapper';
import { socialSMM, socialSMM_mob } from '@/data/smm';
import styles from './style.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const SocialSMM = () => {
  const {t}=useTranslation();
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
      <div className={styles.social_smm}>
        <div className={styles.social_smm__title}>{t(socialSMM.title)}</div>
        <div className={styles.social_smm__list}>
          {windowWidth>1440?socialSMM.list.map((item, i) => (
            <div className={styles.social_smm__item} key={`item-${i}`}>
              <div className={styles.social_smm__item__title}>{t(item.title)}</div>
              <div className={styles.social_smm__item__count}>0{i + 1}</div>
              <div className={styles.social_smm__item__desc}>{t(item.desc)}</div>
            </div>
          ))
        :
        socialSMM_mob.list.map((item, i) => (
          <div className={styles.social_smm__item} key={`item-${i}`}>
            <div className={styles.social_smm__item__title}>{t(item.title)}</div>
            <div className={styles.social_smm__item__count}>0{i + 1}</div>
            <div className={styles.social_smm__item__desc}>{t(item.desc)}</div>
          </div>
        )) }
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
