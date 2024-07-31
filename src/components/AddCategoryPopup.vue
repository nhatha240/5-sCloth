<template>
    <VueFinalModal v-model="showModal" class="category-modal" content-class="category-modal-content"
        overlay-transition="vfm-fade" content-transition="vfm-fade" :focusTrap="false">
        <div class="">
            <div class="title-modal pb-[28px]">
                {{ title }}
            </div>
            <img class="cursor-pointer absolute right-3 top-3" src="/images/close_modal_category_icon.svg" alt="" @click="cancelModal">
            <div class="pb-6">
                <div class="details-text pb-1">
                    Category Name
                </div>
                <input type="text" class="form-control" placeholder="Women Clothes" v-model="category.name" required>
            </div>
            <div class="pb-6">
                <div class="details-text pb-1">
                    Add Products
                </div>
                <select class="form-select" v-model="category.description" required placeholder="Choose a Product">
                    <option selected disabled>Choose a Product</option>
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                </select>
            </div>
            <div class="pb-6">
                <div class="details-text pb-1">
                    Image
                </div>
                <label for="formFile" class="form-label"></label>
                <input class="form-control" type="file" id="formFile" accept="image/*" @change="handleUpload($event)">
            </div>
            <div class="flex items-center justify-end gap-[28px]">
                <button type="button" class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border-none py-2 px-[25px] rounded-[4px]" @click="cancelModal">
                    Cancel
                </button>
                <button type="submit" class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center" @click="addCategory">
                    Create Category
                </button>
            </div>
        </div>
    </VueFinalModal>
</template>

<script lang="js" setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { useCategoryStore } from '@/stores/CategoryStore'
import { toastSuccess } from '@/constant/commonUsage'

const emits = defineEmits(['update:modelValue', 'update:addCategory'])
const props = defineProps({
    modelValue: Boolean,
    title: String,
})

const storeCategory = useCategoryStore()
const category = ref({
    name: '',
    description: '',
    image: '',
})
const showModal = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emits('update:modelValue', value)
    }
})
const cancelModal = () => {
    emits('update:modelValue', false)
}

const handleUpload = (event) => {
    const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    if (files.length) {
        category.value.image = 'public/uploads/' + files[0]?.name
    }
}

const addCategory = async () => {
    try {
        await storeCategory.createCategory(category.value)
        toastSuccess('Success')
    } catch (error) {
        return error
    }
    emits('update:addCategory', category.value)
    emits('update:modelValue', false)
}
</script>

<style lang="scss">
.category-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999 !important;
    .category-modal-content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 540px;
        padding: 28px;
        border-radius: 4px;
        background-color: #ffffff;
        box-shadow: 0px 2px 10px 0px #262C4729;
        .title-modal {
            font-family: Inter, Open Sans, sans-serif;
            font-size: 20px;
            font-weight: 700;
            line-height: 28px;
            text-align: left;
            color: #131523;
        }
        .content-text {
            font-family: Inter, Open Sans, sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            text-align: left;
            color: #131523;
        }
    }
}
</style>