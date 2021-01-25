<template>
  <div class="navbar">
    <!-- Stand in for vue-router-->
    <router-link to="/">Products</router-link>
    <router-link to="/add-new-product">+ Add Product</router-link>
    <router-link to="/cart">Cart <CartIcon /></router-link>
  </div>
</template>

<script>
import CartIcon from "./CartIcon"

export default {
  name: 'Navbar',
  components: {
    CartIcon
  },
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
