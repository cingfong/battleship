<template>
  <div class="flex justify-center items-center h-[100vh]">
    <button class="bg-amber-600 h-16 w-48">{{ t("start") }}</button>
    <!-- <div class="backgroundImage -z-10 fixed"></div> -->
    <p>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
export default {
  name: "App",
  setup() {
    const router = useRouter();
    const { locale, t } = useI18n({
      inheritLocale: true,
    });
    return { locale, t, router };
  },
};
</script>

<style>
body {
  margin: 0px;
}
#app {
  width: 100%;
  height: 100%;
}
.backgroundImage {
  width: 100%;
  height: 100%;
  background-image: url("./assets/background.webp");
  min-height: 100vh;
  min-width: 100vh;
  background-repeat: no-repeat;
}
</style>
