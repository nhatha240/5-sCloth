<template>
    <div class="orders-layout">
        <div class="flex items-center justify-between mb-[30px]">
            <div class="title-text">Orders</div>
            <div class="flex items-center gap-3">
                <button
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]">
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
                        <option>order_status</option>
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

            <EasyDataTable v-model:items-selected="itemsSelected" class="common-table" :headers="headers" :items="items"
                :search-field="searchField" :search-value="searchValue" @click-row="showRow">
                <template #item-order="{ order }">
                    <div class="inline-block">
                        #{{ order }}
                    </div>
                </template>
                <template #item-payment_status="{ payment_status }">
                    <span v-if="payment_status === 'Paid'" class="inline-block transactions-status paid rounded-[4px]">
                        {{ payment_status }}
                    </span>
                    <span v-else class="inline-block transactions-status pending rounded-[4px]">
                        {{ payment_status }}
                    </span>
                </template>
                <template #item-order_status="{ order_status }">
                    <span :class="{
                            'inline-block order-status': true, 
                            'ready': order_status === 'ready',
                            'shipped': order_status === 'shipped',
                            'received': order_status === 'received'
                        }">
                        {{ ORDER_STATUS[order_status] }}
                    </span>
                </template>
                <template #item-total="{ total }">
                    <div class="inline-block">
                        ${{ total }}
                    </div>
                </template>
            </EasyDataTable>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref } from 'vue';
import { ORDER_STATUS } from '@/constant/common'
import { useRouter } from 'vue-router';

const router = useRouter();
const searchField = ref("customer");
const searchValue = ref("");
const itemsSelected = ref([])
const headers = [
    { text: "Order", value: "order" },
    { text: "Date", value: "date" },
    { text: "Customer", value: "customer" },
    { text: "Payment status", value: "payment_status" },
    { text: "Order Status", value: "order_status" },
    { text: "Total", value: "total" },
];

const items = [
    {
        "order": "12512B",
        "date": "May 5, 4:20 PM",
        "customer": 'Tom Anderson',
        "payment_status": 'Paid',
        "order_status": 'ready',
        "total": '49.90',
    },
    {
        "order": "12512B",
        "date": "May 5, 4:20 PM",
        "customer": 'Jayden Walker',
        "payment_status": 'Pending',
        "order_status": 'shipped',
        "total": '49.90'
    },
    {
        "order": "12512B",
        "date": "May 5, 4:20 PM",
        "customer": 'Inez Kim',
        "payment_status": 'Paid',
        "order_status": 'received',
        "total": '49.90'
    },
];
const showRow = (item) => {
    router.push({ name: 'OrderDetailsView', params: { id: item.order } })
};
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