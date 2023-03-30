<template>
  <PagePreloader :isLoading="isLoading" />
  <q-page class="flex column q-px-lg q-pb-lg">
    <h4>Ответы на частозадаваемые вопросы</h4>
    <FAQList />
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import PagePreloader from "src/components/PagePreloader.vue";
import FAQList from "src/components/FAQPage/FAQList.vue";
export default defineComponent({
  name: "FAQPage",
  components: {
    PagePreloader,
    FAQList,
  },
  setup() {
    const isLoading = ref(true);

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 2000);
    });
    return {
      isLoading,
    };
  },
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  h4 {
    font-size: 24px;
  }
}
</style>
