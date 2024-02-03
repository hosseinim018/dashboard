<script>
export default {
  name: 'Home',
}
</script>

<template>
<div class="grid grid-cols-12">
<!-- side bar -->
    <div class="col-span-3 bg-gray-100">
      <aside class="bg-white h-screen text-2xl">
        <h>Logo</h>
        <ul class="list-group list-group-flush m-6 rounded-lg">
<!--          home-->
          <li class="list-group-item list-group-item-action py-3 gap-4 hover:bg-gray-100">
            <div class="flex items-center gap-2">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
              </svg>
              <span class="text-balance font-medium">خانه</span>
            </div>
          </li>
<!--          produces-->
          <li class="list-group-item list-group-item-action py-3 gap-4 hover:bg-gray-100">
            <div class="flex items-center gap-2">
              <svg class='w-8 h-8' fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
              </svg>
              <span class="text-balance font-medium">محصولات</span>
            </div>
          </li>
<!--          customers-->
          <li class="list-group-item list-group-item-action py-3 gap-4 hover:bg-gray-100">
            <div class="flex items-center gap-2">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>
              <span class="text-balance font-medium">مشتری ها</span>
            </div>
          </li>
<!--          shop-->
          <li class="list-group-item list-group-item-action py-3 gap-4 hover:bg-gray-100">
            <div class="flex items-center gap-2">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
              </svg>
              <span class="text-balance font-medium">مشتری ها</span>
            </div>
          </li>
        </ul>

      </aside>
    </div>

  <!-- main content -->
  <div class="col-span-9 bg-gray-300 p-6">
    <h2 class="text-2xl font-bold mb-4">داشبورد</h2>
    <p>Lorzzzzsadm ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex justo. Curabitur in neque ornare, varius elit ut, varius lacus.</p>
  </div>
</div>


</template>

<style scoped>

</style>