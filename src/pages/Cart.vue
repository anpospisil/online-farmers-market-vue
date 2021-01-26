<template>
  <div class="cart">
    <div class="flex justify-between p-4 item-center h-16 hover:bg-yellow-200" v-for="cartItem in cartItems" :key="cartItem[i]">
     <div class="ml-10">{{cartItem.name}}</div>
     <div class="mr-10 ">{{cartItem.price}}</div>
    </div>
    <div class="flex flex-col justify-end p-4 border-t-2 border-gray-500">
      <div class="ml-10 h-16 border-2 border-gray-500">VAT</div>
      <div class="ml-10 h-16 border-2 border-gray-500">Total</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Cart',
  props: {

  },
  methods:{
  },
  data() {
    return {
      cartItems: [],
    }
  },
  mounted() {
    // this.products = this.$store.getters.getProducts
    this.cartItems = this.$store.getters.getProductsInCart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
