import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { contactUs } from '@/data/homepage';
import { ContactForm } from '@/components/ContactForm';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const ContactUs = () => {
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
    <div
      className={styles['contact-us']}
      id="contact-form"
      style={{
        background: `linear-gradient(0deg, rgba(18, 39, 60, 0.82) 0%, rgba(18, 39, 60, 0.82) 100%), url(${contactUs.bgImage}), lightgray 50% / cover`,
        backgroundSize: windowWidth>720?'100% auto':'auto 100% ',
        backgroundPosition: 'center',
      }}
    >
      <ContentWrapper>
        <div className={styles['contact-us__content']}>
          <h4 className={styles['contact-us__title']}>{t(contactUs.title)}</h4>
          <ContactForm />
        </div>
      </ContentWrapper>
    </div>
  );
};
