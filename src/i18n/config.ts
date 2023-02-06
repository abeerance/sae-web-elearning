import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../translations/en.json';

export const resources = {
  en: { translation: en },
} as const;

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  interpolation: { escapeValue: false },
  resources,
});

export default i18n;
