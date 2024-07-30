import { defineStore } from 'pinia'
import AuthService from '../services/AuthService'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : null,
    token: localStorage.getItem('user-token'),
    admin: localStorage.getItem('admin') ? localStorage.getItem('admin') : null,
    adminToken: localStorage.getItem('admin-token'),
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
            console.log(data);
            this.user = data?.user
            this.token = data?.tokens?.access
            if (this.token) {
              localStorage.setItem('user-token', this.token)
              localStorage.setItem('userInfo', JSON.stringify(this.user))
            }
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async loginAdmin({ email, password }) {
      return new Promise((resolve, reject) => {
        AuthService.loginAdmin({ email, password })
          .then(({ data }) => {
            console.log(data);
            this.user = data?.admin
            this.token = data?.tokens?.access
            if (this.token) {
              localStorage.setItem('admin-token', this.token)
              localStorage.setItem('admin', JSON.stringify(this.user))
            }
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async userRegister({ name, email, password }) {
      return new Promise((resolve, reject) => {
        AuthService.userRegister({ name, email, password })
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
      this.user = null
      this.token = null
      this.previousRoute = null
      localStorage.removeItem('user-token')
      localStorage.removeItem('admin-token')
      localStorage.removeItem('userInfo')
      localStorage.removeItem('admin')
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
