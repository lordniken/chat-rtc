import i18n from 'i18next';
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend'; // primary use cache
import HttpApi from 'i18next-http-backend'; // fallback http load

import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { getDefaultLang } from './selectors';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    react: {
      useSuspense: true
    },
    fallbackLng: getDefaultLang(),
    debug: false,
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
          prefix: 'i18next_res_',
          expirationTime: 7 * 24 * 60 * 60 * 1000,
          defaultVersion: '',
          versions: {},
          store: window.localStorage,
        },
        {
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
      ],
    },
  });

export default i18n;
