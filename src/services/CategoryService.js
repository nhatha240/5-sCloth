import API from './API'

export default {
    async createCategory(payload) {
        return await API.post('/admin/create-category', payload)
    },
    async getCategories(query) {
        const params = {
            page: query.page,
            limit: query.limit,
        }
        return await API.get('/admin/get-categories', {params})
    },
    async getCategory(id) {
        return await API.get(`/admin/get-category/${id}`)
    },
    async updateCategory(payload) {
        return await API.put(`/admin/update-category/`, payload)
    },
    async getAllCategory(query) {
        const params = {
            page: query.page,
            limit: query.limit,
        }
        return await API.get(`/categories`, {params})
    },
}
