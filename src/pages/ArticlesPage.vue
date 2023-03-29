<template>
  <PagePreloader :isLoading="isLoading" />
  <q-page class="flex column q-px-lg q-pb-lg">
    <h4>Новости</h4>
    <ArticlesList :articles="articles" />
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import PagePreloader from "src/components/PagePreloader.vue";
import ArticlesList from "src/components/ArticlesPage/ArticlesList.vue";
export default defineComponent({
  name: "ArticlesPage",
  components: {
    PagePreloader,
    ArticlesList,
  },
  setup() {
    const store = useStore();
    const isLoading = ref(true);

    onMounted(() => {
      store.dispatch("articles/loadArticles");
      setTimeout(() => {
        isLoading.value = false;
      }, 2000);
    });

    return {
      isLoading,
      articles: computed(() => store.getters["articles/getArticles"]),
    };
  },
});
</script>

<style></style>
