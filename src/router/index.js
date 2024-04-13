import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import AcessorioView from "../views/AcessorioView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriaView,
    },
    {
      path: "/acessorio",
      name: "acessorio",
      component: AcessorioView,
    },
    {
      path: "/cores",
      name: "cores",
      component: () => import("../views/CorView.vue"),
    },
    {
      path: "/marca",
      name: "marca",
      component: () => import("../views/MarcaView.vue"),
    }
  ],
});

export default router;
