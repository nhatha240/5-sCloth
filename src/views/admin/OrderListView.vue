<template>
    <div class="orders-layout">
        <div class="flex items-center justify-between mb-[30px]">
            <div class="title-text">Orders</div>
            <div class="flex items-center gap-3">
                <button
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]"
                    @click="exportCsv"
                >
                    Export
                </button>
                <button
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center gap-1">
                    <img src="/images/add_order_icon.svg" alt="">
                    Add Order
                </button>
            </div>
        </div>
        <div class="bg-[#FFFFFF] py-[32px] px-[28px] border border-[#E6E9F4] rounded-[6px]">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <select class="common-input-field" v-model="searchField">
                        <option>customer</option>
                        <option>status</option>
                    </select>
                    <input class="common-input-field" type="text" v-model="searchValue">
                </div>
                <div class="flex items-center gap-3">
                    <button class="btn-modify">
                        <img src="/images/edit_btn_icon.svg" />
                    </button>
                    <button class="btn-modify">
                        <img src="/images/icon_delete_btn.svg" />
                    </button>
                </div>
            </div>

            <EasyDataTable v-model:items-selected="itemsSelected" :rows-per-page="pageSize" class="common-table" :headers="headers" :items="items"
                :search-field="searchField" :search-value="searchValue" :hide-rows-per-page="true" :hide-footer="true" @click-row="showRow">
                <template #item-_id="{ _id }">
                    <div class="inline-block">
                        #{{ _id }}
                    </div>
                </template>
                <template #item-idUser="{ idUser }">
                    <div class="inline-block">
                        {{ idUser?.name }}
                    </div>
                </template>
                <template #item-createdAt="{ createdAt }">
                    <div class="inline-block">
                        {{ formatDate(createdAt, 'MMMM D, hh:mm A') }}
                    </div>
                </template>
                <template #item-idPayment="{ idPayment }">
                    <span v-if="idPayment?.status === 'COMPLETED'" class="inline-block transactions-status paid rounded-[4px]">
                        {{ idPayment?.status }}
                    </span>
                    <span v-else class="inline-block transactions-status pending rounded-[4px]">
                        {{ idPayment?.status }}
                    </span>
                </template>
                <template #item-status="{ status }">
                    <span :class="{
                            'inline-block order-status': true, 
                            'ready': status === 'ready' || status === 'pending',
                            'shipped': status === 'shipped' || status === 'shipping',
                            'received': status === 'received' || status === 'delivered' || status === 'delivery',
                        }">
                        {{ ORDER_STATUS[status] }}
                    </span>
                </template>
                <template #item-totalAmount="{ totalAmount }">
                    <div class="inline-block">
                        ${{ totalAmount }}
                    </div>
                </template>
            </EasyDataTable>
            <div class="flex items-center gap-2">
                <button :class="{ 'opacity-50': !prevPage }" :disabled="!prevPage" @click="toPage(prevPage)">
                    <img src="/images/page-prev-icon.svg" />
                </button>
                <button :class="{ 'opacity-50': !nextPage }" :disabled="!nextPage" @click="toPage(nextPage)">
                    <img src="/images/page-next-icon.svg" />
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref, onMounted } from 'vue';
import { ORDER_STATUS } from '@/constant/common'
import { useRoute, useRouter } from 'vue-router';
import { useOrderStore } from '@/stores/OrderStore';
import { formatDate } from '@/constant/commonFunction'

const router = useRouter();
const route = useRoute();
const storeOrder = useOrderStore();
const searchField = ref("customer");
const searchValue = ref("");
const itemsSelected = ref([])
const headers = [
    { text: "Order", value: "_id" },
    { text: "Date", value: "createdAt" },
    { text: "Customer", value: "idUser" },
    { text: "Payment status", value: "idPayment" },
    { text: "Order Status", value: "status" },
    { text: "Total", value: "totalAmount" },
];
const pageSize = ref(route?.query?.pageSize ? route.query.pageSize : 10)

const items = ref([]);
const showRow = (item) => {
    router.push({ name: 'OrderDetailsView', params: { id: item._id } })
};
const nextPage = ref('')
const prevPage = ref('')

onMounted(() => {
    initOrders()
})

const toPage = (cursor) => {
    initOrders(cursor)
}

const initOrders = async (cursor) => {
    try {
        const params = {
            pageSize: pageSize.value,
            cursor: cursor
        }
        const data = await storeOrder.getListOrder(params)
        if(data?.results) {
            items.value = data?.results
        }
        nextPage.value = data?.nextCursor
        prevPage.value = data?.prevCursor

    } catch (error) {
        return error
    }
}

const exportCsv = async () => {
    try {
        await storeOrder.exportOrderCsv('order')
    } catch (error) {
        return error
    }
}
</script>

<style lang="scss">
.common-table {
    --easy-table-row-border: 1px solid #E6E9F4;
    --easy-table-border: none;
    --easy-table-header-item-padding: 0;
    --easy-table-body-item-padding: 0.5rem;

    header {
        --cui-header-border: none !important;
    }

    .vue3-easy-data-table__main.fixed-header th {
        &:first-child {
            border-bottom: 2px solid #E6E9F4;
        }
    }
    .easy-checkbox {
        margin: unset;
    }
    tbody {
        td:first-child {
            padding: 0 !important;
        }
    }
}
.common-input-field {
    border: 1px solid #D9E1EC;
    padding: 8px 16px;
    font-family: Inter, Open Sans, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #A1A7C4;
    border-radius: 4px;
}
.btn-modify {
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #D7DBEC;
}
</style>