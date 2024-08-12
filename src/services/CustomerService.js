import API from './API'

export default {
    async getListCustomer(query) {
        const params = {
            page: query?.page,
            limit: query?.pageSize,
        }
        return await API.get('/admin/customers', {params})
    }
}