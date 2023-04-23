// import Vue from "vue";
import { createWebHistory, createRouter } from "vue-router";
// import VueRouter from "vue-router";
import Home from "@/view/Home.vue";
import Login from "@/view/Login.vue";
import Notification from "@/view/Notification.vue";
import Profile from "@/view/Profile.vue";
import MyMatchRoom from "@/view/MyMatchRoom.vue";
import MyGroup from "@/view/MyGroup.vue";
import RoomProfile from "@/view/RoomProfile.vue";

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
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/notification",
    name: "Notification",
    component: Notification
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/myMatchRoom",
    name: "MyMatchRoom",
    component: MyMatchRoom
  },
  {
    path: "/myGroup",
    name: "MyGroup",
    component: MyGroup
  },
  {
    path: "/roomProfile",
    name: "RoomProfile",
    component: RoomProfile
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