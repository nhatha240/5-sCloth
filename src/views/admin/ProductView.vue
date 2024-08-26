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
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]"
                    @click="exportCsv"
                >
                    Export
                </button>
                <button
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center gap-1"
                    @click="addProduct"
                >
                    <img crossorigin="anonymous" src="/images/add_order_icon.svg" alt="">
                    Add Product
                </button>
            </div>
        </div>
        <div class="bg-[#FFFFFF] py-[32px] px-[28px] border border-[#E6E9F4] rounded-[6px]" v-if="items?.length > 0">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <select class="common-input-field" v-model="searchField">
                        <option selected disabled>Filter</option>
                        <option>name</option>
                        <option>price</option>
                        <option>color</option>
                    </select>
                    <input class="common-input-field search-input" type="text" v-model="searchValue">
                </div>
                <div class="flex items-center gap-3">
                    <button class="btn-modify">
                        <img crossorigin="anonymous" src="/images/edit_btn_icon.svg" />
                    </button>
                    <button class="btn-modify" :disabled="itemsSelected?.length === 0" @click="openDeleteModal">
                        <img crossorigin="anonymous" src="/images/icon_delete_btn.svg" />
                    </button>
                </div>
            </div>
            <EasyDataTable v-model:items-selected="itemsSelected" class="common-table" :headers="headers" :items="items"
                :search-field="searchField" :search-value="searchValue" :rows-per-page="10" :hide-rows-per-page="true" @click-row="showRow">
                <template #item-product="{ name, image, tags }">
                    <div class="flex items-center">
                        <img crossorigin="anonymous" :src="image" alt="">
                        <div class="flex flex-col">
                            <div class="">{{ name }}</div>
                            <div class="" v-for="(tag, index) in tags" :key="index">
                                {{ tag }}{{ (index < tags.length - 1 && index % 2 === 0) ? ', ' : '' }}
                            </div>
                        </div>
                    </div>
                </template>
                <template #item-quantity="{ quantity }">
                    <span class="inline-block" v-if="quantity">
                        {{ quantity }} in stock
                    </span>
                    <span class="inline-block out-stock-field" v-else>
                        Out of Stock
                    </span>
                </template>
                <template #item-price="{ price, discountPrice }">
                    <span class="">
                        ${{ discountPrice ? discountPrice : price }}
                    </span>
                </template>
                <template #item-color="{ options }">
                    <span class="" v-for="(option, index) in options" :key="index">
                        <span class="" v-for="(color, i) in option.color" :key="i">
                            {{ color }}{{ (i < option.color.length - 1) ? ', ' : '' }}
                        </span>
                    </span>
                </template>
                <template #item-rating="{ totalRating, userRating }">
                    <div class="inline-block">
                        {{ userRating + ' (' + totalRating + ' Votes)' }}
                    </div>
                </template>
            </EasyDataTable>
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
                :image="'/images/empty_product_icon.svg'"
                :titleEmpty="'Add Products'"
                :contentEmpty="'Start making sales by adding your products.<br/>You can import and manage your products at any time.'"
                :buttonText="'Add Product'"
                :pageDataAddName="'CreateProductView'"
            ></EmptyAdminData>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref, onMounted } from 'vue';
import { ORDER_STATUS } from '@/constant/common'
import { useRoute, useRouter } from 'vue-router';
import _ from 'lodash'
import PaginateAdmin from '@/components/PaginateAdmin.vue'
import { useProductStore } from '@/stores/ProductStore'
import { toastSuccess } from '@/constant/commonUsage'

const storeProduct = useProductStore()
const router = useRouter();
const route = useRoute()
const modalDelete = ref(false)
const searchField = ref("color");
const searchValue = ref("");
const itemsSelected = ref([])
const idSelected = ref([])
const page = ref(route?.query?.page ? route.query.page : 1)
const pageSize = ref(route?.query?.pageSize ? route.query.pageSize : 10)
const totalPage = ref()
const totalitem = ref()
const headers = [
    { text: "Product", value: "product" },
    { text: "Inventory", value: "quantity" },
    { text: "Color", value: "color" },
    { text: "Price", value: "price" },
    { text: "Rating", value: "rating" },
];

const items = ref([
    // {
    //     id: 1,
    //     "product": {
    //         name: 'Men Grey Hoodie',
    //         type: 'Hoodies',
    //         img: '',
    //     },
    //     "inventory": 56,
    //     "color": 'Black',
    //     "price": '36',
    //     "rating": {
    //         star: 5,
    //         count: 32
    //     },
    // },
    // {
    //     id: 2,
    //     "product": {
    //         name: 'Women Striped T-Shirt',
    //         type: 'T-Shirt',
    //         img: '',
    //     },
    //     "inventory": 96,
    //     "color": 'Pink',
    //     "price": '39',
    //     "rating": {
    //         star: 4.8,
    //         count: 24
    //     },
    // },
    // {
    //     id: 2,
    //     "product": {
    //         name: 'Women White T-Shirt',
    //         type: 'T-Shirt',
    //         img: '',
    //     },
    //     "inventory": 0,
    //     "color": 'Red',
    //     "price": '25',
    //     "rating": {
    //         star: 4.5,
    //         count: 54
    //     },
    // },
]);

onMounted(() => {
    initProducts()
})

const nextPage = ref('')
const prevPage = ref('')

const toPage = () => {
    initProducts()
}

const initProducts = async () => {
    try {
        const params = {
            // cursor: cursor,
            page: page.value,
            pageSize: pageSize.value,
        }
        const data = await storeProduct.getProducts(params)
        console.log(data);
        items.value = data?.results?.results
        console.log(items.value);
        nextPage.value = data?.results?.nextCursor
        prevPage.value = data?.results?.prevCursor
        totalPage.value = data?.results?.totalPages
        totalitem.value = data?.results?.totalResults
    } catch (error) {
        return error
    }
}

const showRow = (item) => {
    router.push({ name: 'ProductDetailsView', params: { id: item.id } })
};
const addProduct = () => {
    router.push({ name: 'CreateProductView' })
}
const openDeleteModal = () => {
    modalDelete.value = true
    idSelected.value = _.flatMap(itemsSelected.value, 'id')
}
const confirmDelete = async () => {
    try {
        await storeProduct.deleteProduct(idSelected.value)
        toastSuccess('Delete success')
        initProducts()
    } catch (error) {
        return error
    }
}

const exportCsv = async () => {
    try {
        await storeProduct.exportProductCsv('product')
    } catch (error) {
        return error
    }
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