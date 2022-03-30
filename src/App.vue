<template>
  <div class="flex justify-center items-center h-[100vh]">
    <button class="bg-amber-600 h-16 w-48">Save Changes</button>
    <div class="backgroundImage -z-10 fixed"></div>
    <h1>{{ t("language") }}</h1>
  </div>
</template>
<script>
import { useI18n } from "vue-i18n";

export default {
  name: "App",
  setup() {
    const { locale, t } = useI18n({
      inheritLocale: true,
    });
    return { locale, t };
  },
};
</script>

<i18n>
{
  "en": {
    "language": "Language",
    "hello": "hello, world!"
  },
  "ja": {
    "language": "言語",
    "hello": "こんにちは、世界！"
  }
}
</i18n>

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
