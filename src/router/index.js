import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/pages/home";
import cate from "@/pages/cate";
import select from "@/pages/select";
import proinfo from "@/pages/proinfo";
import cart from "@/pages/cart";
import register from "@/pages/register";
import login from "@/pages/login";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/cate",
      name: "cate",
      component: cate
    },
    {
      path: "/select",
      name: "select",
      component: select
    },
    {
      path: "/proinfo",
      name: "proinfp",
      component: proinfo
    },
    {
      path: "/cart",
      name: "cart",
      component: cart
    },
    {
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/login/:isCart",
      name: cart,
      component: login
    }
  ]
});
