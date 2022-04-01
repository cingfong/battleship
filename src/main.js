import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import en from "../path/locales/en-US.json";
import zh from "../path/locales/zh-Hant.json";
import "./index.css";
import router from "./router";

const i18n = createI18n({
  // something vue-i18n options here ...
  // legacy: false,
  locale: "zh",
  messages: {
    en,
    zh,
  },
});
createApp(App).use(i18n).use(router).mount("#app");
