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
  <div class="grid grid-cols-11 h-screen">
<!--    sidebar-->
    <div class="col-span-2 bg-gray-100 h-screen">
      <aside class="grid grid-rows-8 bg-red-200 h-screen">
        <header class="row-span-1 bg-green-500">
          <div class="flex h-full">
            <div class="flex items-center justify-between bg-red-500">
<!--              avatar with text-->
              <div class="flex items-center gap-2 bg-blue-600">
                <div class="hidden relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span class="font-medium text-gray-600 dark:text-gray-300">MH</span>
                </div>
                <img class="w-10 h-10 rounded-full ring-2 ring-gray-300" src="./assets/avatar1.avif" alt="Rounded avatar">
                <div class="font-medium dark:text-white">
                    <h5 class="text-lg font-medium">Mahdi.H</h5>
                    <div class="text-sm">hosseinim018@gmail.com</div>
                </div>
              </div>
            </div>
            <div class="bg-gray-100 mx-auto">002</div>
          </div>
        </header>
        <main class="row-span-6 bg-yellow-200">
          <ul class="w-100 text-sm font-medium text-gray-900 bg-white m-3">
              <li class="w-full px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-blue-700 relative inline-flex items-center">
                <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
                Downlaod
              </li>
          </ul>
        </main>
        <footer class="row-span-1 bg-blue-600">footer</footer>
      </aside>
    </div>
<!--    main content-->
    <div class="col-span-9 bg-gray-300 p-6">

    </div>
    
  </div>
</template>


<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*}*/
</style>
