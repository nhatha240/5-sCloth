import API from './API'

export default {
    async getListOrder(query) {
        const params = {
            page: query?.page,
            limit: query?.pageSize,
            cursor: query?.cursor
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
}