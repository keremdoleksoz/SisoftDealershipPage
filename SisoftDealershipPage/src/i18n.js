import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './Locales/En/translation.json';
import translationTR from './Locales/Tr/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  tr: {
    translation: translationTR
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr', // Başlangıç dili
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
