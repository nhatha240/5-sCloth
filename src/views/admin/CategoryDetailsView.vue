<template>
    <div class="category-details-layout">
        <div class="flex items-center gap-1 cursor-pointer" @click="backToCategories">
            <img src="/images/icon_back_screen.svg" alt="">
            Back
        </div>
        <div class="flex items-center justify-between mb-[28px]">
            <div class="title-text">
                {{ categoryData?.name ?? '' }}
            </div>
            <div class="flex items-center gap-3">
                <button class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border 
                        border-[#D7DBEC] py-2 px-[25px] rounded-[4px]">
                    Cancel
                </button>
                <button class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px]
                        flex items-center gap-1" @click="saveCategory">
                    Save
                </button>
            </div>
        </div>
        <div class="row justify-between !mt-6">
            <div class="flex-[0_0_63%] order-details-box h-fit">
                <div class="label-text mb-6">
                    Products
                    <span class="details-text">{{ categoryData.products?.length }}</span>
                </div>
                <div class="product-list-layout">
                    <div class="product" v-for="(product, index) in categoryData.products" :key="index">
                        <img src="/images/dotted_product_icon.svg" />
                        <div class="w-[48px] h-[48px]">
                            <img class="object-cover" src="/images/product1_img.svg" alt="">
                        </div>
                        <div class="">
                            {{ product.name }}
                        </div>
                    </div>
                    <button class="add-prod-btn">
                        <img :src="product?.image[0] ? urlApi + product.image[0] : '/images/add_product_icon.svg'" alt="">
                        <div class="btn-text">Add Pr</div>
                    </button>
                </div>
            </div>
            <div class="flex-[0_0_34%] flex flex-col gap-6">
                <!-- <div class="order-details-box">
                    <div class="label-text mb-6">Category Visibility</div>
                    <div class="flex items-center gap-3">
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                        Visible on site
                    </div>
                </div> -->
                <div class="order-details-box">
                    <div class="label-text mb-6">Category Info</div>
                    <div class="category-info-field mb-6">
                        <div class="main-text">Category description</div>
                        <textarea class="form-control w-full" type="text" placeholder="Product description" v-model="categoryData.description"></textarea>
                    </div>
                    <div class="category-info-field">
                        <div class="main-text">Image</div>
                        <div class="border-b border-[#D7DBEC] drag-file-field">
                            <div class="w-full !border-dashed border-[1px] border-[#A1A7C4] text-center">
                            <input id="file" type="file" accept="image/png, image/jpeg" class="inputfile" multiple
                                @change="handleUpload($event)" />
                            <label :for="'file'" class="file-upload-layout" @drop.prevent="dropFile($event)"
                                @dragleave.prevent="setInactive" @dragover.prevent="setActive"
                                @dragenter.prevent="setActive" >
                                <div class="image-viewer-layout">
                                    <div class="file-image-review">
                                        <img class="image-view" :src="urlApi + categoryData.image" alt="">
                                        <img class="check-mark" src="/images/check_mark_image_icon.svg" alt="">
                                    </div>
                                </div>
                                <label :for="'file'" class="upload-btn" @click="handleUpload($event)">Add
                                    File</label>
                                <div class="details-text">Or drag and drop files</div>
                            </label>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from "@/router"
import { useCategoryStore } from "@/stores/CategoryStore"; 
import { ref, inject } from "vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { toastSuccess } from '@/constant/commonUsage'

const storeCategory = useCategoryStore();
const urlApi = import.meta.env.VITE_BASE_URL + '/'
const route = useRoute()
const categoryId = ref(route?.params?.id);
const categoryData = ref({})

onMounted(() => {
    initCategory();
})

const initCategory = async () => {
    try {
        const data =await storeCategory.getCategory(categoryId.value);
        console.log(data);
        categoryData.value = data
    } catch (error) {
        return error
    }
}
const setActive = () => {}
const setInactive = () => {}
const backToCategories = () => {
    router.push({ name: 'CategoriesView' })
}
const dropFile = (event) => {
    handleUpload(event);
}
const handleUpload = (event) => {
    const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    console.log(files);

    // if (files.length) {
    //     let max = Number(setting.value.max) - Number(setting.value.value.length);

    //     if (max > files.length) {
    //         max = files.length;
    //     }
    //     for (let index = 0; index < max; index++) {
    //         setting.value.value?.push({
    //             file: files[index],
    //             type: EventFormContentSettingTypes.FileInput,
    //             image: helperFunctions?.isImage(files[index].type) ? URL.createObjectURL(files[index]) : '',
    //             name: files[index].name,
    //             file_size: files[index].size,
    //             file_mime_type: files[index].type,
    //             step: currentStep.value,
    //         });
    //     }
    // }
    event.target.value = '';
}

const saveCategory = async () => {
    try {
        categoryData.value.categoryId = categoryData.value._id
        delete categoryData.value._id
        delete categoryData.value.__v
        delete categoryData.value.itemsCount
        delete categoryData.value.products
        await storeCategory.updateCategory(categoryData.value)
        router.push({ name: 'CategoriesView' }).then(() => toastSuccess('Update Success'))
    } catch (error) {
        return error
    }
}
</script>

<style lang="scss">
.category-details-layout {
    .category-info-field {
        .main-text {
            font-family: Inter, Open Sans, sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            text-align: left;
            color: #5A607F;
            padding-bottom: 4px;
        }
    }
    .details-text {
        font-weight: 400;
    }
    .product-list-layout {
        display: flex;
        flex-direction: column;
        gap: 12px;
        .product {
            padding: 16px;
            border: 1px solid #E6E9F4;
            display: flex;
            align-items: center;
            gap: 16px;
            border-radius: 8px;
            .text {
                font-family: Inter, Open Sans, sans-serif;
                font-size: 14px;
                font-weight: 500;
                line-height: 20px;
                text-align: left;
                color: #131523;
            }
        }
        .add-prod-btn {
            padding: 8px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4px;
            border: 1px solid #E6E9F4;
            border-radius: 8px;
            .btn-text {
                font-family: Inter, Open Sans, sans-serif;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                text-align: left;
                color: #1E5EFF;
            }
        }
    }
}
</style>