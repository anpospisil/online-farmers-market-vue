<template>
  <div class="header mx-auto pt-2 h-48 bg-green-400">
    <!-- Logo  -->
    <img
      class="w-36 mx-auto cursor-pointer"
      src="../assets/carrot.svg"
      v-on:click="toHome"
    />
    <!-- Company Name -->
    <div
      class="company text-4xl text-gray-800 font-bold tracking-wide cursor-pointer"
      v-on:click="toHome"
    >
      The Online Farmer
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {},
  methods: {
    toHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
