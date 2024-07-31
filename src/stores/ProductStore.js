import { defineStore } from 'pinia'
import ProductService from '@/services/ProductService'

export const useProductStore = defineStore('product', {
    state: () => ({
        product: '',
    }),
    getters: {
        productData: (state) => state.product,
    },
    actions: {
        async getProducts(request) {
            return new Promise((resolve, reject) => {
                ProductService.getProducts(request)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async getProduct(id) {
            return new Promise((resolve, reject) => {
                ProductService.getProduct(id)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
    }
})
