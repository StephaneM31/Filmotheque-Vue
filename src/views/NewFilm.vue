<template>
  <div>
    <Layout title="Ajouter un film">
      <template v-slot:content>
        <p v-if="errors.length">
          <b>Le formulaire comporte des erreurs</b>
            <ul>
              <li v-bind:key="error" v-for="error in errors">{{ error }} </li>
            </ul>
        </p>
          <Form @valid-form="checkForm"></Form>
        
      </template>
    </Layout>
  </div>
</template>

<script>
import axios from "axios";
import Layout from "../components/Layout.vue";
import Form from "../components/Form.vue";

export default {
  name: "NewFilm",

  components: { Layout, Form },

  data() {
    return {
      errors: [],
    };
  },
  methods: {
    checkForm: function(data) {
      if (data.titre && data.date) {
        this.postFilm(data);
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

    async postFilm(data) {
      try {
       // console.log(data);
        await axios.post("https://movies-api.alexgalinier.now.sh/", {
          url: data.image,
          name: data.titre,
          year: parseInt(data.date)
        })
      } catch (e) {
        this.errors.push(e)
      }
      this.$router.push('/') 
    }
  },
};
</script>

<style scoped></style>
