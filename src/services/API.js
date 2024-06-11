import axios from 'axios'
import { useAuthStore } from '@/stores/AuthStore'
import router from '@/router'
import { useErrorStore } from '@/stores/ErrorStore'

const apiClient = axios.create({
  baseURL: `/api/v1`,
  withCredentials: true
})

const toggleLoading = (isLoading) => {
  useAuthStore().toggleLoading(isLoading)
}

apiClient.interceptors.request.use(
  (config) => {
    toggleLoading(true)
    config.headers['Accept'] = 'application/json'
    config.headers['Authorization'] = 'Bearer ' + useAuthStore().token
    return config
  },
  (error) => {
    toggleLoading(true)
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  async (response) => {
    await toggleLoading(false)
    return response
  },
  async (error) => {
    const storeError = useErrorStore()
    toggleLoading(false)
    if (error.response && error.response.data && error.response.status) {
      if (error.response.status === 401) {
        useAuthStore().clearStoreAuth()
        router.push({ name: 'Login' })
      }
    }
    if (error?.response?.data?.result?.code) {
      if (!error.response.data?.result.code) {
        error.response.data.result.code = 500
      }
      if (
        error.response?.data?.result?.code == 'MESERR010' ||
        error.response?.data?.result?.code == 'MESERR019'
      ) {
        router.push({ path: '/' })
      }
      storeError.error = error?.response?.data?.result
    } else if (error.request.responseType === 'blob') {
      const errorResponse = JSON.parse(await error.response.data.text())
      storeError.error = errorResponse?.result
    }
    return Promise.reject(error)
  }
)

export default apiClient
