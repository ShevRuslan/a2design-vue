<template>
  <div class="q-mt-lg">
    <q-timeline color="secondary">
      <q-timeline-entry
        class="timeline-heading"
        heading
        body="Этапы разработка нашего проекта"
      />

      <q-timeline-entry
        v-for="timeline in timelines"
        :key="timeline.id"
        :title="timeline.title"
        :subtitle="timeline.subtitle"
        icon="done_all"
        :body="timeline.body"
      />
    </q-timeline>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TimelineDev",
  setup() {
    const timelines = [
      {
        id: 1,
        title: "Начала проекта",
        subtitle: "08.03.2023",
        body: "Информация",
      },
      {
        id: 2,
        title: "Составление ТЗ проекта",
        subtitle: "10.03.2023",
        body: "Информация",
      },
      {
        id: 3,
        title: "Дизайн проект",
        subtitle: "15.03.2023",
        body: "Информация",
      },
      {
        id: 4,
        title: "Разработка проекта",
        subtitle: "20.03.2023",
        body: "Информация",
      },
      {
        id: 5,
        title: "Тестирование проекта",
        subtitle: "30.03.2023",
        body: "Информация",
      },
      {
        id: 5,
        title: "Продакшен проекта",
        subtitle: "01.05.2023",
        body: "Информация",
      },
    ];
    return {
      timelines,
    };
  },
});
</script>

<style lang="scss">
@media screen and (max-width: 600px) {
  .timeline-heading {
    .q-timeline__heading-title {
      font-size: 30px;
    }
  }
}
</style>
