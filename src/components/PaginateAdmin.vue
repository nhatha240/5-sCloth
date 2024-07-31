<template>
    <div class="pagination-admin paging d-flex align-items-center justify-content-between">
        <nav
            class="paging-nav"
            aria-label="Page navigation example"
            v-if="showPaging"
        >
            <BPagination
                v-model="page"
                :total-rows="props.length"
                :per-page="pageSize"
                prev-text=""
                next-text=""
                first-number
                last-number
                :limit="7"
            >
                <template #prev-text>
                    <div class="arrow-paging">
                        <img src="/images/page-prev-icon.svg" />
                    </div>
                </template>
                <template #next-text>
                    <div class="arrow-paging">
                        <img src="/images/page-next-icon.svg" />
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
        <div class="info-record">
            <div class="count-page">{{ props.length }} Results</div>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref, defineEmits, defineProps, computed } from "vue";
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
});

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
        const query = {...route.query}
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
        const query = {...route.query}
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
</script>

<style lang="scss">
.pagination-admin {
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
            font-family: Inter, Open Sans, sans-serif;
            font-size: 14px;
            font-weight: 700;
            line-height: 14px;
            letter-spacing: 0em;
            color: #7F8287;
            text-align: center;
            border: unset !important;
            background: unset;
            border-radius: 8px;
            &.active {
                border-radius: 8px !important;
                border: 1px solid #ECF2FF !important;
                color: #1E5EFF;
                background-color: #ECF2FF;
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
        font-family: Inter, Open Sans, sans-serif;
        font-size: 14px;
        font-weight: 700;
        line-height: 14px;
        letter-spacing: 0em;
        text-align: center;
        color: #1E5EFF;
    }

    .page-link {
        min-width: 34px;
        height: 34px;
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
        font-family: Helvetica Neue;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        color: #7F8287;

        .count-page {
            color: #434446;
        }
    }

    a {
        list-style: none;
        display: inline-flex;
        background: inherit;
        border: 1px solid rgba(8, 18, 26, 0.3) !important;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 8px;
        padding: 10px 4px;
        margin-right: 8px;
        text-decoration: none;
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: rgba(8, 18, 26, 0.72);

        &.active {
            background-color: #08121ab8;
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
            color: #7F8287;
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
}
</style>
