import { defineStore } from 'pinia'
import CategoryService from '@/services/CategoryService'

export const useCategoryStore = defineStore('category', {
    state: () => ({
        category: '',
        categories: '',
    }),
    getters: {
        categoryData: (state) => state.category,
        categoriesList: (state) => state.categories,
    },
    actions: {
        async createCategory({image, description, name}) {
            return new Promise((resolve, reject) => {
                CategoryService.createCategory({image, description, name})
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async getCategories() {
            return new Promise((resolve, reject) => {
                CategoryService.getCategories()
                    .then(({ data }) => {
                        this.categories = data?.results;
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async getCategory(id) {
            return new Promise((resolve, reject) => {
                CategoryService.getCategory(id)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async updateCategory(payload) {
            return new Promise((resolve, reject) => {
                CategoryService.updateCategory(payload)
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
    }
})
