<template>
    <div class="categories-layout">
        <AddCategoryPopup v-model="modalCategory" :model-value="modalCategory" :title="'Add Category'"
            @update:model-value="() => { modalCategory = false }" @update:addCategory="confirmAddCategory" />
        <div class="flex items-center justify-between mb-[28px]">
            <div class="title-text">
                Categories
            </div>
            <button class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] 
                    py-2 px-[20px] rounded-[4px] flex items-center gap-1 justify-end" v-if="categories?.length > 0"
                @click="openAddCategory">
                <img src="/images/add_order_icon.svg" alt="">
                Add Category
            </button>
        </div>
        <div class="" v-if="categories?.length > 0">
            <div class="row gap-[30px]">
                <div class="flex-[0_0_31%] bg-[#FFFFFF] shadow-[0px_1px_4px_0px_rgba(21,34,50,0.08)] p-0 rounded-[8px]"
                    v-for="(category, index) in categories" :key="index" @click="toCategoryDetails(category.id)">
                    <div class="w-full">
                        <img crossorigin="anonymous" class="w-full object-cover" :src="category.image ? urlApi + category.image : ''" alt="">
                    </div>
                    <div class="px-[28px] py-[20px]">
                        <div class="text-[#131523] font-bold text-base">
                            {{ category.name }}
                        </div>
                        <div class="text-[#5A607F] font-normal text-sm">
                            {{ category.itemsCount }} items
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-outline-info w-full mt-[24px]" :disabled="currentPage == totalPage" @click="loadMore">Load more</button>
        </div>
        <div class="" v-else>
            <EmptyAdminData :image="'/images/empty_category_icon.svg'" :titleEmpty="'Create First Category'"
                :contentEmpty="'Organize all your items in stock by creating and adding them to categories.<br/>Categories helps to find items faster for your customers.'"
                :buttonText="'Add Category'" @update:addDataPage="openAddCategory"></EmptyAdminData>
        </div>
    </div>
</template>

<script setup>
import router from "@/router";
import { onMounted, ref } from "vue";
import AddCategoryPopup from '@/components/AddCategoryPopup.vue'
import { useCategoryStore } from "@/stores/CategoryStore";

const urlApi = import.meta.env.VITE_BASE_URL + '/'
const storeCategory = useCategoryStore()
const modalCategory = ref(false)
const totalPage = ref(0)
const currentPage = ref(1)
const categories = ref([])

onMounted(() => {
    initCategories()
})

const loadMore = () => {
    currentPage.value++
    initCategories()
}

const initCategories = async () => {
    try {
        const params = {
            page: currentPage.value,
            limit: 9,
        }
        const data = await storeCategory.getCategories(params)
        totalPage.value = data?.totalPages
        data?.results.forEach(result => {
            categories.value?.push(result)
        });
    } catch (error) {
        return error
    }
}

const toCategoryDetails = (id) => {
    router.push({ name: 'CategoryDetailsView', params: { id: id } })
}

const openAddCategory = () => {
    modalCategory.value = true
}

const confirmAddCategory = async (e) => {
    
}
</script>

<style lang="scss">
.categories-layout {
    .row {
        --cui-gutter-x: 0;
    }
}
</style>