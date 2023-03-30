<template>
  <div class="wrapper-article col-lg-4 col-md-6 col-sm-12">
    <q-card class="article">
      <img :src="img" />

      <q-card-section>
        <div class="text-h6">{{ title }}</div>
        <div class="text-subtitle2">{{ author }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ description }}
      </q-card-section>
      <q-card-section class="q-pt-none full-width" v-if="showDeleteButton">
        <q-btn
          class="full-width"
          label="Удалить"
          color="negative"
          @click="deleteArticle(id)"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "ArticlesListElement",
  props: {
    img: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    showDeleteButton: {
      type: Boolean,
      default: false,
      required: false,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const $q = useQuasar();
    const deleteArticle = (id) => {
      store.dispatch("articles/deleteArticle", id);
      $q.notify({
        message: "Ваша новость успешна удалена",
        color: "positive",
        position: "bottom-right",
      });
    };

    return {
      deleteArticle,
    };
  },
});
</script>

<style lang="scss" scoped>
.article {
  height: 100%;
}
</style>
