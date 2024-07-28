<template>
    <div class="customer-list-layout">
        <ConfirmDeleteItem
            :model-value="modalDelete"
            :title="'Delete Items'"
            :contentText="`Are you sure you want to delete ${idSelected?.length} selected items?`"
            :listId="idSelected"
            @update:deleteItem="deleteCustomer"
            @update:modelValue="() => { modalDelete = false }"
        ></ConfirmDeleteItem>
        <div class="flex items-center justify-between mb-[30px]">
            <div class="title-text">Customers</div>
            <div class="flex items-center gap-3" v-if="items?.length > 0">
                <button
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]">
                    Export
                </button>
                <button
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center gap-1"
                    @click="toAddCustomer">
                    <img src="/images/add_order_icon.svg" alt="" />
                    Add Customer
                </button>
            </div>
        </div>
        <div class="bg-[#FFFFFF] py-[32px] px-[28px] border border-[#E6E9F4] rounded-[6px]" v-if="items?.length > 0">
            <BTabs v-model="currentTab" content-class="mt-4">
                <BTab :active="isActiveTab(0)" title="All Customers">
                    <CustomersTable :options="options" :headers="headers" :items="items" @update:addCustomer="addCustomer"
                        @update:deleteCustomer="deleteCustomer" @update:customerDetail="customerDetail">
                    </CustomersTable>
                </BTab>
                <BTab :active="isActiveTab(1)" title="New Customers">
                    <CustomersTable :options="options" :headers="headers" :items="items" @update:addCustomer="addCustomer"
                        @update:deleteCustomer="deleteCustomer" @update:customerDetail="customerDetail">
                    </CustomersTable>
                </BTab>
                <BTab :active="isActiveTab(2)" title="Returning Customers">
                    <CustomersTable :options="options" :headers="headers" :items="items" @update:addCustomer="addCustomer"
                        @update:deleteCustomer="deleteCustomer" @update:customerDetail="customerDetail">
                    </CustomersTable>
                </BTab>
                <BTab :active="isActiveTab(3)" title="From Europe">
                    <CustomersTable :options="options" :headers="headers" :items="items" @update:addCustomer="addCustomer"
                        @update:deleteCustomer="deleteCustomer" @update:customerDetail="customerDetail">
                    </CustomersTable>
                </BTab>
            </BTabs>
        </div>
        <div class="" v-else>
            <EmptyAdminData
                :image="'/images/empty_customer_icon.svg'"
                :titleEmpty="'Add First Customer'"
                :contentEmpty="'Having a customer list helps to know your audience better.<br/>Manage your customers in one place and target your audinece better.'"
                :buttonText="'Add Customer'"
                :pageDataAddName="'CustomerModifyView'"
            ></EmptyAdminData>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref } from 'vue';
import CustomersTable from '@/components/CustomersTable.vue'
import { onMounted } from 'vue';
import { watch } from 'vue';
import router from '@/router';
import _ from 'lodash'

const currentTab = ref(0)
const modalDelete = ref(false)
const idSelected = ref([])
const options = ref(['name', 'location', 'orders', 'spent'])
const items = [
    {
        id: 1,
        "name": {
            name: 'Walter Gibson',
            avatar: '',
        },
        "location": 'Sawaynchester',
        "orders": 5,
        "spent": '96.14',
    },
    {
        id: 2,
        "name": {
            name: 'Walter Gibson',
            avatar: '',
        },
        "location": 'Sawaynchester',
        "orders": 5,
        "spent": '96.14',
    },
    {
        id: 3,
        "name": {
            name: 'Walter Gibson',
            avatar: '',
        },
        "location": 'Sawaynchester',
        "orders": 5,
        "spent": '96.14',
    },
];
const headers = [
    { text: "Name", value: "name" },
    { text: "Location", value: "location" },
    { text: "Orders", value: "orders" },
    { text: "Spent", value: "spent" },
];

onMounted(() => {
    initCustomers(currentTab.value)
})

watch(
    () => currentTab.value,
    () => {
        initCustomers(currentTab.value)
    }
)

const initCustomers = async (index) => {
    try {
        console.log(index);
        items.value
    } catch (error) {
        console.log(error);
    }
}

const customerDetail = (e) => {
    console.log(e);
    router.push({ name: 'CustomerInfoView', params: { id: e.id } })
}

const toAddCustomer = () => {
    router.push({ name: 'CustomerModifyView' })
}

const addCustomer = () => {

}

const deleteCustomer = (e) => {
    modalDelete.value = true
    idSelected.value = _.flatMap(e, 'id')
}

const isActiveTab = (index) => {
    return currentTab.value === index;
}
</script>

<style lang="scss">
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    border-bottom: 1px solid #1E5EFF;
    border-top: unset;
    border-right: unset;
    border-left: unset;
    color: #1E5EFF;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link {
    font-family: Inter, Open Sans, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #5A607F;
}
</style>
