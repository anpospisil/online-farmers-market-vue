<template>
  <div class="cart">
    <p></p>
  </div>
</template>

<script>


export default {
  name: 'Cart',
  props: {

  },
  data() {
    return {
      cart: []
    }
  },
  mounted() {
    this.products = this.$store.getters.getProducts
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
