import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationsEn from "./locales/en.json";
import translationsEs from "./locales/es.json";
import translationsFr from "./locales/fr.json";
import translationsRu from "./locales/ru.json";
import translationsDe from "./locales/de.json";
import translationsIt from "./locales/it.json";

const resources = {
    en: {translation: translationsEn},
    es: {translation: translationsEs},
    fr: {translation: translationsFr},
    ru: {translation: translationsRu},
    de: {translation: translationsDe},
    it: {translation: translationsIt}
};
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;