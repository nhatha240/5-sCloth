<template>
    <HeaderMain @update:search="getProductName" />
    <div class="shop-layout bg-[#FFFFFF] pt-[45px] w-[85%] mx-auto mb-[117px]">
        <div class="text-[#000000] font-semibold text-[45px]">
            Yêu thích
        </div>
        <div class="w-full flex justify-end mb-[53px]">
            <div class="">
                <Menu as="div" class="relative">
                    <MenuButton
                        class="flex items-center justify-between bg-white text-[#D651FF] text-lg font-medium py-[10px] px-[7px] rounded-lg border-[#D651FF] border-[1px] min-w-[126px]">
                        <div class="flex items-center gap-[16px]">
                            <div>Mới nhất</div>
                            <img src="/images/arrow_sort_icon.svg" alt="">
                        </div>
                    </MenuButton>
                    <MenuItems class="z-[1] absolute top-[64px] right-0 w-full origin-top-right divide-y 
                                    divide-gray-100 bg-white shadow-lg ring-1
                                    ring-black/5 focus:outline-none rounded-[10px]">
                        <MenuItem v-for="(tag, index) in tagList" :key="index" as="div" :class="[
                            tagChoosen === tag.value ? 'bg-[#EEDFF3]' : '',
                            index === 0 ? 'rounded-[10px_10px_0_0]' : '',
                            tagList.length === (index - 1) ? 'rounded-[0_0_10px_10px]' : '',
                            'group flex items-center justify-between w-max text-[#D651FF] menu-item-text pt-[14px] py-[10px] px-[25px] cursor-pointer',
                        ]" @click="changeTag(tag.value)">
                        {{ tag.label }}
                        <img src="/images/check_chose_category.svg" alt="" v-if="tagChoosen === tag.value">
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </div>
        <div class="">
            <div class="grid grid-cols-4 gap-[70px]">
                <div class="flex-[0_0_25%]" v-for="(product, index) in productList" :key="index">
                    <div class="h-full flex flex-col justify-between">
                        <div class="relative w-full mb-[30px] group hover:bg-inherit" @click="productDetails(product.id)">
                            <img class="object-cover rounded-[20px]" :src="product.product_image" alt="">
                            <div class="absolute top-[28px] left-0" v-if="product.bestSeller">
                                <div class="best-sell-tag">Best Seller</div>
                            </div>
                            <div
                                class="w-full h-full absolute top-0 left-0 rounded-[20px] hidden group-hover:block bg-[#8D28ADD9]">
                                <div class="absolute left-[9px] top-[8px] bg-[#inherit] z-10">
                                    <div class="flex flex-col gap-[30px]">
                                        <div
                                            class="relative cursor-pointer w-[59px] h-[59px] bg-[#FFFFFF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                                            <img class="w-[38%] center-image" src="/images/add_cart_product_btn.svg"
                                                alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-[10px] rating-field mb-[16px]">
                            <img src="/images/star_rating_shop.svg" alt="">
                            <div class="font-semibold">
                                {{ product.rating }}
                            </div>
                            <div class="w-[4px] h-[4px] bg-[#333333] rounded-full"></div>
                            <div class="font-medium">
                                {{ product.rating_count }} reviews
                            </div>
                        </div>
                        <div class="flex gap-[12px] items-center pl-[19px] mb-[17px]">
                            <div class="border border-[#D651FF] rounded-[50%] w-[30px] h-[30px] cursor-pointer"
                                :class="{ 'choosen-color': color.active }" :style="`background-color: ${color.color};`"
                                v-for="(color, i) in product.color_list" :key="i" @click="chooseColor(index, i)">
                            </div>
                        </div>
                        <div class="text-[#D651FF] font-semibold text-[20px]">
                            {{ product.category }}
                        </div>
                        <div class="mb-[5px] product-text text-[28px]">
                            {{ product.product_name }}
                        </div>
                        <div class="mb-[36px] font-normal text-[#00000099] text-[18px]">
                            {{ product.brand_name }}
                        </div>
                        <div class="flex items-center gap-5 product-text text-[28px]">
                            ${{ product.sale_price ? product.sale_price : product.price }}
                            <span class="sale-text" v-if="product.sale_price">
                                ${{ product.price }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Paginate v-if="productList.length > 0" v-model:page="page" v-model:page-size="pageSize" :showPaging="true"
            :items="productList" class="mt-[110px]" :length="totalItems" :total-page="totalPage" :topage="toPage" />
    </div>
</template>

<script lang="js" setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { generateFakeData } from '../constant/commonFunction'
import Paginate from '../components/Paginate.vue'
import HeaderMain from '@/components/HeaderMain.vue'
import { useShopStore } from '@/stores/ShopStore'

const route = useRoute()
const router = useRouter()
const storeShop = useShopStore()
const page = ref(route?.query?.page ? route.query.page : 1)
const pageSize = ref(route?.query?.pageSize ? route.query.pageSize : 12)
const productList = ref([])
const imageList = ref([
    '/images/product_shirt1.svg',
    '/images/product_shirt2.svg',
    '/images/product_shirt3.svg',
    '/images/product_shirt4.svg',
    '/images/product_shirt5.svg',
    '/images/product_shirt6.svg',
]);
const tagList = ref([
    {
        label: 'Mới nhất', value: 'new'
    },
    {
        label: 'Oldest', value: 'old'
    },
    {
        label: 'Best Sellers', value: 'best_seller'
    },
])
const totalPage = ref()
const totalItems = ref()

const toPage = () => {

}

const initProducts = async () => {
    try {
        const data = await storeShop.listProduct()
        console.log(data);
        if (data?.results && data?.results?.length > 0) {
            productList.value = data
        }
        console.log(data)
        totalPage.value = data?.totalPages
        totalItems.value = data?.totalResults
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    productList.value = generateFakeData(12, imageList.value)
    initProducts()
})

const chooseColor = (index, indexColor) => {
    productList.value[index].color_list.forEach((color, i) => {
        color.active = i === indexColor;
    });
}

const productDetails = (id) => {
    router.push({ name: 'ProductView', params: { id: id } })
}

const getProductName = (e) => {
  console.log(e);
}
</script>

<style></style>