import i18n from 'i18next';
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend'; // primary use cache
import HttpApi from 'i18next-http-backend'; // fallback http load

import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    react: {
      useSuspense: false
    },
    fallbackLng: 'ru',
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      backends: [
        LocalStorageBackend, // primary
        HttpApi, // fallback
      ],
      backendOptions: [
        {
          // prefix for stored languages
          prefix: 'i18next_res_',
          // expiration
          expirationTime: 7 * 24 * 60 * 60 * 1000,
          // Version applied to all languages, can be overriden using the option `versions`
          defaultVersion: '',
          // language versions
          versions: {},
          // can be either window.localStorage or window.sessionStorage. Default: window.localStorage
          store: window.localStorage,
        },
        {
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
      ],
    },
  });

export default i18n;
