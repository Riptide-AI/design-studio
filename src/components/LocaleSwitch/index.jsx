import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const LocaleSwitch = () => {
  const [lang, setLang] = useState('ua');
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    setLang(lang);
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div className={styles.lang_wrap}>
      <Image
        src="/img/lang-eng.svg"
        width={32}
        height={32}
        role="button"
        style={{ opacity: lang === 'en' ? 1 : 0.3 }}
        onClick={() => changeLanguage('en')}
        className={styles.lang_btn}
        alt="lang-icon"
      />
      <div className={styles.separator} />
      <Image
        src="/img/lang-ua.svg"
        width={32}
        height={32}
        role="button"
        style={{ opacity: lang === 'ua' ? 1 : 0.3 }}
        onClick={() => changeLanguage('ua')}
        className={styles.lang_btn}
        alt="lang-icon"
      />
    </div>
  );
};
