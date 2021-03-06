import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/home.vue";
import About from "./views/about.vue";
import SelectPage from "./views/selectPage.vue";
import Game from "./views/game.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/game", name: "Game", component: Game },
  { path: "/select", component: SelectPage },
];
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
