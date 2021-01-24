<template>
  <div class="navbar">
    <!-- Stand in for vue-router-->
    <router-link to="/">Products</router-link>
    <router-link to="/add-new-product">+ Add Product</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
