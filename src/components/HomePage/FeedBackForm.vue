<template>
  <div class="wrapper-feedbackform">
    <q-form
      @submit.prevent="send"
      @reset="onReset"
      class="q-pa-xs q-gutter-y-md"
    >
      <q-input
        outlined
        v-model="name"
        label="Ваше имя"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Обязательное поле!']"
      />
      <q-input
        outlined
        v-model="email"
        label="Ваша почта"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Обязательное поле!']"
      />
      <q-input
        v-model="message"
        label="Ваш вопрос / пожелания"
        outlined
        type="textarea"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Обязательное поле!']"
      />

      <q-btn-group spread class="full-width">
        <q-btn
          label="Отправить"
          type="submit"
          color="primary"
          class="col-6"
          :loading="submitting"
        >
          <template v-slot:loading> <q-spinner-facebook /> </template
        ></q-btn>
        <q-btn
          label="Сбросить"
          type="reset"
          color="negative"
          class="col-6"
          @click="reset"
        />
      </q-btn-group>
    </q-form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
defineComponent;
export default defineComponent({
  name: "FeedBackForm",
  setup() {
    const $q = useQuasar();

    const name = ref("");
    const email = ref("");
    const message = ref("");
    const submitting = ref(false);
    const send = () => {
      submitting.value = true;
      setTimeout(() => {
        submitting.value = false;
        $q.notify({
          message: "Спасибо! Ваше сообщение отправлено.",
          color: "positive",
          position: "bottom-right",
        });
      }, 3000);
    };
    const reset = () => {
      name.value = "";
      email.value = "";
      message.value = "";
      submitting.value = false;
      $q.notify({
        message: "Ваши данные удалены!",
        color: "negative",
        position: "bottom-right",
      });
    };
    return {
      name,
      email,
      message,
      send,
      submitting,
      reset,
    };
  },
});
</script>

<style></style>
