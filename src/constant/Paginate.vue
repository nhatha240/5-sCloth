<template>
    <div class="pagination paging align-items-center justify-content-center">
        <nav class="paging-nav" aria-label="Page navigation example" v-if="showPaging">
            <BPagination v-model="page" :total-rows="props.length" :per-page="pageSize" prev-text="" next-text=""
                first-text="" last-text="" :limit="4">
                <template #first-text>
                    <div :tabindex="page == 1 ? '-1' : '0'" class="arrow-paging hidden">
                    </div>
                </template>
                <template #prev-text>
                    <div :tabindex="page == 1 ? '-1' : '0'" class="arrow-paging hidden">
                    </div>
                </template>
                <template #next-text>
                    <div :tabindex="page == totalPage ? '-1' : '0'" class="arrow-paging hidden">
                    </div>
                </template>
                <template #last-text>
                    <div :tabindex="page == totalPage ? '-1' : '0'" class="arrow-paging hidden">
                    </div>
                </template>
                <template #page="{ page, active }">
                    <li class="page-item">
                        <a tabindex="0" class="page-link" :class="{ active: active }">
                            {{ page }}
                        </a>
                    </li>
                </template>
            </BPagination>
        </nav>
    </div>
</template>

<script lang="js" setup>
import { ref, defineEmits, defineProps, computed, onMounted, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
const emits = defineEmits(['update:page', 'update:pageSize']);
const props = defineProps({
    length: {
        type: Number,
        default: 0,
    },
    topage: {
        type: Function,
        required: true,
    },
    page: {
        type: [Number, String],
        required: true,
    },
    pageSize: {
        type: [Number, String],
        required: true,
    },
    totalPage: {
        type: [Number, String],
        required: true,
    },
    items: {
        type: Array,
        default: () => [],
    },
    showPaging: {
        type: Boolean,
        default: true,
    },
    customOption: {
        type: Array,
        default: () => [],
    },
});
        <EasyDataTable v-model:items-selected="itemsSelected" class="common-table" :headers="headers" :items="items"
            :search-field="searchField" :search-value="searchValue" @click-row="showCustomer">
            <template #item-name="{ name }">
                <div class="flex items-center gap-4">
                    <img class="avatar-customer" :src="name.avatar" alt="" v-if="name.avatar">
                    <div class="avatar-customer temp" v-else>
                        {{ name.name?.charAt(0) }}
                    </div>
                    <div class="">{{ name.name }}</div>
    
const router = useRouter();
const route = useRoute();

const options = ref([
    { text: "5", value: "5" },
    { text: "10", value: "10" },
    { text: "15", value: "15" },
    { text: "20", value: "20" },
]);
const page = computed({
    get() {
        return Number(props.page);
    },
    set(value) {
        const query = { ...route.query }
        router.push({
            ...route,
            query: {
                ...query,
                page: value,
                pageSize: pageSize.value
            }
        })
        emits("update:page", value);
        props.topage();
    },
});
const pageSize = computed({
    get() {
        return props.pageSize;
    },
    set(value) {
        const query = { ...route.query }
        router.push({
            ...route,
            query: {
                ...query,
                page: value,
                pageSize: pageSize.value
            }
        })
        emits("update:page", 1);
        emits("update:pageSize", value);
    },
});

onMounted(() => {
    if (props.customOption?.length > 0) {
        options.value = props.customOption
    }
})
</script>

<style lang="scss">
.pagination {
    position: relative;
    margin-bottom: 0;
    align-items: center;

    .paging-nav {
        ul {
            gap: 4px;
        }
    }

    .page-item {
        .page-link {
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0em;
            color: #D651FF;
            text-align: center;
            background: rgba(141, 40, 173, 0.15);
            border-radius: 10px;

            &.active {
                border-radius: 10px !important;
                background-color: #D651FF;
                color: #FFFFFF;
            }
        }

        cursor: pointer;

        &.active {
            button {
                border: unset !important;
            }
        }

        &.bv-d-xs-down-none {
            span {
                border: unset !important;
            }
        }

        .arrow-paging {
            border-radius: 4px;
        }

        button {
            outline: unset;
            background-color: unset;
            box-shadow: unset;
            padding: 0;

            a {
                margin: 0;
            }
        }

        span {
            padding: 0;
        }

        &.disabled {
            pointer-events: none !important;

            .arrow-paging {
                opacity: 0.3;
                outline: none;
            }
        }
    }

    .active {
        background: inherit;
        font-family: Noto Sans JP;
        font-size: 14px;
        font-weight: 700;
        line-height: 14px;
        letter-spacing: 0em;
        text-align: center;
        color: #5B9AED;
    }

    .page-link {
        min-width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .page-item {
        cursor: pointer;

        span {
            background-color: unset;
            border: unset;
            padding: 0;
        }

        &.disabled {
            pointer-events: none !important;
        }
    }

    .info-record {
        display: flex;
        gap: 4px;
        position: absolute;
        left: 0;
        font-family: Helvetica Neue;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        color: #D651FF;

        .count-page {
            color: #434446;
        }
    }

    a {
        list-style: none;
        display: inline-flex;
        background-color: rgba(141, 40, 173, 0.15) !important;
        border: unset !important;
        color: #D651FF;
        background-color: rgba(141, 40, 173, 0.15);
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 10px;
        padding: 10px 4px;
        margin-right: 8px;
        text-decoration: none;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #D651FF;

        &.active {
            background-color: #D651FF;
            border-radius: 4px;
            font-style: normal;
            line-height: 16px;
            text-align: center;
            color: #ffffff;
        }

        &:hover {
            background: #5e6265;
            font-style: normal;
            line-height: 16px;
            text-align: center;
            color: #D651FF;
        }

        &.disabled {
            background: #d8d9d9;
            border: 1px solid rgba(0, 0, 0, 0.1);
            font-style: normal;
            line-height: 16px;
            text-align: center;
            color: #b0b1b2;
            pointer-events: none;
        }
    }

    button {
        &.disabled {
            pointer-events: none;
        }
    }

    .result-display {
        position: absolute;
        right: 0;
        gap: 16px;

        .title {
            color: #D651FF;
            font-family: Helvetica Neue;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 120%;
        }

        .custom-select {
            position: relative;
            color: rgba(29, 36, 51, 0.8);
            font-family: Noto Sans JP;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 12px;

            select {
                background: inherit;
                padding: 6px 16px 6px 8px;
                border-radius: 10px;
                border: 1px solid #BABFC3;
                -moz-appearance: none;
                -webkit-appearance: none;
                appearance: none;
                background-image: url('/public/images/arrow_pagesize.svg');
                background-repeat: no-repeat;
                background-position: center right 8px;
                width: 72px;
                text-align: center;
                color: #FFFFFF;
                font-family: Noto Sans JP;
                font-size: 12px;
                font-weight: 700;
                line-height: 12px;
            }

            .form-select {
                border-radius: 6px 0 0 6px;
                padding: 0;
                height: 40px;
                width: 72px;
                border: 1px solid rgba(8, 18, 26, 0.3);
            }

            .arrow-down {
                cursor: pointer;
                border-radius: 0 6px 6px 0;
                padding: 7px 8px;
                border-left: unset;
                border: 1px solid rgba(8, 18, 26, 0.3);
                background-color: rgba(8, 18, 26, 0.04);
            }
        }
    }
}

::v-deep(.multiselect-caret) {
    display: none;
}

::v-deep(.multiselect-wrapper) {
    display: flex;
    justify-content: start;
    padding-left: 16px;
}
[aria-label="Go to next page"] {
  display: none !important;
}
[aria-label="Go to previous page"] {
  display: none !important;
}
[aria-label="Go to first page"] {
  display: none !important;
}
[aria-label="Go to last page"] {
  display: none !important;
}
</style>
