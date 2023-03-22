<template>
  <q-toolbar>
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
