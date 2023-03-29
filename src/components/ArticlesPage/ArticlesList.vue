<template>
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
export default defineComponent({
  name: "ArticlesList",
  components: { ArticlesListElement },
  props: {
    articles: {
      type: Array,
      required: false,
    },
  },
  setup() {},
});
</script>

<style></style>
