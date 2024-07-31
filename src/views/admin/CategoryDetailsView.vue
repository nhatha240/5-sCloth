<template>
    <div class="category-details-layout">
        <div class="flex items-center gap-1 cursor-pointer" @click="backToCategories">
            <img src="/images/icon_back_screen.svg" alt="">
            Back
        </div>
        <div class="flex items-center justify-between mb-[28px]">
            <div class="title-text">
                {{ 'Women Clothes' }}
            </div>
            <div class="flex items-center gap-3">
                <button class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border 
                        border-[#D7DBEC] py-2 px-[25px] rounded-[4px]">
                    Cancel
                </button>
                <button class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px]
                        flex items-center gap-1">
                    Save
                </button>
            </div>
        </div>
        <div class="row justify-between !mt-6">
            <div class="flex-[0_0_63%] order-details-box h-fit">
                <div class="label-text mb-6">
                    Products
                    <span class="details-text">12</span>
                </div>
                <div class="product-list-layout">
                    <div class="product" v-for="product in 12" :key="product">
                        <img src="/images/dotted_product_icon.svg" />
                        <div class="w-[48px] h-[48px]">
                            <img class="object-cover" src="/images/product1_img.svg" alt="">
                        </div>
                        <div class="">
                            Women Striped T-Shirt
                        </div>
                    </div>
                    <button class="add-prod-btn">
                        <img src="/images/add_product_icon.svg" alt="">
                        <div class="btn-text">Add Pr</div>
                    </button>
                </div>
            </div>
            <div class="flex-[0_0_34%] flex flex-col gap-6">
                <div class="order-details-box">
                    <div class="label-text mb-6">Category Visibility</div>
                    <div class="flex items-center gap-3">
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                        Visible on site
                    </div>
                </div>
                <div class="order-details-box">
                    <div class="label-text mb-6">Category Info</div>
                    <div class="category-info-field mb-6">
                        <div class="main-text">Category Name</div>
                        <input type="text" class="form-control">
                    </div>
                    <div class="category-info-field">
                        <div class="main-text">Image</div>
                        <div class="border-b border-[#D7DBEC] drag-file-field">
                            <div class="w-full py-12 !border-dashed border-[1px] border-[#A1A7C4] text-center">
                                <input id="file" type="file" accept="image/png, image/jpeg" class="inputfile" multiple
                                    @change="handleUpload($event)" />
                                <label :for="'file'" class="file-upload-layout" @drop="dropFile($event)">
                                    <label :for="'file'" class="upload-btn" @click="handleUpload($event)">Add File</label>
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