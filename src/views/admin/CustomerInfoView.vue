<template>
    <div class="customer-info-layout">
        <div class="flex items-center gap-1 cursor-pointer" @click="() => {router.push({ name: 'CustomerListView' })}">
            <img src="/images/icon_back_screen.svg" alt="">
            Back
        </div>
        <div class="flex items-center justify-between mb-[30px]">
            <div class="title-text">Customer Information</div>
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
                                    {{ orderData?.name }}
                                </div>
                                <div class="flex flex-col">
                                    <div class="details-text">Ireland</div>
                                    <div class="details-text">{{ orderData?.orders ? orderData?.orders?.length : 0 }} Orders</div>
                                    <div class="details-text">Customer for 2 years</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-[3px]">
                            <img :src="Math.round(orderData?.comments?.rating) >= star ? '/images/star_customer_icon_active.svg' : '/images/star_details_icon_inactive.svg'"
                                alt="" v-for="star in 5" :key="star">
                        </div>
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
                            <tr v-for="(transaction, index) in items" :key="index" class="shared-classes">
                                <td class="px-4 py-2 text-classes">{{ transaction._id }}</td>
                                <td class="px-4 py-2 text-classes">{{ formatDate(transaction.createdAt, 'DD.MM.YYYY') }}</td>
                                <td class="px-4 py-2 text-classes">
                                    <span v-if="transaction.status === 'completed'"
                                        class="inline-block transactions-status paid rounded-[4px]">{{
                                            transaction.status }}</span>
                                    <span v-else class="inline-block transactions-status pending rounded-[4px]">{{
                                        transaction.status }}</span>
                                </td>
                                <td class="px-4 py-2 text-classes">{{ transaction.totalAmount }}</td>
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
                        <div class="" v-if="orderData?.address">
                            <div class="details-text gray mb-[7px]">
                                Address
                            </div>
                            <div class="details-text" v-if="orderData?.address">
                                <div class="" v-for="address in orderData?.address?.split(',')" :key="address">
                                    {{ address }}
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="details-text gray mb-[7px]">
                                Email Address
                            </div>
                            <div class="details-text">
                                {{ orderData?.email }}
                            </div>
                        </div>
                        <div class="" v-if="orderData?.phone">
                            <div class="details-text gray mb-[7px]">
                                Phone
                            </div>
                            <div class="details-text">
                                {{ orderData?.phone }}
                            </div>
                        </div>
                    </div>
                    <div class="!text-[#F0142F] details-text cursor-pointer pt-[20px]" @click="deleteCustomer(customerId)">
                        Delete Customer
                    </div>
                </div>
                <!-- <div class="order-details-box">
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
                </div> -->
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import router from '@/router';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCustomerStore } from '@/stores/CustomerStore'
import { formatDate } from '@/constant/commonFunction';
import { toastSuccess } from '@/constant/commonUsage'

const route = useRoute()
const storeCustomer = useCustomerStore()
const customerId = ref(route?.params?.id)
const rating = ref(parseFloat((Math.random() * 5).toFixed(1)));
const headers = [
    { text: "Order", value: "order" },
    { text: "Date", value: "date" },
    { text: "Order Status", value: "status" },
    { text: "Price", value: "price" },
];

const items = ref([]);
const orderData = ref({})
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

onMounted(() => {
    initCustomer()
})

const initCustomer = async () => {
    try {
        const data = await storeCustomer.getCustomer(customerId.value)
        console.log(data);
        orderData.value = data
        items.value = data?.orders
    } catch (error) {
        return error
    }
}

const toEditCustomer = (id) => {
    router.push({ name: 'CustomerModifyView', params: { id: id } })
}

const deleteCustomer = async (id) => {
    try {
        await storeCustomer.deleteCustomer(id)
        router.push({ name: 'CustomerListView' }).then(() => toastSuccess('Delete Success'))
    } catch (error) {
        return error
    }
}
</script>

<style></style>