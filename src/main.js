import './assets/main.css'
import 'vue-final-modal/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'

import App from './App.vue'
import router from './router'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { VueFinalModal } from 'vue-final-modal'
import {createBootstrap} from 'bootstrap-vue-next'

const app = createApp(App)
const swiper = new Swiper()
const vfm = createVfm()

app.use(createPinia({components: true, directives: true}))
app.use(createBootstrap({components: true, directives: true}))
app.use(router)
app.use(swiper)
app.use(vfm)
app.component('Menu', Menu)
app.component('MenuButton', MenuButton)
app.component('MenuItems', MenuItems)
app.component('MenuItem', MenuItem)
app.component('VueFinalModal', VueFinalModal)

app.mount('#app')
