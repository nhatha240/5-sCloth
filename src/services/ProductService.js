import API from './API'

export default {
    async getProducts(query) {
        const params = {
            page: query?.page,
            pageSize: query?.pageSize
        }
        return await API.get('/admin/get-products', {params})
    },
    async getProduct(id) {
        return await API.get(`/admin/get-product/${id}`)
    },
    async createProduct(payload) {
        return await API.post(`/admin/create-product`, payload)
    },
    async updateProduct(id, payload) {
        return await API.put(`/admin/update-product/${id}`, payload)
    },
    async deleteProduct(id) {
        return await API.delete(`/admin/delete-product/${id}`)
    },
}
