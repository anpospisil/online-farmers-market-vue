import Vue from "vue";
import VueRouter from "vue-router";
import Products from "../pages/Products.vue";
import EditProduct from "../pages/EditProduct.vue";
import AddNewProduct from "../pages/AddNewProduct.vue";
import Cart from "../pages/Cart"

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Products",
      component: Products,
    },
    {
      path: "/product/:id",
      name: "EditProduct",
      component: EditProduct
    },
    {
      path: "/add-new-product",
      name: "AddNewProduct",
      component: AddNewProduct,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
      },
  ],
  mode: "history"
});
