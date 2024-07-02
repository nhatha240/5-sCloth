<template>
  <loading v-model:active="storeAuth.loading" :is-full-page="true" />
  <ErrorModal
    v-model="modalError"
    :model-value="modalError"
    :title="'エラーが発生しました'"
    :errorMessage="errorMessage"
    :error-store="storeError.error"
    @update:model-value="closeError"
  />
  <HeaderMain>
  </HeaderMain>
  <RouterView />
</template>

<script lang="ts" setup>
import { RouterView, useRoute, useRouter } from 'vue-router'
import Loading from 'vue-loading-overlay'
import { useAuthStore } from '@/stores/AuthStore'
import ErrorModal from '@/components/ErrorModal.vue'
import { ref, watch } from 'vue'
import { useErrorStore } from '@/stores/ErrorStore'
import HeaderMain from '@/components/HeaderMain.vue'

const storeAuth = useAuthStore()
const storeError = useErrorStore()
const modalError = ref(false)
const errorMessage = ref('')
const router = useRouter()
const route = useRoute()

watch(
  () => storeError.error,

  (oldVal, newVal) => {
    if (storeError.error?.code || storeError.error?.message) {
      modalError.value = true
      errorMessage.value = storeError.error?.message
        ? (storeError.error?.message).replace(/\n/g, '<br/>')
        : 'Chúng tôi xin lỗi vì sự bất tiện này nhưng vui lòng đợi một lát và thử lại.'
    }
  }
)

const closeError = () => {
  if (storeError.error.code === 'MESERR008') {
    if (route.name === 'FacilityTicketList') {
      router.push({
        name: 'FacilityTicketList'
      })
      return
    }
    router.push({
      path: '/'
    })
  }
  modalError.value = false
}
</script>
<style lang="scss"></style>
