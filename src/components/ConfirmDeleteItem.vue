<template>
    <VueFinalModal v-model="showModal" class="category-modal" content-class="category-modal-content"
        overlay-transition="vfm-fade" content-transition="vfm-fade" :focusTrap="false">
        <div class="">
            <div class="title-modal pb-[20px]">
                Delete Items
            </div>
            <div class="content-text pb-[20px]" v-html="contentText">
            </div>
            <img crossorigin="anonymous" class="cursor-pointer absolute right-3 top-3" src="/images/close_modal_category_icon.svg" alt="" @click="cancelModal">
            <div class="flex items-center justify-end gap-[28px]">
                <button type="button" class="font-common text-[#F0142F] text-base bg-[#FFFFFF] border-none py-2 px-[25px] rounded-[4px]" @click="cancelModal">
                    Cancel
                </button>
                <button type="submit" class="font-common text-[#FFFFFF] text-base bg-[#F0142F] py-2 px-[20px] rounded-[4px] flex items-center" @click="deleteItem">
                    Delete
                </button>
            </div>
        </div>
    </VueFinalModal>
</template>

<script lang="js" setup>
import { computed } from 'vue';

const emits = defineEmits(['update:modelValue', 'update:deleteItem'])
const props = defineProps({
    modelValue: Boolean,
    title: String,
    contentText: String,
    listId: Array,
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

const deleteItem = () => {
    emits('update:deleteItem')
    emits('update:modelValue', false)
}
</script>

<style lang="scss">
</style>