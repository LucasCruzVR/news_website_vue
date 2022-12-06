<template>
  <div id="app" >
    <Navbar />
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  #app {
    background-color: var(--white-dark);
  }
  .body {
    padding-top: 70px;
  }
</style>
