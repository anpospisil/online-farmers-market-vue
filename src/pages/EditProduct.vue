<template>
  <div class="edit-product">
    <form
      id="edit-product"
      @submit="submitEdit"
      action=""
    >

     <p v-if="errors.length">
    <b>(｡•́︿•̀｡) Please:</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>
      <label for="name">Product Name</label>
      <input id="name" v-model="name" />

      <label for="price">Price</label>
      <input
        id="price"
        v-model="price"
        placeholder="ex. 2.99"
        type="number"
        min="0"
        step=".01"
      />

      <label for="image">Image URL</label>
      <input id="image" v-model="image" />
      <input
      type="submit"
      value="Save Edit"
    >
    </form>
    <!-- current product -->
    <div class="current">
      <div class="product-card" >
        <img class="product-image" :src="product.image" />
        <p class="product-name">{{product.name}}</p>
        <p class="product-price">$ {{product.price}}</p>
        <!-- <button class="add-to-cart" v-on:click="addOnClick(product.id)">Add to cart</button>
        <button class="edit-product" v-on:click="editOnClick(product.id)">Edit product</button> -->
      </div>
    </div>

    <p>=></p>
    <!-- preview of changes -->
    <div class="preview">
      <div class="product-card" >
        <img class="product-image" :src="product.image" />
        <p class="product-name">{{name}}</p>
        <p class="product-price">$ {{price}}</p>
        <!-- <button class="add-to-cart" v-on:click="addOnClick(id)">Add to cart</button>
        <button class="edit-product" v-on:click="editOnClick(id)">Edit product</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditProduct",
  components: {},
  props: {},
  data: function() {
    return {
      name: "",
      price: "",
      image: "",
      errors: [],
    }
  },
  created() {
      this.name = this.product.name,
      this.price = this.product.price,
      this.image = this.product.image
  },
  computed: {
    product(){
    return this.$store.getters.getProduct(parseInt(this.$route.params.id))
    }
  },

  methods: {
     submitEdit: function(e) {
         let productEdit = {
              id: parseInt(this.$route.params.id),
              name:this.name,
              price:this.price, 
              image:this.image}

      if (this.name && this.price && this.image) {
          this.$store.dispatch("submitEdit", productEdit)
        this.$router.push("/")
      } else {

      if (!this.name) {
        this.errors.push("Add a product name");
      }
      if (!this.age) {
        this.errors.push("Add a product price");
      }
      if (!this.image) {
        this.errors.push("Add a product image");
      }

      e.preventDefault();
      }
  },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
