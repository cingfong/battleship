import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "./index.css";

const i18n = createI18n({
  // something vue-i18n options here ...
  legacy: false,
  locale: 'ja'
});
createApp(App).use(i18n).mount("#app");
