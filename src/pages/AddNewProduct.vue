<template>
  <div class="add-new-product">
    <form
      id="new-product"
      @submit="submitForm"
      action=""
    >

     <p v-if="errors.length">
    <b>(｡•́︿•̀｡) Please:</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>
      <label for="name">Product Name</label>
      <input id="name" v-model="name" placeholder="ex. apple" />

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
      value="Add Product"
    >
     
    </form>
    <div class="preview">
      <img :src="image" />
      <p>{{ name }}</p>
      <p>$ {{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewProduct",
  components: {},
  props: {},
  data: function() {
    return {
      name: "",
      price: "",
      image: "",
      errors: [],
    };
  },
  mounted(){
    return this.products = this.$store.getters.getProducts
  },

  methods: {
     submitForm: function(e) {
         let id = this.products.length + 1
         let product = {
              id: id,
              name:this.name,
              price:this.price, 
              image:this.image}

      if (this.name && this.price && this.image) {
          this.$store.dispatch("submitForm", product)
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
