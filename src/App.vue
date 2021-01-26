<template>
  <div id="app" class="text-gray-800 text-center">
    <Header />
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Header,
    Footer,
    // Products
  },
};
</script>

<style></style>
