import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from "@/layout";
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Layout, // 修改为 Layout 组件
    children: [
      {
        path: "",
        component: () => import("../views/HomeView.vue"),
        name: "home",
      },
      {
        path: "about",
        component: () => import("../views/AboutView.vue"),
        name: "about",
      },
    ],
  },
  {
    path: "/about2",
    name: "about2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About2View.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TheLogin.vue"),
  },
  {
    path: "/rbac",
    component: Layout,
    children: [
      {
        path: "user/list",
        component: () => import("../views/User/List.vue"),
      },
      {
        path: "user/add",
        component: () => import("../views/User/Add.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
