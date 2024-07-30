<template>
    <div class="">
        <div class="flex items-center gap-1 cursor-pointer" @click="backToProduct">
            <img src="/images/icon_back_screen.svg" alt="">
            Back
        </div>
        <div class="flex items-center justify-between mb-[30px]">
            <div class="title-text">
                {{ productId ? 'Update Product' : 'Add Product' }}
            </div>
            <div class="flex items-center gap-3">
                <button
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]">
                    Cancel
                </button>
                <button
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center gap-1"
                    @click="addProduct">
                    Save
                </button>
            </div>
        </div>
        <div class="row justify-between !mt-6">
            <div class="flex-[0_0_63%] order-details-box h-fit">
                <div class="label-text mb-6">Information</div>
                <div class="flex flex-col gap-6 border-b border-[#D7DBEC] pb-10">
                    <div class="">
                        <div class="mb-1">Product Name</div>
                        <input class="form-control w-full" type="text" placeholder="Summer T-Shirt">
                    </div>
                    <div class="">
                        <div class="mb-1">Product Description</div>
                        <textarea class="form-control w-full" type="text" placeholder="Product description"></textarea>
                    </div>
                </div>
                <div class="title-text mb-6 mt-7">Images</div>
                <div class="border-b border-[#D7DBEC] pb-10">
                    <div class="border-b border-[#D7DBEC] drag-file-field">
                        <div class="w-full py-12 !border-dashed border-[1px] border-[#A1A7C4] text-center">
                            <input id="file" type="file" accept="*" class="inputfile" multiple
                                @change="handleUpload($event)" />
                            <label :for="'file'" class="file-upload-layout" @drop="dropFile($event)">
                                <label :for="'file'" class="upload-btn" @click="handleUpload($event)">Add File</label>
                                <div class="details-text">Or drag and drop files</div>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="border-b border-[#D7DBEC] pb-10">
                    <div class="label-text mt-[28px] mb-6">Price</div>
                    <div class="flex gap-[28px]">
                        <div class="w-50">
                            <div class="mb-1">Product Price</div>
                            <input class="form-control w-full" type="text" placeholder="Enter price">
                        </div>
                        <div class="w-50">
                            <div class="mb-1">Discount Price</div>
                            <input class="form-control w-full" type="text" placeholder="Price at Discount">
                        </div>
                    </div>
                    <div class="pt-6 flex items-center gap-3">
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                        Add tax for this product
                    </div>
                </div>
                <div class="border-b border-[#D7DBEC] pb-10">
                    <div class="label-text mt-[28px] mb-6">Different Options</div>
                    <div class="pt-6 flex items-center gap-3">
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                        Add tax for this product
                    </div>
                </div>
                <div class="border-b border-[#D7DBEC] pb-[9px]">
                    <div class="label-text mt-[28px] mb-6">Option 1</div>
                    <div class="flex gap-[28px]">
                        <div class="w-50">
                            <div class="mb-1">Size</div>
                            <select class="form-select" name="" id="">
                                <option selected disabled>Size</option>
                                <option class="" value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                        <div class="w-50">
                            <div class="mb-1">Value</div>
                            <input class="form-control w-full" type="text" placeholder="Price at Discount">
                        </div>
                    </div>
                    <div class="flex gap-[28px]">
                        <div class="w-50">
                            <div class="mb-1">Màu</div>
                            <select class="form-select" name="" id="">
                                <option selected disabled>Màu</option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                        <div class="w-50">
                            <div class="mb-1">Value</div>
                            <input class="form-control w-full" type="text" placeholder="Price at Discount">
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="label-text mt-[28px] mb-6">Shipping</div>
                    <div class="flex gap-[28px]">
                        <div class="w-50">
                            <div class="mb-1">Weight</div>
                            <select class="form-select" name="" id="">
                                <option selected disabled>Enter Weight</option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                        <div class="w-50">
                            <div class="mb-1">Country</div>
                            <select class="form-select" name="" id="">
                                <option selected disabled>Select Country</option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="pt-6 flex items-center gap-3">
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                        This is digital item
                    </div>
                </div>
            </div>
            <div class="flex-[0_0_34%] flex flex-col gap-6">
                <div class="order-details-box">
                    <div class="label-text pb-[18px]">Categories</div>
                    <ul class="space-y-2 pl-0">
                        <li v-for="(category, index) in categories" :key="index" class="flex items-center">
                            <input type="checkbox" :id="category" :value="category" v-model="selectedOption"
                                class="form-check-input text-purple-600 focus:ring-purple-500">
                            <label :for="category" class="ml-2 text-sm text-gray-700">{{ category }}</label>
                        </li>
                    </ul>
                    <div class="cursor-pointer text-[#1E5EFF] font-normal text-base">
                        Create new
                    </div>
                </div>
                <div class="order-details-box">
                    <div class="label-text pb-[18px]">Tags</div>
                    <div class="">
                        <div class="mb-1">Add Tags</div>
                        <input class="form-control w-full" type="text" placeholder="Enter tag name">
                        <div class="inline-flex flex-wrap gap-2 pt-[20px]">
                            <div class="flex items-center gap-[5px] rounded-[6px] px-3 p-1 bg-[#E6E9F4] w-fit"
                                v-for="(tag, index) in tagList" :key="index">
                                {{ tag.tag }}
                                <img class="cursor-pointer" src="/images/icon_delete_tag.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="order-details-box">
                    <div class="label-text pb-[18px]">SEO Settings</div>
                    <div class="pb-6">
                        <div class="mb-1">Title</div>
                        <input class="form-control w-full" type="text">
                    </div>
                    <div class="">
                        <div class="mb-1">Description</div>
                        <textarea class="form-control w-full" type="text"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-end border-t border-[#D7DBEC] mt-[30px]">
            <div class="flex items-center gap-3 pt-[28px]">
                <button
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]">
                    Cancel
                </button>
                <button
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center gap-1"
                    @click="addProduct">
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();
const productId = ref(route?.params?.id)
const tagList = ref([
    {
        id: 1,
        tag: 'T-Shirt'
    },
    {
        id: 2,
        tag: 'Men Clothes'
    },
    {
        id: 3,
        tag: 'Summer Collection'
    },
])
const selectedOption = ref([])
const categories = ref([
    'Women',
    'Men',
    'T-Shirt',
    'Hoodie',
    'Dress',
]);

onMounted(async () => {
    initProductDetails();
})

const backToProduct = () => {
    router.push({ name: 'ProductViewAdmin' })
}

const initProductDetails = async () => {

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

<style lang="scss"></style>
