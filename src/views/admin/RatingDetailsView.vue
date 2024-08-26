<template>
    <div class="rating-details-layout">
        <div class="flex items-center gap-1 cursor-pointer" @click="backToRating">
            <img crossorigin="anonymous" src="/images/icon_back_screen.svg" alt="">
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
                                    {{ customerData?.name ? customerData?.name?.charAt(0) : '' }}
                                </div>
                                <div class="flex flex-col">
                                    <div class="details-text">{{ items?.length }} đơn hàng.</div>
                                    <div class="details-text">Customer for {{ checkSinceDate(customerData?.createdAt) }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-[8px]">
                            <img crossorigin="anonymous" class="w-[20px]" :src="(productRating?.rating) >= star ? '/images/star_rating_active.svg' : '/images/star_rating_inactive.svg'"
                                alt="" v-for="star in 5" :key="star">
                        </div>
                    </div>
                    <div class="border-t border-[#E6E9F4] pt-[28px] mt-[40px]">
                        <div class="label-text mb-6">
                            Nội dung đánh giá
                        </div>
                        <textarea name="" id="" class="form-control"
                            placeholder="Áo mặc mát lắm tôi thích nó lắm hihi " v-model="productRating.comment"></textarea>
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
                            <tr v-for="(order, i) in items" :key="i" class="shared-classes">
                                <td class="px-4 py-2 text-classes">{{ order?._id }}</td>
                                <td class="px-4 py-2 text-classes">{{ formatDate(order.createdAt, 'DD.MM.YYYY') }}</td>
                                <td class="px-4 py-2 text-classes">
                                    <span class="inline-block order-status !rounded-[4px]"
                                        :class="{
                                        'ready': order.status === 'ready' || order.status === 'pending',
                                        'shipped': order.status === 'shipped' || order.status === 'shipping',
                                        'received': order.status === 'received' || order.status === 'delivered' || order.status === 'delivery',
                                    }">
                                        {{ order.status }}
                                    </span>
                                </td>
                                <td class="px-4 py-2 text-classes">{{ order.totalAmount }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="flex-[0_0_34%] flex flex-col gap-[30px]">
                <div class="order-details-box">
                    <div class="">
                        <img crossorigin="anonymous" class="w-full" :src="productRating?.productId?.image[0] ? productRating?.productId?.image[0] : '/images/details-rating-img.svg'" alt="">
                    </div>
                    <div class="!pl-[38px] !pr-[29px]">
                        <div class="pb-[5px] text-[15px] text-[#000000] font-semibold">
                            Giá: {{ productRating?.productId?.price }} đ
                        </div>
                        <div class="text-[17px] text-[#000000] font-semibold flex gap-[11px] items-center" v-if="productRating?.productId?.options[0]?.color?.length > 0">
                            Màu:
                            <div class="border-[1px] border-[#D651FF] rounded-[50%] w-[30px] h-[30px] cursor-pointer"
                                :class="{ 'choosen-color': color.color }"
                                :style="`background-color: ${color.color};`"
                                v-for="(color, i) in productRating?.productId?.options[0]?.color" :key="i">
                            </div>
                        </div>
                    </div>
                    <!-- <div class="!text-[#F0142F] details-text cursor-pointer pt-[28px] border-t border-[#E6E9F4] mt-[2px]">
                        Xóa đánh giá
                    </div> -->
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
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '../../stores/UserStore';
import { useCustomerStore } from '../../stores/CustomerStore';
import { checkSinceDate, formatDate } from '@/constant/commonFunction';

const route = useRoute();
const storeUser = useUserStore()
const storeCustomer = useCustomerStore()
const customerData = ref({})
const productRating = ref({})
const ratingId = ref(route?.params?.id)
const headers = [
    { text: "Order", value: "order" },
    { text: "Date", value: "date" },
    { text: "Order Status", value: "orderStatus" },
    { text: "Price", value: "price" },
];

const items = ref([]);

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

onMounted(() => {
    initRating()
})

const initRating = async () => {
    try {
        const data = await storeUser.ratingById(ratingId.value)
        console.log(data);
        productRating.value = data
        await initCustomer(data?.userId)
    } catch (error) {
        return error;
    }
}

const initCustomer = async (id) => {
    try {
        const data = await storeCustomer.getCustomer(id)
        console.log(data);
        customerData.value = data;
        items.value = data?.orders
    } catch (error) {
        return error;
    }
}

const backToRating = () => {
    router.push({ name: 'RatingPageView' })
}
</script>

<style lang="scss"></style>