<template>
  <div class="px-[60px] w-full pt-4 border-b border-[#EEDFF3]">
    <nav class="relative flex items-center justify-between">
      <div class="absolute top-[119px] right-0 basket-layout z-[1]" v-if="showBasket">
        <div class="w-[690px] bg-[#D9D9D9] text-[#1E1E1E] pb-[32px] px-[16px] rounded-3xl shadow-[10px_5px_5px_rgb(23,30,28)]">
          <div class="border-b-[1.5px] border-[#D0CFCF]">
            <div class="flex justify-center">
              <img crossorigin="anonymous" class="cursor-pointer" src="/images/arrow_up_icon.svg" alt="" @click="openBasket">
            </div>
            <div class="text-center main-text">Tiếp tục mua sắm</div>
          </div>
          <div class="pt-[17px]">
            <div class="sub-text">Giỏ hàng</div>
            <div class="details-text pb-[17px]">
              Bạn có {{ storeProduct.cartItem?.length }} sản phẩm trong giỏ hàng
            </div>
            <div class="max-h-[399px] flex flex-col gap-[28px] overflow-auto mb-[31px]">
              <div class="flex items-center justify-between py-[11px] pr-[24px] pl-[10px] bg-[#D651FF] rounded-[15px]"
                v-for="(item, i) in storeProduct.cartItem" :key="i">
                <div class="max-w-[85px] h-[93px]">
                  <img crossorigin="anonymous" class="object-cover max-h-[93px]" :src="item?.product?.image[0] ? urlApi + item.product.image[0] : '/images/basket_images1.svg'" alt="">
                </div>
                <div class="flex flex-col pr-[86px]">
                  <div class="font-medium main-text">{{ item?.product?.name }}</div>
                  <div class="flex justify-between gap-2">
                    <div>
                      Size: 
                      <span v-if="item?.size">
                        {{ item.size }}
                      </span>
                      <span v-for="(size, i) in item?.product?.options[0]?.size" :key="i" v-else>
                        {{ size }}{{ (i < item?.product?.options[0]?.size?.length - 1) ? ', ' : '' }}
                      </span>
                    </div>
                    <div>Màu: 
                      <span v-if="item?.color">
                        {{ item.color }}
                      </span>
                      <span v-for="(color, i) in item?.product?.options[0]?.color" :key="i" v-else>
                        {{ color }}{{ (i < item?.product?.options[0]?.color?.length - 1) ? ', ' : '' }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="pr-[46px] flex items-center gap-[6px]">
                  <div class="text-[#393939] font-semibold text-[22px]">
                    {{ item.quantity }}
                  </div>
                  <div class="flex flex-col gap-[3px]">
                    <img crossorigin="anonymous" class="cursor-pointer" src="/images/up_icon.svg" alt="" @click="updateCart(item, item.product.id, 1)">
                    <img crossorigin="anonymous" class="cursor-pointer" src="/images/down_icon.svg" alt="" @click="updateCart(item, item.product.id, -1)">
                  </div>
                </div>
                <div class="pr-[40px] text-[#393939] font-medium text-sm">
                  ${{ (item?.product?.price * item?.quantity) }}
                </div>
                <div class="" @click="removeItemCart(item?.product?.id)">
                  <img crossorigin="anonymous" class="cursor-pointer" src="/images/trash_can_icon.svg" alt="">
                </div>
              </div>
            </div>
            <div class="border-t border-[#D0CFCF] pt-[15px]" v-if="storeProduct.cartItem?.length > 0">
              <button class="w-[50%] mx-auto rounded-[12px] flex items-center justify-between subscribe-purple-button" @click="openCheckout">
                <div class="font-medium text-[16px] tex-[#FEFCFC]">${{ storeProduct.totalPrice ?? 0 }}</div>
                <div class="font-medium text-[16px] tex-[#FEFCFC]">Checkout</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <img crossorigin="anonymous" src="/images/main_logo.svg" alt="Clevr Logo" class="cursor-pointer" @click="() => { router.push({ name: 'home' }) }" />
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
              <img crossorigin="anonymous" class="cursor-po" src="/images/arrow_icon_menu.svg" alt="">
            </MenuButton>
            <MenuItems
              class="z-[1] absolute right-0 w-full origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <MenuItem v-for="(link, index) in menuContent" :key="index" as="a" :class="[
        route.name === link.value ? 'shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : '',
        'group flex w-full items-center text-[#D651FF] menu-item-text pt-[14px] pb-[9px] px-[35px] cursor-pointer',
      ]" @click="toPage(link)">
              {{ link.label }}
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
        <div class="relative search-header-input flex items-center">
          <input type="text" placeholder="Nhập tên sản phẩm" v-model="storeShop.product" @keydown.enter="searchProduct">
          <img crossorigin="anonymous" class="absolute right-[30px] cursor-pointer" src="/images/search_icon.svg" alt="" @click="searchProduct" />
        </div>
      </div>
      <div class="flex items-center gap-12">
        <div class="relative w-10 cursor-pointer" @click="openBasket" v-if="storeAuth.user">
          <img crossorigin="anonymous" src="/images/basket.svg" alt="basket" />
          <span
            class="absolute right-0 bg-[#D651FF] w-[23px] h-[23px] border-[#FFFFFF] border-2 rounded-[50%] basket-number"
            v-if="storeProduct.cartItem?.length > 0"
          >
            {{ storeProduct.cartItem?.length }}
          </span>
        </div>
        <Menu as="div" class="relative" v-if="storeAuth.user">
          <MenuButton
            class="flex items-center justify-between bg-white text-[#D651FF] font-semibold py-2 px-4 rounded-lg border-[#D651FF] border min-w-[261px]">
            <div class="flex items-center gap-[21px]">
              <img crossorigin="anonymous" src="/images/icon_user.svg" alt="user" />
              {{ storeAuth.user?.name }}
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
        <button class="btn-pink px-[20px]" v-else @click="() => {router.push({ name: 'LoginView' })}">
          Đăng nhập
        </button>
      </div>
    </nav>
  </div>
  <BreadCumbs></BreadCumbs>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import BreadCumbs from './BreadCumbs.vue'
import { useShopStore } from '../stores/ShopStore'
import { useAuthStore } from '../stores/AuthStore'
import { useProductStore } from '../stores/ProductStore'
import { toastSuccess } from '@/constant/commonUsage';
import { useCategoryStore } from '../stores/CategoryStore'

const emits = defineEmits(['update:search'])
const urlApi = import.meta.env.VITE_BASE_URL + '/'
const storeCategory = useCategoryStore()
const storeAuth = useAuthStore()
const storeShop = useShopStore()
const storeProduct = useProductStore()
const router = useRouter();
const route = useRoute();
const links = ref([
  { href: '/', label: 'Trang chủ', value: 'home' },
  { href: '/sign-out', label: 'Đăng Xuất', value: 'signOut' },
  { href: '/like-product', label: 'Yêu thích', value: 'LikeProductsView' },
  { href: '/order', label: 'Đơn hàng', value: 'OrderView' },
]);

const menuContent = ref([
  { href: '/', label: 'Trang chủ', value: 'home' },
  { href: '/shop?category=Đồ Nam', label: 'Đồ Nam', value: 'ShopView', category: 'Đồ Nam' },
  { href: '/shop?category=Đồ Nữ', label: 'Đồ Nữ', value: 'ShopView', category: 'Đồ Nữ' },
  { href: '/shop?category=Đồ Trẻ Em', label: 'Đồ Trẻ Em', value: 'ShopView', category: 'Đồ Trẻ Em' },
  { href: '/shop?category=Phụ Kiện', label: 'Phụ Kiện', value: 'ShopView', category: 'Phụ Kiện' },
  { href: '/order', label: 'Đơn hàng', value: 'OrderView' },
  { href: '/product', label: 'Sale', value: 'ProductListView' },
])
const showBasket = ref(false)

onMounted(() => {
  initCageoriesMenu()
  refreshToken()
  if (storeAuth.user) {
    getListCart()
  }
})

const categoriesMenu = ref([]);
const initCageoriesMenu = async () => {
  try {
    const params = {
      page: 1,
      limit: 4
    }
    const data = await storeCategory.getAllCategory(params)
    if (data && data?.length > 0) {
      categoriesMenu.value = data;

    }
  } catch (error) {
    return error
  }
}

const refreshToken = async () => {
  if (storeAuth.userRefreshToken) {
    try {
      const params = {
        refreshToken: storeAuth.userRefreshToken
      }
      // await storeAuth.refreshUserToken(params)
    } catch (error) {
      return error
    }
  }
}

const toPage = (link) => {
  if (link.value === 'signOut') {
    storeAuth.clearStoreAuth()
    router.push({ name: 'LoginView' });
  } else {
    router.push({ name: link.value, query: { category: link?.category } });
  }
}

const getListCart = async () => {
  try {
    const data = await storeProduct.listCart()
    storeProduct.cartItem = data?.products
  } catch (error) {
    return error
  }
}

const removeItemCart = async (id) => {
  try {
    await storeProduct.removeCart(id)
    getListCart()
  } catch (error) {
    return error
  }
}

const updateCart = async (item, id, quantity) => {
    try {
        const payload = {
            productId: id,
            quantity: quantity,
            color: item?.color,
            size: item?.size,
        }
        await storeProduct.addCart(payload)
        toastSuccess('Thêm vỏ hàng thành công')
        getListCart()
    } catch (error) {
        return error
    }
}

const openBasket = () => {
  showBasket.value = !showBasket.value
}

const searchProduct = () => {
  emits("update:search", storeShop.productName);
  router.push({ name: 'ProductListView' })
}
const openCheckout = () => {
  router.push({ name: 'Checkout' })
}
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
