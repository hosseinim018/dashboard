<script>
import Home from './components/Home.vue'
import DarkModeToggle from "@/components/DarkModeToggle.vue";
import LanguageToggle from "@/components/LanguageToggle.vue";

export default {
  name: 'App',
  components: {
    Home,
    DarkModeToggle,
    LanguageToggle
  },
  created() {
    this.emitter.on('langToggle', (event) => {
      console.log('emiiter is worked!','\n', event)
      this.langToggle = event
    })
  },
  data(){
    return {
      langToggle: true,
    }
  }
}
</script>


<template>
  <div class="grid h-screen grid-cols-11">
<!--    sidebar-->
    <div class="col-span-2 h-screen">
      <aside class="fixed z-20 grid h-screen w-64 grid-rows-8">
        <header class="row-span-1 bg-gray-100 dark:bg-gray-700">
          <div class="flex h-full">
            <div class="flex items-center justify-between">
<!--              avatar with text-->
              <div class="rtl:mr-2 ltr:ml-2 flex items-center gap-2">
                <div class="relative inline-flex hidden h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
                    <span class="font-medium text-gray-600 dark:text-gray-300">MH</span>
                </div>
                <img class="h-10 w-10 rounded-full ring-2 ring-gray-300" src="./assets/avatar-1.jpg" alt="Rounded avatar">
                <div class="font-medium text-gray-900 dark:text-gray-200">
                    <h5 class="text-lg font-medium">Mahdi.H</h5>
                    <div class="text-sm">hosseinim018@gmail.com</div>
                </div>
              </div>
            </div>
<!--            DarkModeToggle-->
            <div class="mx-auto my-2 text-gray-900 dark:text-gray-200">
              <DarkModeToggle/>
            </div>
          </div>
        </header>
        <main class="row-span-6 bg-white dark:bg-gray-900">
          <ul class="m-3 font-medium text-gray-900 w-100 font-shabnam dark:text-gray-200"
          id="accordion-flush" data-accordion="collapse"
               data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
               data-inactive-classes="text-gray-500 dark:text-gray-400">
            <!--          home-->
              <li class="relative inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                </svg>
                <h class="" v-if="langToggle==true">خانه</h>
                <h class="" v-else>Home</h>
              </li>
            <!--          produces-->
              <li class="relative inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  id="accordion-flush-heading-2" type="button"
                  data-accordion-target="#accordion-flush-body-2" aria-expanded="false"
                  aria-controls="accordion-flush-body-2">
                <svg class='h-6 w-6' fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
                </svg>
                <h class="" v-if="langToggle==true">محصولات</h>
                <h class="" v-else>Produces</h>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5"/>
                </svg>
              </li>
              <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
                <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                  <li class="relative inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <h class="" v-if="langToggle==true">داشبورد</h>
                    <h class="" v-else>Dashboard</h>
                  </li>
                  <li class="relative inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <h class="" v-if="langToggle==true">پیشنویس</h>
                    <h class="" v-else>Drafts</h>
                  </li>
                  <li class="relative inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <h class="" v-if="langToggle==true">منتشرشده</h>
                    <h class="" v-else>Released</h>
                  </li>
                  <li class="relative inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <h class="" v-if="langToggle==true">نظرات</h>
                    <h class="" v-else>Comments</h>
                  </li>
                  <li class="relative inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <h class="" v-if="langToggle==true">برنامه زمانی</h>
                    <h class="" v-else>Scheduels</h>
                  </li>
                </div>
              </div>

            <!--          customers-->
              <li class="relative inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  id="accordion-flush-heading-1"
                  data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                  aria-controls="accordion-flush-body-1">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                <h class="" v-if="langToggle==true">مشتری ها</h>
                <h class="" v-else>Customers</h>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5"/>
                </svg>
              </li>
              <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
                <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                  <li class="relative inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <h class="" v-if="langToggle==true">نمای کلی</h>
                    <h class="" v-else>Overview</h>
                  </li>
                  <li class="relative inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <h class="" v-if="langToggle==true">لیست مشتری ها</h>
                    <h class="" v-else>Customer list</h>
                  </li>
                </div>
              </div>
            <!--          shop-->
              <li class="relative inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
                </svg>
                <h class="" v-if="langToggle==true">فروشگاه</h>
                <h class="" v-else>Shop</h>
              </li>
              <!--          income-->
              <li class="relative inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
                </svg>
                <h class="" v-if="langToggle==true">درآمدها</h>
                <h class="" v-else>Income</h>
              </li>
              <!--          promote-->
              <li class="relative inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"/>
                </svg>
                <h class="" v-if="langToggle==true">پیشرفت ها</h>
                <h class="" v-else>Promote</h>
              </li>
          </ul>
        </main>
        <footer class="row-span-1 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
          <LanguageToggle class="rounded-md border border-gray-400 px-4 py-2"/>
        </footer>
      </aside>
    </div>
<!--    main content-->
    <div class="col-span-9 bg-gray-200 dark:bg-gray-600">
      <nav class="sticky top-0 flex justify-between h-20 items-center border-b border-gray-200 bg-white px-6 w-100 border-s dark:border-gray-600 dark:bg-gray-900">
        <form class="w-1/3">
            <label for="default-search" class="sr-only mb-2 text-sm font-medium text-gray-900 font-shabnam dark:text-white">Search</label>
            <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 flex items-center start-0 ps-3">
                    <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input v-if="langToggle==true" type="search" id="default-search" class="block w-full rounded-lg border border-gray-200 bg-gray-100 p-4 text-sm text-gray-900 ps-10 focus:border-gray-200 focus:ring-gray-500 dark:placeholder-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="جستجو کنید یا دستور بنویسید..." required>
                <input v-else type="search" id="default-search" class="block w-full rounded-lg border border-gray-200 bg-gray-100 p-4 text-sm text-gray-900 ps-10 focus:border-gray-200 focus:ring-gray-500 dark:placeholder-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Search or Type Command..." required>
                <button type="submit" class="absolute rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 end-2.5 bottom-2.5 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <h class="" v-if="langToggle==true">جستوجو</h>
                  <h class="" v-else>Search</h>
                </button>
            </div>
        </form>
        <div class="flex gap-4 font-medium text-gray-900 dark:text-gray-200">
          <span class="relative inline-flex">
            <svg  width="25" height="25" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
            <span class="flex absolute h-3 w-3 top-1 right-0 -mt-1 -mr-1">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            </span>
          <span class="relative inline-flex">
              <svg width="25" height="25" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
              </svg>
              <span class="flex absolute h-3 w-3 top-1 right-1 -mt-1 -mr-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </span>
        </div>
      </nav>
      <div class="px-6 py-2 h-100">
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
