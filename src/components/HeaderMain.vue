<template>
  <div class="px-[60px] w-full pt-4 border-b border-[#EEDFF3]">
    <nav class="relative flex items-center justify-between">
      <div class="absolute top-[119px] right-0 basket-layout z-[1]" v-if="showBasket">
        <div class="w-[690px] bg-[#D9D9D9] text-[#1E1E1E] pb-[32px] px-[16px] rounded-3xl">
          <div class="border-b-[1.5px] border-[#D0CFCF]">
            <div class="flex justify-center">
              <img class="cursor-pointer" src="/images/arrow_up_icon.svg" alt="" @click="openBasket">
            </div>
            <div class="text-center main-text">Tiếp tục mua sắm</div>
          </div>
          <div class="pt-[17px]">
            <div class="sub-text">Giỏ hàng</div>
            <div class="details-text pb-[17px]">
              Bạn có 5 sản phẩm trong giỏ hàng
            </div>
            <div class="max-h-[399px] flex flex-col gap-[28px] overflow-auto mb-[31px]">
              <div class="flex items-center justify-between py-[11px] pr-[24px] pl-[10px] bg-[#D651FF] rounded-[15px]"
                v-for="i in 5" :key="i">
                <div class="max-w-[85px] h-[93px]">
                  <img class="object-cover" src="/images/basket_images1.svg" alt="">
                </div>
                <div class="flex flex-col pr-[86px]">
                  <div class="font-medium main-text">Quần đùi vãi kaki</div>
                  <div class="flex justify-between">
                    <div>Size: s</div>
                    <div>Màu: đen</div>
                  </div>
                </div>
                <div class="pr-[46px] flex items-center gap-[6px]">
                  <div class="text-[#393939] font-semibold text-[22px]">1</div>
                  <div class="flex flex-col gap-[3px]">
                    <img class="cursor-pointer" src="/images/up_icon.svg" alt="">
                    <img class="cursor-pointer" src="/images/down_icon.svg" alt="">
                  </div>
                </div>
                <div class="pr-[40px] text-[#393939] font-medium text-sm">
                  $681
                </div>
                <div class="">
                  <img class="cursor-pointer" src="/images/trash_can_icon.svg" alt="">
                </div>
              </div>
            </div>
            <div class="border-t border-[#D0CFCF] pt-[15px]">
              <button class="w-[50%] mx-auto rounded-[12px] flex items-center justify-between subscribe-purple-button">
                <div class="font-medium text-[16px] tex-[#FEFCFC]">$1,672</div>
                <div class="font-medium text-[16px] tex-[#FEFCFC]">Checkout</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <img src="/images/main_logo.svg" alt="Clevr Logo" class="" />
      </div>
      <ul class="flex space-x-6" v-if="route.name === 'home'">
        <li v-for="(page, index) in menuContent" :key="index">
          <a :href="page.href"
            :class="{ 
              'hover:text-black hover:subpixel-antialiase no-underline text-[#755A7D]': true,
              'text-[#000000!important] font-bold': route.name === page.value }
            "
          >
            {{ page.label }}
          </a>
        </li>
      </ul>
      <div class="flex items-center gap-[20px]" v-else>
        <div>
          <Menu as="div" class="relative">
            <MenuButton
              class="flex items-center justify-between bg-[#D651FF] text-[#FFFFFF] font-semibold p-[20px] rounded-lg min-w-[114px]">
              <div class="flex items-center gap-[10px] font-semibold text-lg">
                Menu
              </div>
              <img class="cursor-po" src="/images/arrow_icon_menu.svg" alt="">
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
        <div class="relative search-header-input flex items-center">
          <input type="text" placeholder="Nhập tên sản phẩm" v-model="storeShop.product">
          <img class="absolute right-[30px] cursor-pointer" src="/images/search_icon.svg" alt="" @click="searchProduct" />
        </div>
      </div>
      <div class="flex items-center gap-12">
        <div class="relative w-10 cursor-pointer" @click="openBasket">
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
  <BreadCumbs></BreadCumbs>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import BreadCumbs from './BreadCumbs.vue'
import { useShopStore } from '../stores/ShopStore'

const emits = defineEmits(['update:search'])
const storeShop = useShopStore()
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
  { href: '/shop?category=maleShirt', label: 'Đồ Nam', value: 'ShopView', category: 'maleShirt' },
  { href: '/shop?category=femaleShirt', label: 'Đồ Nữ', value: 'ShopView', category: 'femaleShirt' },
  { href: '/shop?category=childShirt', label: 'Đồ Trẻ Em', value: 'ShopView', category: 'childShirt' },
  { href: '/shop?category=accessory', label: 'Phụ Kiện', value: 'ShopView', category: 'accessory' },
  { href: '/', label: 'Đơn hàng', value: '' },
  { href: '/', label: 'Sale', value: '' },
])
const showBasket = ref(false)

const toPage = (link) => {
  router.push({ name: link.value });
}

const openBasket = () => {
  showBasket.value = !showBasket.value
}

const searchProduct = () => {
  emits("update:search", storeShop.productName);
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
<style lang="scss">
.basket-layout {
  .main-text {
    @apply text-lg font-semibold;
  }

  .sub-text {
    @apply text-lg font-medium;
  }

  .details-text {
    @apply text-sm font-medium;
  }

  scrollbar-color: #D651FF #D9D9D9;
}
.search-header-input {
  input {
    background-color: #F3F3F3;
    min-width: 763px;
    padding: 20px 36px;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-align: left;
    color: #636363;
    border-radius: 8px;
  }
}
</style>
