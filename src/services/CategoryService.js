import API from './API'

export default {
    async createCategory(payload) {
        return await API.post('/admin/create-category', payload)
    },
    async getCategories() {
        return await API.get('/admin/get-categories')
    },
}
