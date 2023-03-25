<template>
  <q-page class="flex column q-pa-lg">
    <h4>Добро пожаловать!</h4>
    <p class="text-body1">
      Наше приложение — это удобный инструмент для взаимодействия с нашей
      службой поддержки. Оно позволяет быстро и легко получать информацию о
      своем профиле, смотреть последние новости, а также находить ответы на
      часто задаваемые вопросы. Вы можете воспользоваться приложением на любом
      устройстве, будь то смартфон, планшет или компьютер. Просто загрузите наше
      приложение на ваше устройство или войдите в систему через браузер, и вы
      сможете быстро получать ответы на свои вопросы. В приложении вы найдете
      раздел FAQ, где сможете найти ответы на многие вопросы. Если вам нужна
      дополнительная помощь, вы можете отправить нам свой вопрос прямо из
      приложения. Мы постараемся ответить вам как можно быстрее и решить все
      возникшие проблемы. Кроме того, приложение также позволяет управлять своим
      профилем и получать последние новости и обновления о нашей работе. Мы
      постоянно работаем над улучшением нашего сервиса, и наше приложение — это
      один из шагов в этом направлении. Благодарим за использование нашего
      приложения!
    </p>
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
export default defineComponent({
  name: "HomePage",
  components: {
    ViewCard,
    FeedBackForm,
    TimelineDev,
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
