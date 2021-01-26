import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "onion",
        price: 0.99,
        image:
          "https://cdn.shopify.com/s/files/1/0781/7159/products/PPONI110_large_a653b546-8006-4f16-a10b-5ca1bba34f54_large.jpg?v=1548982762",
      },
      {
        id: 2,
        name: "celery",
        price: 3.49,
        image:
          "https://cdn.shopify.com/s/files/1/0781/7159/products/HILPPCEL101_large_4ebb4dfd-5773-4f6f-943a-2f29a4d99cb7_large.jpg?v=1548981875",
      },
      {
        id: 3,
        name: "carrots",
        price: 2.99,
        image:
          "https://cdn.shopify.com/s/files/1/0781/7159/products/carrots_grande_ded5370d-1d2d-4bf6-987b-bdaab5b03616_large.jpg?v=1548979655",
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
        ...state.products.filter((product) => product.id !== productEdit.id),
        productEdit,
      ];
    },
    addToCart(state, id) {
      state.cart = [...state.cart, id];
    },
    emptyCart(state, cart) {
      state.cart = cart;
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
    // empties cart state
    async emptyCart({ commit }, cart) {
      commit("emptyCart", cart);
    },
  },
  getters: {
    // get all products
    getProducts: (state) => {
      return state.products;
    },
    // gets one product by id
    getProduct: (state) => (id) =>
      state.products.find((product) => product.id === id),
    // gets all products added to cart state
    getProductsInCart: (state) => {
      return state.cart.map((id) => {
        const product = state.products.find((p) => p.id === id);
        return {
          name: product.name,
          price: product.price,
        };
      });
    },
    // gets total ammount of items in cart state
    getNumberOfCartItems: (state) => {
      return state.cart.length;
    },
  },
});
