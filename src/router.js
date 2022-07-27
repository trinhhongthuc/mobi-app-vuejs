import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "./pages/Home/HomePage.vue";
import LoginPageVue from "./pages/Login/LoginPage.vue";

const routes = [
  { path: "/", component: HomePageVue },
  {
    path: "/login",
    component: LoginPageVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
