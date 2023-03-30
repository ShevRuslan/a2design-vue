<template>
  <q-toolbar class="q-px-md">
    <div class="wrapper-computer-menu full-width flex" v-if="$q.screen.gt.xs">
      <q-avatar class="q-mr-xs">
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
      </q-avatar>
      <q-btn flat label="Главная" to="/" />
      <q-btn flat label="Новости" to="/articles" />
      <q-btn flat label="FAQ" to="/faq" />
      <q-space />
      <template v-if="isAuthenticated">
        <q-btn flat round dense icon="account_circle" class="q-mr-sm" to="/profile">
          <q-tooltip> Профиль </q-tooltip>
        </q-btn>
        <q-btn flat round dense icon="logout" class="q-mr-sm" @click="logout">
          <q-tooltip> Выйти </q-tooltip>
        </q-btn>
      </template>
      <template v-else>
        <q-btn flat round dense icon="login" class="q-mr-sm" to="/login">
          <q-tooltip> Войти </q-tooltip>
        </q-btn>
      </template>
    </div>
    <div v-else-if="$q.screen.lt.sm" class="flex col full-width">
      <div class="wrapper-above-mobile-menu flex full-width justify-between">
        <q-avatar class="q-mr-xs">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        <q-btn flat icon="menu" @click="isOpenMobileMenu = !isOpenMobileMenu" />
      </div>
      <MobileMenu
        :isShow="isOpenMobileMenu"
        :closeMobileMenu="closeMobileMenu"
        :logout="logout"
        :isAuthenticated="isAuthenticated"
      />
    </div>
  </q-toolbar>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import MobileMenu from "./MobileMenu.vue";
export default defineComponent({
  name: "HeaderMenu",
  components: {
    MobileMenu,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const $q = useQuasar();

    const isOpenMobileMenu = ref(false);

    const logout = () => {
      $q.localStorage.set("isAuthenticated", false);
      store.commit("auth/setAuthenticated", false);
      isOpenMobileMenu.value = false;
      router.push("/");
    };

    return {
      isAuthenticated: computed(() => store.getters["auth/getAuthenticated"]),
      isOpenMobileMenu,
      logout,
      closeMobileMenu: () => (isOpenMobileMenu.value = false),
    };
  },
});
</script>

<style></style>
