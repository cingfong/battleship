<template>
  <div>
    <router-link
      to="/game"
      class="bg-amber-600 h-16 w-48 flex justify-center items-center"
      >{{ t("start") }}</router-link
    >
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
export default {
  name: "Home",
  setup() {
    const router = useRouter();
    const { locale, t } = useI18n({
      inheritLocale: true,
    });
    return { locale, t, router };
  },
};
</script>
