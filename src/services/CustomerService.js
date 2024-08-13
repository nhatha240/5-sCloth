import API from './API'

export default {
    async getListCustomer(query) {
        const params = {
            page: query?.page,
            limit: query?.pageSize,
        }
        return await API.get('/admin/customers', {params})
    },
    async getCustomer(id) {
        return await API.get(`/admin/customer/${id}`)
    },
    async deleteCustomer(id) {
        return await API.delete(`/admin/customer/${id}`)
    },
}