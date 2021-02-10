<template>
  <div>
    <Layout title="Liste des films">
      <template v-slot:content>
        <p v-if="movies.length == 0">Loading...</p>
        <div v-else id="Films">
          <input
            class="rechercher"
            type="text"
            v-model="search"
            placeholder="Rechercher..."
          />
          <div
            v-for="movie in updateSearch"
            :key="movie.id"
            @click="detailsFilm(movie.id)"
          >
            <MoviesBox class="movie-card">
              <template v-slot:titre>
                {{ movie.name }}
              </template>
              <template v-slot:image>
                <img :src="movie.url" height="200" width="300" />
              </template>
              <template v-slot:date>
                {{ movie.year }}
              </template>
            </MoviesBox>
          </div>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import axios from "axios";
import MoviesBox from "../components/MoviesBox.vue";
import Layout from "../components/Layout.vue";

export default {
  name: "Films",

  components: { MoviesBox, Layout },

  data() {
    return {
      movies: [],
      search: "",
    };
  },

  methods: {
    detailsFilm(id) {
      this.$router.push({ path: `/editer-film/${id}` });
    },
  },

  computed: {
    updateSearch: function() {
      return this.movies.filter((movie) => {
        return movie.name.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },

  mounted() {
    axios
      .get("https://movies-api.alexgalinier.now.sh/")
      .then((response) => (this.movies = response.data));
  },
};
</script>

<style scoped>
.rechercher {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
}
</style>
