<template>
  <q-toolbar class="q-px-md">
    <q-avatar class="q-mr-xs">
      <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
    </q-avatar>
    <q-btn flat label="Главная" to="/" />
    <q-btn flat label="Новости" to="/articles" />
    <q-space />
    <q-btn flat round dense icon="account_circle" class="q-mr-sm">
      <q-tooltip> Профиль </q-tooltip>
    </q-btn>
  </q-toolbar>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeaderMenu",
});
</script>

<style></style>
