import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { aboutUs } from '@/data/homepage';
import Image from 'next/image';
import { CustomButton } from '@/components/CustomButton';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const AboutUsSection = ({children=null}) => {
  const { t } = useTranslation();
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
      <section className={styles.about_us}>
        <div className={styles.about_us__content}>
          <h3 className={styles.about_us__title}>{aboutUs.title}</h3>
          <div
            className={styles.about_us__desc}
            dangerouslySetInnerHTML={{ __html: aboutUs.desc }}
          />
        </div>
        <div className={styles.about_us__image}>
          <Image src={aboutUs.image} fill="true" alt="" placeholder="empty" />
        </div>
        <div className={styles.about_us__cards_list}>
          {aboutUs.cards.map((card, index) => (
            <div className={styles.about_us__card} key={index}>
              <div className={styles.about_us__card_counter}>{card.counter}</div>
              <div className={styles.about_us__card_desc}>
                {windowWidth > 1440 ? card.desc : aboutUs.mobileCards[index].desc}
              </div>
            </div>
          ))}
        </div>
        {children}
        {windowWidth < 1440 && (
          <CustomButton title={t('buttons.aboutUsbtn')} stylesClassName={styles.navbar__btn} />
        )}
      </section>
    </ContentWrapper>
  );
};
