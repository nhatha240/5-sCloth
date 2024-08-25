<template>
    <HeaderMain @update:search="getProductName" />
    <div class="shop-layout bg-[#FFFFFF] pt-[45px] w-[85%] mx-auto mb-[137px]">
        <div class="row w-full mx-auto">
            <div class="flex-[0_0_25%] border-r border-[#F0E4F4] pr-[47px]">
                <div class="main-text">
                    Lọc
                </div>
                <div class="w-full">
                    <div class="p-4">
                        <h2 class="text-lg font-semibold mb-3 flex justify-between items-center">
                            Loại sản phẩm
                            <img crossorigin="anonymous" class="cursor-pointer" src="/images/arrow_category.svg" alt="" @click="toggleDropdown">
                        </h2>
                        <ul class="space-y-2 pl-[29px]" v-if="isOpen">
                            <li v-for="(option, index) in options" :key="index" class="flex items-center">
                                <input type="radio" :id="option.id" :value="option" v-model="selectedOption"
                                    class="form-radio text-purple-600 focus:ring-purple-500">
                                <label :for="option.id" class="ml-2 text-sm text-gray-700">{{ option?.name }}</label>
                            </li>
                        </ul>
                        <button @click="loadMore" class="w-full text-left text-sm text-purple-600 mt-2 hover:underline">
                            + Load More
                        </button>
                    </div>
                    <div class="p-4">
                        <h2 class="text-lg font-semibold mb-3 flex justify-between items-center">
                            Màu sắc
                            <img crossorigin="anonymous" class="cursor-pointer" src="/images/arrow_category.svg" alt=""
                                @click="toggleDropdownColor">
                        </h2>
                        <ul class="space-y-2 pl-[29px]" v-if="isOpenColor">
                            <div class="flex items-center">
                                <input type="radio" :id="colors.all" :value="colors.all" v-model="selectedColor"
                                    class="form-radio text-purple-600 focus:ring-purple-500">
                                <label :for="colors.all" class="ml-2 text-sm text-gray-700">{{ 'Tất cả' }}</label>
                            </div>
                            <li v-for="(color, index) in colors.color" :key="index" class="flex items-center">
                                <input type="radio" :id="color" :value="color" v-model="selectedColor"
                                    class="form-radio text-purple-600 focus:ring-purple-500">
                                <label :for="color" class="ml-2 text-sm text-gray-700">{{ color }}</label>
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <h2 class="text-lg font-semibold mb-3 flex justify-between items-center">
                            Mức giá
                            <img crossorigin="anonymous" class="cursor-pointer" src="/images/arrow_category.svg" alt=""
                                @click="toggleDropdownPrice">
                        </h2>
                        <div class="pl-[29px]" v-if="isOpenPrice">
                            <Slider v-model="priceRange" :tooltipPosition="'bottom'" :min="0" :max="500" :format="{
                                prefix: '$',
                                decimals: '0'
                            }" />
                        </div>
                    </div>
                    <div class="pt-[63px] p-4 flex flex-col gap-[25px]">
                        <button class="btn-pink" @click="searchByfilter">Refine Search</button>
                        <button class="btn-no-color" @click="resetFilter">Reset Filter</button>
                    </div>
                </div>
            </div>
            <div class="flex-[0_0_60%] flex-grow pl-[32px]">
                <div class="main-text">
                    {{ route?.query?.category ? route?.query?.category : 'Áo sơ mi' }}
                </div>
                <div class="flex justify-between items-center mb-[51px]">
                    <div class="note-text">Hơn {{ productList?.length }} sản phẩm ở đây!!</div>
                    <div class="">
                        <Menu as="div" class="relative">
                            <MenuButton
                                class="flex items-center justify-between bg-white text-[#D651FF] text-lg font-medium py-[10px] px-[7px] rounded-lg border-[#D651FF] border-[1px] min-w-[126px]">
                                <div class="flex items-center gap-[16px]">
                                    <div>Mới nhất</div>
                                    <img crossorigin="anonymous" src="/images/arrow_sort_icon.svg" alt="">
                                </div>
                            </MenuButton>
                            <MenuItems
                                class="z-[1] absolute top-[64px] right-0 w-full origin-top-right divide-y 
                                    divide-gray-100 bg-white shadow-lg ring-1
                                    ring-black/5 focus:outline-none rounded-[10px]">
                                <MenuItem v-for="(tag, index) in tagList" :key="index" as="div" 
                                :class="[
                                    tagChoosen === tag.value ? 'bg-[#EEDFF3]' : '',
                                    index === 0 ? 'rounded-[10px_10px_0_0]' : '',
                                    tagList.length === (index - 1) ? 'rounded-[0_0_10px_10px]' : '',
                                    'group flex items-center justify-between w-max text-[#D651FF] menu-item-text pt-[14px] py-[10px] px-[25px] cursor-pointer',
                                ]"
                                @click="changeTag(tag.value)"
                            >
                                {{ tag.label }}
                                <img crossorigin="anonymous" src="/images/check_chose_category.svg" alt="" v-if="tagChoosen === tag.value">
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-[70px]">
                    <div class="flex-[0_0_30%]" v-for="(product, index) in productList" :key="index">
                        <div class="h-full flex flex-col justify-between">
                            <div class="relative w-full mb-[30px] group hover:bg-inherit">
                                <img crossorigin="anonymous" class="object-cover rounded-[20px] min-w-[260px] min-h-[364px] max-w-[260px] max-h-[364px]" 
                                    :src="product.image && product.image[0] ? urlApi + product.image[0] : ''"  alt=""
                                >
                                <div class="absolute top-[28px] left-0" v-if="product.isBestSeller">
                                    <div class="best-sell-tag">Best Seller</div>
                                </div>
                                <div class="hidden group-hover:block absolute right-[27px] bottom-[25px] z-10">
                                    <div class="flex flex-col gap-[30px]">
                                        <div class="relative cursor-pointer w-[59px] h-[59px] bg-[#FFFFFF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]"
                                            @click="product.is_like = !product.is_like">
                                            <img crossorigin="anonymous" class="w-[38%] center-image" src="/images/like_product_btn_active.svg"
                                                alt="" v-if="product.is_like" @click="unLikeProduct(product?.id)">
                                            <img crossorigin="anonymous" class="w-[38%] center-image" src="/images/like_product_btn.svg" alt=""
                                                v-else @click="likeProduct(product?.id)">
                                        </div>
                                        <div
                                            class="relative cursor-pointer w-[59px] h-[59px] bg-[#FFFFFF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]"
                                            @click="productDetails(product.id)"
                                        >
                                            <img crossorigin="anonymous" class="w-[38%] center-image" src="/images/search_product_btn.svg"
                                                alt="">
                                        </div>
                                        <div
                                            class="relative cursor-pointer w-[59px] h-[59px] bg-[#FFFFFF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]"
                                            @click="addToCart(product.id, product.quantity)"
                                        >
                                            <img crossorigin="anonymous" class="w-[38%] center-image" src="/images/add_cart_product_btn.svg"
                                                alt="">
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
                                    :class="{ 'choosen-color': color }"
                                    :style="`background-color: ${color};`"
                                    v-for="(color, i) in product?.options[0]?.color" :key="i">
                                </div>
                            </div>
                            <div class="mb-[67px] product-text text-[28px]">
                                {{ product.name }}
                            </div>
                            <div class="flex items-center gap-5 product-text text-[28px]">
                                ${{ product.discountPrice ? product.discountPrice : product.price }}    
                                <span class="sale-text" v-if="product.sale_price">
                                    ${{ product.price }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full flex justify-center mt-[103px]">
                    <button class="view-more-product-btn" :disabled="totalItems <= productList?.length" @click="loadMoreProduct">
                        Xem thêm
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useShopStore } from "../stores/ShopStore"
import { useProductStore } from "../stores/ProductStore"
import { useCategoryStore } from "../stores/CategoryStore"
import { faker } from '@faker-js/faker';
import { onMounted, ref } from "vue";
import Slider from '@vueform/slider'
import { useRoute, useRouter } from "vue-router";
import { generateFakeData } from '../constant/commonFunction'
import HeaderMain from '@/components/HeaderMain.vue'
import { toastError, toastSuccess } from "@/constant/commonUsage";

const urlApi = import.meta.env.VITE_BASE_URL + '/'
const router = useRouter()
const route = useRoute()
const storeProduct = useProductStore()
const storeCategory = useCategoryStore()
const tagChoosen = ref('desc')
const tagList = ref([
    {
        label: 'Mới nhất', value: 'desc'
    },
    {
        label: 'Oldest', value: 'asc'
    },
])
const priceRange = ref([0, 500])
const shopStore = useShopStore()
const productList = ref([])
const imageList = ref([
    '/images/product_shirt1.svg',
    '/images/product_shirt2.svg',
    '/images/product_shirt3.svg',
    '/images/product_shirt4.svg',
    '/images/product_shirt5.svg',
    '/images/product_shirt6.svg',
]);
const options = ref([
    'Áo sơ mi',
    'Áo thun cổ tròn',
    'Áo hoodie',
    'Áo khoác jean',
    'Áo khoác da',
    'Quần dài',
    'Quần tây âu',
    'Quần jean',
    'Quần jean ống suông',
    'Quần dài kaki'
]);
const colors = ref({
    all: true,
    color: ['Đỏ', 'Xanh lá', 'Xanh', 'Trắng', 'Đen']
})

const isOpen = ref(true);
const isOpenColor = ref(true);
const isOpenPrice = ref(true);
const selectedOption = ref('');
const selectedColor = ref('');

const getProductName = (e) => {
  console.log(e);
}

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const toggleDropdownColor = () => {
    isOpenColor.value = !isOpenColor.value;
};

const toggleDropdownPrice = () => {
    isOpenPrice.value = !isOpenPrice.value;
};

const loadMore = () => {
    // Implement load more functionality here
    console.log('Load more clicked');
};

onMounted(() => {
    // productList.value = generateFakeData(9, imageList.value)
    initCategories()
    initProducts()
    shopStore.clothes = productList.value
    console.log(shopStore.getClothes);
})

const page = ref(route?.query?.page ? route.query.page : 1)
const pageSize = ref(route?.query?.pageSize ? route.query.pageSize : 9)
const totalPage = ref()
const totalItems = ref()
const initProducts = async () => {
    try {
        const params = {
            page: page.value,
            pageSize: pageSize.value,
            name: route?.query?.category,
            sortBy: tagChoosen.value,
        }
        const data = await storeProduct.getAllProduct(params)
        console.log(data);
        if (data?.results?.results && data?.results?.results?.length > 0) {
            // productList.value = data?.results?.results
            data?.results?.results.forEach(res => {
                productList.value?.push(res)
            });
        }
        shopStore.product = ''
        totalPage.value = data?.results?.totalPages
        totalItems.value = data?.results?.totalResults
    } catch (error) {
        console.log(error)
    }
}

const initCategories = async () => {
    try {
        await storeCategory.getAllCategory({})
        options.value = storeCategory.categories
    } catch (error) {
        return error
    }
}

const searchByfilter = () => {
    productList.value = []
    initProducts()
}

const resetFilter = () => {
    selectedOption.value = ''
    selectedColor.value = ''
    productList.value = []
    initProducts()
}

const loadMoreProduct = () => {
    page.value++
    initProducts()
}

const changeTag = (tag) => {
    tagChoosen.value = tag
    productList.value = []
    initProducts()
}

const chooseColor = (index, indexColor) => {
    productList.value[index].color_list.forEach((color, i) => {
        color.active = i === indexColor;
    });
}

const productDetails = (id) => {
    router.push({ name: 'ProductView', params: { id: id } })
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

const likeProduct = async (id) => {
    try {
        const payload = {
            productId: id,
        }
        await storeProduct.updateLikeProduct(payload)
        toastSuccess('Like success')
    } catch (error) {
        toastError(error)
        return error
    }
}

const unLikeProduct = async (id) => {
    try {
        const payload = {
            productId: id,
        }
        await storeProduct.updateUnLikeProduct(payload)
        toastSuccess('Unlike success')
    } catch (error) {
        toastError(error)
        return error
    }
}

</script>

<style lang="scss">
.shop-layout {
    .main-text {
        @apply text-[#000000] font-semibold text-[45px];
    }

    .note-text {
        @apply text-[#00000099] font-normal text-base;
    }

    .form-radio {
        appearance: none;
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
        border: 2px solid #d1d5db;
        outline: none;
        cursor: pointer;
    }

    .form-radio:checked {
        background-color: #8b5cf6;
        border-color: #8b5cf6;
        position: relative;
    }

    .form-radio:checked::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: white;
    }

    .rating-field {
        color: #000000CC;
        font-size: 16px;
        line-height: 24px;
    }

    .best-sell-tag {
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 600;
        line-height: 30px;
        padding: 9px 16px 10px 11px;
        box-shadow: 16px 11px 33px 0px #FF6B005E;
        background-color: #FF7A00;
        border-radius: 0px 80px 80px 0px;
    }

    .product-text {
        @apply text-[#000000] font-semibold;
    }

    .sale-text {
        text-decoration: line-through;
        @apply text-[#755A7D] font-normal text-lg;
    }
}
</style>