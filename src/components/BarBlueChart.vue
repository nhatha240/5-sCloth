<template>
    <CChart type="bar" :data="options"></CChart>
</template>

<script lang="js" setup>
import { ref } from 'vue'
import { CChart } from '@coreui/vue-chartjs'
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
    data: [],
})
console.log(props.data)
const options = ref({
    labels: ['Visited Site', 'Added to Cart', 'Proceed to Checkout', 'Made a Purchase'],
    datasets: [
        {
            label: '',
            backgroundColor: '#1E5EFF',
            data: props.data,
            borderRadius: 8,
            barThickness: 60,
            options: {
                scales: {
                    x: {
                        grid: {
                            offset: false
                        }
                    },
                    y: {
                        grid: {
                            offset: false
                        }
                    }
                },
            }
        },
    ],
})
</script>

<style></style>