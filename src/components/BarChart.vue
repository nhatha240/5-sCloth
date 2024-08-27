<template>
    <v-chart class="chart" :option="options" />
</template>

<script lang="js" setup>
import { BarChart } from 'echarts/charts';
import {
    GridComponent,
    LegendComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import 'echarts/lib/component/tooltip';
import { CanvasRenderer } from 'echarts/renderers';
import moment from 'moment';
import { ref } from 'vue';
import VChart from "vue-echarts";

const props = defineProps({
    data: [],
})

const getLast7Days = () => {
    return Array.from({length: 7}, (_, i) => 
        moment().subtract(i, 'days').format('D')
    ).reverse();
}
const last7Days = ref(getLast7Days());

const listDayData = (arr1) => {
    const combinedArray = arr1.map((date) => ({
        name: date,
        value: date
    }));
    return combinedArray
}

const listOrderData = (arr1, arr2) => {
    const combinedArray = arr1.map((date, index) => ({
        date: date,
        value: arr2[index]?.revenue
    }));
    return combinedArray
}

echarts.use([BarChart, LegendComponent, CanvasRenderer, GridComponent]);

const seriesData = ref({
    title: 'string',
    color: 'string',
    orders: listOrderData(last7Days.value, props.data),
    date: listDayData(last7Days.value),
})
const xAxisData = ref(seriesData.value?.date);
const options = ref({
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#333752',
        textStyle: { color: '#FFFFFF' },
        formatter: (params) => {
            const result = params.map((param) => {
                return {
                    value: param.value,
                    label: param.name,
                    seriesName: param.seriesName,
                    color: param.color,
                };
            });
            const tooltipItem = result
                .map((el, index) => {
                    const displayValue =
                        el.seriesName === 'orders' ? `$${el.value}` : `${el.seriesName}: ${el.value}`;

                    return `<h6 style="font-size: 12px; margin: 0; font-weight: 600;" ${(result.length === 1 || index > 0) && 'mb-0'
                        }">

            ${displayValue}</h6>`;
                })
                .join('');

            return `<div style="position:relative; padding:10px; margin:0; color:#fff; box-shadow:none; border-radius:10px;">
                        ${tooltipItem}
                        <b style="position:absolute; background:#333752; z-index:-10000; bottom:-5px; border-top:none; border-left:none; left:40%; width:15px; height:15px; transform:rotate(45deg); border-right:none; border-bottom:none;"></b>
                    </div>`;
        },
        extraCssText: 'box-shadow: none;border: none; padding: 0;', // override default tooltip style
        position: function (point, params, dom, rect, size) {
            const tooltipWidth = size.contentSize[0];
            let offsetY = 50;
            if (rect !== null) {
                offsetY += rect?.height ?? 0;
            }
            return [point[0] - tooltipWidth / 2, point[1] - offsetY];
        },
    },
    legend: {
        show: false,
    },
    grid: {
        left: '-12%',
        top: '1%',
        right: '-5%',
        containLabel: true,
        bottom: '-1%',
    },
    xAxis: {
        type: 'category',
        data: xAxisData.value,
        nameGap: 0,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
            margin: 14,
            fontSize: 12,
        },
    },
    yAxis: {
        type: 'value',
        show: false,
    },
    series: [
        {
            name: 'orders',
            data: seriesData.value?.orders,
            type: 'bar',
            barGap: '0%',
            emphasis: {
                itemStyle: {
                    color: '#1FD286',
                },
            },
            itemStyle: {
                borderRadius: [40],
                color: '#1FD286',
            },
            barWidth: 8,
        },
    ],
})
</script>

<style>
.chart {
    height: 194px;
    width: 100%;
}
</style>