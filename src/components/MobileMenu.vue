<template>
  <Transition name="opacity" @after-leave="onAnimationEnd">
    <div class="wrapper-mobile-menu" v-if="isShow">
      <q-btn flat label="Главная" to="/" />
      <q-btn flat label="Новости" to="/articles" />
      <q-btn flat label="FAQ" to="/faq" />
      <template v-if="isAuthenticated">
        <q-btn
          flat
          round
          dense
          icon="account_circle"
          class="q-mr-sm"
          to="/profile"
        >
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
  </Transition>
</template>

<script>
import { defineComponent, onMounted, onUpdated } from "vue";
import { onBeforeRouteLeave } from "vue-router";
export default defineComponent({
  name: "MobileMenu",
  props: {
    isShow: {
      type: Boolean,
      required: true,
      default: false,
    },
    closeMobileMenu: {
      type: Function,
      required: true,
    },
    logout: {
      type: Function,
      required: true,
    },
    isAuthenticated: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const onAnimationEnd = () => {
      document.documentElement.style.overflow = "auto";
    };

    onMounted(() => {
      document.documentElement.style.overflow = "hidden";
    });
    onBeforeRouteLeave((to, from) => {
      props.closeMobileMenu();
    });
    return { onAnimationEnd };
  },
});
</script>

<style lang="scss">
.wrapper-mobile-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $primary;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 94.5vh;
  width: 100vw;
  z-index: 99999;
  color: #ffffff;
}
.opacity-enter-active {
  animation: opacity-in 0.5s;
}
.opacity-leave-active {
  animation: opacity-in 0.5s reverse;
}
@keyframes opacity-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
