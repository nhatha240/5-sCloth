<template>
    <nav class="px-[150px] py-[23px] bg-breadcumb flex items-center text-sm font-medium" v-if="route.name !== 'home'">
        <a href="#" class="text-[#D651FF] font-semibold text-lg hover:underline" @click="navigate('/')">Home</a>
        <template v-for="(crumb, index) in breadcrumbs" :key="crumb.to">
            <span class="mx-2 text-[#D651FF] text-lg font-semibold">/</span>
            <a v-if="index < breadcrumbs.length - 1" :href="crumb.to" @click.prevent="navigate(crumb.to)"
                class="text-[#D651FF] text-lg font-normal hover:underline">
                {{ crumb.name }}
            </a>
            <span v-else class="text-gray-500 font-normal text-lg">
                {{ crumb?.query?.category ? CATEGORY[crumb?.query?.category] : crumb.name }}
            </span>
        </template>
    </nav>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { CATEGORY } from '../constant/common'
import { useShopStore } from '../stores/ShopStore'

const props = defineProps({
    length: {
        type: Number,
        default: 0,
    },
})

const storeShop = useShopStore()
const route = useRoute();
const router = useRouter();

const breadcrumbs = computed(() => {
    return route.matched.map(r => {
        return {
            name: r.meta.breadcrumb || r.name,
            to: r.path,
            query: route.query,
        };
    });
});

const navigate = (path) => {
    router.push(path);
};
</script>
<style>
.bg-breadcumb {
    background: linear-gradient(90deg, #FBF7FC 22.24%, rgba(251, 247, 252, 0) 100%);
}
</style>