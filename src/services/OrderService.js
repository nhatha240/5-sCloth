import API from './API'

export default {
    async getListOrder(query) {
        const params = {
            page: query?.page,
            limit: query?.pageSize,
            cursor: query?.cursor,
            sortBy: query?.sortBy,
        }
        return await API.get('/admin/list-order', {params})
    },
    async getOrder(id) {
        return await API.get(`/admin/order/${id}`)
    },
    async updateOrderStatus(id, payload) {
        return await API.put(`/admin/order/${id}`, payload)
    },
    async exportOrderCsv() {
        const config = {
            responseType: 'blob'
        }
        return await API.get('/admin/csv/order', '', config)
    },
    async getUserOrder() {
        return await API.get(`/users/orders`)
    },
    async getUserOrderDetails(id) {
        return await API.get(`/users/order/${id}`)
    },
    async addOrder(payload) {
        return await API.post(`/users/add-order`, payload)
    },
    async captureOrder(id) {
        return await API.post(`/users/order/${id}/capture`)
    },
}