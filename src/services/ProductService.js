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
}
