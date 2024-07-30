<template>
    <div class="customer-info-layout">
        <div class="flex items-center justify-between mb-[30px]">
            <div class="title-text">Customer Information</div>
            <div class="flex items-center gap-3">
                <button
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]">
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
                                    Lenora Robinson
                                </div>
                                <div class="flex flex-col">
                                    <div class="details-text">Ireland</div>
                                    <div class="details-text">5 Orders</div>
                                    <div class="details-text">Customer for 2 years</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-[3px]">
                            <img :src="Math.round(rating) >= star ? '/images/star_customer_icon_active.svg' : '/images/star_details_icon_inactive.svg'"
                                alt="" v-for="star in 5" :key="star">
                        </div>
                    </div>
                    <div class="border-t border-[#E6E9F4] pt-[28px] mt-[40px]">
                        <div class="label-text mb-6">
                            Customer Notes
                        </div>
                        <div class="details-text mb-1">
                            Notes
                        </div>
                        <textarea name="" id="" class="form-control" placeholder="Add notes about customer"></textarea>
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
                            <tr v-for="transaction in items" :key="transaction.order" class="shared-classes">
                                <td class="px-4 py-2 text-classes">{{ transaction.order }}</td>
                                <td class="px-4 py-2 text-classes">{{ transaction.date }}</td>
                                <td class="px-4 py-2 text-classes">
                                    <span v-if="transaction.orderStatus === 'Completed'"
                                        class="inline-block transactions-status paid rounded-[4px]">{{
                                            transaction.orderStatus }}</span>
                                    <span v-else class="inline-block transactions-status pending rounded-[4px]">{{
                                        transaction.orderStatus }}</span>
                                </td>
                                <td class="px-4 py-2 text-classes">{{ transaction.price }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="flex-[0_0_34%] flex flex-col gap-[30px]">
                <div class="order-details-box">
                    <div class="flex items-center justify-between mb-6">
                        <div class="label-text">
                            Overview
                        </div>
                        <div class="text-[#1E5EFF] medium-text cursor-pointer" @click="toEditCustomer(customerId)">
                            Edit
                        </div>
                    </div>
                    <div class="flex flex-col gap-6 pb-[28px] border-b border-[#E6E9F4] ">
                        <div class="">
                            <div class="details-text gray mb-[7px]">
                                Address
                            </div>
                            <div class="details-text">
                                <div class="">831 Wilhelmine Glen</div>
                                <div class="">40583-2293</div>
                                <div class="">South Lelastad </div>
                                <div class="">Ireland</div>
                            </div>
                        </div>
                        <div class="">
                            <div class="details-text gray mb-[7px]">
                                Email Address
                            </div>
                            <div class="details-text">
                                lenora_rob@yahoo.com
                            </div>
                        </div>
                        <div class="">
                            <div class="details-text gray mb-[7px]">
                                Phone
                            </div>
                            <div class="details-text">
                                636-458-4820
                            </div>
                        </div>
                    </div>
                    <div class="!text-[#F0142F] details-text cursor-pointer pt-[20px]" @click="deleteCustomer(customerId)">
                        Delete Customer
                    </div>
                </div>
                <div class="order-details-box">
                    <div class="label-text mb-6">
                        Tags
                    </div>
                    <div class="">
                        <div class="details-text pb-1">Add Tags</div>
                        <input type="text" class="form-control" placeholder="Enter tag name">
                        <div class="inline-flex flex-wrap gap-2 pt-[20px]">
                            <div class="flex items-center gap-[5px] rounded-[6px] px-3 p-1 bg-[#E6E9F4] w-fit" 
                                v-for="(tag, index) in tagList" :key="index"
                            >
                                {{ tag.tag }}
                                <img class="cursor-pointer" src="/images/icon_delete_tag.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import router from '@/router';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const customerId = ref(route?.params?.id)
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
const tagList = ref([
    {
        id: 1,
        tag: 'Vip Customer'
    },
    {
        id: 2,
        tag: 'Europe'
    },
])

const toEditCustomer = (id) => {
    router.push({ name: 'CustomerModifyView', params: { id: id } })
}

const deleteCustomer = (id) => {
    
}
</script>

<style></style>