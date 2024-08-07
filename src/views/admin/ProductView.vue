<template>
    <div class="product-view-layout">
        <ConfirmDeleteItem
            :model-value="modalDelete"
            :title="'Delete Items'"
            :contentText="`Are you sure you want to delete ${idSelected?.length} selected items?`"
            :listId="idSelected"
            @update:deleteItem="confirmDelete"
            @update:modelValue="() => { modalDelete = false }"
        ></ConfirmDeleteItem>
        <div class="flex items-center justify-between mb-[30px]">
            <div class="title-text">Products</div>
            <div class="flex items-center gap-3" v-if="items?.length > 0">
                <button
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]">
                    Export
                </button>
                <button
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center gap-1"
                    @click="addProduct"
                >
                    <img src="/images/add_order_icon.svg" alt="">
                    Add Product
                </button>
            </div>
        </div>
        <div class="bg-[#FFFFFF] py-[32px] px-[28px] border border-[#E6E9F4] rounded-[6px]" v-if="items?.length > 0">
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
                    <button class="btn-modify" @click="openDeleteModal">
                        <img src="/images/icon_delete_btn.svg" />
                    </button>
                </div>
            </div>

            <EasyDataTable v-model:items-selected="itemsSelected" class="common-table" :headers="headers" :items="items"
                :search-field="searchField" :search-value="searchValue" @click-row="showRow">
                <template #item-product="{ product }">
                    <div class="flex items-center">
                        <img :src="product.img" alt="">
                        <div class="flex flex-col">
                            <div class="">{{ product.name }}</div>
                            <div class="">{{ product.type }}</div>
                        </div>
                    </div>
                </template>
                <template #item-inventory="{ inventory }">
                    <span class="inline-block" v-if="inventory">
                        {{ inventory }} in stock
                    </span>
                    <span class="inline-block out-stock-field" v-else>
                        Out of Stock
                    </span>
                </template>
                <template #item-price="{ price }">
                    <span class="">
                        ${{ price }}
                    </span>
                </template>
                <template #item-rating="{ rating }">
                    <div class="inline-block">
                        {{ rating.star + '(' + rating.count + 'Votes)' }}
                    </div>
                </template>
            </EasyDataTable>
        </div>
        <div class="" v-else>
            <EmptyAdminData
                :image="'/images/empty_product_icon.svg'"
                :titleEmpty="'Add Products'"
                :contentEmpty="'Start making sales by adding your products.<br/>You can import and manage your products at any time.'"
                :buttonText="'Add Product'"
                :pageDataAddName="'ProductDetailsView'"
            ></EmptyAdminData>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref } from 'vue';
import { ORDER_STATUS } from '@/constant/common'
import { useRouter } from 'vue-router';
import _ from 'lodash'

const router = useRouter();
const modalDelete = ref(false)
const searchField = ref("color");
const searchValue = ref("");
const itemsSelected = ref([])
const idSelected = ref([])
const headers = [
    { text: "Product", value: "product" },
    { text: "Inventory", value: "inventory" },
    { text: "Color", value: "color" },
    { text: "Price", value: "price" },
    { text: "Rating", value: "rating" },
];

const items = [
    {
        id: 1,
        "product": {
            name: 'Men Grey Hoodie',
            type: 'Hoodies',
            img: '',
        },
        "inventory": 56,
        "color": 'Black',
        "price": '36',
        "rating": {
            star: 5,
            count: 32
        },
    },
    {
        id: 2,
        "product": {
            name: 'Women Striped T-Shirt',
            type: 'T-Shirt',
            img: '',
        },
        "inventory": 96,
        "color": 'Pink',
        "price": '39',
        "rating": {
            star: 4.8,
            count: 24
        },
    },
    {
        id: 2,
        "product": {
            name: 'Women White T-Shirt',
            type: 'T-Shirt',
            img: '',
        },
        "inventory": 0,
        "color": 'Red',
        "price": '25',
        "rating": {
            star: 4.5,
            count: 54
        },
    },
];
const showRow = (item) => {
    router.push({ name: 'ProductDetailsView', params: { id: item.id } })
};
const addProduct = () => {
    router.push({ name: 'ProductDetailsView' })
}
const openDeleteModal = () => {
    modalDelete.value = true
    idSelected.value = _.flatMap(itemsSelected.value, 'id')
}
const confirmDelete = () => {
    console.log(idSelected.value);
}
</script>

<style lang="scss">
.out-stock-field {
    border-radius: 8px;
    background-color: #E6E9F4;
    font-family: Inter, Open Sans, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    color: #5A607F;
    padding: 2px 8px;
}
</style>