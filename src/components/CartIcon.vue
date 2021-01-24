<template>
  <div class="cart-icon">
    <p>{{cartContent.length}}</p>
  </div>
</template>

<script>

export default {
  name: 'CartIcon',
  props: {

  },
  computed: {
      cartContent() {
          return this.$store.getters.getCartItems
      }
  },
//   mounted() {
//     this.cart = this.$store.getters.getCart
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
