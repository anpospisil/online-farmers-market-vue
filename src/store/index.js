import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [{
        id: 1,
        name: "gala apple",
        price: 1.99,
        image: "https://cdn.shopify.com/s/files/1/0781/7159/products/PPAPP110_large_c2b2aa57-3647-4890-aff9-7d607d7b975b_large.jpg?v=1548974601"
    },
    {
        id: 2,
        name: "bosc pear",
        price: 1.29,
        image: "https://cdn.shopify.com/s/files/1/0781/7159/products/bosc_large.jpg?v=1548974334"
    },
    {
        id: 3,
        name: "black plum",
        price: 0.99,
        image: "https://cdn.shopify.com/s/files/1/0781/7159/products/plum_887c9a6f-f6d5-4f54-a8cc-5c296fa80b50_large.jpg?v=1548976331"
    },
    
],
  },
  mutations: {
    
  },
  getters: {
      getProducts: state => {
          return state.products
      }
  }
});
