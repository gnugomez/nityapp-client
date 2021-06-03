/*
 * Starter Router
 */

// Vue and Vue Router
import Vue from "vue";
import Router from "vue-router";

import { authGuard } from "../auth/authGuard";

// Main layouts
import LayoutBackend from "@/layouts/variations/BackendStarter.vue";
import LayoutSimple from "@/layouts/variations/Simple.vue";

// Register Vue Router
Vue.use(Router);

// Frontend Page Example
const Landing = () => import("@/views/Landing.vue");

// Backend Page Example
const Dashboard = () => import("@/views/Dashboard.vue");

const routes = [
  {
    path: "/",
    redirect: "/landing",
    component: LayoutSimple,
    children: [
      {
        path: "/landing",
        name: "Landing",
        component: Landing,
      },
    ],
  },
  {
    path: "/backend",
    redirect: "/backend/dashboard",
    component: LayoutBackend,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        beforeEnter: authGuard,
      },
    ],
  },
];

// Router Configuration
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  linkExactActiveClass: "",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});
