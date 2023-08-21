import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files for each language
import translationsEn from "./locales/en.json";
import translationsEs from "./locales/es.json";
import translationsFr from "./locales/fr.json";
import translationsRu from "./locales/ru.json";
import translationsDe from "./locales/de.json";
import translationsIt from "./locales/it.json";

// Define resources with translations for each language
const resources = {
    en: {translation: translationsEn},
    es: {translation: translationsEs},
    fr: {translation: translationsFr},
    ru: {translation: translationsRu},
    de: {translation: translationsDe},
    it: {translation: translationsIt}
};

// Initialize i18n instance
i18n
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'en', // Default language if translation is missing
    debug: process.env.NODE_ENV === 'development', // Debug mode for development    ,
    interpolation: {
      escapeValue: false, // No need to escape HTML characters
    },
    react: {
      useSuspense: false, // Enable Suspense mode for react-i18next
    },
  });


export default i18n;