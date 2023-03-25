<template>
  <Transition name="opacity" @after-leave="onAnimationEnd">
    <div class="wrapper-preloader" v-if="isLoading">
      <h2>Добро пожаловать!</h2>
      <q-spinner color="white" size="150px" />
    </div>
  </Transition>
</template>

<script>
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  name: "PagePreloader",
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const onAnimationEnd = () => {
      document.documentElement.style.overflow = "auto";
    };
    onMounted(() => {
      document.documentElement.style.overflow = "hidden";
    });
    return { onAnimationEnd };
  },
});
</script>

<style lang="scss">
.wrapper-preloader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $primary;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
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
