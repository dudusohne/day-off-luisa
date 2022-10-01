import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import ColabPage from "@/views/ColabPage.vue";
import StatsPage from "@/views/StatsPage.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import RecoveryPwd from "@/views/RecoveryPwd.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/home",
      name: "home",
      component: HomePage,
      props: true,
    },
    {
      path: "/colab",
      name: "colab",
      component: ColabPage,
    },
    {
      path: "/stats",
      name: "stats",
      component: StatsPage,
    },
    {
      path: "/forgot",
      name: "forgot",
      component: ForgotPassword,
    },
    {
      path: "/recoverypwd",
      name: "recoverypwd",
      component: RecoveryPwd,
    },
  ],
});

router.beforeEach((to) => {
  if (
    to.hash.includes('type=recovery') &&
    to.name !== 'forgot'
  ) {
    const accessToken = to.hash.split('&')[0]
    const token = accessToken.replace('#access_token=', '')
    return { name: 'recoverypwd', query: { token } }
  }
})

export default router;
