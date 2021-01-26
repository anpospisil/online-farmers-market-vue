import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "gala apple",
        price: 1.99,
        image:
          "https://cdn.shopify.com/s/files/1/0781/7159/products/PPAPP110_large_c2b2aa57-3647-4890-aff9-7d607d7b975b_large.jpg?v=1548974601",
      },
      {
        id: 2,
        name: "bosc pear",
        price: 1.29,
        image:
          "https://cdn.shopify.com/s/files/1/0781/7159/products/bosc_large.jpg?v=1548974334",
      },
      {
        id: 3,
        name: "black plum",
        price: 0.99,
        image:
          "https://cdn.shopify.com/s/files/1/0781/7159/products/plum_887c9a6f-f6d5-4f54-a8cc-5c296fa80b50_large.jpg?v=1548976331",
      },
      {
        id: 4,
        name: "gala apple",
        price: 1.99,
        image:
          "https://cdn.shopify.com/s/files/1/0781/7159/products/PPAPP110_large_c2b2aa57-3647-4890-aff9-7d607d7b975b_large.jpg?v=1548974601",
      },
      {
        id: 5,
        name: "bosc pear",
        price: 1.29,
        image:
          "https://cdn.shopify.com/s/files/1/0781/7159/products/bosc_large.jpg?v=1548974334",
      },
      {
        id: 6,
        name: "black plum",
        price: 0.99,
        image:
          "https://cdn.shopify.com/s/files/1/0781/7159/products/plum_887c9a6f-f6d5-4f54-a8cc-5c296fa80b50_large.jpg?v=1548976331",
      },
    ],

    cart: [],
  },
  mutations: {
    addProduct(state, product) {
      // mutate state
      state.products = [...state.products, product];
    },
    editProduct(state, productEdit) {
      state.products = [
        ...state.products.filter(product => product.id !== productEdit.id),
        productEdit
     ]
    },
    addToCart(state, id) {
      state.cart = [...state.cart, id];
    },
  },
  actions: {
    //   adds new product to products state
    async submitForm({ commit }, product) {
      commit("addProduct", product);
    },
    //   edits existing product in products state
    async submitEdit({ commit }, productEdit) {
      commit("editProduct", productEdit);
    },
    // adds product id to cart state
    async addOnClick({ commit }, id) {
      commit("addToCart", id);
    },
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },
    getProduct: (state) => id => state.products.find((product) => product.id === id),

    getCartItems: (state) => {
      return state.cart;
    },
  },
});
