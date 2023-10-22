import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const LocaleSwitch = () => {
  const [lang, setLang] = useState('ua');
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    lang === 'ua' ? setLang('en') : setLang('ua');
  };
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <Image
      src="/img/lang-eng.jpg"
      width={32}
      height={32}
      role="button"
      className={styles['lang-btn']}
      onClick={() => changeLanguage()}
      alt="lang-icon"
    />
  );
};
