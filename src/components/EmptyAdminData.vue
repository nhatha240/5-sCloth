<template>
    <div class="empty-admin-layout">
        <img crossorigin="anonymous" class="pb-[24px]" :src="image" alt="">
        <div class="title-text pb-3">
            {{ titleEmpty }}
        </div>
        <div class="details-text !text-center pb-[24px]" v-html="contentEmpty"></div>
        <button
            class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center gap-1 mb-[12px]"
            @click="toAddDataPage"   
        >
            <img crossorigin="anonymous" src="/images/add_order_icon.svg" alt="">
            {{ buttonText }}
        </button>
        <div class="text-details !text-[#1E5EFF] cursor-pointer" @click="toReadMore">
            Read More
        </div>
    </div>
</template>

<script lang="js" setup>
import router from '@/router';

const props = defineProps({
    image: {
        type: String,
        default: () => '',
    },
    titleEmpty: {
        type: String,
        default: () => '',
    },
    contentEmpty: {
        type: String,
        default: () => '',
    },
    buttonText: {
        type: String,
        default: () => '',
    },
    pageDataAddName: {
        type: String,
        default: () => '',
    },
})
const emits = defineEmits(['update:addDataPage'])

const toAddDataPage = () => {
    if (props.pageDataAddName) {
        router.push({ name: props.pageDataAddName })
    } else {
        emits('addDataPage')
    }
}
const toReadMore = () => {
    
}
</script>

<style lang="scss">
.empty-admin-layout {
    width: 100%;
    height: calc(100vh - 184px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 4px 0px #15223214;
}
</style>