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
        async exportOrderCsv(file_name) {
            return new Promise(() => {
                OrderService.exportOrderCsv()
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
        async getUserOrder() {
            return new Promise((resolve, reject) => {
                OrderService.getUserOrder()
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async getUserOrderDetails(id) {
            return new Promise((resolve, reject) => {
                OrderService.getUserOrderDetails(id)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async addOrder(payload) {
            return new Promise((resolve, reject) => {
                OrderService.addOrder(payload)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async captureOrder(id) {
            return new Promise((resolve, reject) => {
                OrderService.captureOrder(id)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
    }
})
