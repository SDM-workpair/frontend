import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import zh from './locales/zh.js';
import en from './locales/en.js';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons'


const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    zh,
    en
  }
})
createApp(App)
.use(vuetify)
.use(router)
.use(i18n).mount('#app');

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
