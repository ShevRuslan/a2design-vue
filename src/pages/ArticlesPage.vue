<template>
  <PagePreloader :isLoading="isLoading" />
  <q-page class="flex column q-px-lg q-pb-lg">
    <ArticlesList />
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import PagePreloader from "src/components/PagePreloader.vue";
import ArticlesList from "src/components/ArticlesPage/ArticlesList.vue";
export default defineComponent({
  name: "ArticlesPage",
  components: {
    PagePreloader,
    ArticlesList,
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
