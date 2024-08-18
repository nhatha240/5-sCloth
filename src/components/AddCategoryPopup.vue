<template>
    <VueFinalModal v-model="showModal" class="category-modal" content-class="category-modal-content"
        overlay-transition="vfm-fade" content-transition="vfm-fade" :focusTrap="false" :click-to-close="false">
        <Form @submit="addCategory" ref="form">
            <div class="title-modal pb-[28px]">
                {{ title }}
            </div>
            <img crossorigin="anonymous" class="cursor-pointer absolute right-3 top-3" src="/images/close_modal_category_icon.svg" alt="" @click="cancelModal">
            <div class="pb-6">
                <div class="details-text pb-1">
                    Category Name
                </div>
                <Field 
                    v-slot="{ field, errors }"
                    v-model="category.name"
                    :name="'category'"
                    :rules="'required'"
                >
                    <input type="text" class="form-control" placeholder="Women Clothes" v-bind="field">
                    <div class="text-red-500">
                        {{ errors[0] }}
                    </div>
                </Field>
            </div>
            <div class="pb-6">
                <div class="details-text pb-1">
                    Description
                </div>
                <Field 
                    v-slot="{ field, errors }"
                    v-model="category.description"
                    :name="'description'"
                    :rules="'required'"
                >
                    <textarea v-bind="field" class="form-control w-full"></textarea>
                    <div class="text-red-500">
                        {{ errors[0] }}
                    </div>
                </Field>
            </div>
            <div class="pb-6">
                <div class="details-text pb-1">
                    Image
                </div>
                <Field 
                    v-slot="{ field, errors }"
                    v-model="category.image"
                    :name="'categoryImage'"
                    :rules="'required'"
                >
                    <label for="formFile" class="form-label"></label>
                    <input class="form-control" type="file" id="formFile" accept="image/*" @change="handleUpload($event)">
                    <input type="text" class="hidden" v-bind="field">
                    <div class="text-red-500">
                        {{ errors[0] }}
                    </div>
                </Field>
            </div>
            <div class="flex items-center justify-end gap-[28px]">
                <button type="button" class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border-none py-2 px-[25px] rounded-[4px]" @click="cancelModal">
                    Cancel
                </button>
                <button type="submit" class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center">
                    Create Category
                </button>
            </div>
        </Form>
    </VueFinalModal>
</template>

<script lang="js" setup>
import { ref, watch } from 'vue';
import { computed } from 'vue';
import { useCategoryStore } from '@/stores/CategoryStore'
import { toastSuccess } from '@/constant/commonUsage'
import { useForm } from 'vee-validate';

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

watch(
    () => props.modelValue,
    () => {
        if (!showModal.value) {
            category.value = {
                name: '',
                description: '',
                image: '',
            }
        }
    }
)
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
        category.value.image = '/public/uploads/' + files[0]?.name
        // category.value.image = files[0]
        // const fileUrl = URL.createObjectURL(files[0])
        // category.value.image = fileUrl?.replace(window.location.protocol + '//' + window.location.host, import.meta.env.VITE_BASE_URL)
        
    }
}

const { handleSubmit } = useForm(category.value);
const onInvalidSubmitError = ({ errors }) => {
    return errors;
};
const addCategory = handleSubmit(async () => {
    try {
        await storeCategory.createCategory(category.value)
        toastSuccess('Success')
    } catch (error) {
        return error
    }
    emits('update:addCategory', category.value)
    emits('update:modelValue', false)
}, onInvalidSubmitError);
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