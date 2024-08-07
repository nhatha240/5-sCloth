<template>
    <div class="">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
                <select class="common-input-field" v-model="searchField">
                    <option v-for="(option, index) in options" :key="index">
                        {{ option }}
                    </option>
                </select>
                <input class="common-input-field" type="text" v-model="searchValue">
            </div>
            <div class="flex items-center gap-3">
                <button class="btn-modify" @click="addCustomer">
                    <img src="/images/edit_btn_icon.svg" />
                </button>
                <button class="btn-modify">
                    <img src="/images/icon_delete_btn.svg" @click="deleteCustomer" />
                </button>
            </div>
        </div>
        <EasyDataTable v-model:items-selected="itemsSelected" class="common-table" :headers="headers" :items="items"
            :search-field="searchField" :search-value="searchValue" @click-row="showCustomer">
            <template #item-name="{ name }">
                <div class="flex items-center gap-4">
                    <img class="avatar-customer" :src="name.avatar" alt="" v-if="name.avatar">
                    <div class="avatar-customer temp" v-else>
                        {{ name.name?.charAt(0) }}
                    </div>
                    <div class="">{{ name.name }}</div>
                </div>
            </template>
            <template #item-spent="{ spent }">
                <span class="">
                    ${{ spent }}
                </span>
            </template>
            <template #item-rating="{ rating }">
                <div class="flex gap-[8px] items-center">
                    <img class="" :src="star.rate ? '/images/star_rating_active.svg' : '/images/star_rating_inactive.svg'"
                        alt="" v-for="(star, i) in rating" :key="i">
                </div>
            </template>
            <template #item-content="{ content }">
                <div class="comment-text">
                    {{ content }}
                </div>
            </template>
        </EasyDataTable>
    </div>
</template>

<script lang="js" setup>
import { ref } from 'vue';

const props = defineProps({
    headers: {
        type: Array,
        default: () => [],
    },
    items: {
        type: Array,
        default: () => [],
    },
    options: {
        type: Array,
        default: () => [],
    },
})
const emits = defineEmits([
    'update:modelValue',
    'update:customerDetail',
    'update:addCustomer',
    'update:deleteCustomer',
])
const searchField = ref("name");
const searchValue = ref("");
const itemsSelected = ref([])

const showCustomer = (item) => {
    emits('update:customerDetail', item)
}

const addCustomer = () => {
    emits('update:addCustomer')
}
const deleteCustomer = () => {
    emits('update:deleteCustomer', itemsSelected.value)
}

</script>

<style lang="scss">
.comment-text {
    max-width: 280px;
    word-break: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.avatar-customer {
    width: 48px;
    height: 48px;
    &.lg {
        width: 72px;
        height: 72px;  
    }
    &.temp {
        font-family: Inter, Open Sans, sans-serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
        background-color: #A1A7C4;
        border-radius: 50%;
        padding: 7px 12px;
        &.lg {
            padding: 14px 12px;
            font-size: 32px;
            line-height: 44px;
        }
    }
    img {
        object-fit: cover;
    }
}
</style>
