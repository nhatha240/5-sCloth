import { defineStore } from 'pinia'
import ProductService from '@/services/ProductService'

export const useProductStore = defineStore('product', {
    state: () => ({
        product: '',
        cartItem : [],
        totalPrice : 0,
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
        async listCart() {
            return new Promise((resolve, reject) => {
                ProductService.listCart()
                    .then(({ data }) => {
                        this.cartItem = data?.products
                        this.totalPrice = data?.products?.reduce((sum, item) => {
                            const itemPrice = item.product.discountPrice > 0 ? item.product.discountPrice : item.product.price;
                            return sum + (itemPrice * item.quantity);
                        }, 0);
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async removeCart(id) {
            return new Promise((resolve, reject) => {
                ProductService.removeCart(id)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async exportProductCsv(file_name) {
            return new Promise(() => {
                ProductService.exportProductCsv()
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
