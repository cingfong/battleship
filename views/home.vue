<template>
  <div>
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