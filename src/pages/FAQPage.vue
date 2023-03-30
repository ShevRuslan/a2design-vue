<template>
  <PagePreloader :isLoading="isLoading" />
  <q-page class="flex column q-px-lg q-pb-lg">
    <h4>Ответы на частозадаваемые вопросы</h4>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import PagePreloader from "src/components/PagePreloader.vue";
export default defineComponent({
  name: "FAQPage",
  components: {
    PagePreloader,
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

<style></style>
