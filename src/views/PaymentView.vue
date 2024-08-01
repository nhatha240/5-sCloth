<template>
    <HeaderMain></HeaderMain>
    <div class="payment-layout bg-[#FFFFFF]">
        <div class="row mx-auto py-[16px] w-[80%]">
            <div class="flex-[0_0_50%]">
                <div class="flex flex-col gap-[15px]">
                    <div class="relative input-field-label">
                        <label for="name" class="">
                            Họ và tên
                        </label>
                        <input type="text" id="name" placeholder=" " />
                    </div>
                    <div class="relative input-field-label">
                        <label for="phone" class="">
                            Số điện thoại
                        </label>
                        <input type="number" id="phone" placeholder=" " />
                    </div>
                    <div class="relative input-field">
                        <input type="email" id="email" placeholder=" " />
                    </div>
                    <div class="relative input-field">
                        <input type="text" id="address" placeholder=" " />
                    </div>
                    <div class="flex gap-[18px] justify-between">
                        <div class="relative">
                            <select id="city" class="custom-selectbox">
                                <option selected disabled>Chọn tỉnh / thành</option>
                                <option>Hà Nội</option>
                                <option>Hồ Chí Minh</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-[20px] gap-[15px] flex items-center text-gray-700">
                                <svg width="3" height="24" viewBox="0 0 3 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <line x1="1.5" y1="6.55671e-08" x2="1.5" y2="24" stroke="#7F7F7F"
                                        stroke-width="3" />
                                </svg>

                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 7L0.00480879 0.250001L12.9952 0.25L6.5 7Z" fill="#7F7F7F" />
                                </svg>

                            </div>
                            <label for="city" class="absolute text-xs text-gray-500 top-1 left-4 z-10">
                                Tỉnh/ thành
                            </label>
                        </div>
                        <div class="relative">
                            <select id="district" class="custom-selectbox">
                                <option selected disabled>Chọn Quận / huyện </option>
                                <option>11</option>
                                <option>6</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-[20px] gap-[15px] flex items-center text-gray-700">
                                <svg width="3" height="24" viewBox="0 0 3 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <line x1="1.5" y1="6.55671e-08" x2="1.5" y2="24" stroke="#7F7F7F"
                                        stroke-width="3" />
                                </svg>

                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 7L0.00480879 0.250001L12.9952 0.25L6.5 7Z" fill="#7F7F7F" />
                                </svg>

                            </div>
                            <label for="district" class="absolute text-xs text-gray-500 top-1 left-4 z-10">
                                Quận/ huyện
                            </label>
                        </div>
                        <div class="relative">
                            <select id="phuong" class="custom-selectbox">
                                <option selected disabled>Chọn Phường / xã </option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-[20px] gap-[15px] flex items-center text-gray-700">
                                <svg width="3" height="24" viewBox="0 0 3 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <line x1="1.5" y1="6.55671e-08" x2="1.5" y2="24" stroke="#7F7F7F"
                                        stroke-width="3" />
                                </svg>

                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 7L0.00480879 0.250001L12.9952 0.25L6.5 7Z" fill="#7F7F7F" />
                                </svg>

                            </div>
                            <label for="phuong" class="absolute text-xs text-gray-500 top-1 left-4 z-10">
                                Phường/ xã
                            </label>
                        </div>
                    </div>
                    <div class="">
                        <div class=""></div>
                        <div class="flex items-center">
                            <input type="radio" id="freeship" name="shipping"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                            <label for="freeship" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Freeship cho đơn hàng từ 299k
                            </label>
                            <span class="ml-auto text-sm text-gray-500">0đ</span>
                        </div>
                    </div>
                    <button class="btn-pink w-full" @click="paypalSelect">
                        Paypal
                    </button>
                </div>
            </div>
            <div class="flex-[0_0_50%]"></div>
        </div>
    </div>
</template>

<script lang="js" setup>
import HeaderMain from '../components/HeaderMain.vue'

const paypalSelect = () => {

}
</script>

<style lang="scss">
.payment-layout {
    .input-field-label {
        input {
            @apply text-[22px] block w-full px-3 pt-6 pb-2 text-[#827C7C] border border-[#000000] rounded-[9px] appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500;
        }

        label {
            @apply absolute text-[17px] text-[#A9A9A9] duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3;
        }
    }

    .input-field {
        input {
            @apply text-[22px] block w-full px-3 py-[16px] text-[#827C7C] border border-[#000000] rounded-[9px] appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500;
        }
    }

    .custom-selectbox {
        @apply block appearance-none w-full bg-white border border-[#000000] text-gray-900 pt-[24px] pb-[12px] pl-4 pr-[53px] rounded-[9px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500;
    }
}
</style>