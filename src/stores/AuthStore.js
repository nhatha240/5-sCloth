import { defineStore } from 'pinia'
import AuthService from '../services/AuthService'
import { useFacilityStore } from './FacilityStore'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('user-token'),
    loading: false,
    notLoading: false,
    previousRoute: {
      path: '',
      query: ''
    }
  }),
  getters: {
    loggedUser: (state) => state.user,
    isLoading: (state) => state.loading,
    isUserAuthenticated: (state) => !!state.token,
    previousStateRoute: (state) => state.previousRoute
  },
  actions: {
    setUser(user) {
      this.user = user
    },
    settoken(token) {
      this.token = token
      localStorage.setItem('user-token', this.token)
    },
    toggleLoading(isLoading) {
      this.loading = isLoading
    },
    toggleNotLoading() {
      this.notLoading = !this.notLoading
    },
    async loginUser({ email, password }) {
      return new Promise((resolve, reject) => {
        AuthService.loginUser({ email, password })
          .then(({ data }) => {
            this.user = data?.data
            this.token = data?.data.token
            if (this.token && !data?.data.is_change_password) {
              localStorage.setItem('user-token', this.token)
              localStorage.setItem('userInfo', JSON.stringify(this.user))
            }
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async userRegister(payload) {
      return new Promise((resolve, reject) => {
        AuthService.userRegister(payload)
          .then(({ data }) => {
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async resetPassword(payload) {
      return new Promise((resolve, reject) => {
        AuthService.resetPassword(payload)
          .then(({ data }) => {
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async updatePassword(payload) {
      return new Promise((resolve, reject) => {
        AuthService.updatePassword(payload)
          .then(({ data }) => {
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async logout() {
      return new Promise((resolve, reject) => {
        AuthService.logout()
          .then(({ data }) => {
            resolve(data)
            this.clearStoreAuth()
          })
          .catch(({ response }) => reject(response))
      })
    },
    clearStoreAuth() {
      const storeFacility = useFacilityStore()
      this.user = null
      this.token = null
      this.previousRoute = null
      storeFacility.facilityCalendar = null
      localStorage.removeItem('user-token')
      localStorage.removeItem('userInfo')
    },
    setPreviousRoute(route) {
      this.previousRoute = route
    },
    async userInfo(request) {
      return new Promise((resolve, reject) => {
        AuthService.userInfo(request)
          .then(({ data }) => {
            if (!this.user) {
              this.user = data?.data
              localStorage.setItem('userInfo', JSON.stringify(this.user))
            }
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    }
  }
})
