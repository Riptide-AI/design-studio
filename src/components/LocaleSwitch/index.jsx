import { useTranslation } from 'react-i18next';

export const LocaleSwitch = ()=> {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ua')}>Українська</button>
    </div>
  );
}

