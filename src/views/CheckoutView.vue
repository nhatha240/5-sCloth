<template>
    <div class="checkout-layout">
        <div class="cart-box mx-auto my-[50px] w-[80%]" v-if="isLogin">
            <div class="header-cart bg-[#D651FF] rounded-[10px] h-[88px] flex py-[29px] px-[28px]">
                <div class="w-[45%]">Item</div>
                <div class="w-[20%]">Quantity</div>
                <div class="w-[15%]">Price</div>
                <div class="w-[15%]">TotalPrice</div>
                <div class=""></div>
            </div>
            <div class="mt-[30px] flex flex-col gap-[30px]">
                <div class="flex item-layout items-center" v-for="(item, index) in items" :key="index">
                    <div class="w-[45%] flex gap-[34px]">
                        <img :src="item.image" alt="">
                        <div class="flex flex-col justify-center gap-[10px]">
                            <div class="code-text">ISBN 51251123151</div>
                            <div class="product-text">Emily and the Backbone</div>
                            <div class="brand-text">Cloe Mamora</div>
                        </div>
                    </div>
                    <div class="w-[20%]">
                        <div class="quantity-field flex justify-center items-center w-[183px]">
                            <div class="mark">
                                <img src="/images/minus_icon.svg" alt="">
                            </div>
                            <input class="text-center pointer-events-none" type="number" readonly
                                v-model="item.quantity">
                            <div class="mark">
                                <img src="/images/plus_icon.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="w-[15%] price-text">
                        {{ '$' + item.price }}
                    </div>
                    <div class="w-[15%] price-text">
                        {{ '$' + item.price * item.quantity }}
                    </div>
                    <div class="">
                        <img class="cursor-pointer" src="/images/trash_icon.svg" alt="">
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
                                    <img src="/images/arrow_coupon_icon.svg" alt="">
                                </button>
                            </div>
                        </div>
                        <div class="flex-[0_0_40%] flex flex-col justify-between">
                            <div class="">
                                <div class="flex justify-between items-center mb-[26px]">
                                    <span class="text-[#755A7D]">Subtotal</span>
                                    <span class="font-semibold text-xl">${{ '83,92' }}</span>
                                </div>
                                <div class="flex justify-between items-center mb-[31px]">
                                    <span class="text-[#755A7D]">Tax</span>
                                    <span class="font-semibold text-xl">${{ '2,35' }}</span>
                                </div>
                                <div class="h-[1px] w-full bg-[#D5A4E4] mb-[23px]"></div>
                                <div class="border-t border-gray-200 pt-4 flex justify-between items-center">
                                    <span class="text-[#755A7D] font-semibold">Total</span>
                                    <span class="font-bold text-lg">${{ '86,27' }}</span>
                                </div>
                            </div>
                            <div class="flex flex-col relative mt-[104px]">
                                <button class="subscribe-purple-button">CHECKOUT</button>
                                <a class="text-[#D651FF] text-center pt-[22px]">Continue Shopping</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="signup-box mx-auto my-[50px] w-[80%]" v-else>
            <div class="bg-[#D651FF] rounded-[10px] h-[88px]"></div>
            <div class="row">
                <div class="signup-input-layout flex-[0_0_50%]" v-if="step1">
                    <div class="">
                        <div class="label-text">Tên *</div>
                        <input type="text">
                    </div>
                    <div class="">
                        <div class="label-text">Số điện thoại*</div>
                        <input type="text">
                    </div>
                    <div class="">
                        <div class="label-text">Email*</div>
                        <input type="text">
                    </div>
                    <div class="">
                        <div class="label-text">Mật khẩu*</div>
                        <div class="relative">
                            <input type="password">
                            <img class="absolute right-0 top-0 cursor-pointer" src="/images/hidden_eye_icon.svg" alt="">
                        </div>
                    </div>
                    <div class="">
                        <div class="label-text">Nhập lại mật khẩu*</div>
                        <div class="relative">
                            <input type="password">
                            <img class="absolute right-0 top-0 cursor-pointer" src="/images/hidden_eye_icon.svg" alt="">
                        </div>
                    </div>
                    <button class="py-[19px] text-[20px] font-medium subscribe-purple-button w-[80%] mx-auto"
                        @click="submitStep1">
                        Đăng Kí
                    </button>
                </div>
                <div class="signup-input-layout flex-[0_0_50%]" v-else>
                    <div class="">
                        <div class="label-text">Email *</div>
                        <input type="text">
                    </div>
                    <div class="">
                        <div class="label-text">Mật Khẩu*</div>
                        <div class="relative">
                            <input type="password">
                            <img class="absolute right-0 top-0 cursor-pointer" src="/images/hidden_eye_icon.svg" alt="">
                        </div>
                    </div>
                    <button class="py-[19px] text-[20px] font-medium subscribe-purple-button w-[80%] mx-auto">
                        Đăng Nhập
                    </button>
                </div>
                <div class="flex-[0_0_50%] bg-[#F0E4F4] rounded-[12px]">
                    <div class="flex flex-col items-center px-[24px] py-[44px]">
                        <img class="" src="/images/main_logo_no_bg.svg" alt="">
                        <div class="text-center font-medium text-xl ">
                            Đăng ký ngay bây giờ để có quyền truy cập độc quyền vào<br />
                            sản phẩm, sự kiện và ưu đãi.<br />
                            Chỉ cần cung cấp một vài chi tiết. Của nó<br />
                            tự do tham gia và mở cửa cho tất cả mọi người..
                        </div>
                        <button class="google-btn mt-[58px] mb-[21px]">
                            <img src="/images/google_btn_icon.svg" alt="">
                            Tiếp tục với Google
                        </button>
                        <div class="text-center font-medium text-xl">Hoặc</div>
                        <div class="text-center font-medium text-xl">
                            Tôi đã có tài khoản
                            <span class="text-[#005491]">ĐĂNG Nhập ngay!!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const isLogin = ref(true)
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

const submitStep1 = () => {
    step1.value = false
    step2.value = true
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

    .mark {
        cursor: pointer;
    }
}
</style>