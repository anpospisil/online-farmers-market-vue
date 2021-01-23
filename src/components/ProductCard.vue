<template>
  <div>
  <div class="product-card" v-for="product in products" :key="product.id">
    <img class="product-image" :src="product.image" />
    <p class="product-name">{{product.name}}</p>
    <p class="product-price">$ {{product.price}}</p>
    <button class="add-to-cart">Add to cart</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    products: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .product-card{
      border: 1px solid grey;
      width: 500px;
      height: auto;
    }
    .product-image{
      width: 100px;
      height: 100px;
      border: 1px solid grey;
    }
</style>