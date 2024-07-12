import { ContentWrapper } from '@/components/ContentWrapper';
import { whyWorkWithUs, whyWorkWithUs_mob } from '@/data/partnership';
import styles from './style.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const WhyWorkWithUs = () => {
  const {t}=useTranslation()
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
      <div className={styles.why_work_with_us}>
        <div className={styles.why_work_with_us__title}>{t(whyWorkWithUs.title)}</div>
        <div className={styles.why_work_with_us__list}>
          {windowWidth>1440?
          whyWorkWithUs.list.map((item, i) => (
            <div className={styles.card} key={`item-${i}`}>
              <div className={styles.card_image}>
                {item.icons.map((img, i) => (
                  <Image
                    key={`item-${img}`}
                    data-name={item.styles[i]}
                    src={img}
                    alt="Picture"
                    width={40}
                    height={40}
                  />
                ))}
              </div>
              <div className={styles.card_label}>{t(item.title)}</div>
              <div className={styles.card_text}>{t(item.desc)}</div>
            </div>
          )):
          whyWorkWithUs_mob.list.map((item, i) => (
            <div className={styles.card} key={`item-${i}`}>
              <div className={styles.card_image}>
                {item.icons.map((img, i) => (
                  <Image
                    key={`item-${img}`}
                    data-name={item.styles[i]}
                    src={img}
                    alt="Picture"
                    width={40}
                    height={40}
                  />
                ))}
              </div>
              <div className={styles.card_label}>{t(item.title)}</div>
              <div className={styles.card_text}>{t(item.desc)}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
