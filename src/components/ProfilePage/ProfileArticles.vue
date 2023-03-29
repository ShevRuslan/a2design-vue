<template>
  <h4>Ваши новости:</h4>
  <ArticlesList :articles="articles" />
</template>

<script>
import ArticlesList from "src/components/ArticlesPage/ArticlesList.vue";
import { defineComponent, computed, onBeforeMount, onMounted } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "ProfileArticles",
  components: {
    ArticlesList,
  },
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      store.dispatch("articles/loadArticles");
    });
    onMounted(() => {});
    return {
      articles: computed(() =>
        store.getters["articles/getArticles"].filter(
          (article) => article.author == "Руслан Шевцов"
        )
      ),
    };
  },
});
</script>

<style></style>
