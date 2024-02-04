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
  <div class="grid grid-cols-12 h-screen">
<!--    sidebar-->
    <div class="col-span-2 bg-gray-100 h-screen">
      <div class="flex-row h-screen">
<!--        header of side-bar-->
        <div class="grid grid-cols-6 bg-green-200 h-[25%]">
          s
<!--&lt;!&ndash;          account picture and email&ndash;&gt;-->
<!--          <div class="col-span-5 bg-red-400 p-10 h"></div>-->
<!--&lt;!&ndash;          switch dark mode&ndash;&gt;-->
<!--          <div class="col-span-1 bg-yellow-400 p-10"></div>-->
        </div>
<!--        content of side-bar-->
        <div class="bg-red-200 h-[60%]">content</div>
<!--        footer of side-bar-->
        <div class="bg-blue-200 h-[15%]">footer</div>
      </div>
    </div>
<!--    main content-->
    <div class="col-span-10 bg-gray-300 p-6"></div>
    
  </div>
</template>


<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*}*/
</style>
