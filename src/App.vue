<template>
  <div id="app">
    <Navbar/>
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/navbar/Navbar.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar
  }
}
</script>

<style>
</style>
