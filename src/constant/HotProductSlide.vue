<template>
    <div class="px-[50px] mb-[150px]">
        <div class="flex justify-between pb-[80px]">
            <div class="font-bold text-4xl">Sản phẩm bán chạy </div>
            <div class="flex items-center gap-[18px] cursor-pointer text-[#D651FF]">
                Xem Thêm
                <img src="/images/arrow_find_icon.svg" alt="">
            </div>
        </div>
        <swiper :slides-per-view="3" :space-between="50" :navigation="true">
            <swiper-slide v-for="(product, index) in saleWellProducts" :key="index">
                <div class="grid grid-cols-2 bg-[#FFFFFF] rounded-[10px]">
                    <div class="col-span-1 w-[200px]">
                        <img :src="product.product_image" alt="">
                    </div>
                    <div class="col-span-1 flex flex-col gap-[30px] flex-grow">
                        <div class="flex items-center gap-8">
                            <div class="pr-[34px] new-product-tag text-[16px]">
                                {{ product.tag }}
                            </div>
                            <div class="star-rating flex items-center justify-center gap-[5px] px-[20px] py-[11px]">
                                <img src="/images/star_rating_icon.svg" alt="">
                                <div>{{ product.rating }}</div>
                            </div>
                        </div>
                        <div class="flex flex-col prod-name-text">
                            {{ product.product_name }}
                            <span class="prod-quantity-text pt-[14px]">{{ 'Số lượng còn :' + product.quantity }}</span>
                        </div>
                        <div class="flex items-center pt-[40px] gap-6" v-if="product.product_sale_price">
                            <div class="main-price">{{ product.product_sale_price }}</div>
                            <span class="sub-price">{{ product.product_price }}</span>
                        </div>
                        <div class="flex items-center pt-[40px] gap-6" v-else>
                            <div class="main-price">{{ product.product_price }}</div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script lang="js" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
const props = defineProps({
    saleWellProducts: {
        type: Array,
        default: () => [],
    },
})
const emits = defineEmits(['update:modelValue'])

</script>

<style></style>
