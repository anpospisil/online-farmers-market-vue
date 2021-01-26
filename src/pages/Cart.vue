<template>
  <div class="cart">
    <div>
     <div>{{cart}}</div>
     <div>{{products}}</div>
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
      cart: [],
    }
  },
  mounted() {
    this.products = this.$store.getters.getProducts
    this.cart = this.$store.getters.getCartItemIds
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
