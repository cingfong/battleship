<template>
  <div>
    <navbar />
    <div class="flex justify-center items-center h-[100vh]">
      <!-- <div class="backgroundImage -z-10 fixed"></div> -->
      <router-view />
    </div>
  </div>
</template>
<script>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import navbar from "./components/utils/navbar.vue";
export default {
  name: "App",
  components: {
    navbar,
  },
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
