<template>
  <header class="header">
    <h1><slot name="title">default</slot></h1>
    <button>
      <router-link name="go" to="nouveau-film">Ajouter film</router-link>
    </button>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background-color: orange;
  border-radius: 25px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 5px;
}
</style>
