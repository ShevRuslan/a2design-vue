<template>
  <q-page class="flex column q-px-lg q-pb-lg">
    <AboutApp />
    <div class="row q-col-gutter-md">
      <ViewCard
        v-for="card in cards"
        :title="card.title"
        :description="card.description"
        :key="card.id"
        :link="card.link"
      />
    </div>
    <TimelineDev />
    <FeedBackForm />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ViewCard from "src/components/HomePage/ViewCard.vue";
import FeedBackForm from "src/components/HomePage/FeedBackForm.vue";
import TimelineDev from "src/components/HomePage/TimelineDev.vue";
import AboutApp from "src/components/HomePage/AboutApp.vue";
export default defineComponent({
  name: "HomePage",
  components: {
    ViewCard,
    FeedBackForm,
    TimelineDev,
    AboutApp,
  },
  setup() {
    const cards = [
      {
        title: "Главная страница",
        description: "Информация о главной странице",
        link: "/",
        id: 1,
      },
      {
        title: "Новости",
        description: "Просмотр новостей",
        link: "/articles",
        id: 2,
      },
      {
        title: "Профиль",
        description: "Ваш профиль",
        link: "/profile",
        id: 3,
      },
      {
        title: "FAQ",
        description: "Ответы на частозадаваемые вопросы",
        link: "/faq",
        id: 4,
      },
    ];
    return { cards };
  },
});
</script>
<style lang="scss"></style>
