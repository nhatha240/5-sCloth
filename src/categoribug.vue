<template>
    <div class="categories-layout">
        <AddCategoryPopup
            v-model="modalCategory"
            :model-value="modalCategory"
            :title="'Add Category'"
            @update:model-value="() => { modalCategory = false }"
            @update:addCategory="confirmAddCategory"
        />
        <div class="flex items-center justify-between mb-[28px]">
            <div class="title-text">
                Categories
            </div>
            <button class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] 
                    py-2 px-[20px] rounded-[4px] flex items-center gap-1 justify-end" v-if="categories?.length > 0"
                    @click="openAddCategory"
            >
                <img src="/images/add_order_icon.svg" alt="">
                Add Category
            </button>
        </div>
        <div class="row gap-[30px] justify-between" v-if="categories?.length > 0">
            <div class="flex-[0_0_31%] bg-[#FFFFFF] shadow-[0px_1px_4px_0px_rgba(21,34,50,0.08)] p-0 rounded-[8px]"
                v-for="(category, index) in categories" :key="index">
                <div class="w-full" @click="toCategoryDetails(category.id)">
                    <img class="w-full object-cover" :src="category.img" alt="">
                </div>
                <div class="px-[28px] py-[20px]">
                    <div class="text-[#131523] font-bold text-base">
                        {{ category.category }}
                    </div>
                    <div class="text-[#5A607F] font-normal text-sm">
                        {{ category.countItem }} items
                    </div>
                </div>
            </div>
        </div>
        <div class="" v-else>
            <EmptyAdminData
                :image="'/images/empty_category_icon.svg'"
                :titleEmpty="'Create First Category'"
                :contentEmpty="'Organize all your items in stock by creating and adding them to categories.<br/>Categories helps to find items faster for your customers.'"
                :buttonText="'Add Category'"
                @update:addDataPage="openAddCategory"
            ></EmptyAdminData>
        </div>
    </div>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";
import AddCategoryPopup from '@/components/AddCategoryPopup.vue'

const modalCategory = ref(false)
const categories = ref([
    { id: 1, category: 'Men Clothes', countItem: 24, img: '/images/man_clothes_img.svg' },
    { id: 2, category: 'Women Clothes', countItem: 12, img: '/images/woman_clothes_img.svg' },
    { id: 3, category: 'Accessories', countItem: 43, img: '/images/accessories_img.svg' },
    { id: 4, category: 'Cotton Clothes', countItem: 26, img: '/images/cotton_clothes_img.svg' },
    { id: 5, category: 'Summer Clothes', countItem: 52, img: '/images/summer_clothes_img.svg' },
    { id: 6, category: 'Wedding Clothes', countItem: 52, img: '/images/wedding_clothes_img.svg' },
])

const toCategoryDetails = (id) => {
    router.push({ name: 'CategoryDetailsView', params: { id: id } })
}

const openAddCategory = () => {
    modalCategory.value = true
}

const confirmAddCategory = (e) => {
    console.log(e);
}
</script>

<style lang="scss">
.categories-layout {
    .row {
        --cui-gutter-x: 0;
    }
}
</style>
