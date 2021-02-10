<template>
  <div>
    <label :for="name">{{ label }}</label>
    <input
      id="name"
      autocomplete="off"
      :name="name"
      :value="value"
      @input="$emit('saisie', $event.target.value)"
    />
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "ImputWithError",

  props: {
    error: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      default: "",
    },
    label: {
      type: String,
    },
    value: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
