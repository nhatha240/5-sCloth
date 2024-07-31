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
        async createCategory(request) {
            return new Promise((resolve, reject) => {
                CategoryService.createCategory(request)
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
    }
})
