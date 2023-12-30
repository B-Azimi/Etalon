import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../HomePage.vue";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },

    {
      path: "/Stor",
      name: "StorPage",
      component: () => import("../components/views/StorPage.vue"),
    },
    {
      path: "/Product/:id",
      name: "ProductDetail",
      component: () => import("../components/views/ProductDetail.vue"),
    },
    {
      path: "/Basket",
      name: "BasketPage",
      component: () => import("../components/views/BasketPage.vue"),
    },

    {
      path: "/Contact",
      name: "ContactPage",
      component: () => import("../components/views/ContactPage.vue"),
    },
    {
      path: "/New",
      name: "NewProduct",
      component: () => import("../components/views/NewProduct.vue"),
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../components/views/pageNotFind.vue"),
    },
  ],
});
