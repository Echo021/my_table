import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import elementPlus from 'element-plus'

import 'element-plus/theme-chalk/index.css';



createApp(App).use(elementPlus).mount('#app')
