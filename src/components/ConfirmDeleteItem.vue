<template>
   
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
