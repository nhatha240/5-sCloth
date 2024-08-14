import { defineStore } from 'pinia'
import CustomerService from '@/services/CustomerService'

export const useCustomerStore = defineStore('customer', {
    state: () => ({
        customer: null,
    }),
    getters: {
        customerData: (state) => state.customer,
    },
    actions: {
        async getListCustomer(request) {
            return new Promise((resolve, reject) => {
                CustomerService.getListCustomer(request)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async getCustomer(id) {
            return new Promise((resolve, reject) => {
                CustomerService.getCustomer(id)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async deleteCustomer(id) {
            return new Promise((resolve, reject) => {
                CustomerService.deleteCustomer(id)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async exportCustomerCsv(file_name) {
            return new Promise(() => {
                CustomerService.exportCustomerCsv()
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
        }
    }
})
