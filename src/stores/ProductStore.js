import { defineStore } from 'pinia'
import ProductService from '@/services/ProductService'

export const useProductStore = defineStore('product', {
    state: () => ({
        product: '',
    }),
    getters: {
        productInfo: (state) => state.product,
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
        async getAllProduct(request) {
            return new Promise((resolve, reject) => {
                ProductService.getAllProduct(request)
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
                        this.product = data;
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async createProduct(payload) {
            return new Promise((resolve, reject) => {
                ProductService.createProduct(payload)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async updateProduct(id, payload) {
            return new Promise((resolve, reject) => {
                ProductService.updateProduct(id, payload)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async deleteProduct(id) {
            return new Promise((resolve, reject) => {
                ProductService.deleteProduct(id)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async addCart({ productId, quantity }) {
            return new Promise((resolve, reject) => {
                ProductService.addCart({ productId, quantity })
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
    }
})
