<template>
  <PagePreloader :isLoading="isLoading" />
  <q-page class="flex column q-px-lg q-pb-lg q-mt-lg">
    <h4>Пожалуйста, авторизируйтесь!</h4>
    <LoginForm />
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import PagePreloader from "src/components/PagePreloader.vue";
import LoginForm from "src/components/LoginPage.vue/LoginForm.vue";
export default defineComponent({
  name: "LoginPage",
  components: {
    PagePreloader,
    LoginForm,
  },
  setup() {
    const isLoading = ref(true);

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 2000);
    });

    return {
      isLoading,
    };
  },
});
</script>

<style></style>
