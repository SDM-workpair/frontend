// import Vue from "vue";
import { createWebHistory, createRouter } from "vue-router";
// import VueRouter from "vue-router";
import Home from "@/view/Home.vue";
import Login from "@/view/Login.vue";
// import ShoppingCart from "@/views/ShoppingCart.vue";
// import Deposit from "@/views/Deposit.vue";
// import OrderRecord from "@/views/OrderRecord.vue";
// import ProcessOrder from "@/views/ProcessOrder.vue";
// import MyProduct from "@/views/MyProduct.vue";
// import NewProduct from "@/views/NewProduct.vue";

// import store from "@/store";

// Vue.use(VueRouter);

// const CheckIsSeller = next => {
//   if (store.getters["login/Role"] === "seller") next();
//   else next({ name: "Home" });
// };

const routes = [
  {
    path: "",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
//   {
//     path: "*",
//     name: "NotFound",
//     redirect: { name: "Home" }
//   },
//   {
//     path: "/",
//     name: "root",
//     redirect: { name: "Home" }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });

export default router;
