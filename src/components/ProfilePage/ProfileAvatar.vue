<template>
  <q-avatar :size="size + 'px'">
    <img :src="img" />
  </q-avatar>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProfileAvatar",
  props: {
    img: {
      Type: String,
      required: false,
      default: "https://cdn.quasar.dev/img/avatar.png",
    },
    size: {
      type: Number,
      required: false,
      default: 100,
    },
  },
});
</script>

<style></style>
