<template>
  <div class="flex flex-wrap flex-row justify-center mt-10">
    <div
      class="w-80 m-5 p-1 bg-gradient-to-b from-green-400 via-green-200 rounded-3xl shadow-md hover:shadow-2xl"
      v-for="product in products"
      :key="product.id"
    >
      <!-- Image -->
      <div class="rounded-xl">
        <img class="mx-auto p-12 rounded-xl" :src="product.image" />
      </div>
      <!-- Name -->
      <p class="product-name uppercase font-bold tracking-wide">
        {{ product.name }}
      </p>
      <!-- Price -->
      <p class="product-price">$ {{ product.price }}</p>
      <div class="mt-5">
      <!-- Add to Cart & Edit buttons -->
        <button
          class="add-to-cart p-2 m-2 mb-4 bg-yellow-400 border-2 border-yellow-400 text-gray-800 rounded-md shadow-md hover:bg-yellow-500 hover:border-yellow-500"
          v-on:click="addOnClick(product.id)"
        >
          Add to cart
        </button>
        <button
          class="edit-product py-2 px-3 m-2 bg-transparent border-2 border-purple-500 text-purple-500 rounded-md shadow-md"
          v-on:click="editOnClick(product.id)"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    products: Array,
  },
  methods: {
    addOnClick: function(id) {
      this.$store.dispatch("addOnClick", id);
    },
    editOnClick: function(id) {
      this.$router.push(`/product/${id}`);
    },
  },
};
</script>

<style></style>
