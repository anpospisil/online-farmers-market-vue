<template>
  <div class="sticky top-0 mx-auto w-full flex justify-between item-center h-16 bg-green-400">
    <!-- Stand in for vue-router-->
    <ul class="px-2 sm:self-center text-xl font-bold border-t sm:border-none">
    <li class="sm:inline-block float-left p-2 "><router-link class="p-3 hover:text-white" to="/">All Products</router-link></li>
    <li class="sm:inline-block float-left p-2 bg-purple-400 rounded-md shadow-md"><router-link class="p-2 hover:text-white" to="/add-new-product">+ Product</router-link></li>
    </ul>
  <li class="p-2 font-bold sm:self-center text-xl border-t sm:border-none sm:inline-block float-right"><router-link class="p-3 hover:text-white" to="/cart">Cart ({{cartContent.length}})</router-link></li>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  components: {
  },
  props: {

  },
   computed: {
      cartContent() {
          return this.$store.getters.getCartItems
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
