<template>
  <h4>Новости</h4>
  <div class="row q-col-gutter-md items-stretch">
    <ArticlesListElement
      v-for="article in articles"
      :key="article.id"
      :title="article.title"
      :img="article.img"
      :author="article.author"
      :description="article.description"
    />
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import ArticlesListElement from "./ArticlesListElement.vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "ArticlesList",
  components: { ArticlesListElement },
  setup() {
    const store = useStore();
    return {
      articles: computed(() => store.getters["articles/getArticles"]),
    };
  },
});
</script>

<style></style>
