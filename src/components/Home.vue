<script>
export default {
  name: 'Home',
  components: {},
  data(){
    return {
      langToggle: true,
    }
  },
  created() {
    this.emitter.on('langToggle', (event) => {
      console.log('emiiter is worked!','\n', event)
      this.langToggle = event
    })
  },
}

  // ApexCharts options and config
  window.addEventListener("load", function() {
    let options = {
      // set the labels option to true to show the labels on the X and Y axis
      xaxis: {
        show: true,
        categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          }
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          },
          formatter: function (value) {
            return '$' + value;
          }
        }
      },
      series: [
        {
          name: "Developer Edition",
          data: [150, 141, 145, 152, 135, 125],
          color: "#1A56DB",
        },
        {
          name: "Designer Edition",
          data: [43, 13, 65, 12, 42, 73],
          color: "#7E3BF2",
        },
      ],
      chart: {
        sparkline: {
          enabled: false
        },
        height: "100%",
        width: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      legend: {
        show: false
      },
      grid: {
        show: false,
      },
    }

    if (document.getElementById("labels-chart") && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(document.getElementById("labels-chart"), options);
      chart.render();
    }
  });
</script>

<template>
  <h class="text-2xl font-bold text-gray-900 dark:text-gray-50" v-if="langToggle==true">داشبورد</h>
  <h class="text-2xl font-bold text-gray-900 dark:text-gray-50" v-else>Dashboard</h>
  <div class="mt-2 grid grid-cols-3 gap-4 w-100">
    <div class="col-span-2">
      <div class="flex flex-col gap-2">
        <main class="flex flex-col gap-2 rounded rounded-md bg-white p-4 shadow dark:bg-gray-900">
          <header class="flex items-center gap-2 text-gray-900 dark:text-gray-200">
            <div class="h-10 w-5 rounded rounded-md bg-orange-200"></div>
            <strong v-if="langToggle==true">نمای کلی</strong>
            <strong v-else>Overview</strong>
          </header>
          <main class="flex flex-col gap-4">
            <div class="flex gap-2 rounded rounded-2xl bg-gray-100 p-3 h-[8rem] dark:bg-gray-700">
              <div class="flex justify-between rounded rounded-xl bg-white p-2 shadow w-[50%] dark:bg-gray-900">
                <div class="flex items-center p-2">
                  <span class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                    </svg>
                  </span>
                  <div class="text-left rtl:text-right font-medium ms-3 dark:text-white">
                      <div class="flex items-center gap-1">
                        <div v-if="langToggle==true">مشتری ها</div>
                        <div v-else>Customers</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                        </svg>
                      </div>
                      <strong class="text-4xl dark:text-gray-400">1024</strong>
                  </div>
                </div>
                <div>
                  <div class="flex items-center rounded-md bg-green-200 px-1 text-sm text-green-500">
                    <h>37.8%</h>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="flex justify-between p-2 w-[50%]">
                <div class="flex items-center p-2">
                  <span class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
                    </svg>
                  </span>
                  <div class="text-left rtl:text-right font-medium ms-3 dark:text-white">
                      <div class="flex items-center gap-1">
                        <div v-if="langToggle==true">درآمد</div>
                        <div v-else>Income</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                        </svg>
                      </div>
                      <strong class="text-4xl dark:text-gray-400">3562K</strong>
                  </div>
                </div>
                <div>
                  <div class="flex items-center rounded-md bg-red-200 px-1 text-sm text-red-500">
                    <h>27.8%</h>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between text-sm font-medium text-gray-900 font-shabnam dark:text-gray-200">
              <h v-if="langToggle==true">خوشامد گویی به <strong>857 مشتری</strong> بایک پیام شخصی😎</h>
              <h v-else>Welcome <strong>857 customers</strong> with a personal message 😎</h>
              <button class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700" v-if="langToggle==true">ارسال پیام</button>
              <button class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700" v-else>send mesage</button>
            </div>
            <ul class="mx-10 flex flex-row justify-between focus:ring-4 focus:ring-gray-300">
              <div class="flex flex-col items-center gap-2">
                <img class="h-20 w-20 rounded-full hover:ring-4 hover:ring-blue-600" src="@/assets/avatar.jpg" alt="Rounded avatar">
                <h5 class="text-sm font-medium hover:!text-blue-700 text-gray-900 dark:text-gray-200">Mahdi.H</h5>
              </div>
              <div class="flex flex-col items-center gap-2">
                <img class="h-20 w-20 rounded-full hover:ring-4 hover:ring-blue-600" src="@/assets/avatar-1.jpg" alt="Rounded avatar">
                <h5 class="text-sm font-medium hover:!text-blue-700 text-gray-900 dark:text-gray-200">reza</h5>
              </div>
              <div class="flex flex-col items-center gap-2">
                <img class="h-20 w-20 rounded-full hover:ring-4 hover:ring-blue-600" src="@/assets/avatar-2.jpg" alt="Rounded avatar">
                <h5 class="text-sm font-medium hover:!text-blue-700 text-gray-900 dark:text-gray-200">ali</h5>
              </div>
              <div class="flex flex-col items-center gap-2">
                <img class="h-20 w-20 rounded-full hover:ring-4 hover:ring-blue-600" src="@/assets/avatar-2.jpg" alt="Rounded avatar">
                <h5 class="text-sm font-medium hover:!text-blue-700 text-gray-900 dark:text-gray-200">ali</h5>
              </div>
              <div class="flex flex-col items-center gap-2 hover:text-blue-600">
                <div class="ltr:rotate-180 flex h-20 w-20 items-center justify-center rounded-full bg-slate-200 hover:ring-4 hover:ring-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                  </svg>
                </div>
                <h5 class="text-sm font-medium hover:!text-blue-700 text-gray-900 dark:text-gray-200" v-if="langToggle==true">نمایش همه</h5>
                <h5 class="text-sm font-medium hover:!text-blue-700 text-gray-900 dark:text-gray-200" v-else>View all</h5>
              </div>
            </ul>
          </main>
        </main>
        <main class="flex flex-col gap-2 rounded rounded-md bg-white p-4 shadow dark:bg-gray-800 dark:bg-gray-900">
          <header class="flex items-center gap-2 text-gray-900 dark:text-gray-200">
            <div class="h-10 w-5 rounded rounded-md bg-gray-200"></div>
            <strong v-if="langToggle==true">بازدید های محصولات</strong>
            <strong v-else>Product views</strong>
          </header>
          <main class="flex flex-col">
  <div class="flex justify-between p-4 pb-0 md:p-6 md:pb-0">
    <div>
      <h5 class="pb-2 text-3xl font-bold leading-none text-gray-900 dark:text-white">$12,423</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Sales this week</p>
    </div>
    <div
      class="flex items-center text-center text-base font-semibold text-green-500 px-2.5 py-0.5 dark:text-green-500">
      23%
      <svg class="h-3 w-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
      </svg>
    </div>
  </div>
  <div id="labels-chart" class="px-2.5"></div>
  <div class="mt-5 grid grid-cols-1 items-center justify-between border-t border-gray-200 p-4 pt-0 dark:border-gray-700 md:p-6 md:pt-0">
    <div class="flex items-center justify-between pt-5">
      <!-- Button -->
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="lastDaysdropdown"
        data-dropdown-placement="bottom"
        class="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        type="button">
        Last 7 days
        <svg class="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <!-- Dropdown menu -->
      <div id="lastDaysdropdown" class="z-10 hidden w-44 rounded-lg bg-white shadow divide-y divide-gray-100 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
            </li>
          </ul>
      </div>
      <a
        href="#"
        class="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-blue-600 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-blue-500 dark:focus:ring-gray-700">
        Sales Report
        <svg class="rtl:rotate-180 w-2.5 h-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </div>
  </div>


          </main>
        </main>
      </div>
    </div>
    <div class="flex flex-col gap-2">
        <main class="flex flex-col gap-2 rounded rounded-md bg-white p-4 shadow dark:bg-gray-900">
          <header class="flex items-center gap-2 text-gray-900 dark:text-gray-200">
            <div class="h-10 w-5 rounded rounded-md bg-green-200"></div>
            <strong v-if="langToggle==true">محصولات محبوب</strong>
            <strong v-else>Popular products</strong>
          </header>
          <main class="flex flex-col">
            <div class="my-5 flex justify-between text-sm text-gray-900 font-shabnam dark:text-gray-200">
              <h v-if="langToggle==true">محصولات</h>
              <h v-else>Products</h>
              <h v-if="langToggle==true">درآمد</h>
              <h v-else>Earning</h>
            </div>
            <hr>
            <ul class="py-2 text-gray-900 dark:text-gray-200">
              <li class="flex items-center justify-between gap-2 py-5 hover:bg-gray-100 hover:p-4 dark:hover:bg-gray-600 dark:hover:text-white">
                <div class="flex items-center gap-2">
                  <img class="h-12 w-12 rounded rounded-md" src="@/assets/avatar-1.jpg"/>
                  <div class="flex flex-col">
                  <strong class="text-sm">Crypter - NFT UI</strong>
                  <strong>kit</strong>
                </div>
                </div>
                <div class="flex flex-col">
                  <strong class="text-sm">$2,453.80</strong>
                  <strong class="rounded-md bg-green-100 p-1 text-center text-sm text-green-400" v-if="langToggle==true">فعال</strong>
                  <strong class="rounded-md bg-green-100 p-1 text-center text-sm text-green-400" v-else>Active</strong>
                </div>
              </li>
              <li class="flex items-center justify-between gap-2 py-5 hover:bg-gray-100 hover:p-4 dark:hover:bg-gray-600 dark:hover:text-white">
                <div class="flex items-center gap-2">
                  <img class="h-12 w-12 rounded rounded-md" src="@/assets/avatar-1.jpg"/>
                  <div class="flex flex-col">
                  <strong class="text-sm">Crypter - NFT UI</strong>
                  <strong>kit</strong>
                </div>
                </div>
                <div class="flex flex-col">
                  <strong class="text-sm">$2,453.80</strong>
                  <strong class="rounded-md bg-green-100 p-1 text-center text-sm text-green-400" v-if="langToggle==true">فعال</strong>
                  <strong class="rounded-md bg-green-100 p-1 text-center text-sm text-green-400" v-else>Active</strong>
                </div>
              </li>
              <li class="flex items-center justify-between gap-2 py-5 hover:bg-gray-100 hover:p-4 dark:hover:bg-gray-600 dark:hover:text-white">
                <div class="flex items-center gap-2">
                  <img class="h-12 w-12 rounded rounded-md" src="@/assets/avatar1.avif"/>
                  <div class="flex flex-col">
                  <strong class="text-sm">Crypter - NFT UI</strong>
                  <strong>kit</strong>
                </div>
                </div>
                <div class="flex flex-col">
                  <strong class="text-sm">$2,453.80</strong>
                  <strong class="rounded-md bg-red-100 p-1 text-center text-sm text-red-400" v-if="langToggle==true">غیرفعال</strong>
                  <strong class="rounded-md bg-red-100 p-1 text-center text-sm text-red-400" v-else>Deactive</strong>
                </div>
              </li>
              <li class="flex items-center justify-between gap-2 py-5 hover:bg-gray-100 hover:p-4 dark:hover:bg-gray-600 dark:hover:text-white">
                <div class="flex items-center gap-2">
                  <img class="h-12 w-12 rounded rounded-md" src="@/assets/avatar.jpg"/>
                  <div class="flex flex-col">
                  <strong class="text-sm">Crypter - NFT UI</strong>
                  <strong>kit</strong>
                </div>
                </div>
                <div class="flex flex-col">
                  <strong class="text-sm">$2,453.80</strong>
                  <strong class="rounded-md bg-green-100 p-1 text-center text-sm text-green-400" v-if="langToggle==true">فعال</strong>
                  <strong class="rounded-md bg-green-100 p-1 text-center text-sm text-green-400" v-else>Active</strong>
                </div>
              </li>
              <li class="flex items-center justify-between gap-2 py-5 hover:bg-gray-100 hover:p-4 dark:hover:bg-gray-600 dark:hover:text-white">
                <div class="flex items-center gap-2">
                  <img class="h-12 w-12 rounded rounded-md" src="@/assets/avatar-2.jpg"/>
                  <div class="flex flex-col">
                  <strong class="text-sm">Crypter - NFT UI</strong>
                  <strong>kit</strong>
                </div>
                </div>
                <div class="flex flex-col">
                  <strong class="text-sm">$2,453.80</strong>
                  <strong class="rounded-md bg-red-100 p-1 text-center text-sm text-red-400" v-if="langToggle==true">غیرفعال</strong>
                  <strong class="rounded-md bg-red-100 p-1 text-center text-sm text-red-400" v-else>Deactive</strong>
                </div>
              </li>
            </ul>
            <button class="rounded-lg border border-gray-200 bg-white px-5 font-bold text-gray-900 py-2.5 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-blue-600 dark:text-gray-200 dark:hover:bg-blue-700" v-if="langToggle==true">همه محصولات</button>
            <button class="rounded-lg border border-gray-200 bg-white px-5 font-bold text-gray-900 py-2.5 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-blue-600 dark:text-gray-200 dark:hover:bg-blue-700" v-else>All Produces</button>
          </main>
        </main>
        <main class="flex flex-col gap-2 rounded rounded-md bg-white p-4 shadow dark:bg-gray-900">
          <header class="flex items-center gap-2 text-gray-900 dark:text-gray-200">
            <div class="h-10 w-5 rounded rounded-md bg-red-200"></div>
            <strong v-if="langToggle==true">درخواست بازپرداخت</strong>
            <strong v-else>Refund requestsd</strong>
          </header>
          <main class="flex flex-col">
            <div class="flex items-start gap-2 py-4 text-gray-900 dark:text-gray-200">
              <div class="flex items-center justify-center rounded-full bg-red-100 p-3 text-red-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-handbag" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z"/>
                </svg>
              </div>
              <h v-if="langToggle==true">شما <strong>52 درخواست بازپرداخت باز</strong> برای اقدام دارید. این شامل <strong>8 درخواست جدید است.</strong> 👀</h>
              <h v-else>You have <strong>52 open refund</strong> requests to action. This includes <strong>8 new requests.</strong> 👀</h>
            </div>
            <button class="rounded-lg border border-gray-200 bg-white px-5 font-bold text-gray-900 py-2.5 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-blue-600 dark:text-gray-200 dark:hover:bg-blue-700" v-if="langToggle==true">بررسی درخواست های بازپرداخت</button>
            <button class="rounded-lg border border-gray-200 bg-white px-5 font-bold text-gray-900 py-2.5 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-blue-600 dark:text-gray-200 dark:hover:bg-blue-700" v-else>Review Refund Requests</button>
          </main>
        </main>
    </div>
  </div>
</template>
