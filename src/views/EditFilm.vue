<template>
  <div>
    <Layout title="Modifier un film">
      <template v-slot:content>
          <p v-if="errors.length">
          <b>Le formulaire comporte des erreurs</b>
            <ul>
              <li v-bind:key="error" v-for="error in errors">{{ error }} </li>
            </ul>
        </p>
        <Form @valid-form="checkForm" :movieProp="selectedMovie"></Form>

         <div>
           <p>L'id du film est {{$route.params.id}}</p>
           
        <MoviesBox class="movie-card">
        <template v-slot:titre>
        {{ selectedMovie.name }}
        </template>
        <template v-slot:image>
        <img :src="selectedMovie.url" height="200" width="300" />
        </template>
        <template v-slot:date>
        {{ selectedMovie.year }}
         </template>
        </MoviesBox>
        </div>
      </template>
    </Layout>
    
  </div>
</template>

<script>
import axios from "axios";
import MoviesBox from "../components/MoviesBox.vue";
import Layout from "../components/Layout.vue";
import Form from "../components/Form.vue";

export default {
  name: "EditFilm",

  components: { MoviesBox, Layout, Form },

  data() {
    return {
        movies: [],
        movieId: "",
        selectedMovie: {},
        errors: [],
    };
  },
  //get la liste des movies
  async mounted() {
    const response = await axios.get('https://movies-api.alexgalinier.now.sh/');
    this.movies = response.data;
    //get l'id du film
    this.movieId = this.$route.params.id;
    //console.log(this.movieId);
    this.selectedMovie = this.movies.find((movie) => movie.id === this.movieId);
    //console.log(this.selectedMovie);
    // enregistrer le film sélectionné

  },

  methods: {
    checkForm: function(data) {
      if (data.titre && data.date) {
        this.putFilm(data);
        return;
      }

      this.errors = [];

      if (!data.titre) {
        this.errors.push("Titre obligatoire");
      }
      if (!data.date) {
        this.errors.push("Date obligatoire");
      }
    },

    async putFilm(data) {
      try {
        // console.log(data);
        await axios.put(`https://movies-api.alexgalinier.now.sh/${this.$route.params.id}`, {
          url: data.image,
          name: data.titre,
          year: parseInt(data.date),
        });
      } catch (e) {
        this.errors.push(e);
      }
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
