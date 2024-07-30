import axios from 'axios'
import { useAuthStore } from '@/stores/AuthStore'
import router from '@/router'
import { useErrorStore } from '@/stores/ErrorStore'

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/v1`,
  // withCredentials: true
})

const toggleLoading = (isLoading) => {
  useAuthStore().toggleLoading(isLoading)
}

apiClient.interceptors.request.use(
  (config) => {
    toggleLoading(true)
    config.headers['Accept'] = 'application/json'
    config.headers['Authorization'] = 'Bearer ' + useAuthStore().token
    config.headers['Access-Control-Allow-Origin'] = '*'
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
      // if (error.response.status === 401) {
      //   useAuthStore().clearStoreAuth()
      //   router.push({ name: 'Login' })
      // }
    }
    if (error?.response?.data?.code) {
      if (!error.response.data?.code) {
        error.response.data.code = 500
      }
      storeError.error = error?.response?.data
    } else if (error.request.responseType === 'blob') {
      const errorResponse = JSON.parse(await error.response.data.text())
      storeError.error = errorResponse?.result
    }
    return Promise.reject(error)
  }
)

export default apiClient
