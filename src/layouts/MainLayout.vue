<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <HeaderMenu />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <FooterMenu />
    </q-footer>
  </q-layout>
</template>

<script>
import HeaderMenu from "src/components/HeaderMenu.vue";
import { defineComponent } from "vue";
import FooterMenu from "src/components/FooterMenu.vue";
export default defineComponent({
  name: "MainLayout",
  components: {
    HeaderMenu,
    FooterMenu,
  },
  setup() {
    return {};
  },
});
</script>
