<template>
    <div class="">
        <AddCategoryPopup v-model="modalCategory" :model-value="modalCategory" :title="'Add Category'"
            @update:model-value="() => { modalCategory = false }" @update:addCategory="confirmAddCategory" />
        <div class="flex items-center gap-1 cursor-pointer" @click="backToProduct">
            <img crossorigin="anonymous" src="/images/icon_back_screen.svg" alt="">
            Back
        </div>
        <div class="flex items-center justify-between mb-[30px]">
            <div class="title-text">
                {{ productId ? 'Update Product' : 'Add Product' }}
            </div>
            <div class="flex items-center gap-3">
                <button
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]"
                    @click="backToProduct">
                    Cancel
                </button>
                <button
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center gap-1"
                    @click="saveProduct">
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
                        <input class="form-control w-full" type="text" placeholder="Summer T-Shirt"
                            v-model="productDetails.name">
                    </div>
                    <div class="">
                        <div class="mb-1">Product Description</div>
                        <textarea class="form-control w-full" type="text" placeholder="Product description"
                            v-model="productDetails.description"></textarea>
                    </div>
                </div>
                <div class="title-text mb-6 mt-7">Images</div>
                <div class="border-b border-[#D7DBEC] pb-10">
                    <div class="border-b border-[#D7DBEC] drag-file-field">
                        <div class="w-full border-dashed border-[1px] border-[#A1A7C4] text-center">
                            <input id="file" type="file" accept="image/png, image/jpeg" class="inputfile" multiple
                                @change="handleFileSelect" />
                            <label for="file" class="file-upload-layout" @drop.prevent="handleFileDrop"
                                @dragleave.prevent="setInactive" @dragover.prevent="setActive"
                                @dragenter.prevent="setActive">
                                <div class="image-viewer-layout">
                                    <div class="file-image-review" v-for="(image, index) in selectedImages"
                                        :key="index">
                                        <img crossorigin="anonymous" class="image-view" :src="image.url" alt="Selected Image" />
                                        <button @click="removeImage(index)">Remove</button>
                                    </div>
                                </div>
                                <label for="file" class="upload-btn">Add File</label>
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
                            <input class="form-control w-full" type="text" placeholder="Enter price"
                                v-model="productDetails.price">
                        </div>
                        <div class="w-50">
                            <div class="mb-1">Discount Price</div>
                            <input class="form-control w-full" type="text" placeholder="Price at Discount"
                                v-model="productDetails.discountPrice">
                        </div>
                    </div>
                </div>
                <div class="pb-[9px]">
                    <div class="label-text mt-[28px] mb-6">Option</div>
                    <div class="flex items-center gap-3 mb-6">
                        <label class="switch">
                            <input type="checkbox" :checked="productDetails.status" v-model="productDetails.status">
                            <span class="slider round"></span>
                        </label>
                        Is public
                    </div>
                    <div class="flex items-center gap-3 mb-6">
                        <label class="switch">
                            <input type="checkbox" :checked="productDetails.isBestSeller"
                                v-model="productDetails.isBestSeller">
                            <span class="slider round"></span>
                        </label>
                        Is best seller
                    </div>
                    <div class="flex items-center gap-3 mb-6">
                        <label class="switch">
                            <input type="checkbox" :checked="productDetails.isFastSale"
                                v-model="productDetails.isFastSale">
                            <span class="slider round"></span>
                        </label>
                        Is FlashSale
                    </div>
                    <div class="flex flex gap-[28px] pb-4" v-if="productDetails.isFastSale">
                        <div class="w-50">
                            <div class="mb-1">Sale start date</div>
                            <input class="form-control w-full" type="date" placeholder="start date"
                                v-model="productDetails.fastSaleStartDate">
                        </div>
                        <div class="w-50">
                            <div class="mb-1">Sale start date</div>
                            <input class="form-control w-full" type="date" placeholder="end date"
                                v-model="productDetails.fastSaleEndDate">
                        </div>
                    </div>
                    <div class="flex flex-col gap-6 pb-4" v-if="productDetails.isFastSale">
                        <div class="mb-1">FlashSale price</div>
                        <input class="form-control w-full" type="number" placeholder="Flashsale price"
                            v-model="productDetails.fastSalePrice">
                    </div>
                    <div class="flex flex-col gap-6 border-b border-[#D7DBEC] pb-4">
                        <div class="mb-1">Quantity</div>
                        <input class="form-control w-full" type="number" placeholder="Quantity"
                            v-model="productDetails.quantity">
                    </div>
                    <div class="flex gap-[28px] pt-4">
                        <div class="w-50">
                            <div class="mb-1">Size</div>
                            <select class="form-select" name="" id="" @change="addSize" v-model="selectedSize">
                                <option selected disabled>Size</option>
                                <option class="" value="S">S</option>
                                <option class="" value="M">M</option>
                                <option class="" value="L">L</option>
                                <option class="" value="XL">XL</option>
                            </select>
                        </div>
                        <div class="w-50">
                            <div class="mb-1">Value</div>
                            <div class="form-control w-full min-h-[38px] flex items-center">
                                <div class="inline-flex flex-wrap gap-2">
                                    <div class="flex items-center gap-[5px] rounded-[6px] px-3 p-[2px] bg-[#E6E9F4] w-fit"
                                        v-for="(tag, index) in productDetails?.options[0].size" :key="index">
                                        {{ tag }}
                                        <img crossorigin="anonymous" class="cursor-pointer"
                                            src="/images/icon_delete_tag.svg" alt="" @click="removeSize(index)">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-[28px]">
                        <div class="w-50">
                            <div class="mb-1">Màu</div>
                            <select class="form-select" name="" id="" @change="addColor" v-model="selectedColor">
                                <option selected disabled>Màu</option>
                                <option value="red">Đỏ</option>
                                <option value="green">Xanh lá</option>
                                <option value="blue">Xanh</option>
                                <option value="white">Trắng</option>
                                <option value="black">Đen</option>
                            </select>
                        </div>
                        <div class="w-50">
                            <div class="mb-1">Value</div>
                            <div class="form-control w-full min-h-[38px] flex items-center">
                                <div class="inline-flex flex-wrap gap-2">
                                    <div class="flex items-center gap-[5px] rounded-[6px] px-3 p-[2px] bg-[#E6E9F4] w-fit"
                                        v-for="(color, index) in productDetails?.options[0].color" :key="index">
                                        {{ color }}
                                        <img crossorigin="anonymous" class="cursor-pointer"
                                            src="/images/icon_delete_tag.svg" alt="" @click="removeColor(index)">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-[0_0_34%] flex flex-col gap-6">
                <div class="order-details-box">
                    <div class="label-text pb-[18px]">Categories</div>
                    <ul class="space-y-2 pl-0">
                        <li v-for="(category, index) in storeCategory.categories" :key="index"
                            class="flex items-center">
                            <input type="checkbox" :id="category.id" :value="category.id"
                                v-model="productDetails.category"
                                class="form-check-input text-purple-600 focus:ring-purple-500">
                            <label :for="category.id" class="ml-2 text-sm text-gray-700">{{ category.name }}</label>
                        </li>
                    </ul>
                    <div class="cursor-pointer text-[#1E5EFF] font-normal text-base" @click="addCategory">
                        Create new
                    </div>
                </div>
                <div class="order-details-box">
                    <div class="label-text pb-[18px]">Tags</div>
                    <div class="">
                        <div class="mb-1">Add Tags</div>
                        <input class="form-control w-full" type="text" v-model="tagInput" placeholder="Enter tag name"
                            @keydown.enter="addTags">
                        <div class="inline-flex flex-wrap gap-2 pt-[20px]">
                            <div class="flex items-center gap-[5px] rounded-[6px] px-3 p-1 bg-[#E6E9F4] w-fit"
                                v-for="(tag, index) in productDetails.tags" :key="index">
                                {{ tag }}
                                <img crossorigin="anonymous" class="cursor-pointer" src="/images/icon_delete_tag.svg"
                                    alt="" @click="removeTag(index)">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-end border-t border-[#D7DBEC] mt-[30px]">
            <div class="flex items-center gap-3 pt-[28px]">
                <button
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]"
                    @click="backToProduct">
                    Cancel
                </button>
                <button
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center gap-1"
                    @click="saveProduct">
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useProductStore } from '@/stores/ProductStore';
import { useCategoryStore } from '@/stores/CategoryStore';
import AddCategoryPopup from '@/components/AddCategoryPopup.vue'
import { toastSuccess } from '@/constant/commonUsage'
import { formatDate } from '@/constant/commonFunction';


const urlApi = import.meta.env.VITE_BASE_URL + '/'
const storeProduct = useProductStore()
const storeCategory = useCategoryStore()
const router = useRouter();
const route = useRoute();
const productId = ref(route?.params?.id)
const modalCategory = ref(false)
const selectedColor = ref('Màu')
const selectedSize = ref('Size')
const productDetails = ref({
    name: '',
    images: [],
    description: '',
    discountPrice: '',
    price: '',
    category: [],
    options: [
        {
            size: [],
            color: [],
        }
    ],
    status: '',
    isSale: false,
    isBestSeller: false,
    isFastSale: false,
    quantity: 0,
    tags: [],
    fastSaleStartDate: '',
    fastSaleEndDate: '',
    fastSalePrice: '',
})
const selectedImages = ref([]);
const tagInput = ref('')

onMounted(async () => {
    initCategories();
    if (productId.value) {
        initProductDetails();
    }
})

const backToProduct = () => {
    router.push({ name: 'ProductViewAdmin' })
}

const initProductDetails = async () => {
    try {
        const data = await storeProduct.getProduct(productId.value)
        productDetails.value = data;
        productDetails.value.images = data.image.map((image) => {
            return {
                name: image,
                url: urlApi + image,
            };
        });
        selectedImages.value = productDetails.value.images
        productDetails.value.fastSaleStartDate = formatDate(productDetails.value.fastSaleStartDate, 'YYYY-MM-DD')
        productDetails.value.fastSaleEndDate = formatDate(productDetails.value.fastSaleEndDate, 'YYYY-MM-DD')
    } catch (error) {
        return error
    }
}

const initCategories = async () => {
    try {
        await storeCategory.getCategories({})
    } catch (error) {
        return error;
    }
}

const addCategory = () => {
    modalCategory.value = !modalCategory.value
}

const confirmAddCategory = () => {
    initCategories();
    if (productId.value) {
        initProductDetails();
    }
}

const handleFileSelect = (event) => {
    const files = event.target.files;
    processFiles(files);
};
const handleFileDrop = (event) => {
    const files = event.dataTransfer.files;
    processFiles(files);
};
const processFiles = (files) => {
    Array.from(files).forEach((file) => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                selectedImages.value.push({
                    name: file.name,
                    url: e.target.result,
                    file: file,
                });
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload only images.');
        }
    });
};
const removeImage = (index) => {
    selectedImages.value.splice(index, 1);
};
const addTags = () => {
    productDetails.value.tags?.push(tagInput.value)
    tagInput.value = ''
}

const addSize = () => {
    if (!productDetails.value?.options[0].size?.includes(selectedSize.value)) {
        productDetails.value?.options[0].size?.push(selectedSize.value)
    }
    selectedSize.value = 'Size'
}

const addColor = () => {
    if (!productDetails.value?.options[0].color?.includes(selectedColor.value)) {
        productDetails.value?.options[0].color?.push(selectedColor.value)
    }
    selectedColor.value = 'Màu'
}

const removeTag = (index) => {
    productDetails.value.tags?.splice(index, 1)
}

const removeSize = (index) => {
    productDetails.value?.options[0].size?.splice(index, 1)
}

const removeColor = (index) => {
    productDetails.value?.options[0].color?.splice(index, 1)
}



const saveProduct = async () => {
    let formData = new FormData();
    if (productDetails.value.isFastSale) {
        formData.append('fastSaleStartDate', productDetails.value.fastSaleStartDate)
        formData.append('fastSaleEndDate', productDetails.value.fastSaleEndDate)
        formData.append('fastSalePrice', productDetails.value.fastSalePrice)
        formData.append('isFastSale', productDetails.value.isFastSale)
    }
    formData.append('name', productDetails.value.name)
    formData.append('description', productDetails.value.description)
    formData.append('discountPrice', productDetails.value.discountPrice)
    formData.append('price', productDetails.value.price)
    formData.append('status', productDetails.value.status ? 'public' : 'private')
    formData.append('isSale', productDetails.value.isSale)
    formData.append('isBestSeller', productDetails.value.isBestSeller)
    formData.append('quantity', productDetails.value.quantity)
    if (selectedImages.value.length > 0) {
        selectedImages.value.forEach((image) => {
            formData.append(`image`, image.file)
        })
    }
    console.log('cate',productDetails.value.category)
    if (productDetails.value.category.length > 0) {
        console.log('cate length',productDetails.value.category)
        productDetails.value.category.forEach((category, key) => {
            console.log('cate value',category)
            formData.append(`category[${key}]`, category)
        })
    }else{
        formData.append(`category[0]`, null)
    }
    if (productDetails.value.tags.length > 0) {
        productDetails.value.tags.forEach((tags, key) => {
            formData.append(`tags[${key}]`, tags)
        })
    }
    if (productDetails.value?.options[0].size.length > 0) {
        productDetails.value?.options[0].size.forEach((size, key) => {
            formData.append(`size[${key}]`, size)
        })
    } 
    if (productDetails.value?.options[0].color.length > 0) {
        productDetails.value?.options[0].color.forEach((color, key) => {
            formData.append(`color[${key}]`, color)
        })
    } 
    if (productId.value) {
        try {
            await storeProduct.updateProduct(productId.value, formData)
            router.push({ name: 'ProductViewAdmin' }).then(() => toastSuccess('Update Success'))
        } catch (error) {
            return error
        }
    } else {
        try {
            await storeProduct.createProduct(formData)
            router.push({ name: 'ProductViewAdmin' }).then(() => toastSuccess('Create Success'))
        } catch (error) {
            return error
        }
    }
}
</script>

<style lang="scss"></style>
