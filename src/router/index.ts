import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Method from "@/views/Method.vue";
import ApiTest from "@/views/ApiTest.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "Home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => Home,
  },
  {
    path: "/method",
    name: "Method",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => Method,
  },

  {
    path: "/api-test",
    name: "ApiTest",
    component: () => ApiTest,
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: () => PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
