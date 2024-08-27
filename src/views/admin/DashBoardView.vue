<template>
    <div class="dashboard-layout">
        <div class="flex items-center justify-between">
            <div class="title-text">Dashboard</div>
            <!-- <button class="bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px] flex items-center gap-1">
                <img crossorigin="anonymous" src="/images/manage_icon.svg" alt="">
                Manage
            </button> -->
        </div>
        <div class="row flex items-center">
            <div class="revenue-layout flex items-center justify-between !max-w-[25%]">
                <div class="flex flex-col">
                    <div class="number-text">${{ totalData?.currentMonthAmount ?? 0 }}</div>
                    <div class="details-text">Total Revenue</div>
                    <div class="asc-desc-text" 
                        :class="{
                            'is-up': totalData?.percentageChange > 0,
                            'is-down': totalData?.percentageChange < 0
                        }"
                    >
                        {{ totalData?.percentageChange ?? 0 }}%
                        <img crossorigin="anonymous" src="/images/up_stonk_icon.svg" alt="" v-if="totalData?.percentageChange > 0">
                        <img crossorigin="anonymous" src="/images/down_stink_icon.svg" alt="" v-else>
                    </div>
                </div>
                <div class="">
                    <img crossorigin="anonymous" src="/images/revenue_icon.svg" alt="">
                </div>
            </div>
            <div class="revenue-layout flex items-center justify-between !max-w-[25%]">
                <div class="flex flex-col">
                    <div class="number-text">{{ totalData?.ordersThisMonth ?? 0 }}</div>
                    <div class="details-text">Orders</div>
                    <div class="asc-desc-text" 
                        :class="{
                            'is-up': totalData?.orderPercentageChange > 0,
                            'is-down': totalData?.orderPercentageChange < 0
                        }"
                    >
                        {{ totalData?.orderPercentageChange ?? 0 }}%
                        <img crossorigin="anonymous" src="/images/up_stonk_icon.svg" alt="" v-if="totalData?.orderPercentageChange > 0">
                        <img crossorigin="anonymous" src="/images/down_stink_icon.svg" alt="" v-else>
                    </div>
                </div>
                <div class="">
                    <img crossorigin="anonymous" src="/images/order_cart_icon.svg" alt="">
                </div>
            </div>
            <div class="revenue-layout flex items-center justify-between !max-w-[25%]">
                <div class="flex flex-col">
                    <div class="number-text">{{ totalData?.loginsThisMonth ?? 0 }}</div>
                    <div class="details-text">Active Sessions</div>
                    <div class="asc-desc-text"
                        :class="{
                            'is-up': totalData?.loginUserPercentageChange > 0,
                            'is-down': totalData?.loginUserPercentageChange < 0
                        }"
                    >
                        {{ totalData?.loginUserPercentageChange ?? 0 }}%
                        <img crossorigin="anonymous" src="/images/up_stonk_icon.svg" alt="" v-if="totalData?.loginUserPercentageChange > 0">
                        <img crossorigin="anonymous" src="/images/down_stink_icon.svg" alt="" v-else>
                    </div>
                </div>
                <div class="">
                    <img crossorigin="anonymous" src="/images/active_user_icon.svg" alt="">
                </div>
            </div>
            <div class="revenue-layout flex items-center justify-between !max-w-[25%]">
                <div class="flex flex-col">
                    <div class="number-text">{{ totalData?.newUsersThisMonth ?? 0 }}</div>
                    <div class="details-text">Total Sessions</div>
                    <div class="asc-desc-text"
                        :class="{
                            'is-up': totalData?.newUserPercentageChange > 0,
                            'is-down': totalData?.newUserPercentageChange < 0
                        }"
                    >
                        {{ totalData?.newUserPercentageChange ?? 0 }}%
                        <img crossorigin="anonymous" src="/images/up_stonk_icon.svg" alt="" v-if="totalData?.newUserPercentageChange > 0">
                        <img crossorigin="anonymous" src="/images/down_stink_icon.svg" alt="" v-else>
                    </div>
                </div>
                <div class="">
                    <img crossorigin="anonymous" src="/images/total_user_icon.svg" alt="">
                </div>
            </div>
        </div>
        <div class="row justify-between chart-layout">
            <div class="flex-[0_0_65%] bg-[#FFFFFF] !p-[28px] rounded-[6px]">
                <div class="flex items-center justify-between">
                    <div class="text-title mb-[10px]">
                        Store Funnel
                    </div>
                    <div class="">
                        Last 7 Days
                    </div>
                </div>
                <div class="details-text">
                    Conversion Rate:
                    <span>
                        28%
                        <span>4% Increase</span>
                    </span>

                </div>
                <BarBlueChart :data="barChartData" v-if="barChartData?.length > 0"></BarBlueChart>
            </div>
            <div class="flex-[0_0_33%] bg-[#FFFFFF] !p-[28px] rounded-[6px]">
                <div class="border-b border-[#E6E9F4] pb-[30px]">
                    <div class="text-title pb-[24px]">
                        Last 7 Days Sales
                    </div>
                    <div class="pb-[20px]">
                        <div class="text-title !text-xl">
                            {{ sevenDayChartData?.itemSold ? sevenDayChartData?.itemSold?.toLocaleString() : 0 }}
                        </div>
                        <div class="details-text">
                            Items Sold
                        </div>
                    </div>
                    <div class="pb-[20px]">
                        <div class="text-title !text-xl">
                            ${{ sevenDayChartData?.Revenue ? sevenDayChartData?.Revenue?.toLocaleString() : 0 }}
                        </div>
                        <div class="details-text">
                            Revenue
                        </div>
                    </div>
                </div>
                <BarChart :data="sevenDayChartData?.RevenueInSevenDay" 
                    v-if="sevenDayChartData?.RevenueInSevenDay && sevenDayChartData?.RevenueInSevenDay?.length > 0">
                </BarChart>
            </div>
        </div>
        <div class="row justify-between">
            <div class="flex-[0_0_49%] bg-[#FFFFFF] !p-[28px] rounded-[4px] border border-[#E6E9F4]">
                <div class="text-title pb-[20px]">
                    Recent Transactions
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
                        <tr v-for="transaction in items" :key="transaction.name" class="shared-classes">
                            <td class="px-4 py-2 text-classes">{{ transaction?.idUser?.name }}</td>
                            <td class="px-4 py-2 text-classes">
                                {{ transaction?.createdAt ? formatDate(transaction?.createdAt, 'DD.MM.YYYY') : '' }}
                            </td>
                            <td class="px-4 py-2 text-classes">{{ transaction?.totalAmount }}</td>
                            <td class="px-4 py-2 text-classes">
                                <span class="inline-block order-status rounded-[4px]"
                                    :class="{
                                        'ready': transaction.status === 'ready' || transaction.status === 'pending',
                                        'shipped': transaction.status === 'shipped' || transaction.status === 'shipping',
                                        'received': transaction.status === 'received' || transaction.status === 'delivered' || transaction.status === 'delivery',
                                    }"
                                >
                                    {{ transaction.status }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex-[0_0_49%] bg-[#FFFFFF] !p-[28px] rounded-[4px] shadow-[0_1px_4px_0_rgba(21,34,50,0.08)]">
                <div class="text-title pb-[20px]">
                    Top Products by Units Sold
                </div>
                <table class="common-table">
                    <thead>
                        <tr class="">
                            <th v-for="(header, index) in headerTopProduct" :key="index"
                                class="px-4 py-2 text-left text-sm font-medium text-[#5A607F]">{{
                                header.text }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in topProductsSold" :key="index" class="shared-classes">
                            <td class="px-4 py-2 text-classes">
                                <div class="flex items-center gap-[12px]">
                                    <div class="w-9">
                                        <img crossorigin="anonymous" class="object-cover" :src="urlApi + product?.product?.image[0]" alt="" v-if="product?.product?.image && product?.product?.image?.length > 0">
                                    </div>
                                    {{ product?.product?.name }}
                                </div>
                            </td>
                            <td class="px-4 py-2 text-classes">${{ product?.product?.price }}</td>
                            <td class="px-4 py-2 text-classes">{{ product?.total }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BarChart from '@/components/BarChart.vue';
import BarBlueChart from '@/components/BarBlueChart.vue';
import { useDashboardStore } from '@/stores/DashboardStore';
import { useOrderStore } from '@/stores/OrderStore';
import { onMounted, ref } from 'vue';
import { formatDate } from '@/constant/commonFunction';

const urlApi = import.meta.env.VITE_BASE_URL + '/'
const storeDashboard = useDashboardStore();
const storeOrder = useOrderStore();
const totalData = ref({})
const headers = [
    { text: "Name", value: "name" },
    { text: "Date", value: "createdAt" },
    { text: "Amount", value: "totalAmount" },
    { text: "Status", value: "status" }
];

const items = ref([]);

const headerTopProduct = [
    { text: "Name", value: "name" },
    { text: "Price", value: "price" },
    { text: "Units Solid", value: "units_sold" },
]
const topProductsSold = ref([
    { "img": '/images/top_product_img1.svg', "name": "Men Grey Hoodie", "price": '49.90', "units_sold": 204 },
    { "img": '', "name": "Women Striped T-Shirt", "price": '34.90', "units_sold": 155 },
    { "img": '', "name": "Wome White T-Shirt", "price": '40.90', "units_sold": 120 },
]);

onMounted(() => {
    initDashBoardChart()
    initSevenDayChart()
    initDashboardTotal()
    initTopOrders()
    initTopProduct()
})

const initDashboardTotal = async () => {
    try {
        const data = await storeDashboard.getDashBoardTotal()
        console.log(data);
        totalData.value = data
    } catch (error) {
        return error
    }
}

const initTopOrders = async () => {
    try {
        const params = {
            page: 1,
            pageSize: 5,
            sortBy: 'desc',
        }
        const data = await storeOrder.getListOrder(params)
        items.value = data?.results
    } catch (error) {
        return error
    }
}

const initTopProduct = async () => {
    try {
        const data = await storeDashboard.getDashBoardTopProduct()
        topProductsSold.value = data
    } catch (error) {
        return error
    }
}
const barChartData = ref([])
const initDashBoardChart = async () => {
    try {
        const data = await storeDashboard.getDashBoardChart()
        console.log(data)
        if (data) {
            barChartData.value = [data.lastLoginLastTimeCount, data.cart, data.createdLastTimeCount, 0]
        }
        console.log(barChartData.value, 'barChartData')
    } catch (error) {
        return error
    }
}
const sevenDayChartData = ref({})
const initSevenDayChart = async () => {
    try {
        const data = await storeDashboard.getDashBoardSevenDay()
        console.log(data)
        sevenDayChartData.value = data
    } catch (error) {
        return error
    }
}
</script>

<style lang="scss" scoped>
.dashboard-layout {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.row {
    .revenue-layout {
        &:first-child {
            border-radius: 8px 0 0 8px;
        }

        &:last-child {
            border-radius: 0 8px 8px 0;
        }
    }
}

.revenue-layout {
    background-color: #FFFFFF;
    padding: 28px;
    padding-right: 42px;
    border-right: 1px solid #E6E9F4;

    .number-text {
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
        text-align: left;
        color: #131523;
    }

    .details-text {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-align: left;
        color: #5A607F;
    }

    .asc-desc-text {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-align: left;

        &.is-up {
            color: #06A561
        }

        &.is-down {
            color: #F0142F;
        }
    }
}

.chart-layout {
    .text-title {
        font-family: Inter, Open Sans, sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-align: left;
        color: #131523;
    }

    .details-text {
        font-family: Inter, Open Sans, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-align: left;
        color: #5A607F;

        >span {
            font-family: Inter, Open Sans, sans-serif;
            font-size: 14px;
            font-weight: 700;
            line-height: 20px;
            text-align: right;
            color: #131523;

            >span {
                background-color: #C4F8E2;
                color: #06A561;
                font-family: Inter, Open Sans, sans-serif;
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                text-align: center;
            }
        }
    }
}
</style>