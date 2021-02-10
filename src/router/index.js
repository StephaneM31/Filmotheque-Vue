import Vue from "vue";
import VueRouter from "vue-router";
import Films from "../views/Films.vue";
import NewFilm from "../views/NewFilm.vue";
import EditFilm from "../views/EditFilm.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Films",
    component: Films
  },
  {
    path: "/nouveau-film",
    name: "NewFilm",
    component: NewFilm,
  },
  {
    path: "/editer-film/:id",
    name: "EditFilm",
    component: EditFilm,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
