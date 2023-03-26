<template>
  <div class="wrapper-article col-lg-4 col-md-6 col-sm-12">
    <q-card class="article">
      <img :src="img" />

      <q-card-section>
        <div class="text-h6">{{ title }}</div>
        <div class="text-subtitle2">{{ author }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ description }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ArticlesListElement",
  props: {
    img: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.article {
  height: 100%;
}
</style>
