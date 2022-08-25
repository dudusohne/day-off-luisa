import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import ColabPage from "../views/ColabPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/:HomePage.html",
      name: "home",
      component: HomePage,
    },
    {
      path: "/:ColabPage.html",
      name: "colab",
      component: ColabPage,
    },
  ],
});

export default router;
