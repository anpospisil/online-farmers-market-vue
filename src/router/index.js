import Vue from "vue";
import VueRouter from "vue-router";
import Products from "../pages/Products.vue";
import AddNewProduct from "../pages/AddNewProduct.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Products",
      component: Products,
    },
    {
      path: "/add-new-product",
      name: "AddNewProduct",
      component: AddNewProduct,
    },
  ],
  mode: "history"
});
