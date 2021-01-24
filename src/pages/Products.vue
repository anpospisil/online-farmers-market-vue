<template>
  <div class="products">
    <ProductCard :products="products"/>
    <p>{{products}}</p>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'Products',
  components: {
    ProductCard
  },
  props: {

  },
  data() {
    return {
      products: []
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
