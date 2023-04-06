import { createI18n } from 'vue-i18n';
import en from './locales/en.js';
import zhTW from './locales/zh-TW.js';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    'zh-TW': zhTW,
  },
});

export default i18n;