<template>
    <div class="rating-page-layout">
        <ConfirmDeleteItem
            :model-value="modalDelete"
            :title="'Delete Items'"
            :contentText="`Are you sure you want to delete ${idSelected?.length} selected items?`"
            :listId="idSelected"
            @update:deleteItem="deleteCustomer"
            @update:modelValue="() => { modalDelete = false }"
        ></ConfirmDeleteItem>
        <div class="flex items-center justify-between mb-[30px]">
            <div class="title-text">Đánh giá</div>
            <div class="flex items-center gap-3">
                <button
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]">
                    Export
                </button>
            </div>
        </div>
        <div class="bg-[#FFFFFF] py-[32px] px-[28px] border border-[#E6E9F4] rounded-[6px]">
            <CustomersTable :options="options" :headers="headers" :items="items" @update:addCustomer="addCustomer"
                @update:deleteCustomer="deleteCustomer" @update:customerDetail="ratingDetail">
            </CustomersTable>
        </div>
    </div>
</template>

<script lang="js" setup>
import CustomersTable from '@/components/CustomersTable.vue'
import router from '@/router';
import { ref } from 'vue';
import _ from 'lodash'

const modalDelete = ref(false)
const idSelected = ref([])
const items = [
    {
        id: 1,
        "name": {
            name: 'Long',
            avatar: '',
        },
        "content": 'Tôi thấy sản phẩm rất đẹp tôi rất thích sản phẩm',
        "rating": [
            { rate: true, value: 1 },
            { rate: true, value: 2 },
            { rate: true, value: 3 },
            { rate: true, value: 4 },
            { rate: false, value: 5 },
        ],
        "date": '05/07/2024',
    },
    {
        id: 2,
        "name": {
            name: 'Vũ',
            avatar: '',
        },
        "content": 'Tôi thấy sản phẩm rất đẹp tôi rất thích sản phẩm...',
        "rating": [
            { rate: true, value: 1 },
            { rate: true, value: 2 },
            { rate: true, value: 3 },
            { rate: false, value: 4 },
            { rate: false, value: 5 },
        ],
        "date": '04/07/2024',
    },
    {
        id: 3,
        "name": {
            name: 'Long Vũ',
            avatar: '',
        },
        "content": 'Tôi thấy sản phẩm rất đẹp tôi rất thích sản phẩm',
        "rating": [
            { rate: true, value: 1 },
            { rate: true, value: 2 },
            { rate: true, value: 3 },
            { rate: true, value: 4 },
            { rate: true, value: 5 },
        ],
        "date": '02/07/2024',
    },
];
const headers = [
    { text: "Name", value: "name" },
    { text: "Nội dung", value: "content" },
    { text: "Sao", value: "rating" },
    { text: "Ngày", value: "date" },
];
const options = ref(['name', 'content', 'rating', 'date'])

const ratingDetail = (e) => {
    router.push({ name: 'RatingDetailsView', params: { id: e.id } })
}

const addCustomer = () => {

}

const deleteCustomer = (e) => {
    modalDelete.value = true
    idSelected.value = _.flatMap(e, 'id')
}
</script>

<style></style>