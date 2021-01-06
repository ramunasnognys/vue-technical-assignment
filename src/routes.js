import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home";
import SingleUser from "./views/SingleUser";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "", component: Home },
    { path: "/user/:id", name: "user", component: SingleUser, props: true },
  ],
});
