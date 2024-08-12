import './assets/main.css'
import 'vue-final-modal/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'vue3-easy-data-table/dist/style.css';
import 'vue-loading-overlay/dist/css/index.css'
import 'vue3-toastify/dist/index.css';

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
import "echarts";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import EmptyAdminData from './components/EmptyAdminData.vue'
import ConfirmDeleteItem from './components/ConfirmDeleteItem.vue'
import HeaderMain from './components/HeaderMain.vue'
import { Field, Form, ErrorMessage } from 'vee-validate'
import './vee-validate'
import { LoadingPlugin } from 'vue-loading-overlay'
import PaginateAdmin from './components/PaginateAdmin.vue'

const app = createApp(App)
const swiper = new Swiper()
const vfm = createVfm()

app.use(createPinia({components: true, directives: true}))
app.use(createBootstrap({components: true, directives: true}))
app.use(router)
app.use(swiper)
app.use(vfm)
app.use(LoadingPlugin);
app.component('Menu', Menu)
app.component('MenuButton', MenuButton)
app.component('MenuItems', MenuItems)
app.component('MenuItem', MenuItem)
app.component('VueFinalModal', VueFinalModal)
app.component('EasyDataTable', Vue3EasyDataTable);
app.component('EmptyAdminData', EmptyAdminData);
app.component('ConfirmDeleteItem', ConfirmDeleteItem);
app.component('HeaderMain', HeaderMain);
app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);
app.component('PaginateAdmin', PaginateAdmin);

app.mount('#app')
