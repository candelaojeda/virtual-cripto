import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Transactions from "../views/Transactions.vue";
import History from "../views/History.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: Transactions,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
  {
    path: "/status",
    name: "status",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
