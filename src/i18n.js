import i18n from "i18next";
import Backend from "i18next-http-backend"; //it allows us to fetch translations from where we will be storing it
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      //translation file path
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "en", //if sth isnt choisen we set by default
    debug: false, //it allows u to look at all the languages an everything that is happening in the console for thew browser while u  r  working towards app  It is something should be disabled in production
    ns: ["navbar", "homePageSlider", "shipping", "carousel", "footerr", "about", "qualityPolicy", "contact", "general"],
    //ns can have multiple namescapes,in case you want to divide a huge translation into smaller pieces and load them on demand
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
      useSuspense: true,
    },
  });
export default i18n; //indexe import eledik
