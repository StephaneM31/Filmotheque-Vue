<template>
  <div class="layout">
    <Header>
      <template v-slot:title> {{ title }}</template>
    </Header>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "Layout",

  components: { Header },
  props: { title: String },
};
</script>

<style scoped></style>
