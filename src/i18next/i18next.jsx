import i18next from "i18next";
import i18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import i18nextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import uzTranslation from "../locales/uz.json";
import enTranslation from "../locales/en.json";
import ruTranslation from "../locales/ru.json";

i18next
  .use(i18nextBrowserLanguageDetector)
  .use(i18nextHttpBackend)
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uzTranslation },
      en: { translation: enTranslation },
      ru: { translation: ruTranslation }
    },
    fallbackLng: "uz", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18next;
