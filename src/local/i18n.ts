import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ar from './ar.json';
import { I18nManager } from 'react-native';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: I18nManager.isRTL ? 'ar' : 'en',
  fallbackLng: ['ar', 'en'],
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export const isRTL = I18nManager.isRTL;

export const getAppLanguage = () => {
  return i18n.language;
};

export const setAppLanguage = async (lang: 'ar' | 'en') => {
  i18n.changeLanguage(lang);
  if (lang === 'ar') {
    I18nManager.forceRTL(true);
  } else {
    I18nManager.forceRTL(false);
  }
};

export default i18n;
