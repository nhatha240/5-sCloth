import { defineStore } from 'pinia'
import AuthService from '../services/AuthService'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    token: localStorage.getItem('token'),
    admin: localStorage.getItem('admin') ? JSON.parse(localStorage.getItem('admin')) : null,
    userRefreshToken: localStorage.getItem('userRefreshToken') ? localStorage.getItem('userRefreshToken') : null,
    adminRefreshToken: localStorage.getItem('adminRefreshToken') ? localStorage.getItem('adminRefreshToken') : null,
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
      localStorage.setItem('token', this.token)
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
            this.token = data?.tokens?.access?.token
            this.userRefreshToken = data?.tokens?.refresh?.token
            if (this.token) {
              localStorage.setItem('token', this.token)
              localStorage.setItem('userRefreshToken', this.userRefreshToken)
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
            this.admin = data?.admin
            this.token = data?.tokens?.access?.token
            this.adminRefreshToken = data?.tokens?.refresh?.token
            if (this.token) {
              localStorage.setItem('token', this.token)
              localStorage.setItem('adminRefreshToken', this.adminRefreshToken)
              localStorage.setItem('admin', JSON.stringify(this.admin))
            }
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async userRegister({ name, email, password, address, phone }) {
      return new Promise((resolve, reject) => {
        AuthService.userRegister({ name, email, password, address, phone })
          .then(({ data }) => {
            this.user = data?.user
            this.token = data?.tokens?.access?.token
            this.userRefreshToken = data?.tokens?.refresh?.token
            if (this.token) {
              localStorage.setItem('token', this.token)
              localStorage.setItem('userRefreshToken', this.userRefreshToken)
              localStorage.setItem('userInfo', JSON.stringify(this.user))
            }
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
    async refreshUserToken({refreshToken}) {
      return new Promise((resolve, reject) => {
        AuthService.refreshUserToken({refreshToken})
          .then(({ data }) => {
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async updateUser(id ,payload) {
      return new Promise((resolve, reject) => {
        AuthService.updateUser(id ,payload)
          .then(({ data }) => {
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async refreshAdminToken({refreshToken}) {
      return new Promise((resolve, reject) => {
        AuthService.refreshAdminToken({refreshToken})
          .then(({ data }) => {
            this.token = data?.access?.token
            this.adminRefreshToken = data?.refresh?.token
            if (this.token) {
              localStorage.setItem('token', this.token)
              localStorage.setItem('adminRefreshToken', this.adminRefreshToken)
            }
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    clearStoreAuth() {
      this.user = null
      this.admin = null
      this.token = null
      this.userRefreshToken = null
      this.adminRefreshToken = null
      this.previousRoute = null
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
      localStorage.removeItem('admin')
      localStorage.removeItem('userRefreshToken')
      localStorage.removeItem('adminRefreshToken')
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
    },
    async updateAdminAccount(payload) {
      return new Promise((resolve, reject) => {
        AuthService.updateAdminAccount(payload)
          .then(({ data }) => {
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async registerAdminAccount(payload) {
      return new Promise((resolve, reject) => {
        AuthService.registerAdminAccount(payload)
          .then(({ data }) => {
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
  }
})
