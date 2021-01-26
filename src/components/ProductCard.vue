<template>
  <div class="flex flex-wrap flex-row justify-center mt-10">
  <div class="w-80 m-5 p-1 bg-gradient-to-b from-green-400 via-green-200 rounded-3xl shadow-md hover:shadow-xl" v-for="product in products" :key="product.id">
    <div class="rounded-xl"><img class="mx-auto p-8 rounded-xl" :src="product.image" /></div>
    <p class="product-name uppercase font-bold">{{product.name}}</p>
    <p class="product-price">$ {{product.price}}</p>
    <div class="mt-5">
    <button class="add-to-cart p-2 m-2 bg-yellow-500 border-2 border-yellow-500 text-gray-800 rounded-md shadow-md" v-on:click="addOnClick(product.id)">Add to cart</button>
    <button class="edit-product py-2 px-3 m-2 bg-transparent border-2 border-purple-500 text-purple-500 rounded-md shadow-md" v-on:click="editOnClick(product.id)">Edit</button>
    </div>
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
</style>