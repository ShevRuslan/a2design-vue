<template>
  <h4>Опубликуйте свою новость</h4>
  <div class="wrapper-formAddArticle">
    <q-form
      @submit.prevent="addArticle"
      @reset="onReset"
      class="q-pa-xs q-gutter-y-md"
    >
      <q-input
        outlined
        v-model="title"
        label="Заголовок новости"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Обязательное поле!']"
      />
      <q-input
        outlined
        v-model="link"
        label="Ссылка на изображение"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Обязательное поле!']"
      />
      <q-input
        v-model="description"
        label="Описание новости"
        outlined
        type="textarea"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Обязательное поле!']"
      />

      <q-btn-group spread class="full-width">
        <q-btn
          label="Добавить"
          type="submit"
          color="primary"
          class="col-6"
          :loading="submitting"
        >
          <template v-slot:loading> <q-spinner-facebook /> </template
        ></q-btn>
        <q-btn label="Сбросить" type="reset" color="negative" class="col-6" />
      </q-btn-group>
    </q-form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "FormAddArticle",
  setup() {
    const store = useStore();
    const $q = useQuasar();

    const title = ref("");
    const link = ref("");
    const description = ref("");

    const addArticle = () => {
      store.dispatch("articles/addArticle", {
        img: link.value,
        title: title.value,
        author: "Руслан Шевцов",
        description: description.value,
        id: store.getters["articles/getArticles"].length + 1,
      });
      $q.notify({
        message: "Новость успешно создана!",
        color: "positive",
        position: "bottom-right",
      });
    };
    return {
      title,
      link,
      description,
      addArticle,
    };
  },
});
</script>

<style></style>
