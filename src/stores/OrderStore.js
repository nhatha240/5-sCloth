import { defineStore } from 'pinia'
import OrderService from '@/services/OrderService'

export const useOrderStore = defineStore('order', {
    state: () => ({
        orders: null,
    }),
    getters: {
        ordersData: (state) => state.orders,
    },
    actions: {
        async getListOrder(request) {
            return new Promise((resolve, reject) => {
                OrderService.getListOrder(request)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async getOrder(id) {
            return new Promise((resolve, reject) => {
                OrderService.getOrder(id)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async updateOrderStatus(id, payload) {
            return new Promise((resolve, reject) => {
                OrderService.updateOrderStatus(id, payload)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
    }
})
