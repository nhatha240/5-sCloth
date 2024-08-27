<template>
  <VueFinalModal
    v-model="showModal"
    class="error-modal"
    content-class="error-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    :focusTrap="false"
    @click="checkClosed"
  >
    <div class="title-modal d-flex flex-column gap-3">
      {{ title }}
      <div class="error-details" v-html="errorMessage"></div>
    </div>
    <button class="btn-confirm" @click="cancelModal">
      {{ '再読み込み' }}
    </button>
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from 'vue-final-modal'
import { defineEmits, defineProps, computed, watch } from 'vue'
import { useErrorStore } from '@/stores/ErrorStore'
const emits = defineEmits(['update:modelValue', 'update:confirm'])
const props = defineProps({
  modelValue: Boolean,
  title: String,
  errorMessage: String,
  errorStore: Object
})
const storeError = useErrorStore()

watch(
  () => props.modelValue,
  // eslint-disable-next-line no-unused-vars
  (oldValue, newValue) => {
    if (props.errorStore?.code || props.errorStore?.message) {
      storeError.error = props.errorStore
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
  storeError.error = {}
  emits('update:modelValue', false)
}
const checkClosed = () => {}
</script>
<style lang="scss">
.error-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .error-modal-content {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 48px;
    width: 446px;
    padding: 64px 18px;
    border-radius: 16px;
    background-color: #ffffff;
  }
  .title-modal {
    font-family: Noto Sans JP;
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: #222324;
  }
  .text-modal {
    font-family: Noto Sans JP;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: #222324;
  }
  .error-details {
    font-family: Noto Sans JP;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: #222324;
  }
}
</style>
