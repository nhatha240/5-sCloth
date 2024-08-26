<template>
    <HeaderMain></HeaderMain>
    <div class="checkout-layout">
        <div class="cart-box mx-auto my-[50px] w-[80%]" v-if="storeAuth.user">
            <div class="header-cart bg-[#D651FF] rounded-[10px] h-[88px] flex py-[29px] px-[28px]">
                <div class="w-[45%]">Item</div>
                <div class="w-[20%]">Quantity</div>
                <div class="w-[15%]">Price</div>
                <div class="w-[15%]">TotalPrice</div>
                <div class=""></div>
            </div>
            <div class="mt-[30px] flex flex-col gap-[30px]">
                <div class="flex item-layout items-center" v-for="(item, index) in storeProduct.cartItem" :key="index">
                    <div class="w-[45%] flex gap-[34px]">
                        <img crossorigin="anonymous" class="max-h-[200px] max-w-[140px]"
                            :src="item?.product?.image && item?.product?.image?.length > 0 ? urlApi + item?.product?.image[0] : ''" alt="">
                        <div class="flex flex-col justify-center gap-[10px]">
                            <div class="code-text">{{ item?.product?.id }}</div>
                            <div class="product-text">{{ item?.product?.name }}</div>
                            <div class="brand-text" v-for="(tag, index) in item?.product?.tags" :key="index">
                                {{ tag }}{{ (index < tags?.length - 1 && index % 2 === 0) ? ', ' : '' }}
                            </div>
                        </div>
                    </div>
                    <div class="w-[20%]">
                        <div class="quantity-field flex justify-center items-center w-[183px]">
                            <div class="cursor-pointer" @click="updateCart(item.product.id, -1)">
                                <img crossorigin="anonymous" src="/images/minus_icon.svg" alt="">
                            </div>
                            <input class="text-center pointer-events-none" type="number" readonly
                                v-model="item.quantity">
                            <div class="cursor-pointer" @click="updateCart(item.product.id, 1)">
                                <img crossorigin="anonymous" src="/images/plus_icon.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="w-[15%] price-text">
                        {{ '$' + (item?.product?.price ?? 0) }}
                    </div>
                    <div class="w-[15%] price-text">
                        {{ '$' + (item?.product?.price > 0 ? (item?.product?.price * item?.quantity) : 0) }}
                    </div>
                    <div class="" @click="removeItemCart(item.product?.id)">
                        <img crossorigin="anonymous" class="cursor-pointer" src="/images/trash_icon.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="mt-[171px]">
                <div class="p-[77px] bg-[#F0E4F4] summary-layout">
                    <div class="row justify-between">
                        <div class="flex-[0_0_50%]">
                            <div class="pb-[49px] title">Shopping Summary</div>
                            <div class="pb-[63px] details">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div class="pb-[32px] coupon-text">Have a coupon code?</div>
                            <div class="coupon-field">
                                <input class="" type="text" placeholder="Enter promo code here">
                                <button class="">
                                    <img crossorigin="anonymous" src="/images/arrow_coupon_icon.svg" alt="">
                                </button>
                            </div>
                        </div>
                        <div class="flex-[0_0_40%] flex flex-col justify-between">
                            <div class="">
                                <div class="flex justify-between items-center mb-[26px]">
                                    <span class="text-[#755A7D]">Subtotal</span>
                                    <span class="font-semibold text-xl">${{ storeProduct.totalPrice ?? 0 }}</span>
                                </div>
                                <!-- <div class="flex justify-between items-center mb-[31px]">
                                    <span class="text-[#755A7D]">Tax</span>
                                    <span class="font-semibold text-xl">${{ '2,35' }}</span>
                                </div> -->
                                <div class="h-[1px] w-full bg-[#D5A4E4] mb-[23px]"></div>
                                <div class="border-t border-gray-200 pt-4 flex justify-between items-center">
                                    <span class="text-[#755A7D] font-semibold">Total</span>
                                    <span class="font-bold text-lg">${{ storeProduct.totalPrice ?? 0 }}</span>
                                </div>
                            </div>
                            <div class="flex flex-col relative mt-[104px]">
                                <button class="subscribe-purple-button" @click="checkoutProduct">CHECKOUT</button>
                                <a class="text-[#D651FF] cursor-pointer text-center pt-[22px]" @click="backtoShop">Continue Shopping</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import HeaderMain from '../components/HeaderMain.vue'
import { useAuthStore } from "@/stores/AuthStore";
import { useProductStore } from "@/stores/ProductStore";
import { toastSuccess } from "@/constant/commonUsage";

const urlApi = import.meta.env.VITE_BASE_URL + '/'
const storeAuth = useAuthStore()
const storeProduct = useProductStore()
const router = useRouter()
const step1 = ref(true)
const step2 = ref(false)
const items = ref([
    {
        isbn: '5125112315',
        title: 'Emily and the Backbone',
        author: 'Cloe Mamora',
        image: '/images/cart_image1.svg',
        quantity: 1,
        price: 21.4
    },
    {
        isbn: '2412412125',
        title: 'So You Want To Talk About Race',
        author: 'Ijeoma Oluo',
        image: '/images/cart_image1.svg',
        quantity: 4,
        price: 15.63
    }
]);

onMounted(() => {
    initCheckOutItem()
})

const initCheckOutItem = async () => {
    try {
        await storeProduct.listCart()
    } catch (error) {
        return error
    }
}

const updateCart = async (id, quantity) => {
    try {
        const payload = {
            productId: id, 
            quantity: quantity,
        }
        await storeProduct.addCart(payload)
        toastSuccess('Thêm vỏ hàng thành công')
        initCheckOutItem()
    } catch (error) {
        return error
    }
}

const removeItemCart = async (id) => {
    try {
        await storeProduct.removeCart(id)
        initCheckOutItem()
    } catch (error) {
        return error
    }
}

const submitStep1 = () => {
    step1.value = false
    step2.value = true
}

const checkoutProduct = () => {
    router.push({ name: 'PaymentView' })
}
const backtoShop = () => {
    router.push({ name: 'ShopView' })
}
</script>

<style lang="scss">
.checkout-layout {
    .header-cart>div {
        @apply text-[#FFFFFF] font-semibold text-xl;
    }
    .price-text {
        color: #000000;
        font-size: 18px;
        font-weight: 600;
        line-height: 27px;
    }

    .code-text {
        color: #4D4D4D;
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
    }

    .product-text {
        color: #000000;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
    }

    .brand-text {
        color: #000000;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
    }

    .summary-layout {
        @apply rounded-[12px];
        .title {
            @apply text-[#000000] font-semibold text-[30px];
        }
        .details {
            @apply text-[#00000080] font-normal text-lg;
        }
        .coupon-text {
            @apply text-[#000000CC] font-medium text-[20px];
        }
        .coupon-field {
            @apply flex gap-[15px];
            input {
                @apply rounded-[12px] bg-[#D4C0DB] pl-[84px] p-[22px] text-[#755A7D] font-medium text-lg;
                background-image: url('/public/images/coupon_icon.svg');
                background-repeat: no-repeat;
                background-position: center left 22px;
                width: 384px;
            }
            button {
                @apply flex items-center justify-center px-[25px] py-[22px] rounded-[12px] bg-[#755A7D];
            }
        }
    }
}

.signup-input-layout {
    padding: 44px 21px 0 21px;
    @apply flex flex-col gap-[61px];
}

.signup-input-layout input {
    border: unset;
    font-size: 25px;
    border-bottom: 0.5px solid #000000;
    width: 100%;
}

.signup-input-layout input:focus-visible {
    outline: unset;
}

.signup-input-layout .label-text {
    color: #6E6E6E;
    padding-bottom: 20px;
}

.google-btn {
    @apply pt-[23px] pb-[17px] w-full bg-[#FFFFFF] rounded-[25px] border border-[#000000] text-[#000000] font-medium text-[29px] gap-[18px] flex items-center justify-center;
}

.cart-box .item-layout {
    border: 1px solid #EEDFF3;
    border-radius: 12px;
    padding: 11px 15px;
}

.quantity-field {
    @apply bg-[#EBEBEB] rounded-[10px] py-[21px] px-[18px];

    input {
        background-color: #EBEBEB;
        width: 102px;
        font-size: 22px;
        font-weight: 600;
        line-height: 24px;
        color: #000000;
    }
}
</style>