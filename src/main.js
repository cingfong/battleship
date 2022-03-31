import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import en from "../path/locales/en-US.json";
import zh from "../path/locales/zh-Hant.json";
import "./index.css";

//
import Home from "../views/home.vue";
import About from "../views/about.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});
//

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
