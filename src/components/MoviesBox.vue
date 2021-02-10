<template>
  <div class="MoviesBox">
    <h1>
      <slot name="titre">Titre</slot>
    </h1>

    <p>
      <slot name="image"></slot>
    </p>

    <h2>
      <slot name="date">Date</slot>
    </h2>
  </div>
</template>

<script>
export default {
  name: "MoviesBox",

  props: {},
};
</script>

<style scoped>
.MoviesBox {
  background-color: cyan;
  border-radius: 25px;
  text-align: center;
  margin-top: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
