<script>
import Home from './components/Home.vue'
import DarkModeToggle from "@/components/DarkModeToggle.vue";

export default {
  name: 'App',
  components: {
    Home,
    DarkModeToggle
  }
}
</script>


<template>
  <div class="grid grid-cols-11 h-screen">
<!--    sidebar-->
    <div class="col-span-2 h-screen">
      <aside class="grid grid-rows-8 h-screen">
        <header class="row-span-1 bg-blue-500 shadow md:shadow-lg">
          <div class="flex h-full">
            <div class="flex items-center justify-between">
<!--              avatar with text-->
              <div class="flex items-center gap-2 mr-2">
                <div class="hidden relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span class="font-medium text-gray-600 dark:text-gray-300">MH</span>
                </div>
                <img class="w-10 h-10 rounded-full ring-2 ring-gray-300" src="./assets/avatar1.avif" alt="Rounded avatar">
                <div class="font-medium text-slate-200">
                    <h5 class="text-lg font-medium">Mahdi.H</h5>
                    <div class="text-sm">hosseinim018@gmail.com</div>
                </div>
              </div>
            </div>
<!--            DarkModeToggle-->
            <div class="mx-auto my-2 text-slate-200">
              <DarkModeToggle/>
            </div>
          </div>
        </header>
        <main class="row-span-6 bg-white">
          <ul class="w-100 font-shabnam text-md font-medium text-blue-700 m-3">
            <!--          home-->
              <li class="gap-2 w-full px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-slate-700 relative inline-flex items-center">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                </svg>
                خانه
              </li>
            <!--          produces-->
              <li class="gap-2 w-full px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-slate-700 relative inline-flex items-center">
                <svg class='w-6 h-6' fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
                </svg>
                محصولات
              </li>
            <!--          customers-->
              <li class="gap-2 w-full px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-slate-700 relative inline-flex items-center">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                مشتری ها
              </li>
            <!--          shop-->
              <li class="gap-2 w-full px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-slate-700 relative inline-flex items-center">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
                </svg>
                فروشگاه
              </li>
              <!--          income-->
              <li class="gap-2 w-full px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-slate-700 relative inline-flex items-center">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
                </svg>
                درآمدها
              </li>
              <!--          promote-->
              <li class="gap-2 w-full px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-slate-700 relative inline-flex items-center">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"/>
                </svg>
                پیشرفت ها
              </li>
          </ul>
        </main>
        <footer class="row-span-1 bg-blue-600">footer</footer>
      </aside>
    </div>
<!--    main content-->
    <div class="col-span-9 bg-gray-200 p-6">
      <div class="container h-100">
        <Home/>
      </div>
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
