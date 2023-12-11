// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: require('./locales/en.json'), // Path to English translations
      },
      ua: {
        translation: require('./locales/ua.json'), // Path to Ukrainian translations
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

export default i18n;
