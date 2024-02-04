<script>
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>


<template>
  <div class="grid grid-cols-12">
<!--    sidebar-->
    <div class="col-span-3 bg-gray-100"></div>
    <div class="col-span-9 bg-gray-300 p-6"></div>
<!--    main content-->
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
