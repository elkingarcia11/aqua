import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files for each language
import translationsEn from "./locales/en.json";
import translationsEs from "./locales/es.json";
import translationsFr from "./locales/fr.json";
import translationsRu from "./locales/ru.json";
import translationsDe from "./locales/de.json";
import translationsIt from "./locales/it.json";

// Define resources with translations for each language
const res = {
  en: { translation: translationsEn },
  es: { translation: translationsEs },
  fr: { translation: translationsFr },
  ru: { translation: translationsRu },
  de: { translation: translationsDe },
  it: { translation: translationsIt },
};

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: res,
  });

export default i18n;
