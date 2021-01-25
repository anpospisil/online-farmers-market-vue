<template>
  <div>
  <div class="product-card" v-for="product in products" :key="product.id">
    <img class="product-image" :src="product.image" />
    <p class="product-name">{{product.name}}</p>
    <p class="product-price">$ {{product.price}}</p>
    <button class="add-to-cart" v-on:click="addOnClick(product.id)">Add to cart</button>
    <button class="edit-product" v-on:click="editOnClick(product.id)">Edit product</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    products: Array
  },
  methods: {
    addOnClick: function(id){
      this.$store.dispatch("addOnClick", id)
    },
    editOnClick: function(id){
    this.$router.push(`/product/${id}`)
  }
  },
}
</script>

<!-- Add "scoped" tribute to limit CSS to this component only -->
<style>
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