<template>
  <div class="container mx-auto w-full pt-4">
    <nav class="flex items-center justify-between">
      <div class="flex items-center">
        <img src="/images/main_logo.svg" alt="Clevr Logo" class="" />
      </div>
      <ul class="text-[#755A7D] flex space-x-6">
        <li v-for="(page, index) in menuContent" :key="index">
          <a :href="page.href" 
            :class="{ 'hover:text-black hover:subpixel-antialiase': true, 'text-[#000000] font-bold': route.name === page.value }">
            {{ page.label }}
          </a>
        </li>
      </ul>
      <div class="flex items-center gap-12">
        <div class="relative w-10 cursor-pointer">
          <img src="/images/basket.svg" alt="basket" />
          <span
            class="absolute right-0 bg-[#D651FF] w-[23px] h-[23px] border-[#FFFFFF] border-2 rounded-[50%] basket-number">1</span>
        </div>
        <Menu as="div" class="relative">
          <MenuButton
            class="flex items-center justify-between bg-white text-[#D651FF] font-semibold py-2 px-4 rounded-lg border-[#D651FF] border min-w-[261px]">
            <div class="flex items-center gap-[21px]">
              <img src="/images/icon_user.svg" alt="user" />
              Roberto
            </div>
            <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.0961914H7.09619H14.1924L7.09619 7.19238L0 0.0961914Z" fill="#D651FF" />
            </svg>
          </MenuButton>
          <MenuItems
            class="z-[1] absolute right-0 w-full origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <MenuItem v-for="(link, index) in links" :key="index" as="a" :class="[
              route.name === link.value ? 'shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : '',
              'group flex w-full items-center text-[#D651FF] menu-item-text pt-[14px] pb-[9px] px-[35px] cursor-pointer',
            ]" @click="toPage(link)">
            {{ link.label }}
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const router = useRouter();
const route = useRoute();
const links = ref([
  { href: '/', label: 'Home', value: 'home' },
  { href: '/sign-out', label: 'Đăng Xuất', value: 'signOut' },
  { href: '/support', label: 'Thông tin' },
  { href: '/license', label: 'Đơn hàng' },
]);

const menuContent = ref([
  { href: '/', label: 'Home', value: 'home' },
  { href: '/', label: 'Đồ Nam', value: '' },
  { href: '/', label: 'Đồ Nữ', value: '' },
  { href: '/', label: 'Đồ Trẻ Em', value: '' },
  { href: '/', label: 'Phụ Kiện', value: '' },
  { href: '/', label: 'Đơn hàng', value: '' },
  { href: '/', label: 'Sale', value: '' },
])

const toPage = (link) => {
  router.push({ name: link.value });
}
// import { useAuthStore } from '../stores/AuthStore'

// const storeAuth = useAuthStore()
// const router = useRouter()

// const logout = async () => {
//   try {
//     await storeAuth.logout()
//     router.push({ name: 'Login' })
//   } catch (error) {}
// }
</script>
<style scoped></style>
