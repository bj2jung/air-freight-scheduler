import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "flights",
      component: HomeView,
    },
    // {
    //   path: "/orders",
    //   name: "orders",
    //   component: () => import("../views/OrdersView.vue"),
    // },
  ],
});

export default router;
