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
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]"
                    @click="exportCsv"
                >
                    Export
                </button>
                <button
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center gap-1"
                    @click="toAddCustomer">
                    <img crossorigin="anonymous" src="/images/add_order_icon.svg" alt="" />
                    Add Customer
                </button>
            </div>
        </div>
        <div class="bg-[#FFFFFF] py-[32px] px-[28px] border border-[#E6E9F4] rounded-[6px]" v-if="items?.length > 0">
                    <CustomersTable :options="options" :headers="headers" :items="items" @update:addCustomer="addCustomer"
                        @update:deleteCustomer="openDeleteCustomer" @update:customerDetail="customerDetail" :modifyOption="false">
                    </CustomersTable>
                    <PaginateAdmin
                        v-if="totalitem"
                        v-model:page="page"
                        v-model:page-size="pageSize"
                        :showPaging="true"
                        :items="items"
                        :length="totalitem"
                        :total-page="totalPage"
                        :topage="toPage"
                    />
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
import { ref, onMounted } from 'vue';
import CustomersTable from '@/components/CustomersTable.vue';
import { watch } from 'vue';
import router from '@/router';
import _ from 'lodash'
import { useCustomerStore } from '@/stores/CustomerStore'
import { useRouter } from 'vue-router';
import { toastSuccess } from '@/constant/commonUsage';

const route = useRouter()
const storeCustomer = useCustomerStore()
const currentTab = ref(0)
const page = ref(route?.query?.page ? route.query.page : 1)
const pageSize = ref(route?.query?.pageSize ? route.query.pageSize : 10)
const totalPage = ref(0)
const totalitem = ref(0)
const modalDelete = ref(false)
const idSelected = ref([])
const options = ref(['name', 'address', 'totalOrder', 'totalMoney'])
const items = ref([]);
const headers = [
    { text: "Name", value: "name" },
    { text: "Location", value: "address" },
    { text: "Orders", value: "totalOrder" },
    { text: "Spent", value: "totalMoney" },
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

const toPage = () => {
    initCustomers(currentTab.value)
}

const initCustomers = async (index) => {
    try {
        console.log(index);
        const params = {
            page: page.value,
            limit: pageSize.value,
        }
        const data = await storeCustomer.getListCustomer(params)
        console.log(data);
        if (data?.results) {
            items.value = data?.results
            totalPage.value = data?.totalPages
            totalitem.value = data?.totalResults
        }
    } catch (error) {
        console.log(error);
    }
}

const exportCsv = async () => {
    try {
        await storeCustomer.exportCustomerCsv('customer')
    } catch (error) {
        return error
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

const deleteCustomer = async (e) => {
    if (e?.length > 0) {
        try {
            await storeCustomer.deleteCustomer(idSelected.value)
            toastSuccess('Delete Success')
        } catch (error) {
            return error
        }
    }
}

const openDeleteCustomer = (e) => {
    if (e?.length > 0) {
        modalDelete.value = true
        idSelected.value = _.flatMap(e, 'id')
    }
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
