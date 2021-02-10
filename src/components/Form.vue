<template>
  <div>
    <InputWithError
      @saisie="newFilm('titre', $event)"
      name="titre"
      label="Nom du film"
      :value="movieProp.name"
    />
    <InputWithError
      @saisie="newFilm('date', $event)"
      name="date"
      label="Date du film"
      :value="movieProp.year"
    />
    <InputWithError
      @saisie="newFilm('image', $event)"
      name="image"
      label="URL de l'image"
      :value="movieProp.url"
    />
    <div class="envoi du form">
      <input
        type="submit"
        value="Valider"
        @click="$emit('valid-form', movie)"
      />
    </div>
  </div>
</template>

<script>
import InputWithError from "./InputWithError.vue";

export default {
  name: "Form",

  components: { InputWithError },

  data() {
    return {
      movie: {
        titre: "",
        date: "",
        image: "",
        value: "",
      },
    };
  },

  props: {
    movieProp: {
      type: Object,
      default: () => ({
        titre: "",
        date: "",
        image: "",
      }),
    },
  },

  methods: {
    newFilm(data, event) {
      this.movie[data] = event;
    },
  },
};
</script>

<style scoped></style>
