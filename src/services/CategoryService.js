import API from './API'

export default {
    async createCategory(payload) {
        return await API.post('/admin/create-category', payload)
    },
    async getCategories() {
        return await API.get('/admin/get-categories')
    },
    async getCategory(id) {
        return await API.get(`/admin/get-category/${id}`)
    },
    async updateCategory(payload) {
        return await API.put(`/admin/update-category/`, payload)
    },
}
