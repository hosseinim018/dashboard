import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import 'flowbite';
import VueApexCharts from "vue3-apexcharts";
import { emitter } from "@/emitter";
const app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.use(VueApexCharts);
app.mount('#app')
// createApp(App).mount('#app')
