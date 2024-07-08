<template>
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
                            <img class="cursor-pointer" src="/images/arrow_category.svg" alt="" @click="toggleDropdown">
                        </h2>
                        <ul class="space-y-2 pl-[29px]" v-if="isOpen">
                            <li v-for="(option, index) in options" :key="index" class="flex items-center">
                                <input type="radio" :id="option" :value="option" v-model="selectedOption"
                                    class="form-radio text-purple-600 focus:ring-purple-500">
                                <label :for="option" class="ml-2 text-sm text-gray-700">{{ option }}</label>
                            </li>
                        </ul>
                        <button @click="loadMore" class="w-full text-left text-sm text-purple-600 mt-2 hover:underline">
                            + Load More
                        </button>
                    </div>
                    <div class="p-4">
                        <h2 class="text-lg font-semibold mb-3 flex justify-between items-center">
                            Màu sắc
                            <img class="cursor-pointer" src="/images/arrow_category.svg" alt=""
                                @click="toggleDropdownColor">
                        </h2>
                        <ul class="space-y-2 pl-[29px]" v-if="isOpenColor">
                            <div class="flex items-center">
                                <input type="radio" :id="colors.all" :value="colors.all" v-model="selectedOption"
                                    class="form-radio text-purple-600 focus:ring-purple-500">
                                <label :for="colors.all" class="ml-2 text-sm text-gray-700">{{ 'Tất cả' }}</label>
                            </div>
                            <li v-for="(color, index) in colors.color" :key="index" class="flex items-center">
                                <input type="radio" :id="color" :value="color" v-model="selectedOption"
                                    class="form-radio text-purple-600 focus:ring-purple-500">
                                <label :for="color" class="ml-2 text-sm text-gray-700">{{ color }}</label>
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <h2 class="text-lg font-semibold mb-3 flex justify-between items-center">
                            Mức giá
                            <img class="cursor-pointer" src="/images/arrow_category.svg" alt=""
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
                        <button class="btn-pink">Refine Search</button>
                        <button class="btn-no-color">Reset Filter</button>
                    </div>
                </div>
            </div>
            <div class="flex-[0_0_60%] flex-grow pl-[32px]">
                <div class="main-text">Áo sơ mi</div>
                <div class="flex justify-between items-center mb-[51px]">
                    <div class="note-text">Hơn 50 sản phẩm ở đây!!</div>
                    <div class="">
                        <Menu as="div" class="relative">
                            <MenuButton
                                class="flex items-center justify-between bg-white text-[#D651FF] text-lg font-medium py-[10px] px-[7px] rounded-lg border-[#D651FF] border min-w-[126px]">
                                <div class="flex items-center gap-[16px]">
                                    <div>Mới nhất</div>
                                    <img src="/images/arrow_sort_icon.svg" alt="">
                                </div>
                            </MenuButton>
                            <MenuItems
                                class="z-[1] absolute right-0 w-full origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                <MenuItem v-for="(tag, index) in tagList" :key="index" as="div" :class="[
                                tagChoosen === tag.value ? 'shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : '',
                                'group flex w-full items-center text-[#D651FF] menu-item-text pt-[14px] py-[10px] px-[7px] cursor-pointer',
                            ]" @click="changeTag(tag.value)">
                                {{ tag.label }}
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-[70px]">
                    <div class="flex-[0_0_30%]" v-for="(product, index) in productList" :key="index">
                        <div class="h-full flex flex-col justify-between">
                            <div class="relative w-full mb-[30px] group hover:bg-inherit">
                                <img class="object-cover rounded-[20px]" :src="product.product_image" alt="">
                                <div class="absolute top-[28px] left-0" v-if="product.bestSeller">
                                    <div class="best-sell-tag">Best Seller</div>
                                </div>
                                <!-- <div class="w-full h-full absolute top-0 left-0 rounded-[20px] hidden group-hover:block bg-[#8D28ADD9]">
                                    <div class="absolute right-[27px] bottom-[25px] bg-[#8D28ADD9] z-10">
                                    <div class="flex flex-col gap-[30px]">
                                        <div class="relative cursor-pointer w-[59px] h-[59px] bg-[#FFFFFF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]" @click="product.is_like = !product.is_like">
                                            <img class="w-[38%] center-image" src="/images/like_product_btn_active.svg" alt="" v-if="product.is_like">
                                            <img class="w-[38%] center-image" src="/images/like_product_btn.svg" alt="" v-else>
                                        </div>
                                        <div class="relative cursor-pointer w-[59px] h-[59px] bg-[#FFFFFF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                                            <img class="w-[38%] center-image" src="/images/search_product_btn.svg" alt="">
                                        </div>
                                        <div class="relative cursor-pointer w-[59px] h-[59px] bg-[#FFFFFF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                                            <img class="w-[38%] center-image" src="/images/add_cart_product_btn.svg" alt="">
                                        </div>
                                    </div>
                                </div> -->
                                <div class="hidden group-hover:block absolute right-[27px] bottom-[25px] z-10">
                                    <div class="flex flex-col gap-[30px]">
                                        <div class="relative cursor-pointer w-[59px] h-[59px] bg-[#FFFFFF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]"
                                            @click="product.is_like = !product.is_like">
                                            <img class="w-[38%] center-image" src="/images/like_product_btn_active.svg"
                                                alt="" v-if="product.is_like">
                                            <img class="w-[38%] center-image" src="/images/like_product_btn.svg" alt=""
                                                v-else>
                                        </div>
                                        <div
                                            class="relative cursor-pointer w-[59px] h-[59px] bg-[#FFFFFF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                                            <img class="w-[38%] center-image" src="/images/search_product_btn.svg"
                                                alt="">
                                        </div>
                                        <div
                                            class="relative cursor-pointer w-[59px] h-[59px] bg-[#FFFFFF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                                            <img class="w-[38%] center-image" src="/images/add_cart_product_btn.svg"
                                                alt="">
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
                                    :class="{ 'choosen-color': color.active }"
                                    :style="`background-color: ${color.color};`"
                                    v-for="(color, i) in product.color_list" :key="i" @click="chooseColor(index, i)">
                                </div>
                            </div>
                            <div class="mb-[67px] product-text text-[28px]">
                                {{ product.product_name }}
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
                <div class="w-full flex justify-center mt-[103px]">
                    <button class="view-more-product-btn">
                        Xem thêm
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useShopStore } from "../stores/ShopStore"
import { faker } from '@faker-js/faker';
import { onMounted, ref } from "vue";
import Slider from '@vueform/slider'

const tagChoosen = ref('')
const tagList = ref([
    {
        label: 'Mới nhất', value: 'new'
    }
])
const priceRange = ref([145, 430])
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
    color: [faker.color.rgb(), faker.color.rgb(), faker.color.rgb(), faker.color.rgb()]
})

const isOpen = ref(true);
const isOpenColor = ref(true);
const isOpenPrice = ref(true);
const selectedOption = ref('');

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
    productList.value = generateFakeData(9)
    shopStore.clothes = productList.value
    console.log(shopStore.getClothes);
})

const changeTag = (tag) => {
    tagChoosen.value = tag
}

const chooseColor = (index, indexColor) => {
    productList.value[index].color_list.forEach((color, i) => {
        color.active = i === indexColor;
    });
}

const generateFakeData = (count) => {
    const fakeData = [];

    for (let i = 0; i < count; i++) {
        const category = faker.commerce.department();
        const product_name = faker.commerce.productName();
        const product_image = imageList.value[Math.floor(Math.random() * imageList.value.length)];
        const color_list = [
            {
                color: faker.color.rgb(),
                active: true,
            },
            {
                color: faker.color.rgb(),
                active: false,
            },
            {
                color: faker.color.rgb(),
                active: false,
            },
        ];
        const price = parseFloat(faker.commerce.price());
        const sale_price = faker.datatype.boolean() ? parseFloat((price * 0.9).toFixed(2)) : 0;
        const rating = parseFloat((Math.random() * 5).toFixed(1));
        const rating_count = faker.datatype.number({ min: 0, max: 1000 });
        const bestSeller = faker.datatype.boolean();
        const is_like = faker.datatype.boolean();
        const color = faker.color.rgb();

        fakeData.push({
            category,
            product_name,
            product_image,
            color_list,
            price,
            sale_price,
            rating,
            rating_count,
            bestSeller,
            is_like,
            color,
        });
    }

    return fakeData;
};
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