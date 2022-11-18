<template>
  <div id="app" class="main">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
main {
  padding: 0;
  margin: 0;
}
</style>
