<template>
  <div class="edit-product my-10 flex justify-evenly w-full">
    <form
      class="w-80 mx-5 border-2 bg-gradient-to-b from-purple-400 via-purple-200 shadow-md rounded-3xl"
      id="edit-product"
      @submit="submitEdit"
      action=""
    >
      <div class="mt-4 inline-block px-16 py-4 rounded-3xl text-red-500">
      <p v-if="errors.length" class="">
      <b>(｡•́︿•̀｡) Please:</b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
      </p>
      </div>
      <div class="flex flex-col mb-4">
          <label class="mb-2 font-bold text-lg text-grey-800" clas for="image">Image URL</label>
          <input id="image" class="border py-2 px-3 mx-4 text-grey-800" v-model="image" />
      </div>
      <div class="flex flex-col mb-4">
          <label class="mb-2 font-bold text-lg text-grey-800" for="name">Product Name</label>
          <input id="name" class="border py-2 px-3 mx-4 text-grey-800" v-model="name" placeholder="ex. apple" />
      </div>
      <div class="flex flex-col mb-4">
          <label class="mb-2 font-bold text-lg text-grey-800" for="price">Price</label>
          <input
            id="price"
            class="border py-2 px-3 mx-4 text-grey-800"
            v-model="price"
            placeholder="ex. 2.99"
            type="number"
            min="0"
            step=".01"
          />
      </div>
      <div class="flex flex-col mb-4">
          <input
          class="block font-bold  bg-purple-400 hover:bg-purple-600 text-grey-800 uppercase text-lg mx-auto p-4 rounded"
          type="submit"
          value="Edit Product"
        >
      </div>
    </form>
    <div class="text-9xl text-purple-400 mt-44">=</div>
    <!-- preview -->
    <div class="w-80 mx-5 p-1 bg-gradient-to-b from-green-400 via-green-200 rounded-3xl shadow-md hover:shadow-xl">
    <div class="rounded-xl"><img class="mx-auto p-8 rounded-xl" :src="image" /></div>
    <p class="product-name uppercase font-bold">{{name}}</p>
    <p class="product-price">$ {{price}}</p>
    <div class="mt-5">
    <button class="add-to-cart p-2 m-2 bg-gray-200 border-2 border-gray-100 text-white rounded-md shadow-md" v-on:click="addOnClick(product.id)" :disabled='isDisabled'>Add to cart</button>
    <button class="edit-product py-2 px-3 mx-4 m-2 bg-transparent border-2 border-gray-300 text-gray-300 rounded-md shadow-md" v-on:click="editOnClick(product.id)" :disabled='isDisabled'>Edit</button>
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
      isDisabled: true
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
