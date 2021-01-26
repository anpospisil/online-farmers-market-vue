<template>
  <div class="cart">
    <div
      class="flex justify-between p-4 item-center h-16 hover:bg-yellow-200"
      v-for="cartItem in cartItems"
      :key="cartItem[0]"
    >
      <div class="ml-16">{{ cartItem.name }}</div>
      <div class="mr-11 ">${{ cartItem.price }}</div>
    </div>
    <div class="flex flex-col p-4 border-t-2 border-gray-500">
      <div class="p-2 w-44 ml-auto border-2 border-gray-500">
        Total <span class="font-bold">${{ subtotal() }}</span>
      </div>
      <button
        class="p-2 w-44 ml-auto max-w-7xl bg-purple-400 rounded-md shadow-md"
        v-on:click="toPayment"
      >
        Pay
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {},
  methods: {
    subtotal: function() {
      return this.cartItems.reduce((a, { price }) => a + price, 0).toFixed();
    },
    toPayment: function() {
      let cart = [];
      this.$store.dispatch("emptyCart", cart);
      this.$router.push("/");
    },
  },
  data() {
    return {
      cartItems: [],
    };
  },
  mounted() {
    this.cartItems = this.$store.getters.getProductsInCart;
  },
};
</script>

<style scoped></style>
