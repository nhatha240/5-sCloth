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
                <select class="form-select" v-model="category.product" required>
                    <option selected disabled>Choose a Product</option>
                    <option value="">a</option>
                </select>
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

const emits = defineEmits(['update:modelValue', 'update:addCategory'])
const props = defineProps({
    modelValue: Boolean,
    title: String,
})

const category = ref({
    name: '',
    product: '',
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

const addCategory = () => {
    emits('update:addCategory', category.value)
    emits('update:modelValue', false)
}
</script>


</style>
