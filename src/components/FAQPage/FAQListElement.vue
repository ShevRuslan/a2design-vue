<template>
  <q-expansion-item expand-separator :icon="icon" :label="title">
    <q-card>
      <q-card-section>
        {{ description }}
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "FAQListElement",
  props: {
    icon: {
      type: String,
      default: "explore",
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>

<style></style>
