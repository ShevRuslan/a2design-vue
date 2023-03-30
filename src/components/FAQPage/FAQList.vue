<template>
  <div class="row items-stretch">
    <q-list bordered class="rounded-borders full-width">
      <FAQListElement
        v-for="FAQElement in FAQElements"
        :key="FAQElement.id"
        :description="FAQElement.description"
        :icon="FAQElement.icon"
        :title="FAQElement.title"
      />
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FAQListElement from "./FAQListElement.vue";
export default defineComponent({
  name: "FAQList",
  components: {
    FAQListElement,
  },
  setup() {
    const FAQElements = [
      {
        id: 1,
        icon: "perm_identity",
        title: "Первый вопрос",
        description: "Ответ на вопрос",
      },
      {
        id: 2,
        icon: "signal_wifi_off",
        title: "Второй вопрос",
        description: "Ответ на вопрос",
      },
      {
        id: 3,
        icon: "drafts",
        title: "Третий вопрос",
        description: "Ответ на вопрос",
      },
      {
        id: 4,
        title: "Четвертый вопрос",
        description: "Ответ на вопрос",
      },
      {
        id: 5,
        icon: "drafts",
        title: "Пятый вопрос",
        description: "Ответ на вопрос",
      },
      {
        id: 6,
        icon: "drafts",
        title: "Шестой вопрос",
        description: "Ответ на вопрос",
      },
      {
        id: 7,
        title: "Седьмой вопрос",
        description: "Ответ на вопрос",
      },
    ];
    return {
      FAQElements,
    };
  },
});
</script>

<style></style>
