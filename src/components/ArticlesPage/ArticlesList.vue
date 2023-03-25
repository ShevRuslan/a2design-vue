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
import { defineComponent } from "vue";
import ArticlesListElement from "./ArticlesListElement.vue";
export default defineComponent({
  name: "ArticlesList",
  components: { ArticlesListElement },
  setup() {
    const articles = [
      {
        id: 1,
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        title: "Первая новость",
        author: "Руслан Шевцов",
        description: "Какое-то описание новости",
      },
      {
        id: 2,
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        title: "Вторая новость",
        author: "Руслан Шевцов",
        description: "Какое-то описание новости",
      },
      {
        id: 3,
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        title: "Третья новость",
        author: "Руслан Шевцов",
        description: "Какое-то описание новости",
      },
      {
        id: 4,
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        title: "Четвертая новость",
        author: "Руслан Шевцов",
        description: "Какое-то описание новости",
      },
      {
        id: 5,
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        title: "Пятая новость",
        author: "Руслан Шевцов",
      },
    ];
    return {
      articles,
    };
  },
});
</script>

<style></style>
