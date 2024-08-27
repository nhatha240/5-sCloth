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
    }
  }
})
