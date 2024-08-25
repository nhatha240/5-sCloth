<template>
    <HeaderMain @update:search="getProductName" />
    <div class="shop-layout bg-[#FFFFFF] pt-[45px] w-[85%] mx-auto mb-[117px]">
        <div class="text-[#000000] font-semibold text-[45px]">
            Sản phẩm
        </div>
        <div class="w-full flex justify-end mb-[53px]">
        </div>
        <div class="">
            <div class="grid grid-cols-4 gap-[70px]">
                <div class="flex-[0_0_25%]" v-for="(product, index) in productList" :key="index">
                    <div class="h-full flex flex-col justify-between">
                        <div class="relative w-full mb-[30px] group hover:bg-inherit">
                            <img crossorigin="anonymous" class="object-cover rounded-[20px] min-h-[382px]" 
                                :src="product.image[0] == 'public/uploads/products/default.jpg' 
                                    ? imageList[Math.floor(Math.random() * (5 - 0) + 0)] : urlApi + product.image[0]" 
                                alt=""
                                >
                            <div class="absolute top-[28px] left-0" v-if="product.isBestSeller">
                                <div class="best-sell-tag">Best Seller</div>
                            </div>
                            <div
                                class="w-full h-full absolute top-0 left-0 rounded-[20px] hidden group-hover:block bg-[#8D28ADD9]">
                                <div class="absolute left-[9px] top-[8px] bg-[#inherit] z-10">
                                    <div class="flex flex-col gap-[30px]">
                                        <div
                                            class="relative cursor-pointer w-[59px] h-[59px] bg-[#FFFFFF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]" @click="addToCart(product.id, product.quantity)">
                                            <img crossorigin="anonymous" class="w-[38%] center-image" src="/images/add_cart_product_btn.svg"
                                                alt="">
                                        </div>
                                        <div
                                            class="relative cursor-pointer w-[59px] h-[59px] bg-[#FFFFFF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]"
                                            @click="productDetails(product.id)"
                                        >
                                            <img crossorigin="anonymous" class="w-[38%] center-image" src="/images/search_product_btn.svg"
                                                alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-[10px] rating-field mb-[16px]">
                            <img crossorigin="anonymous" src="/images/star_rating_shop.svg" alt="">
                            <div class="font-semibold">
                                {{ product.userRating ? Math.round(product?.totalRating/product?.userRating) : 0 }}
                            </div>
                            <div class="w-[4px] h-[4px] bg-[#333333] rounded-full"></div>
                            <div class="font-medium">
                                {{ product.userRating }} reviews
                            </div>
                        </div>
                        <div class="flex gap-[12px] items-center pl-[19px] mb-[17px]">
                            <div class="border border-[#D651FF] rounded-[50%] w-[30px] h-[30px] cursor-pointer"
                                :style="`background-color: ${color};`"
                                v-for="(color, i) in product?.options[0]?.color" :key="i">
                            </div>
                        </div>
                        <div class="flex">
                            <div class="text-[rgb(214,81,255)] font-semibold text-[20px]" v-for="(category, i) in product?.category" :key="i">
                                {{ category ? findCategoryName(category) : '' }}{{ (i < product?.category.length - 1 && i % 2 === 0) ? ', ' : '' }}
                            </div>
                        </div>
                        <div class="mb-[5px] product-text text-[28px]">
                            {{ product.name }}
                        </div>
                    <div class="mb-[36px] font-normal text-[#00000099] text-[18px] max-text-inline">
                            {{ product.description }}
                        </div>
                        <div class="flex items-center gap-5 product-text text-[28px]">
                            ${{ product.discountPrice ? product.discountPrice : product.price }}
                            <span class="sale-text" v-if="product.discountPrice">
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
import { useProductStore } from '@/stores/ProductStore'
import { useCategoryStore } from '@/stores/CategoryStore'
import { useShopStore } from '@/stores/ShopStore'
import { toastError, toastSuccess } from '@/constant/commonUsage'

const urlApi = import.meta.env.VITE_BASE_URL + '/'
const storeProduct = useProductStore()
const storeCategory = useCategoryStore()
const storeShop = useShopStore()
const route = useRoute()
const router = useRouter()
const page = ref(route?.query?.page ? route.query.page : 1)
const pageSize = ref(route?.query?.pageSize ? route.query.pageSize : 10)
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
    initProducts()
}

const addToCart = async (id, stock) => {
    if (stock > 0) {
        try {
            const payload = {
                productId: id,
                quantity: 1,
            }
            await storeProduct.addCart(payload)
            toastSuccess('Add to cart success')
            storeProduct.listCart()
        } catch (error) {
            return error
        }
    } else {
        toastError('Out of stock')
    }
}

const initCategories = async () => {
    try {
        await storeCategory.getAllCategory({})
    } catch (error) {
        return error
    }
}

const findCategoryName = (id) => {
    if (storeCategory.categories) {
        return storeCategory.categories?.find((category) => category.id == id)?.name;
    }
}

const initProducts = async () => {
    try {
        const params = {
            page: page.value,
            pageSize: pageSize.value,
            name: storeShop.productName
        }
        const data = await storeProduct.getAllProduct(params)
        console.log(data);
        if (data?.results?.results && data?.results?.results?.length > 0) {
            productList.value = data?.results?.results
        }
        storeShop.product = ''
        totalPage.value = data?.results?.totalPages
        totalItems.value = data?.results?.totalResults
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    // productList.value = generateFakeData(12, imageList.value)
    initCategories()
    initProducts()
})

const productDetails = (id) => {
    router.push({ name: 'ProductView', params: { id: id } })
}

const getProductName = async (e) => {
  await initProducts()
}
</script>

<style></style>