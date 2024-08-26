<template>
    <nav class="px-[150px] py-[23px] bg-breadcumb flex items-center text-sm font-medium" v-if="route.name !== 'home'">
        <!-- <a href="#" class="text-[#D651FF] font-semibold text-lg hover:underline" @click="navigate('/')">Home</a> -->
        <template v-for="(crumb, index) in breadcrumbs" :key="crumb.to">
            <span class="mx-2 text-[#D651FF] text-lg font-semibold" v-if="crumb.name !== 'UserLayout'">/</span>
            <a v-if="(index < breadcrumbs.length - 1 || crumb?.params?.id)"
                class="text-[#D651FF] text-lg font-normal hover:underline cursor-pointer"
                @click="toRouter(crumb)"
            >
                {{ crumb.name === 'UserLayout' ? 'Trang chủ' : crumb.name }}
            </a>
            <a v-else class="text-gray-500 font-normal text-lg no-underline" 
                :class="{ 'text-[#D651FF]': crumb?.params?.id }"
            >
                {{ crumb.name ? crumb.name : crumb?.query?.category }}
            </a>
            <span class="" v-if="crumb?.params?.id && index == breadcrumbs.length - 1">
                <span class="mx-2 text-[#D651FF] text-lg font-semibold">/</span>
                <span class="text-gray-500 font-normal text-lg">
                    {{ storeProduct.productInfo ? storeProduct.productInfo?.name : crumb?.params?.id }}
                </span>
            </span>
        </template>
    </nav>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { CATEGORY, NAME_LINK_ROUTER } from '../constant/common'
import { useProductStore } from '../stores/ProductStore'

const props = defineProps({
    length: {
        type: Number,
        default: 0,
    },
})

const storeProduct = useProductStore()
const route = useRoute();
const router = useRouter();

const breadcrumbs = computed(() => {
    return route.matched.map(r => {
        return {
            name: r.meta.breadcrumb || r.name,
            to: r.path,
            query: route.query,
            params: route.params,
            routeName: r.name,
        };
    });
});

const navigate = (path) => {
    router.push(path);
};
const toRouter = (routeData) => {
    if (routeData?.params?.id) {
        router.go(-1)
    }
    else if (NAME_LINK_ROUTER[routeData.name]) {
        router.push({ name: NAME_LINK_ROUTER[routeData.name] })
    } else {
        router.push(routeData.to)
    }
}
</script>
<style>
.bg-breadcumb {
    background: linear-gradient(90deg, #FBF7FC 22.24%, rgba(251, 247, 252, 0) 100%);
}
</style>