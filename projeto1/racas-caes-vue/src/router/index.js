import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RacasView from "../views/RacasView.vue";
import Cao from "../views/cao.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/racas",
    name: "racas",
    component: RacasView,
  },
  {
    path: "/racas/:id",
    component: Cao,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
