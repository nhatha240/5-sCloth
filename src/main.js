import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const app = createApp(App)
const swiper = new Swiper()

app.use(createPinia())
app.use(router)
app.use(swiper)
app.component('Menu', Menu)
app.component('MenuButton', MenuButton)
app.component('MenuItems', MenuItems)
app.component('MenuItem', MenuItem)

app.mount('#app')
