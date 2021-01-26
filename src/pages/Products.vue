<template>
  <div class="products h-4/6 ">
    <ProductCard :products="products" />
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "Products",
  components: {
    ProductCard,
  },
  props: {},
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.products = this.$store.getters.getProducts;
  },
};
</script>

<style scoped></style>
