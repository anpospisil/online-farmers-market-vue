<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Navbar />
    <Products />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Products from './pages/Products.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Products
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
