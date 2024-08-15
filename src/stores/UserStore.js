import { defineStore } from 'pinia'
import UserService from '@/services/UserService'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {}
  }),
  getters: {},
  actions: {
    async listUser(request) {
      return new Promise((resolve, reject) => {
        UserService.listUser(request)
          .then(({ data }) => {
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async getUserTicketOpenDates(request) {
      return new Promise((resolve, reject) => {
        UserService.getUserTicketOpenDates(request)
          .then(({ data }) => {
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async editUser(payload, id) {
      return new Promise((resolve, reject) => {
        UserService.editUser(payload, id)
          .then(({ data }) => {
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async deleteUser(id) {
      return new Promise((resolve, reject) => {
        UserService.deleteUser(id)
          .then(({ data }) => {
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async listRating(request) {
      return new Promise((resolve, reject) => {
        UserService.listRating(request)
          .then(({ data }) => {
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async ratingById(id) {
      return new Promise((resolve, reject) => {
        UserService.ratingById(id)
          .then(({ data }) => {
            resolve(data)
          })
          .catch(({ response }) => reject(response))
      })
    },
    async exportRatingCsv(file_name) {
      return new Promise(() => {
        UserService.exportRatingCsv()
          .then((response) => {
              const blob = new Blob([response?.data], {
                  type: 'text/csv',
                  charset: 'shift_jis',
              })
              const link = document.createElement('a')
              link.href = window.URL.createObjectURL(blob)
              link.download = file_name
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
          })
          .catch(console.error)
      })
    },
    async getUser() {
      return new Promise((resolve, reject) => {
        UserService.getUser()
        .then(({ data }) => {
          this.user = data;
          resolve(data)
        })
        .catch(({ response }) => reject(response))
      })
    }
  }
})
