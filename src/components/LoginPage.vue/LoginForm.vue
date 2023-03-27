<template>
  <q-form @submit.prevent="send" class="q-pa-xs q-gutter-y-md">
    <q-input
      outlined
      v-model="username"
      label="Ваш логин"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Обязательное поле!']"
    />
    <q-input
      type="password"
      outlined
      v-model="password"
      label="Ваш пароль"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Обязательное поле!']"
    />
    <q-btn
      label="Отправить"
      type="submit"
      color="primary"
      class="col-6 full-width"
      :loading="submitting"
    >
      <template v-slot:loading> <q-spinner-facebook /> </template>
    </q-btn>
  </q-form>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useStore } from "vuex";

export default defineComponent({
  name: "LoginForm",
  setup() {
    const router = useRouter();
    const store = useStore();
    const $q = useQuasar();

    const username = ref("");
    const password = ref("");
    const submitting = ref(false);

    const send = () => {
      if (
        username.value.trim() === "User" &&
        password.value.trim() === "12345"
      ) {
        submitting.value = true;
        setTimeout(() => {
          submitting.value = false;
          $q.localStorage.set("isAuthenticated", true);
          store.commit("auth/setAuthenticated", true);
          router.push("/profile");
        }, 1000);
      } else {
        $q.notify({
          message: "Неправильные данные!",
          color: "negative",
          position: "bottom",
        });
      }
    };

    return {
      username,
      password,
      send,
      submitting,
    };
  },
});
</script>

<style></style>
