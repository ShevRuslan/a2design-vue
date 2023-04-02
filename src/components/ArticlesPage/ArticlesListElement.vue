<template>
  <div class="wrapper-article col-lg-4 col-md-6 col-sm-12">
    <q-card class="article">
      <img :src="img" />

      <q-card-section>
        <div class="text-h6 article-title">{{ title }}</div>
        <div class="text-subtitle2">{{ author }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none article-description">
        {{ description }}
      </q-card-section>
      <q-card-section class="q-pt-none full-width">
        <q-btn-group spread class="full-width">
          <q-btn
            class="full-width"
            label="Удалить"
            color="negative"
            @click="deleteArticle(id)"
            v-if="showDeleteButton"
          />
          <q-btn
            class="full-width"
            label="Редактировать"
            color="info"
            @click="isOpenEditDialog = true"
            v-if="showEditButton"
          />
        </q-btn-group>
      </q-card-section>
    </q-card>
    <q-dialog
      v-model="isOpenEditDialog"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
      maximized
    >
      <q-card class="flex items-center justify-center">
        <q-card-section class="full-width">
          <h4>Измените статью</h4>
          <q-form @submit.prevent="edit">
            <q-input
              outlined
              v-model="titleModel"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Обязательное поле!',
              ]"
            />
            <q-input outlined v-model="imgModel" class="q-mb-lg" />
            <q-input
              v-model="descriptionModel"
              outlined
              type="textarea"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Обязательное поле!',
              ]"
            />
            <q-card-actions align="center" class="q-pa-none">
              <q-btn-group spread class="full-width">
                <q-btn color="primary" type="submit" label="Сохранить"></q-btn>
                <q-btn
                  color="negative"
                  label="Отмена"
                  @click="isOpenEditDialog = false"
                ></q-btn>
              </q-btn-group>
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
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
    showEditButton: {
      type: Boolean,
      default: false,
      required: false,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const $q = useQuasar();

    const isOpenEditDialog = ref(false);

    const titleModel = ref(props.title);
    const imgModel = ref(props.img);
    const descriptionModel = ref(props.description);

    const deleteArticle = (id) => {
      store.dispatch("articles/deleteArticle", id);
      $q.notify({
        message: "Ваша новость успешна удалена",
        color: "positive",
        position: "bottom-right",
      });
    };

    const edit = () => {
      store.dispatch("articles/editArticle", {
        id: props.id,
        title: titleModel.value,
        description: descriptionModel.value,
        img: imgModel,
      });
      $q.notify({
        message: "Ваша новость успешна изменина!",
        color: "positive",
        position: "bottom-right",
      });
      isOpenEditDialog.value = false;
    };

    return {
      deleteArticle,
      isOpenEditDialog,
      edit,
      titleModel,
      imgModel,
      descriptionModel,
    };
  },
});
</script>

<style lang="scss" scoped>
.article {
  height: 100%;
  &-description,
  &-title {
    word-wrap: break-word;
  }
}
</style>
