<template>
    <div class="rating-details-layout">
        <div class="flex items-center gap-1 cursor-pointer" @click="backToRating">
            <img src="/images/icon_back_screen.svg" alt="">
            Back
        </div>
        <div class="flex items-center justify-between mb-[30px]">
            <div class="title-text">Chi tiết đánh giá</div>
            <div class="flex items-center gap-3">
                <button
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]"
                    @click="backToRating">
                    Cancel
                </button>
                <button
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center">
                    Save
                </button>
            </div>
        </div>
        <div class="row justify-between !mt-6">
            <div class="flex-[0_0_63%] flex flex-col gap-[30px]">
                <div class="order-details-box">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center gap-[18px]">
                            <div class="avatar-customer temp lg">
                                L
                            </div>
                            <div class="flex flex-col gap-2">
                                <div class="label-text">
                                    Long Vũ
                                </div>
                                <div class="flex flex-col">
                                    <div class="details-text">5 đơn hàng.</div>
                                    <div class="details-text">Thành viên 2 năm.</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-[8px]">
                            <img class="w-[20px]" :src="Math.round(rating) >= star ? '/images/star_rating_active.svg' : '/images/star_rating_inactive.svg'"
                                alt="" v-for="star in 5" :key="star">
                        </div>
                    </div>
                    <div class="border-t border-[#E6E9F4] pt-[28px] mt-[40px]">
                        <div class="label-text mb-6">
                            Nội dung đánh giá
                        </div>
                        <textarea name="" id="" class="form-control"
                            placeholder="Áo mặc mát lắm tôi thích nó lắm hihi "></textarea>
                    </div>
                </div>
                <div class="order-details-box">
                    <div class="label-text mb-6">
                        Customer Orders
                    </div>
                    <table class="common-table">
                        <thead>
                            <tr class="">
                                <th v-for="(header, index) in headers" :key="index"
                                    class="px-4 py-2 text-left text-sm font-medium text-[#5A607F]">{{
                                        header.text }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="customer in items" :key="customer.order" class="shared-classes">
                                <td class="px-4 py-2 text-classes">{{ customer.order }}</td>
                                <td class="px-4 py-2 text-classes">{{ customer.date }}</td>
                                <td class="px-4 py-2 text-classes">
                                    <span v-if="customer.orderStatus === 'Completed'"
                                        class="inline-block transactions-status paid rounded-[4px]">{{
                                            customer.orderStatus }}</span>
                                    <span v-else class="inline-block transactions-status pending rounded-[4px]">{{
                                        customer.orderStatus }}</span>
                                </td>
                                <td class="px-4 py-2 text-classes">{{ customer.price }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="flex-[0_0_34%] flex flex-col gap-[30px]">
                <div class="order-details-box">
                    <div class="">
                        <img class="w-full" src="/images/details-rating-img.svg" alt="">
                    </div>
                    <div class="!pl-[38px] !pr-[29px]">
                        <div class="pb-[5px] text-[15px] text-[#000000] font-semibold">
                            Giá: 300.000 đ
                        </div>
                        <div class="text-[17px] text-[#000000] font-semibold flex gap-[11px] items-center">
                            Màu:
                            <div class="border-[1px] border-[#D651FF] rounded-[50%] w-[30px] h-[30px] cursor-pointer"
                                :class="{ 'choosen-color': color.active }"
                                :style="`background-color: ${color.color};`"
                                v-for="(color, i) in colors" :key="color" @click="chooseColor(i)">
                            </div>
                        </div>
                    </div>
                    <div class="!text-[#F0142F] details-text cursor-pointer pt-[28px] border-t border-[#E6E9F4] mt-[2px]">
                        Xóa đánh giá
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-end border-t border-[#D7DBEC] pt-[28px] mt-[30px]">
            <div class="flex items-center gap-3">
                <button
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]"
                    @click="backToRating">
                    Cancel
                </button>
                <button
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center">
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import router from '@/router';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const ratingId = ref(route?.params?.id)
const rating = ref(parseFloat((Math.random() * 5).toFixed(1)));
const headers = [
    { text: "Order", value: "order" },
    { text: "Date", value: "date" },
    { text: "Order Status", value: "orderStatus" },
    { text: "Price", value: "price" },
];

const items = [
    { "order": "#23534D", "date": '24.05.2020', "orderStatus": 'Completed', "price": '$124.97' },
    { "order": "#12512B", "date": '24.05.2020', "orderStatus": 'Pending', "price": '$124.97' },
    { "order": "#23534D.", "date": '24.05.2020', "orderStatus": 'Completed', "price": '$124.97' },
];

const colors = ref([
    {
        color: '#FFFFFF',
        active: true,
    },
    {
        color: '#D9D9D9',
        active: false,
    },
    {
        color: '#05470C',
        active: false,
    },
])

const chooseColor = (index) => {
    colors.value.forEach((color, i) => {
        color.active = i === index;
    });
}

const backToRating = () => {
    router.push({ name: 'RatingPageView' })
}
</script>

<style lang="scss"></style>